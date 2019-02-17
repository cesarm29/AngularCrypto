//generic libs
import { NgModule } from '@angular/core';
//router
import { Routes, RouterModule } from '@angular/router';
//component
import { CryptoComponent } from './crypto/crypto.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
