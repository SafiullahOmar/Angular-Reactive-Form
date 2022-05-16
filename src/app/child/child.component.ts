import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input () childData:any;
  @Output() ChildEventforTitle=new EventEmitter<string>();

  objArray=[{"firstName":"khan","lastName":"Jan"}];

  updateData(obj:any){
      this.objArray.push(obj);
      return "Data is Successfully added by Name of "+obj.firstName;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
