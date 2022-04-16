import { Injectable } from '@angular/core';

declare function openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess): any;

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private db: any;
    constructor() { }

    public initDB(): void{
        if (this.db == null){
            try{
                this.createDatabase();
                this.createTables();
            } catch(e){
                console.error("Error in initDB(): " + e);
            }

        }
    }

    getDatabase():any{
        this.initDB();
        return this.db;
    }

    public static errorHandler(error): any {
        console.error("Error: " + error);
    }

    private createDatabase(): void {
        let shortName = "FoodBankOnTheGoDB";
        var version = "";
        var displayName = "DB for Food Bank On The Go App";
        var dbSize = 2 * 1024 * 1024;

        this.db = openDatabase(shortName, version, displayName, dbSize, () => {
            console.log("Success: Database created successfully");
        });
    }

    private createTables(): void {

        function txFunction(tx: any): void {
            console.log("Creating tables...");
            var options = [];

            let sql = "DROP TABLE IF EXISTS provinces";

            tx.executeSql(sql, options, () => {
                console.log("Success: Drop table provinces successful");
            }, DatabaseService.errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS provinces( " +
                " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                " name VARCHAR(30));";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table provinces successful");
            }, DatabaseService.errorHandler);

            sql =" INSERT INTO provinces(name) VALUES('Alberta'),('British Columbia'),('Manitoba'),('New Brunswick'),('Newfoundland and Labrador')," +
                "('Northwest Territories'),('Nova Scotia'),('Nunavut'),('Ontario'),('Prince Edward Island'),('Quebec'),('Saskatchewan'),('Yukon');";

            tx.executeSql(sql, options, () => {
                console.log("Success: create table provinces successful");
            }, DatabaseService.errorHandler);

            sql = "DROP TABLE IF EXISTS food";

            tx.executeSql(sql, options, () => {
                console.log("Success: Drop table food successful");
            }, DatabaseService.errorHandler);

            sql= "CREATE TABLE IF NOT EXISTS food( " +
                " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                " name VARCHAR(30));";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table food successful");
            }, DatabaseService.errorHandler);

            sql= " INSERT INTO food(name) VALUES('Apples'),('Bananas'),('Potatoes'),('Carrots'),('Pasta'),('Canned Soup'),('Bread'),('Rice'),('Yogurt');";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table food successful");
            }, DatabaseService.errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS customers( " +
                " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                " firstName VARCHAR(20)," +
                " lastName VARCHAR(50)," +
                " address VARCHAR(50)," +
                " provinceId INTEGER," +
                " postalCode VARCHAR(7)," +
                " email VARCHAR(30)," +
                " phoneNumber VARCHAR(20));";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table customers successful");
            }, DatabaseService.errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS drivers( " +
                " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                " firstName VARCHAR(20)," +
                " lastName VARCHAR(50)," +
                " address VARCHAR(50)," +
                " provinceId INTEGER," +
                " postalCode VARCHAR(7)," +
                " email VARCHAR(30)," +
                " phoneNumber VARCHAR(20));";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table drivers successful");
            }, DatabaseService.errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS deliveries( " +
                " id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                " customerId INTEGER," +
                " driverId INTEGER," +
                " food TINYTEXT);";

            tx.executeSql(sql, options, () => {
                console.log("Success: Create table deliveries successful");
            }, DatabaseService.errorHandler);
        }

        this.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () => {
            console.log("Success: Transaction successful");
        });
    }

    public selectAllFood(): Promise<any>{
        let options = [];
        let food: String[] = [];

        return new Promise((resolve, reject) =>{
            function txFunction(tx){
                let sql = "SELECT * FROM food;";
                tx.executeSql(sql, options, function (tx, results){
                    if (results.rows.length > 0){
                        for (let i=0; i < results.rows.length; i++){
                            let row = results.rows[i];
                            let f = row['name'];
                            food.push(f);
                        }
                        resolve(food);
                    }else{
                        reject("No food found");
                    }
                }, DatabaseService.errorHandler);
            }

            this.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
                console.log("Success: selectAllFood transaction successful")
            })
        });
    }

    public selectAllProvinces(): Promise<any>{
        let options = [];
        let provinces = [];

        return new Promise((resolve, reject) =>{
            function txFunction(tx){
                let sql = "SELECT * FROM provinces;";
                tx.executeSql(sql, options, function (tx, results){
                    if (results.rows.length > 0){
                        for (let i=0; i < results.rows.length; i++){
                            let row = results.rows[i];
                            provinces.push([row['id'],row['name']]);
                        }
                        resolve(provinces);
                    }else{
                        reject("No provinces found");
                    }
                }, DatabaseService.errorHandler);
            }

            this.getDatabase().transaction(txFunction, DatabaseService.errorHandler, () =>{
                console.log("Success: selectAllProvinces transaction successful")
            })
        });
    }
}
