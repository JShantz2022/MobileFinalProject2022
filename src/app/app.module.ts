import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { ViewDriversComponent } from './view-drivers/view-drivers.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { ViewDeliverysComponent } from './view-deliverys/view-deliverys.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ViewCustomersComponent,
    AddDriverComponent,
    EditDriverComponent,
    ViewDriversComponent,
    AddDeliveryComponent,
    EditDeliveryComponent,
    ViewDeliverysComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
