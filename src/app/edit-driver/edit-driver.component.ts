import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-edit-driver',
    templateUrl: './edit-driver.component.html',
    styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
    driver: Driver;
    provinces = [[1,"Ontario"], [2,"Alberta"], [3,"Quebec"], [4,"Yukon"], [5,"British Columbia"]];
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(`id is ${id}`);
      this.driver= new Driver(id);
    }

    btnSave_click(){
        this.driver.print();
    }

    btnDelete_click(){
        alert("Driver deleted");
    }
}
