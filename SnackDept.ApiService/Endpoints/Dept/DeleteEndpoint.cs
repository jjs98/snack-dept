using FastEndpoints;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class DeleteEndpoint(IDeptService deptService) : EndpointWithoutRequest<EmptyResponse>
{
    public override void Configure()
    {
        Delete("api/dept/{Id}");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(CancellationToken cancellationToken)
    {
        var deptId = Route<int>("Id");
        await deptService.DeleteDept(deptId);
    }
}
