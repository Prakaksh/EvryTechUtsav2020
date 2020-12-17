import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormValidationService } from '../Services/form-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder
    ,private route: ActivatedRoute,
    private router: Router,
    private fv: FormValidationService,
    private auth: AuthService

  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // Login Form Create Method
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
    username: [null, [Validators.required, Validators.maxLength(50), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }
  
  
  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) { return; }

    this.loading = true;

    const username = this.f.username.value;
    const password = this.f.password.value;

    this.auth.getUserDetails(username, password).subscribe(data => {
      debugger;
      console.log(data)
      if (true) {
        this.router.navigate(['Dashboard']);
        this.auth.setLoggedIn(true);
      } else {
        // window.alert(data.message);
      }
    });

  }

  // Form Validation Call the Global service Method
  hasFieldError(fieldName): boolean {
    return this.fv.hasFieldError(fieldName, this.submitted);
  }

}
