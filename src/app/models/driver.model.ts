export class Driver{
    id : number = -1;
    firstName : string = "";
    lastName : string = "";
    address : string = "";
    provinceId :number;
    postalCode : string = "";
    email : string = "";
    phone : string = "";

    constructor(driverId?: number, firstName?: string, lastName?: string, address?: string, provinceId?: number, postalCode?: string, email?: string,
                phone?: string) {
        this.id = driverId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.provinceId = provinceId;
        this.postalCode = postalCode;
        this.email = email;
        this.phone = phone;
    }
}
