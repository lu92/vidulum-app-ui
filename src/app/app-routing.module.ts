import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotationPageComponent } from './pages/quotation-page/quotation-page.component';
import { InboxPageComponent } from './pages/inbox-page/inbox-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'quotation',
    component: QuotationPageComponent,
  },
  {
    path: 'inbox',
    component: InboxPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
