using Microsoft.EntityFrameworkCore;
using TigerWorldBackend.Models;

namespace TigerWorldBackend.Data
{
    public class TigerWorldDbContext : DbContext
    {
        public TigerWorldDbContext(DbContextOptions<TigerWorldDbContext> options)
            : base(options)
        {
        }

        public DbSet<Tiger> Tigers { get; set; }
        public DbSet<TigerPicture> TigerPictures { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships
            modelBuilder.Entity<TigerPicture>()
                .HasOne(tp => tp.Tiger)
                .WithMany()
                .HasForeignKey(tp => tp.TigerId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Booking>()
                .HasOne(b => b.Service)
                .WithMany()
                .HasForeignKey(b => b.ServiceId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
} 