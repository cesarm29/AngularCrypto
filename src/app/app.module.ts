//generic libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//router
import { AppRoutingModule } from './app-routing.module';
//component
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
//services
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
