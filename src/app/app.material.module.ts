import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

const modulesList = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule
];

@NgModule({
  imports: [
    modulesList,
  ],
  exports: [
    modulesList,
  ],
})
export class AppMaterialModule { }
