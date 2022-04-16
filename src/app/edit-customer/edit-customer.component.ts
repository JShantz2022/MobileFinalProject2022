import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {DatabaseService} from "../services/database.service";
import {CustomerDatabaseService} from "../services/customer-database.service";

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
    customer: Customer;
    provinces = [];
    constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService,
                private customerDatabase: CustomerDatabaseService, private router: Router) { }

    ngOnInit(): void {
        let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(`id is ${id}`);
        this.customerDatabase.select(id).then((data)=>{
            console.info(data);
            this.customer = data;
        }).catch((error)=>{
            console.error(error);
        })
        this.database.selectAllProvinces().then((data)=>{
            this.provinces = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnSave_click(){
        this.customerDatabase.update(this.customer, ()=>{
            console.log("Record updated successfully");
            alert("Record updated successfully");
        })
    }

    btnDelete_click(){
        this.customerDatabase.delete(this.customer, ()=>{
            console.log("Customer deleted successfully");
            alert("Customer deleted");
        });

        this.router.navigate(["view-customers"]);
    }
}
