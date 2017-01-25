import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimplertComponent } from './simplert.component';

import { SimplertService } from './simplert.component.service';

@NgModule({
  declarations: [
    AppComponent,
    SimplertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SimplertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
