using FastEndpoints;
using SnackDept.ApiService.Dtos.Dept;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class DeleteEndpoint(IDeptService deptService) : Endpoint<DeleteDeptDto>
{
    public override void Configure()
    {
        Delete("api/dept/{Id}");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(DeleteDeptDto dto, CancellationToken cancellationToken)
    {
        //int id = Route<int>("id");
        await deptService.DeleteDept(dto.Id);
    }
}
