using System;
using System.Linq;
using TigerWorldBackend.Models;

namespace TigerWorldBackend.Data
{
    public static class SeedData
    {
        public static void Initialize(TigerWorldDbContext context)
        {
            if (!context.Tigers.Any())
            {
                // Add Tigers
                var tigers = new Tiger[]
                {
                    new Tiger
                    {
                        Name = "Raja",
                        Species = "Bengal Tiger",
                        DateOfBirth = new DateTime(2015, 1, 1),
                        Gender = "Male",
                        Weight = 220.5,
                        Height = 3.2,
                        Description = "The majestic alpha male of the reserve",
                        IsActive = true,
                        CreatedAt = DateTime.Now
                    },
                    new Tiger
                    {
                        Name = "Rani",
                        Species = "Bengal Tiger",
                        DateOfBirth = new DateTime(2016, 5, 15),
                        Gender = "Female",
                        Weight = 180.0,
                        Height = 2.8,
                        Description = "The graceful queen of the jungle",
                        IsActive = true,
                        CreatedAt = DateTime.Now
                    }
                };
                context.Tigers.AddRange(tigers);
                context.SaveChanges();

                // Add Tiger Pictures
                var tigerPictures = new TigerPicture[]
                {
                    new TigerPicture
                    {
                        TigerId = tigers[0].Id,
                        ImageUrl = "https://images.unsplash.com/photo-1552053831-71594a27632d",
                        Caption = "Raja in his natural habitat",
                        TakenDate = DateTime.Now.AddDays(-30),
                        Location = "Main Reserve Area",
                        IsFeatured = true,
                        CreatedAt = DateTime.Now
                    },
                    new TigerPicture
                    {
                        TigerId = tigers[1].Id,
                        ImageUrl = "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
                        Caption = "Rani with her cubs",
                        TakenDate = DateTime.Now.AddDays(-15),
                        Location = "Northern Reserve",
                        IsFeatured = true,
                        CreatedAt = DateTime.Now
                    }
                };
                context.TigerPictures.AddRange(tigerPictures);
                context.SaveChanges();

                // Add Services
                var services = new Service[]
                {
                    new Service
                    {
                        Name = "Morning Safari",
                        Description = "Early morning safari tour with expert guides",
                        Price = 1500.00m,
                        DurationHours = 3,
                        MaxPeople = 20,
                        ImageUrl = "https://example.com/safari1.jpg",
                        IsAvailable = true,
                        CreatedAt = DateTime.Now
                    },
                    new Service
                    {
                        Name = "Evening Safari",
                        Description = "Sunset safari tour with wildlife photography opportunities",
                        Price = 2000.00m,
                        DurationHours = 4,
                        MaxPeople = 15,
                        ImageUrl = "https://example.com/safari2.jpg",
                        IsAvailable = true,
                        CreatedAt = DateTime.Now
                    }
                };
                context.Services.AddRange(services);
                context.SaveChanges();
            }
        }
    }
} 