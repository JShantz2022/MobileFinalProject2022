import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DatabaseService} from "../services/database.service";
import {DriverDatabaseService} from "../services/driver-database.service";
import {DeliveryDatabaseService} from "../services/delivery-database.service";
import {CustomerDatabaseService} from "../services/customer-database.service";

@Component({
    selector: 'app-edit-delivery',
    templateUrl: './edit-delivery.component.html',
    styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {
    delivery: Delivery = new Delivery();
    foods = [];
    selectedFoods = [];
    customers = [];
    drivers = [];

    constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService, private router: Router,
                private deliveryDatabase: DeliveryDatabaseService, private driverDatabase: DriverDatabaseService,
                private customerDatabase: CustomerDatabaseService) { }

    ngOnInit(): void {
        this.getData();
        setTimeout(() => this.getSelectedFoods(), 300);
    }

    private getSelectedFoods(){
        this.selectedFoods = this.delivery.getFoods();
    }

    private getData(){
        let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(`id is ${id}`);
        this.deliveryDatabase.select(id).then((data)=>{
            console.info(data);
            this.delivery = data;
        }).catch((error)=>{
            console.error(error);
        });
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
        this.deliveryDatabase.update(this.delivery, ()=>{
            console.log("Record updated successfully");
            alert("Record updated successfully");
        })
    }

    btnDelete_click(){
        this.deliveryDatabase.delete(this.delivery, ()=>{
            console.log("Delivery deleted successfully");
            alert("Delivery deleted");
        });

        this.router.navigate(["view-deliveries"]);
    }
}
