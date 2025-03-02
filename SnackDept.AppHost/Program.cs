var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedis("cache");

var db = builder
    .AddPostgres("pgsql")
    .WithPgAdmin()
    .WithPgWeb()
    .WithDataVolume("snackdept")
    .AddDatabase("snackdept");
var apiService = builder
    .AddProject<Projects.SnackDept_ApiService>("apiservice")
    //.AddContainer<Projects.SnackDept_ApiService>("apiservice")
    .WithReference(db)
    .WaitFor(db);

builder
    .AddPnpmApp("webfrontend", "../SnackDept.Web", "start:web")
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .WithReference(cache)
    .WaitFor(cache)
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();
