using InterfaceGenerator;
using Microsoft.EntityFrameworkCore;
using SnackDept.ApiService.Entities;

namespace SnackDept.ApiService.Services;

[GenerateAutoInterface]
public class UserService(IDbContextFactory<SnackDeptDbContext> contextFactory) : IUserService
{
    public async Task CreateUser(User user)
    {
        var context = contextFactory.CreateDbContext();
        await context.Users.AddAsync(user);
        await context.SaveChangesAsync();
    }

    public async Task<List<User>> GetUsers()
    {
        var context = contextFactory.CreateDbContext();
        return await context.Users.AsNoTracking().ToListAsync();
    }

    public async Task<List<User>> GetUsersWithDepts()
    {
        var context = contextFactory.CreateDbContext();
        return await context
            .Users.AsNoTracking()
            .Include(x => x.Depts.OrderBy(x => x.DeptDate))
            .ToListAsync();
    }

    public async Task UpdateUser(User user)
    {
        var context = contextFactory.CreateDbContext();
        await context
            .Users.Where(x => x.Id == user.Id)
            .ExecuteUpdateAsync(x =>
                x.SetProperty(p => p.Name, user.Name).SetProperty(p => p.UpdatedAt, DateTime.UtcNow)
            );
    }

    public async Task DeleteUser(int id)
    {
        var context = contextFactory.CreateDbContext();
        var depts = await context.Depts.Where(x => x.UserId == id).ToListAsync();
        context.Depts.RemoveRange(depts);

        var user = await context.Users.FirstOrDefaultAsync(x => x.Id == id);
        if (user is null)
            return;
        context.Users.Remove(user);
        await context.SaveChangesAsync();
    }
}
