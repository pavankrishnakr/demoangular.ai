using System;
using System.ComponentModel.DataAnnotations;

namespace TigerWorldBackend.Models
{
    public class Service
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        
        [Required]
        [StringLength(500)]
        public string Description { get; set; }
        
        [Required]
        public decimal Price { get; set; }
        
        [Required]
        public int DurationHours { get; set; }
        
        [Required]
        public int MaxPeople { get; set; }
        
        [StringLength(255)]
        public string ImageUrl { get; set; }
        
        public bool IsAvailable { get; set; }
        
        public DateTime CreatedAt { get; set; }
        
        public DateTime? UpdatedAt { get; set; }
    }
} 