import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formPost!: FormGroup;

  constructor( private http:HttpClient) { }

  ngOnInit(): void {

    this.formPost=new FormGroup({
      Name:new FormControl('',Validators.required),
      Content:new FormControl('',Validators.required)
    });
  }

  OnPost(){

    const PostDate=this.formPost.value;
    this.http.post('https://test-cc719-default-rtdb.firebaseio.com/posts.json',PostDate).subscribe(reponse=>{
      console.log(reponse);
    });

  }

}
