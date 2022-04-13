import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {Customer} from "../models/customer.model";
import {Driver} from "../models/driver.model";

@Component({
    selector: 'app-add-delivery',
    templateUrl: './add-delivery.component.html',
    styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
    delivery: Delivery = new Delivery();
    foods = ["Apples", "Bananas", "Potatoes", "Carrots", "Steak", "Ground Beef"];
    selectedFoods = [];
    customers = [new Customer (1,"Shirley"), new Customer (2,"Adam"), new Customer (3,"Micheal")];
    drivers = [new Driver (1,"Harry"), new Driver (2,"Undine"), new Driver (3,"Porsha")];
    constructor() { }

    ngOnInit(): void {
    }

    btnSave_click(){
        this.delivery.setFoods(this.selectedFoods);
        this.delivery.print();
    }
}
