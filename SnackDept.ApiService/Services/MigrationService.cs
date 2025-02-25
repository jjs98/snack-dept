using Microsoft.EntityFrameworkCore;

namespace SnackDept.ApiService.Services;

public class MigrationService(IDbContextFactory<SnackDeptDbContext> contextFactory) : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        var context = contextFactory.CreateDbContext();
        await context.Database.MigrateAsync(cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
