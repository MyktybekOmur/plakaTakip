import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatesComponent } from './pages/plates/plates.component';
import { GirenAracComponent } from './pages/giren-arac/giren-arac.component';
import { CikanAracComponent } from './pages/cikan-arac/cikan-arac.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './modals/add-user/add-user.component';
import { GirenAracEkleComponent } from './modals/giren-arac-ekle/giren-arac-ekle.component';
import { CikanAracEkleComponent } from './modals/cikan-arac-ekle/cikan-arac-ekle.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddUserComponent,
    GirenAracEkleComponent,
    CikanAracEkleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
