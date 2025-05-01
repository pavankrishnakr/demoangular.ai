using System;
using System.ComponentModel.DataAnnotations;

namespace TigerWorldBackend.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        
        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }
        
        [Required]
        [StringLength(20)]
        public string Phone { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Subject { get; set; }
        
        [Required]
        public string Message { get; set; }
        
        [Required]
        [StringLength(20)]
        public string Status { get; set; } // New, InProgress, Resolved
        
        public DateTime CreatedAt { get; set; }
        
        public DateTime? UpdatedAt { get; set; }
    }
} 