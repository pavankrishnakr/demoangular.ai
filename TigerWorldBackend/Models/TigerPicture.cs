using System;
using System.ComponentModel.DataAnnotations;

namespace TigerWorldBackend.Models
{
    public class TigerPicture
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int TigerId { get; set; }
        
        [Required]
        [StringLength(255)]
        public string ImageUrl { get; set; }
        
        [StringLength(100)]
        public string Caption { get; set; }
        
        [Required]
        public DateTime TakenDate { get; set; }
        
        [StringLength(50)]
        public string Location { get; set; }
        
        public bool IsFeatured { get; set; }
        
        public DateTime CreatedAt { get; set; }
        
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation property
        public virtual Tiger Tiger { get; set; }
    }
} 