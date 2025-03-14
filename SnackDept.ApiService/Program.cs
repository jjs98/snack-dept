using FastEndpoints;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using SnackDept.ApiService;
using SnackDept.ApiService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire client integrations.
builder.AddServiceDefaults();

// Add services to the container.
builder.Services.AddProblemDetails();

builder.Services.AddPooledDbContextFactory<SnackDeptDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("snackdept"));
});

builder.Services.AddHostedService<MigrationService>();
builder.Services.AddScoped<IDeptService, DeptService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddFastEndpoints();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseExceptionHandler();

app.UseFastEndpoints();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(x => x.Servers = [new ScalarServer("https://localhost:7582")]);
}

app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});

app.Run();
