import { Component, OnInit } from '@angular/core';
import {Driver} from "../models/driver.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.css']
})
export class ViewDriversComponent implements OnInit {
    drivers : Driver[] = [new Driver(1,"Harry", "Potter"), new Driver(2,"Undine", "Leverpine")];
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    btnModify_click(driver: Driver) {
        this.router.navigate(['edit-driver/' + driver.id]);
    }
}
