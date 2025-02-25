using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SnackDept.ApiService.Entities;

namespace SnackDept.ApiService.Configs;

public class UsersConfig : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).UseIdentityColumn();
        builder.Property(x => x.Name).IsRequired();
        builder.HasMany(x => x.Depts).WithOne().HasForeignKey(x => x.UserId);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("NOW()").ValueGeneratedOnAdd();
        builder
            .Property(x => x.UpdatedAt)
            .HasDefaultValueSql("NOW()")
            .ValueGeneratedOnAddOrUpdate();
    }
}
