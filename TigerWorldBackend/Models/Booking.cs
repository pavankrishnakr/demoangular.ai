using System;
using System.ComponentModel.DataAnnotations;

namespace TigerWorldBackend.Models
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int ServiceId { get; set; }
        
        [Required]
        [StringLength(100)]
        public string CustomerName { get; set; }
        
        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string CustomerEmail { get; set; }
        
        [Required]
        [StringLength(20)]
        public string CustomerPhone { get; set; }
        
        [Required]
        public int NumberOfPeople { get; set; }
        
        [Required]
        public DateTime BookingDate { get; set; }
        
        [Required]
        public decimal TotalAmount { get; set; }
        
        [Required]
        [StringLength(20)]
        public string Status { get; set; } // Pending, Confirmed, Cancelled
        
        public string SpecialRequests { get; set; }
        
        public DateTime CreatedAt { get; set; }
        
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation property
        public virtual Service Service { get; set; }
    }
} 