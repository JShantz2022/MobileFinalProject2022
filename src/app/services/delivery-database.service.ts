import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {Delivery} from "../models/delivery.model";

@Injectable({
    providedIn: 'root'
})
export class DeliveryDatabaseService {

    constructor(private database: DatabaseService) { }

    public insert(delivery: Delivery, callback){
        function txFunction(tx) {
            let sql = "INSERT INTO deliveries(customerId, driverId, food) VALUES(?,?,?);";
            let options = [delivery.cId, delivery.driverId, delivery.foods];
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
                let sql = "SELECT * FROM deliveries WHERE id=?";
                tx.executeSql(sql, options, function (tx, results) {
                    if (results.rows.length > 0) {
                        let row = results.rows[0];
                        let delivery = new Delivery(row['id'], row['customerId'], row['driverId'], row['food']);
                        resolve(delivery);
                    }  else{
                        reject("Specific Delivery not found");
                    }
                }, DatabaseService.errorHandler);
            }
            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () => {
                console.log("Success: select transaction successful");
            })
        });
    }

    public delete(delivery: Delivery, callback){
        function txFunction(tx){
            let sql = "DELETE FROM deliveries WHERE id=?;";
            let options = [delivery.deliveryId];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }
        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, ()=>{
            console.log("Success: delete transaction successful");
        });
    }

    public selectAll(): Promise<any>{
        let options = [];
        let deliveries: Delivery[] = [];

        return new Promise((resolve, reject) =>{
            function txFunction(tx){
                let sql = "SELECT * FROM deliveries;";
                tx.executeSql(sql, options, function (tx, results){
                    if (results.rows.length > 0){
                        for (let i=0; i < results.rows.length; i++){
                            let row = results.rows[i];
                            let delivery = new Delivery(row['id'], row['customerId'], row['driverId'], row['food']);
                            deliveries.push(delivery);
                        }
                        resolve(deliveries);
                    }else{
                        reject("No deliveries found");
                    }
                }, DatabaseService.errorHandler);
            }

            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
                console.log("Success: selectAll transaction successful")
            })
        });
    }

    public update(delivery: Delivery, callback){
        function txFunction(tx) {
            let sql = "UPDATE deliveries SET customerId=?, driverId=?, food=? WHERE id=?;";
            let options = [delivery.cId, delivery.driverId, delivery.foods, delivery.deliveryId];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }

        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
            console.log("Success: Record updated successfully")
        });
    }
}
