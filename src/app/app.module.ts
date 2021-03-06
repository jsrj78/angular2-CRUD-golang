import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routering.module';
import {AppService} from './services/app.service';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UsersComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {}
