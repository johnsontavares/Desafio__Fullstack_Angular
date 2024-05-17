import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { School } from '../models/schools.model';
import { SchoolService } from './school.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditSchoolModalComponent } from '../modal/EditSchool/edit-school-modal.component';

@Component({
  selector: 'app-schools',
  templateUrl: './Schools.component.html',
  styleUrls: ['./Schools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsComponent {
  schools: School[] = [];

  constructor(
    private schoolService: SchoolService,
    private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GetSchools();
  }

  GetSchools(): void {
    this.schoolService.getSchools().subscribe((data: School[]) => {
      console.table(data);
      this.schools = data;
      this.changeDetector.markForCheck();
    });
  }

  openEdit(school: School): void {
    const modalRef = this.modalService.open(EditSchoolModalComponent);
    modalRef.componentInstance.school = school;
    modalRef.componentInstance.getSchools = this.GetSchools.bind(this); // Binding para manter o contexto

    modalRef.result.then(
      (result) => {
        if (result === 'saved') {
          this.GetSchools();
        }
      },
      (reason) => {
        console.log('Dismissed: ' + reason);
      }

    );
    this.changeDetector.markForCheck();
  }

  DeleteSchool(code: string):void{
    if(confirm('Confirmar exclusão da escola ?')){
      this.schoolService.deleteSchool(code).subscribe();
    }
    this.schools = this.schools.filter(school => school.codEscola !== code);
  }
}
