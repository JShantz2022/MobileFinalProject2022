import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../models/customer.model";

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
    customer: Customer;
    provinces = [[1,"Ontario"], [2,"Alberta"], [3,"Quebec"], [4,"Yukon"], [5,"British Columbia"]];
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(`id is ${id}`);
        this.customer= new Customer(id);
    }

    btnSave_click(){
        this.customer.print();
    }

    btnDelete_click(){
        alert("Customer deleted");
    }
}
