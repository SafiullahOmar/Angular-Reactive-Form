import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray, FormControl } from '@angular/forms';
import { last } from 'rxjs';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata!:ChildComponent;
  fb!:FormGroup;
  form:any;
  constructor (){}
  ngOnInit(){
this.form=new FormGroup({
  ContactNos:new FormArray([
    new FormControl('24324'),
    new FormControl('23434')
  ])
});

  }

  AddControl(){
    this.form.get('ContactNos').push(new FormControl());
  }


}
