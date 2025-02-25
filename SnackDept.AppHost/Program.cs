var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedis("cache");

var apiService = builder.AddProject<Projects.SnackDept_ApiService>("apiservice");

var db = builder.AddPostgres("pgsql").AddDatabase("snackdept");

builder
    .AddProject<Projects.SnackDept_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(cache)
    .WaitFor(cache)
    .WithReference(apiService)
    .WaitFor(apiService)
    .WithReference(db)
    .WaitFor(db);

builder.Build().Run();
