import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';

const routes: Routes = [
  {
    path: '',
    component: HomescreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'secondpage',
    component: SecondpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
