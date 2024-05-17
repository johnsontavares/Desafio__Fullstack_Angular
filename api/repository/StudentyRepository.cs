using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
namespace api.repository
{
    public class StudentRepository : IStudentRepository
    {
    private static List<Student> _students = new List<Student>{
    
            new Student{  
                codAluno = "12",
                nome = "Johnson tavares",
                dNascimento = "27/06/1992",
                cpf = "016.504.452-70",
                endereco  = "Rua Santa Rosa",
                celular = "(29)82883-1233",
                iCodeEscola = "12"
            },
            new Student{  
                codAluno = "11",
                nome = "Tavares",
                dNascimento = "27/06/1992",
                cpf = "012.502.452-70",
                endereco  = "Rua Santa Rosa",
                celular = "(29)82883-1233",
                iCodeEscola = "11"
            }
        };
        

    // Implement all methods of IStudentRepository
    public List<Student> GetAllStudents() => _students;

        public Student GetSingle(string code)
        {
            throw new NotImplementedException();
        }

        public Student GetStudentByCode(string code) => _students.FirstOrDefault(x => x.codAluno == code);

        public List<Student> SearchStudent(string searchParameter){

        List<Student> searchResults = _students.FindAll(student =>
            student.nome.ToLower().Contains(searchParameter.ToLower()) ||
            student.cpf.Contains(searchParameter.ToLower()));


        return searchResults;
        }
        public Student AddStudent(Student newStudent){
            _students.Add(newStudent);
            return newStudent;
            }

        public Student UpdateStudent(string code, Student updatedStudent)
        {
            int studentIndex = _students.FindIndex(x => x.codAluno == updatedStudent.codAluno);
            if (studentIndex == -1)
            {
                return null;
            }
                _students[studentIndex] = updatedStudent;

                return updatedStudent;


        }


        public Student DeleteStudent(string code)
        {
            Student studentFinded = (_students.First(x => x.codAluno == code));
            
            _students.Remove(studentFinded);

            return studentFinded;

        }
    }
}