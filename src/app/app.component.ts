import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray, FormControl } from '@angular/forms';

import { ChildComponent } from './child/child.component';
import * as $ from 'jquery';

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

  $(function(){
    $(".btn").on("click",function(){
    alert();
    
      var div=$("#div");
      div.animate({left:"100px"},"slow");
      div.animate({fontsize:"5em"},"slow");
      
    }); 

    
  });



  }

  AddControl(){
    this.form.get('ContactNos').push(new FormControl());
  }


}
