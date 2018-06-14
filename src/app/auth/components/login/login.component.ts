import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../shared/models/user-login';
import { CustomValidators } from '../../../shared/validators/custom-validators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, CustomValidators.realEmail]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit({ value, valid }: { value: UserLogin, valid: boolean }) {
    if (!valid) {
      return;
    }
    this.authService.login(value).subscribe(
      (result) => {
        this.router.navigate(['/workspace']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
