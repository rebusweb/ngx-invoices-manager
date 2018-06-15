import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    HeaderLogoComponent,
    HeadComponent,
  ],
  exports: [
    NavigationComponent,
    HeaderLogoComponent,
    HeadComponent,
  ],
})
export class SharedModule { }
