using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Employee
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
        public byte[]? password { get; set; } //password and salt
        public byte[]? passwordsalt { get; set; }


        [ForeignKey("idjob")]
        public virtual Job job { get; set; }
        public int idjob { get; set; }
    }
}
