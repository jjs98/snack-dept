using Microsoft.AspNetCore.Mvc;

namespace SnackDept.ApiService.Dtos.User;

public class UpdateUserDto : CreateUserDto
{
    [FromRoute]
    public required int Id { get; set; }
}
