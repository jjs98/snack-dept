using FastEndpoints;
using SnackDept.ApiService.Services;
using SnackDept.Domain.Dtos.User;

namespace SnackDept.ApiService.Endpoints.User;

public class CreateEndpoint(IUserService userService) : Endpoint<CreateUserDto, EmptyResponse>
{
    public override void Configure()
    {
        Post("api/user");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(CreateUserDto dto, CancellationToken cancellationToken)
    {
        await userService.CreateUser(new Entities.User { Name = dto.Name });
    }
}
