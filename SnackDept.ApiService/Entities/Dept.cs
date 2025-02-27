using SnackDept.Domain.Dtos.Dept;

namespace SnackDept.ApiService.Entities;

public class Dept
{
    public int Id { get; set; }
    public int Amount { get; set; }
    public int UserId { get; set; }
    public string? Reason { get; set; }
    public string? Description { get; set; }
    public DateTime? DeptDate { get; set; }
    public DateTime? RedemptionDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Dept() { }

    public Dept(DeptDto deptDto)
    {
        Amount = deptDto.Amount;
        UserId = deptDto.UserId;
        Reason = deptDto.Reason;
        Description = deptDto.Description;
        DeptDate = deptDto.DeptDate;
        RedemptionDate = deptDto.RedemptionDate;
    }

    public DeptDto ToDto()
    {
        return new DeptDto
        {
            Id = Id,
            Amount = Amount,
            UserId = UserId,
            Reason = Reason,
            Description = Description,
            DeptDate = DeptDate,
            RedemptionDate = RedemptionDate
        };
    }
}
