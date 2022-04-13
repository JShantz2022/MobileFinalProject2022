import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {Customer} from "../models/customer.model";
import {Driver} from "../models/driver.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-edit-delivery',
    templateUrl: './edit-delivery.component.html',
    styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {
    delivery: Delivery;
    foods = ["Apples", "Bananas", "Potatoes", "Carrots", "Steak", "Ground Beef"];
    selectedFoods = [];
    customers = [new Customer (1,"Shirley"), new Customer (2,"Adam"), new Customer (3,"Micheal")];
    drivers = [new Driver (1,"Harry"), new Driver (2,"Undine"), new Driver (3,"Porsha")];

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(`id is ${id}`);
      this.delivery= new Delivery(id, 1,2, "Apples,Bananas");
      this.selectedFoods = this.delivery.getFoods();
    }

    btnSave_click(){
        this.delivery.print();
    }

    btnDelete_click(){
        alert("Delivery deleted");
    }
}
