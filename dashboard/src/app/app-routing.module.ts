import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserComponent } from './components/core/type-user/type-user.component';

const routes: Routes = [
  { path: 'core/type-user', component: TypeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
