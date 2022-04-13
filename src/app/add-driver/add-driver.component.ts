import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";

@Component({
    selector: 'app-add-driver',
    templateUrl: './add-driver.component.html',
    styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
    driver: Driver = new Driver();
    provinces = [[1,"Ontario"], [2,"Alberta"], [3,"Quebec"], [4,"Yukon"], [5,"British Columbia"]];
    constructor() { }

    ngOnInit(): void {
    }

    btnSave_click(){
        this.driver.print();
    }
}
