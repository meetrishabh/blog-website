import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InterviewQuestionsComponent } from './components/interview-questions/interview-questions.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"interview-questions",component:InterviewQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
