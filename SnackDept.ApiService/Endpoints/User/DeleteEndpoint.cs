using FastEndpoints;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class DeleteEndpoint(IUserService userService) : EndpointWithoutRequest<EmptyResponse>
{
    public override void Configure()
    {
        Delete("api/user/{Id}");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(CancellationToken cancellationToken)
    {
        var userId = Route<int>("Id");
        await userService.DeleteUser(userId);
    }
}
