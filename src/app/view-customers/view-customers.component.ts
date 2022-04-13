import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-view-customers',
    templateUrl: './view-customers.component.html',
    styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
    customers : Customer[] = [new Customer(1,"Shirley", "Temple"), new Customer(2,"Adam", "Levine")];
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    btnModify_click(customer: Customer){
        this.router.navigate(['edit-customer/' + customer.id]);
    }
}
