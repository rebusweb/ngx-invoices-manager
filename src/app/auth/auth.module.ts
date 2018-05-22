import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app.material.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
