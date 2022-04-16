import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";
import {Router} from "@angular/router";
import {DriverDatabaseService} from "../services/driver-database.service";

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.css']
})
export class ViewDriversComponent implements OnInit {
    drivers : Driver[] = [];
    constructor(private router: Router, private driverDatabase: DriverDatabaseService) { }

    ngOnInit(): void {
        this.driverDatabase.selectAll().then((data)=>{
            this.drivers = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnModify_click(driver: Driver) {
        this.router.navigate(['edit-driver/' + driver.id]);
    }
}
