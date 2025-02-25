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
        return await context.Users.ToListAsync();
    }

    public async Task<List<User>> GetUsersWithDepts()
    {
        var context = contextFactory.CreateDbContext();
        return await context.Users.Include(x => x.Depts).ToListAsync();
    }

    public async Task UpdateUser(User user)
    {
        var context = contextFactory.CreateDbContext();
        context.Users.Update(user);
        await context.SaveChangesAsync();
    }

    public async Task DeleteUser(int id)
    {
        var context = contextFactory.CreateDbContext();
        var user = await context.Users.FindAsync(id);
        if (user is null)
            return;
        context.Users.Remove(user);
        await context.SaveChangesAsync();
    }
}
