import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formPost!: FormGroup;
  posts:any;

  constructor( private http:HttpClient) { }

  ngOnInit(): void {

    this.formPost=new FormGroup({
      Name:new FormControl('',Validators.required),
      Content:new FormControl('',Validators.required)
    });

    this.getPost();
  }

  getPost(){
    this.http.get(`https://test-cc719-default-rtdb.firebaseio.com/posts.json`).
    pipe(map((response :any)=>{
      let posts=[];
      for(let key in response){
        posts.push({...response[key],key})
      }

      return posts;

    })).
    
    subscribe(Response=>{
      this.posts=Response;
    });
  }
  OnPost(){

    const PostDate=this.formPost.value;
    this.http.post('https://test-cc719-default-rtdb.firebaseio.com/posts.json',PostDate).
    subscribe(reponse=>{
      this.getPost();
    });

  }

}
