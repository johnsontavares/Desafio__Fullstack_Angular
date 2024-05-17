import { Component, EventEmitter, Output } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Student } from "src/app/models/student.model";
import { FormsModule } from '@angular/forms';
import { StudentsService } from "../../students.service";

@Component({
  selector: 'app-novo-aluno-modal',
  templateUrl: './novo-aluno-modal.component.html',
  imports: [FormsModule],
  standalone: true
  // styleUrls: ['./novo-aluno-modal.component.css']
})
export class NovoAlunoModalComponent {
  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private studentService: StudentsService
  ) { }

  @Output() studentAdded = new EventEmitter<Student>();

  newStudent: Student ={
    codAluno :  '', // Assuming an ID field for students
    nome :  '',
    dNascimento : '',
    cpf :  '',
    endereco :  '',
    celular :  '',
    iCodeEscola :  ''
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  save(){
    console.log("newStudent", this.newStudent);
    this.studentService.addNewStudent(this.newStudent).subscribe((student:Student) => {
     this.studentAdded.emit(this.newStudent);
     this.activeModal.close();
    })
  }
}
