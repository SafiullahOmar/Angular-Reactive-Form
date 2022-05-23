import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';

const routes: Routes = [
  {path:'formarray',component:NestedFormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
