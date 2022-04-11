export class Delivery{
    deliveryId : number = -1;
    cId : number;
    driverId : number;
    foods: string;

    constructor(customerId?: number, driverId?: number) {
        this.cId = customerId;
        this.driverId = driverId;
    }

    setFoods(foods: string[]){
        this.foods = foods.toString();
    }

    print(){
        console.log(`\t\tCustomer ID: ${this.cId}
        Driver ID: ${this.driverId}
        Foods: ${this.foods}`);
    }
}
