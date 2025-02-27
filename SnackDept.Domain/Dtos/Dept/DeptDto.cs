namespace SnackDept.Domain.Dtos.Dept;

public class DeptDto
{
    public int Id { get; set; }
    public string? Reason { get; set; }
    public string? Description { get; set; }
    public int Amount { get; set; }
    public int UserId { get; set; }
    public DateTime? DeptDate { get; set; }
    public DateTime? RedemptionDate { get; set; }

    public DeptDto() { }

    public DeptDto(CreateDeptDto createDeptDto)
    {
        Reason = createDeptDto.Reason;
        Description = createDeptDto.Description;
        UserId = createDeptDto.UserId;
        Amount = createDeptDto.Amount;
        DeptDate = createDeptDto.DeptDate;
        RedemptionDate = createDeptDto.RedemptionDate;
    }
}
