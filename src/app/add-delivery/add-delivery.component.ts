import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";

@Component({
    selector: 'app-add-delivery',
    templateUrl: './add-delivery.component.html',
    styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
    foods = ["Apples", "Bananas", "Potatoes", "Carrots", "Steak", "Ground Beef"];
    selectedFoods: string[];
    customers = [[1,"Shirley"], [2,"Adam"], [3,"Micheal"]];
    drivers = [[1,"Harry"], [2,"Undine"], [3,"Porsha"]];
    delivery: Delivery = new Delivery();
    constructor() { }

    ngOnInit(): void {
    }

    btnSave_click(){
        this.delivery.setFoods(this.selectedFoods);
        this.delivery.print();
    }
}
