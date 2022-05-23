import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PostComponent,
    NestedFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
