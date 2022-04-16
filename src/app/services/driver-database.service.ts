import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {Driver} from "../models/driver.model";

@Injectable({
    providedIn: 'root'
})
export class DriverDatabaseService {

    constructor(private database: DatabaseService) { }

    public insert(driver: Driver, callback){
        function txFunction(tx) {
            let sql = "INSERT INTO drivers(firstName, lastName, address, provinceId," +
                "postalCode, email, phoneNumber) VALUES(?,?,?,?,?,?,?);";
            let options = [driver.firstName, driver.lastName, driver.address, driver.provinceId,
                driver.postalCode, driver.email, driver.phone];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }

        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
            console.log("Success: Record added successfully")
        });
    }

    public select(id: number): Promise<any>{
        let options = [id];

        return new Promise((resolve, reject) =>{
            function txFunction(tx) {
                let sql = "SELECT * FROM drivers WHERE id=?";
                tx.executeSql(sql, options, function (tx, results) {
                    if (results.rows.length > 0) {
                        let row = results.rows[0];
                        let driver = new Driver(row['id'], row['firstName'], row['lastName'], row['address'],
                            row['provinceId'], row['postalCode'],row['email'], row['phoneNumber']);
                        resolve(driver);
                    }  else{
                        reject("Specific Driver not found");
                    }
                }, DatabaseService.errorHandler);
            }
            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () => {
                console.log("Success: select transaction successful");
            })
        });
    }

    public delete(driver: Driver, callback){
        function txFunction(tx){
            let sql = "DELETE FROM drivers WHERE id=?;";
            let options = [driver.id];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }
        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, ()=>{
            console.log("Success: delete transaction successful");
        });
    }

    public selectAll(): Promise<any>{
        let options = [];
        let drivers: Driver[] = [];

        return new Promise((resolve, reject) =>{
            function txFunction(tx){
                let sql = "SELECT * FROM drivers;";
                tx.executeSql(sql, options, function (tx, results){
                    if (results.rows.length > 0){
                        for (let i=0; i < results.rows.length; i++){
                            let row = results.rows[i];
                            let driver = new Driver(row['id'], row['firstName'], row['lastName'], row['address'],
                                row['provinceId'], row['postalCode'],row['email'], row['phoneNumber']);
                            drivers.push(driver);
                        }
                        resolve(drivers);
                    }else{
                        reject("No drivers found");
                    }
                }, DatabaseService.errorHandler);
            }

            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
                console.log("Success: selectAll transaction successful")
            })
        });
    }

    public update(driver: Driver, callback){
        function txFunction(tx) {
            let sql = "UPDATE drivers SET firstName=?, lastName=?, address=?, provinceId=?," +
                "postalCode=?, email=?, phoneNumber=? WHERE id=?;";
            let options = [driver.firstName, driver.lastName, driver.address, driver.provinceId,
                driver.postalCode, driver.email, driver.phone, driver.id];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }

        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
            console.log("Success: Record added successfully")
        });
    }
}
