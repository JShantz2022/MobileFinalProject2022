export class Delivery{
    deliveryId : number = -1;
    cId : number;
    driverId : number;
    foods: string;

    constructor(deliveryId?: number, customerId?: number, driverId?: number, foods?: string) {
        this.deliveryId = deliveryId;
        this.cId = customerId;
        this.driverId = driverId;
        this.foods = foods;
    }

    setFoods(foods: string[]){
        this.foods = foods.toString();
    }

    getFoods(){
        return this.foods.split(",");
    }

    print(){
        console.log(`\t\tCustomer ID: ${this.cId}
        Driver ID: ${this.driverId}
        Foods: ${this.foods}`);
    }
}
