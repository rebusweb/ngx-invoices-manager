import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    HeaderLogoComponent,
  ],
  exports: [
    NavigationComponent,
    HeaderLogoComponent,
  ],
})
export class SharedModule { }
