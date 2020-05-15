import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.scss']
})

export class AuthComponent {
  // Important variable for switching the entire component from login to sign up
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // Onsubmit method that recives the entire form object created by angular
  onSubmit(form: NgForm) {
    const formValues = form.value;
    console.log(formValues);

    form.reset();
  }
}
