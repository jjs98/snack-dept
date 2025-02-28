namespace SnackDept.ApiService.Dtos.Dept;

public class CreateDeptDto
{
    public string? Reason { get; set; }
    public string? Description { get; set; }
    public int Amount { get; set; }
    public int UserId { get; set; }
    public required DateTime DeptDate { get; set; }
    public DateTime? RedemptionDate { get; set; }
}
