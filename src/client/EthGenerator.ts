import { HDNodeWallet, ethers } from "ethers";
import { Address } from "../models/Address";

export class EthGenerator {
    wallet: HDNodeWallet;
    childIndex: number = -1;
    constructor(){
        this.wallet = ethers.Wallet.createRandom();
    }

    generate(): Array<Address> {
        const items: Array<Address> = [];
        for(let i = 0; i < 10; i++){
            this.childIndex++;
            const dc = this.wallet.deriveChild(this.childIndex);
            items.push({
                privateKey: dc.privateKey.toLocaleLowerCase(),
                address: dc.address.toLocaleLowerCase()
            });
        }
        return items;
    }
}