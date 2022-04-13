import { Component, OnInit } from '@angular/core';
import {Delivery} from "../models/delivery.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-deliveries',
  templateUrl: './view-deliveries.component.html',
  styleUrls: ['./view-deliveries.component.css']
})
export class ViewDeliveriesComponent implements OnInit {
    deliveries: Delivery[] = [new Delivery(1), new Delivery(2)];
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    btnModify_click(delivery: Delivery){
        this.router.navigate(['edit-delivery/' + delivery.deliveryId]);
    }
}
