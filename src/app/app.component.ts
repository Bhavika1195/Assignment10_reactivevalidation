import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivevalidation';
  submitform=new FormGroup({
    user:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    Address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  submituser()
  {
    console.warn(this.submitform.value)
  }

  get user()
  {
    return this.submitform.get('user')
  }

  get email()
  {
    return this.submitform.get('email')
  }

  get city()
  {
    return this.submitform.get('email')
  }

  get phonenumber()
  {
    return this.submitform.get('phonenumber')
  }

  get Address()
  {
    return this.submitform.get('email')
  }

  get password()
  {
    return this.submitform.get('password')
  }

  get confirmpassword()
  {
    return this.submitform.get('password')
  }
}
