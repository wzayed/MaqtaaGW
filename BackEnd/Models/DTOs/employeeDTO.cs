using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Models.DTOs
{
    public class employeeDTO
    {
        [Key]
        public int idemployee { get; set; }

        [Required]
        public string empnumber { get; set; }
        [Required]
        public string firstname { get; set; }
        [Required]
        public string lastname { get; set; }
        public string? arabicfullname { get; set; }
        public int? gender { get; set; }
        public int? salary { get; set; }

        [Required]
        public string empemail { get; set; }
        public DateTime? birthdate { get; set; }
        public DateTime? dateJoin { get; set; }
        public string? description { get; set; }
        [Required]
        public string password { get; set; } //password and salt
        public string? passwordsalt { get; set; }
   
        public int idjob { get; set; }
    }
}

