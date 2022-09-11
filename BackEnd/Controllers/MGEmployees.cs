using AngularandASPNETCORE.Data;
using BackEnd.Interfaces;
using BackEnd.Models;
using BackEnd.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
// The Best Testing Methode for APIs is Postman.
// If I deployed them on a server I will create a postman collection for testing the endpoints.
namespace BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MGEmployees : ControllerBase
    {
        private AppliDbContext _dbcontext;
        private ITokenService _tokenService;
        public MGEmployees(AppliDbContext context, ITokenService tokenService)
        {
            _dbcontext = context;
            _tokenService = tokenService;
        }
        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployees()
        {
           var emp = await _dbcontext.employees.ToListAsync();

            if (emp == null)
            {
                return (IEnumerable<Employee>)BadRequest();
            }

            return (IEnumerable<Employee>)emp;
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(int id)
        {
            Employee emp = await _dbcontext.employees.FindAsync(id);
            if (emp == null)
            {
                return BadRequest();
            }
            return Ok(emp);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(employeeDTO emp)
        {
            if (emp == null)
            {
                return BadRequest();
            }

            using var hmac = new HMACSHA512();

            Employee empdb = new Employee
            {
                firstname = emp.firstname,
                arabicfullname = emp.arabicfullname,
                lastname = emp.lastname,    
                empnumber = emp.empnumber,
                gender = emp.gender,
                description = emp.description,
                empemail = emp.empemail,
                salary = emp.salary,
                idjob = emp.idjob,
                password = hmac.ComputeHash(Encoding.UTF8.GetBytes(emp.password)),
                passwordsalt = hmac.Key,
                birthdate = emp.birthdate,
                dateJoin = emp.dateJoin
            };
            try { 
            await _dbcontext.employees.AddAsync(empdb); 
            await _dbcontext.SaveChangesAsync();
            }
            catch(Exception e)
            {
                return BadRequest();
            }

            return Ok();

        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, employeeDTO emp)
        {
            var empeExisting = await _dbcontext.employees.FindAsync(id);
            if (empeExisting != null && emp != null)
            {
                using var hmac = new HMACSHA512();
                empeExisting.firstname = emp.firstname;
                empeExisting.lastname = emp.lastname;    
                empeExisting.arabicfullname= emp.arabicfullname;
                empeExisting.empnumber = emp.empnumber;
                empeExisting.gender = emp.gender;
                empeExisting.description = emp.description;
                empeExisting.empemail = emp.empemail;
                empeExisting.salary = emp.salary;
                empeExisting.idjob = emp.idjob;
                empeExisting.password = hmac.ComputeHash(Encoding.UTF8.GetBytes(emp.password));
                empeExisting.passwordsalt = hmac.Key;
                empeExisting.birthdate = emp.birthdate;
                empeExisting.dateJoin = emp.dateJoin;                
            }
            try { 
                await _dbcontext.SaveChangesAsync();
            }
            catch (Exception ex) {
                 return BadRequest();
            }

                return Ok(emp);
        }

        
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var emp = await _dbcontext.employees.FindAsync(id);
            if (emp != null)
            {
                _dbcontext.employees.Remove(emp);
                await _dbcontext.SaveChangesAsync();
            }
          
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<EmpToken>> login(logindto logindto)
        {
            var empfromdb = await _dbcontext.employees.SingleOrDefaultAsync(x => x.empemail == logindto.username);
            if(empfromdb == null) return Unauthorized("Invalid email");
            using var hmac = new HMACSHA512(empfromdb.passwordsalt);

            var newcomputedhash = hmac.ComputeHash(Encoding.UTF8.GetBytes(logindto.password));

            for(int i=0 ; i < newcomputedhash.Length ; i++)
            {
                if (newcomputedhash[i] != empfromdb.password[i]) return Unauthorized("Invalid Password");
            }
            var emptoken = new EmpToken
            {
               username = empfromdb.empemail,
               token = _tokenService.CreateToken(empfromdb)
            };
            return Ok(emptoken);
        }

    }
}
