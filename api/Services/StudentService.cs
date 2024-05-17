using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.repository;

namespace api.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository; // Interface for student data access

        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public List<Student> GetAllStudents()
        {
            return _studentRepository.GetAllStudents(); // Implement data access using repository
        }

        public Student GetStudentByCode(string code)
        {
             return _studentRepository.GetStudentByCode(code);
        }
    
        public List<Student> GetSingleBySearch(string searchParameter){
            return _studentRepository.SearchStudent(searchParameter);
        }

        public Student AddStudent(Student student){
            return _studentRepository.AddStudent(student);
        }

        public Student UpdateStudent(string code, Student student){
            return _studentRepository.UpdateStudent(code,student);
        }

        public Student DeleteStudent(string code){
            return _studentRepository.DeleteStudent(code);
        }
        
    }
}