import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AppComponent, CreateComponent, ListComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
