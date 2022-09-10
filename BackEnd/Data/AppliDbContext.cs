using Microsoft.EntityFrameworkCore;
using BackEnd.Models;


namespace AngularandASPNETCORE.Data
{
    public class AppliDbContext : DbContext
    {        
        public DbSet<Employee> employees { get; set; }
        public DbSet<Job> jobs { get; set; }
        public AppliDbContext(DbContextOptions<AppliDbContext> options) : base(options)
        {        
        }       
    }    
}
