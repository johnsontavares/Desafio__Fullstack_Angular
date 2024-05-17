import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsService } from '../../students.service';
import { Student } from 'src/app/models/student.model';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-aluno-modal',
  templateUrl: './edit-aluno-modal.comṕonent.html',
  imports: [FormsModule],
  standalone: true
  // styleUrls: ['./novo-aluno-modal.component.css']
})

export class EditAlunoModal {
  newStudent: Student ={
    codAluno :  '', // Assuming an ID field for students
    nome :  '',
    dNascimento : '',
    cpf :  '',
    endereco :  '',
    celular :  '',
    iCodeEscola :  ''
  }

@Input() public student!: Student;
@Input() public getstudents!: () => void;
constructor(private modalService: NgbModal,
  private studentService: StudentsService,
  private changeDetector: ChangeDetectorRef,
  public activeModal: NgbActiveModal

) { }

  dismiss() {
    this.modalService.dismissAll();
    console.log(this.student?.dNascimento)
  }


  save(){
    this.studentService.addNewStudent(this.newStudent).subscribe();
  }

  edit(){
    console.log("edit", this,this.student);
    this.studentService.editStudent(this.student.codAluno, this.student)
    .subscribe((student: Student) => {
      this.getstudents();
      this.activeModal.close('saved');
  })}

}
