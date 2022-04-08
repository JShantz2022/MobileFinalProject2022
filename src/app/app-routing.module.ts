import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {AddDriverComponent} from "./add-driver/add-driver.component";
import {AddDeliveryComponent} from "./add-delivery/add-delivery.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {EditDriverComponent} from "./edit-driver/edit-driver.component";
import {EditDeliveryComponent} from "./edit-delivery/edit-delivery.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ViewCustomersComponent} from "./view-customers/view-customers.component";
import {ViewDeliverysComponent} from "./view-deliverys/view-deliverys.component";
import {ViewDriversComponent} from "./view-drivers/view-drivers.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "about", component: AboutComponent},
  {path: "add-customer", component: AddCustomerComponent},
  {path: "add-driver", component: AddDriverComponent},
  {path: "add-delivery", component: AddDeliveryComponent},
  {path: "edit-customer/:id", component: EditCustomerComponent},
  {path: "edit-driver/:id", component: EditDriverComponent},
  {path: "edit-delivery/:id", component: EditDeliveryComponent},
  {path: "view-customers", component: ViewCustomersComponent},
  {path: "view-drivers", component: ViewDriversComponent},
  {path: "view-deliveries", component: ViewDeliverysComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
