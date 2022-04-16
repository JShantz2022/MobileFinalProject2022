import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DatabaseService} from "../services/database.service";
import {DriverDatabaseService} from "../services/driver-database.service";

@Component({
    selector: 'app-edit-driver',
    templateUrl: './edit-driver.component.html',
    styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
    driver: Driver;
    provinces = [];
    constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService,
                private driverDatabase: DriverDatabaseService, private router: Router) { }

    ngOnInit(): void {
        let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(`id is ${id}`);
        this.driverDatabase.select(id).then((data)=>{
            console.info(data);
            this.driver = data;
        }).catch((error)=>{
            console.error(error);
        })
        this.database.selectAllProvinces().then((data)=>{
            this.provinces = data;
        }).catch((error)=>{
            console.error(error);
        });
    }

    btnSave_click(){
        this.driverDatabase.update(this.driver, ()=>{
            console.log("Record updated successfully");
            alert("Record updated successfully");
        })
    }

    btnDelete_click(){
        this.driverDatabase.delete(this.driver, ()=>{
            console.log("Driver deleted successfully");
            alert("Driver deleted");
        });

        this.router.navigate(["view-drivers"]);
    }
}
