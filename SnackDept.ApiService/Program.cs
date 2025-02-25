using Microsoft.EntityFrameworkCore;
using SnackDept.ApiService;
using SnackDept.ApiService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire client integrations.
builder.AddServiceDefaults();

// Add services to the container.
builder.Services.AddProblemDetails();

builder.Services.AddPooledDbContextFactory<SnackDeptDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("SnackDeptDbContext"));
});

builder.Services.AddHostedService<MigrationService>();

builder.Services.AddScoped<IDeptService, DeptService>();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseExceptionHandler();

app.MapDefaultEndpoints();

app.Run();
