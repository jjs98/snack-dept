using InterfaceGenerator;
using Microsoft.EntityFrameworkCore;
using SnackDept.ApiService.Entities;

namespace SnackDept.ApiService.Services;

[GenerateAutoInterface]
public class DeptService(IDbContextFactory<SnackDeptDbContext> contextFactory) : IDeptService
{
    public async Task CreateDept(Dept dept)
    {
        var context = contextFactory.CreateDbContext();
        await context.Depts.AddAsync(dept);
        await context.SaveChangesAsync();
    }

    public async Task UpdateDept(Dept dept)
    {
        var context = contextFactory.CreateDbContext();
        await context
            .Depts.Where(x => x.Id == dept.Id)
            .ExecuteUpdateAsync(x =>
                x.SetProperty(p => p.Amount, dept.Amount)
                    .SetProperty(p => p.Reason, dept.Reason)
                    .SetProperty(p => p.Description, dept.Description)
                    .SetProperty(p => p.UserId, dept.UserId)
                    .SetProperty(p => p.DeptDate, dept.DeptDate)
                    .SetProperty(p => p.RedemptionDate, dept.RedemptionDate)
                    .SetProperty(p => p.UpdatedAt, DateTime.UtcNow)
            );
    }

    public async Task DeleteDept(int id)
    {
        var context = contextFactory.CreateDbContext();
        var dept = await context.Depts.FindAsync(id);
        if (dept is null)
            return;

        context.Depts.Remove(dept);
        await context.SaveChangesAsync();
    }
}
