using FastEndpoints;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class DeleteEndpoint(IUserService userService) : Endpoint<DeleteUserDto>
{
    public override void Configure()
    {
        Delete("api/user/{Id}");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(
        DeleteUserDto deleteUserDto,
        CancellationToken cancellationToken
    )
    {
        await userService.DeleteUser(deleteUserDto.Id);
    }
}
