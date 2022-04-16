import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";
import {DatabaseService} from "../services/database.service";
import {CustomerDatabaseService} from "../services/customer-database.service";

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
    customer: Customer = new Customer();
    provinces = [];
    constructor(private database: DatabaseService, private customerDatabase: CustomerDatabaseService) { }

    ngOnInit(): void {
        this.database.selectAllProvinces().then((data)=>{
            this.provinces = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnSave_click(){
        this.customerDatabase.insert(this.customer, ()=>{
            console.log("Record added successfully");
            alert("Record added successfully");
        })
    }
}
