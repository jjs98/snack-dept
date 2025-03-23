using FastEndpoints;
using SnackDept.ApiService.Dtos.Dept;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class DeleteEndpoint(IDeptService deptService) : Endpoint<DeleteDeptDto>
{
    public override void Configure()
    {
        Delete("api/dept");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(DeleteDeptDto dto, CancellationToken cancellationToken)
    {
        await deptService.DeleteDept(dto.Id);
    }
}
