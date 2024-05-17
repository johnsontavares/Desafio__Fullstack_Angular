import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './Schools.component.html',
  styleUrls: ['./Schools.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsComponent { }
