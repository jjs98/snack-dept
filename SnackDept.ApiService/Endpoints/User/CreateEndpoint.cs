using FastEndpoints;
using Microsoft.AspNetCore.Http.HttpResults;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class CreateEndpoint(IUserService userService) : Endpoint<CreateUserDto, Created>
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
        await SendCreatedAtAsync<GetEndpoint>(null, null, cancellation: cancellationToken);
    }
}
