import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeadComponent } from './components/head/head.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AppMaterialModule } from '../app.material.module';

const components = [
  NavigationComponent,
  HeaderLogoComponent,
  HeadComponent,
  ConfirmDialogComponent,
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
