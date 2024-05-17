using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public interface IStudentService
    {
        List<Student> GetAllStudents();
        Student GetStudentByCode(string code);

        List<Student> GetSingleBySearch(string searchParameter);

        Student  AddStudent(Student student);

        Student UpdateStudent(string code, Student student);

        Student DeleteStudent(string code);

    }
}