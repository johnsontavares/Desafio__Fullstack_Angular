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
  newStudent!: Student;
  isNew: boolean = false;

  constructor(public activeModal: NgbActiveModal, private studentService: StudentsService) {}

  ngOnInit() {
    if (!this.student.iCodeEscola) {
      this.isNew = true;
    }
  }

  save(): void {
    this.studentService.editStudent(this.student.codAluno, this.student).subscribe((student: Student) => {
      this.getStudents();
      this.activeModal.close('saved');
    });
  }

  dismiss(): void {
    this.activeModal.dismiss('cancel');
  }
}
