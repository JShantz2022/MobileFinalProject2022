import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {DatabaseService} from "../services/database.service";
import {DriverDatabaseService} from "../services/driver-database.service";
import {DeliveryDatabaseService} from "../services/delivery-database.service";
import {CustomerDatabaseService} from "../services/customer-database.service";

@Component({
    selector: 'app-add-delivery',
    templateUrl: './add-delivery.component.html',
    styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
    delivery: Delivery = new Delivery();
    foods = [];
    selectedFoods = [];
    customers = [];
    drivers = [];
    constructor(private database: DatabaseService,private deliveryDatabase: DeliveryDatabaseService,
                private driverDatabase: DriverDatabaseService, private customerDatabase: CustomerDatabaseService) { }

    ngOnInit(): void {
        this.driverDatabase.selectAll().then((data)=>{
            this.drivers = data;
        }).catch((error)=>{
            console.error(error);
        });
        this.customerDatabase.selectAll().then((data)=>{
            this.customers = data;
        }).catch((error)=>{
            console.error(error);
        });
        this.database.selectAllFood().then((data)=>{
            this.foods = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnSave_click(){
        this.delivery.setFoods(this.selectedFoods);
        this.deliveryDatabase.insert(this.delivery, ()=>{
            console.log("Record added successfully");
            alert("Record added successfully");
        })
    }
}
