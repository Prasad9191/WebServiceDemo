import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtabComponent } from './product/ptab.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { PformComponent } from './product/pform.component';
import { FormsModule } from '@angular/forms';
import { MyPipe } from './mypipe.pipe';
import { PlistComponent } from './product/plist.component';

@NgModule({
  declarations: [
    AppComponent,PtabComponent,PformComponent,MyPipe,PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
