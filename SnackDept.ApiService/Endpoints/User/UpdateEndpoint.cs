using FastEndpoints;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class UpdateEndpoint(IUserService userService) : Endpoint<CreateUserDto, EmptyResponse>
{
    public override void Configure()
    {
        Patch("api/user/{Id}");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(CreateUserDto dto, CancellationToken cancellationToken)
    {
        var userId = Route<int>("Id");
        await userService.UpdateUser(new Entities.User { Id = userId, Name = dto.Name });
    }
}
