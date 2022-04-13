export class Customer{
    id : number = -1;
    firstName : string = "";
    lastName : string = "";
    address : string = "";
    provinceId :number;
    postalCode : string = "";
    email : string = "";
    phone : string = "";

    constructor(id?:number,firstName?: string, lastName?: string, address?: string, provinceId?: number, postalCode?: string, email?: string,
                phone?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.provinceId = provinceId;
        this.postalCode = postalCode;
        this.email = email;
        this.phone = phone;
    }

    print(){
        console.log(`\t\tFirst Name: ${this.firstName}
        Last Name: ${this.lastName}
        Address: ${this.address}
        ProvinceId: ${this.provinceId}
        Postal Code: ${this.postalCode}
        Email: ${this.email}
        Phone Number: ${this.phone}`)
    }

}
