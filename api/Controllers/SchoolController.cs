using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dto;
using api.Services;
using Microsoft.AspNetCore.Mvc;
namespace api.Controllers

{
[ApiController]
[Route("api/[controller]")]
public class SchoolController : ControllerBase
{
    private readonly ISchoolService _schoolService;

    public SchoolController(ISchoolService schoolService)
    {
        _schoolService = schoolService;
    }

    [HttpGet("GetAll")]
    public ActionResult GetAllSchools()
    {
        return Ok(_schoolService.GetAllSchools());
    }

    [HttpGet("{code}")]
    public ActionResult GetSchoolByCode()
    {
        return Ok();
    }

    [HttpPost]
    public ActionResult AddSchool(School newSchool)
    {
        return Ok(_schoolService.AddSchools(newSchool));
    }

    [HttpDelete]
    public ActionResult DeleteSchool(string code)
    {   School result = _schoolService.DeleteSchool(code);
        if(result == null){
            NotFound();
        }
        return Ok(result);
    }

    [HttpPut("{code}")]
    public ActionResult UpdateSchool(string code, School Updateschool)
    {   School result = _schoolService.UpdateSchool(code, Updateschool);
        if(result == null){
            NotFound();
        }
        return Ok(result);
    }
    
}
}