import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";
import {DatabaseService} from "../services/database.service";
import {DriverDatabaseService} from "../services/driver-database.service";

@Component({
    selector: 'app-add-driver',
    templateUrl: './add-driver.component.html',
    styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
    driver: Driver = new Driver();
    provinces = [];
    constructor(private database: DatabaseService, private driverDatabase: DriverDatabaseService) { }

    ngOnInit(): void {
        this.database.selectAllProvinces().then((data)=>{
            this.provinces = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnSave_click(){
        this.driverDatabase.insert(this.driver, ()=>{
            console.log("Record added successfully");
            alert("Record added successfully");
        })
    }
}
