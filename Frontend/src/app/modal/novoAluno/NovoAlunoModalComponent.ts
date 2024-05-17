import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Student } from "src/app/models/student.model";
import { FormsModule } from '@angular/forms';
import { StudentsService } from "../../students/students.service";
import { School } from "src/app/models/schools.model";

@Component({
  selector: 'app-novo-aluno-modal',
  templateUrl: './novo-aluno-modal.component.html',
  imports: [FormsModule],
  standalone: true
  // styleUrls: ['./novo-aluno-modal.component.css']
})
export class NovoAlunoModalComponent {
  @Input() student!: Student;
  @Input() getStudents!: () => void;
  isNew: boolean = false;

  newStudent: Student = {
    codAluno: '',
    nome: '',
    dNascimento: '',
    cpf: '',
    endereco: '',
    celular: '',
    iCodeEscola: ''
  };

  @Output() studentAdded = new EventEmitter<Student>();

  constructor(public activeModal: NgbActiveModal, private studentService: StudentsService) {}

  // ngOnInit() {
  //   if (!this.student.iCodeEscola) {
  //     this.isNew = true;
  //   }
  // }

  save(): void {
    this.studentService.addNewStudent(this.newStudent).subscribe((student: Student) => {
      this.activeModal.close('saved');
    });
  }

  dismiss(): void {
    this.activeModal.dismiss('cancel');
  }
}
