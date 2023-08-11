export class Address {
    privateKey: string;
    address: string;

    constructor(_private_key: string, _address: string) {
        this.privateKey = _private_key;
        this.address = _address;
    }
}