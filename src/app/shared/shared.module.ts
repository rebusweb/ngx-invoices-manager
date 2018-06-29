import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeadComponent } from './components/head/head.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TableComponent } from './components/table/table.component';

const components = [
  NavigationComponent,
  HeaderLogoComponent,
  HeadComponent,
  ConfirmDialogComponent,
  TableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ],
  declarations: components,
  exports: components,
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
