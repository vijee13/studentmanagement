using Microsoft.EntityFrameworkCore;
using StudentAPI.Models;

namespace StudentAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.Name).IsRequired().HasMaxLength(50);
                entity.Property(e => e.DOB).IsRequired();
                entity.Property(e => e.TotalMarks).IsRequired();
                entity.Property(e => e.CGPA).IsRequired().HasColumnType("decimal(4,2)");
                entity.Property(e => e.Mobile).IsRequired().HasMaxLength(10);
                entity.Property(e => e.Address).HasMaxLength(250).IsRequired(false);
                entity.Property(e => e.Email).IsRequired().HasMaxLength(50);
                entity.Property(e => e.Course).IsRequired().HasMaxLength(10);
                entity.Property(e => e.GraduationYear).IsRequired().HasMaxLength(4);
            });
        }
    }
}
