import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata!:ChildComponent;

  title = 'ReactiveForm';
  registerForm!:FormGroup;
  submitted=false;
  objParrent={"firstName":'',"lastName":''};
  message:string='';
  
  getValue(firstName:any,lastName:any){
    this.objParrent={"firstName":firstName,"lastName":lastName};
     this.message= this.viewdata.updateData(this.objParrent);     
    }

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
