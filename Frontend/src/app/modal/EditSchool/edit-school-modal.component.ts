import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolService } from 'src/app/Schools/school.service';
import { School } from 'src/app/models/schools.model';

@Component({
  selector: 'app-edit-school-modal',
  templateUrl: './edit-school-modal.component.html',
  imports: [FormsModule],
  standalone: true
})
export class EditSchoolModalComponent {
  @Input() school!: School;
  @Input() getSchools!: () => void;
  isNew: boolean = false;

  constructor(public activeModal: NgbActiveModal, private schoolService: SchoolService) {}

  ngOnInit() {
    if (!this.school.codEscola) {
      this.isNew = true;
    }
  }

  save(): void {
    console.log("save")
    if (this.isNew) {
      this.schoolService.addSchool(this.school).subscribe((school: School) => {
        this.getSchools();
        this.activeModal.close('saved');
      });
    } else {
      this.schoolService.updateSchool(this.school).subscribe((school: School) => {
        this.getSchools();
        this.activeModal.close('saved');
      });
    }
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }
}
