import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecursiveTableComponent } from './recursive-table/recursive-table.component';
import { RecursiveTableBodyComponent } from './recursive-table/recursive-table-body/recursive-table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveTableComponent,
    RecursiveTableBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
