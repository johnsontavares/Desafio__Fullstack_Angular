using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.repository
{
    public interface IStudentRepository
    {
        List<Student> GetAllStudents();
        Student GetStudentByCode(string code);
        List<Student> SearchStudent(string searchParameter);
        Student AddStudent(Student newStudent);
        Student UpdateStudent(string code, Student updatedStudent);
        Student DeleteStudent(string code);
    }
}