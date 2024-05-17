import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NovoAlunoModalComponent } from '../modal/novoAluno/NovoAlunoModalComponent';
import { EditAlunoModal } from '../modal/EditAluno/edit-aluno-modalComponent';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent{
  students: Student[] = [];

  search : string = '';


  constructor(private studentService: StudentsService, private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(){
    this.GetStudents();
  }

  open() {
    const modalRef = this.modalService.open(NovoAlunoModalComponent);
    modalRef.componentInstance.studentAdded.subscribe((student: Student) => {
      this.onStudentAdded(student);
    this.changeDetector.detectChanges();
    })
    modalRef.result.then(
      (result) => {
        if (result === 'saved') {
          this.GetStudents();
        }
      },
      (reason) => {
        console.log('Dismissed: ' + reason);
      }

    );
    this.changeDetector.markForCheck();
  }

  onStudentAdded(student: Student): void {
    this.students.push(student); // Adiciona o novo estudante à lista
    this.changeDetector.detectChanges();

  }

  openEdit(student :Student){

    const modalRef = this.modalService.open(EditAlunoModal, {
    } )
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.getstudents = this.GetStudents;
    modalRef.result.then(
      (result) => {
        if (result === 'saved') {
          this.GetStudents();
        }
      },
      (reason) => {
        console.log('Dismissed: ' + reason);
      }
    );
    this.changeDetector.markForCheck(); // May not be necessary

  }

  GetStudents(){
    console.log("this.GetStudents");
    this.studentService.getStudents().subscribe((student) => {
      console.log("TS ==", student);
      this.students = student;
      this.changeDetector.detectChanges();

    }
  )
  }

  DeleteStudent(code: string){
    if (confirm('Você tem certeza?')){
      this.studentService.deleteStudent(code).subscribe((deletedStudent: Student) =>{
        console.log("deleted", deletedStudent)
      }
    )
  }
  this.students = this.students.filter(student => student.codAluno !== code);
  }

  SearchStudent() {
    console.log('search');
    this.studentService.searchStudent(this.search).subscribe((data: Student[]) => {
      console.log('data', data);
      this.students = data;
      this.changeDetector.detectChanges();
    });
  }
 }
