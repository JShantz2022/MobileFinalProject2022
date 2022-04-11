import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
    customer: Customer = new Customer();
    provinces = [[1,"Ontario"], [2,"Alberta"], [3,"Quebec"], [4,"Yukon"], [5,"British Columbia"]];
  constructor() { }

  ngOnInit(): void {
  }

  btnSave_click(){
      this.customer.print();
  }
}
