namespace SnackDept.ApiService.Entities;

public class Dept
{
    public int Id { get; set; }
    public int Amount { get; set; }
    public int UserId { get; set; }
    public string? Reason { get; set; }
    public string? Description { get; set; }
    public DateTime? DeptDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
