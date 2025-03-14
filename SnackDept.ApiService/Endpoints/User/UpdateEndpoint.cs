using FastEndpoints;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class UpdateEndpoint(IUserService userService) : Endpoint<UpdateUserDto, EmptyResponse>
{
    public override void Configure()
    {
        Patch("api/user/{Id}");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(UpdateUserDto dto, CancellationToken cancellationToken)
    {
        await userService.UpdateUser(new Entities.User { Id = dto.Id, Name = dto.Name });
    }
}
