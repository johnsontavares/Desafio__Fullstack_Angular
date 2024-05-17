using System.Globalization;
using System.Net.Http.Headers;
using System.Text.Json;
using api.repository;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]

public class StudentController : ControllerBase
{

    private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

    
    [HttpGet("GetAll")]
    public ActionResult<List<Student>> GetAllStudents()
    {
        return Ok(_studentService.GetAllStudents());
    }

    [HttpGet("{code}")]
    public ActionResult<Student> GetSingle(string code)
    {
        return Ok(_studentService.GetStudentByCode(code));
    }

    [HttpGet("findElement/{searchParameter}")]
    public ActionResult<Student> GetSingleBySearch(string searchParameter)
    {
        List<Student> studentstudent = _studentService.GetSingleBySearch(searchParameter);
        return Ok(studentstudent);

    }


    [HttpPost]
    public ActionResult<Student> AddStudent(Student newStudent){
        return Ok(_studentService.AddStudent(newStudent));
    }

    [HttpDelete("{code}")]
    public ActionResult<Student> DeleteStudent(string code){
        return Ok(_studentService.DeleteStudent(code));
    }

    [HttpPut("{code}")]
    public IActionResult UpdateStudent(string code, Student updatedStudent)
    {
        return Ok(_studentService.UpdateStudent(code,updatedStudent));


    }


}