using Microsoft.EntityFrameworkCore;
using SnackDept.ApiService.Configs;
using SnackDept.ApiService.Entities;

namespace SnackDept.ApiService;

public class SnackDeptDbContext(DbContextOptions<SnackDeptDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<Dept> Depts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UsersConfig()).ApplyConfiguration(new DeptsConfig());
    }
}
