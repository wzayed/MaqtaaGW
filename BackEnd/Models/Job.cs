using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Job
    {
        [Key]
        public int idjob { get; set; }
        [Required]
        public string jobdescription { get; set; }

        public virtual List<Employee> employess { get; set; }
    }
}
