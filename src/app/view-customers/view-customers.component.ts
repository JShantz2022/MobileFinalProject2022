import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";
import {CustomerDatabaseService} from "../services/customer-database.service";

@Component({
    selector: 'app-view-customers',
    templateUrl: './view-customers.component.html',
    styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
    customers : Customer[] = [];
    constructor(private router: Router, private customerDatabase: CustomerDatabaseService) { }

    ngOnInit(): void {
        this.customerDatabase.selectAll().then((data)=>{
            this.customers = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnModify_click(customer: Customer){
        this.router.navigate(['edit-customer/' + customer.id]);
    }
}
