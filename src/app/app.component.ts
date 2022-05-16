import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  registerForm!:FormGroup;
  submitted=false;

  constructor (private formBuilder :FormBuilder){}
  ngOnInit(){

    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.min(4)]]
    });

  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
    return;

    alert("Sucess");

  }

}
