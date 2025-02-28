using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SnackDept.ApiService.Entities;

namespace SnackDept.ApiService.Configs;

public class DeptsConfig : IEntityTypeConfiguration<Dept>
{
    public void Configure(EntityTypeBuilder<Dept> builder)
    {
        builder.ToTable("Depts");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).UseIdentityColumn();
        builder.Property(x => x.Amount).IsRequired();
        builder.Property(x => x.UserId).IsRequired();
        builder.Property(x => x.Reason);
        builder.Property(x => x.Description);
        builder.Property(x => x.DeptDate).IsRequired();
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("NOW()").ValueGeneratedOnAdd();
        builder
            .Property(x => x.UpdatedAt)
            .HasDefaultValueSql("NOW()")
            .ValueGeneratedOnAddOrUpdate();
        builder.HasOne(x => x.User).WithMany(x => x.Depts).HasForeignKey(x => x.UserId);
    }
}
