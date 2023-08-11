import { BytesLike, HDNodeWallet, ethers } from "ethers";
import { Address } from "../models/Address";

export class EthUtils {
    // static randomPrivateKey(): string {
    //     //const bytes = ethers.randomBytes(32);//.toString('hex');
    //     // const data: ReadonlyArray<BytesLike> = bytes;
    //     // const id = ethers.concat(data);
    //     // return "0x"+id;
    // }

    static found(items: Array<Address>, checklist: Array<string>){
        if(!items || !checklist) return false;
        items.forEach(addr => {
            const index = checklist.indexOf(addr.address);
            if(index >= 0)
                return true;
        });
        return false;
    }
}
