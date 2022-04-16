import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {Router} from "@angular/router";
import {DeliveryDatabaseService} from "../services/delivery-database.service";

@Component({
  selector: 'app-view-deliveries',
  templateUrl: './view-deliveries.component.html',
  styleUrls: ['./view-deliveries.component.css']
})
export class ViewDeliveriesComponent implements OnInit {
    deliveries: Delivery[] = [];
    constructor(private router: Router, private deliveryDatabase: DeliveryDatabaseService) { }

    ngOnInit(): void {
        this.deliveryDatabase.selectAll().then((data)=>{
            this.deliveries = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnModify_click(delivery: Delivery){
        this.router.navigate(['edit-delivery/' + delivery.deliveryId]);
    }
}
