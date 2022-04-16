import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {Customer} from "../models/customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerDatabaseService {

    constructor(private database: DatabaseService) { }

    public insert(customer: Customer, callback){
        function txFunction(tx) {
            let sql = "INSERT INTO customers(firstName, lastName, address, provinceId," +
                "postalCode, email, phoneNumber) VALUES(?,?,?,?,?,?,?);";
            let options = [customer.firstName, customer.lastName, customer.address, customer.provinceId,
                customer.postalCode, customer.email, customer.phone];
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
                let sql = "SELECT * FROM customers WHERE id=?";
                tx.executeSql(sql, options, function (tx, results) {
                    if (results.rows.length > 0) {
                        let row = results.rows[0];
                        let customer = new Customer(row['id'], row['firstName'], row['lastName'], row['address'],
                            row['provinceId'], row['postalCode'],row['email'], row['phoneNumber']);
                        resolve(customer);
                    }  else{
                        reject("Specific customer not found");
                    }
                }, DatabaseService.errorHandler);
            }
            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () => {
                console.log("Success: select transaction successful");
            })
        });
    }

    public delete(customer: Customer, callback){
        function txFunction(tx){
            let sql = "DELETE FROM customers WHERE id=?;";
            let options = [customer.id];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }
        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, ()=>{
            console.log("Success: delete transaction successful");
        });
    }

    public selectAll(): Promise<any>{
        let options = [];
        let customers: Customer[] = [];

        return new Promise((resolve, reject) =>{
            function txFunction(tx){
                let sql = "SELECT * FROM customers;";
                tx.executeSql(sql, options, function (tx, results){
                    if (results.rows.length > 0){
                        for (let i=0; i < results.rows.length; i++){
                            let row = results.rows[i];
                            let customer = new Customer(row['id'], row['firstName'], row['lastName'], row['address'],
                                row['provinceId'], row['postalCode'],row['email'], row['phoneNumber']);
                            customers.push(customer);
                        }
                        resolve(customers);
                    }else{
                        reject("No customers found");
                    }
                }, DatabaseService.errorHandler);
            }

            this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
                console.log("Success: selectAll transaction successful")
            })
        });
    }

    public update(customer: Customer, callback){
        function txFunction(tx) {
            let sql = "UPDATE customers SET firstName=?, lastName=?, address=?, provinceId=?," +
                "postalCode=?, email=?, phoneNumber=? WHERE id=?;";
            let options = [customer.firstName, customer.lastName, customer.address, customer.provinceId,
                customer.postalCode, customer.email, customer.phone, customer.id];
            tx.executeSql(sql, options, callback, DatabaseService.errorHandler);
        }

        this.database.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
            console.log("Success: Record added successfully")
        });
    }
}
