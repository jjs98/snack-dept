using Microsoft.AspNetCore.Mvc;

namespace SnackDept.ApiService.Dtos.Dept;

public class UpdateDeptDto : CreateDeptDto
{
    [FromRoute]
    public required int Id { get; set; }
}
