import { JoyIDWallet } from "../client/JoyIDWallet";
import { EthGenerator } from "../client/EthGenerator";

export class ViewData {
    static wallet: JoyIDWallet | null;

    static ckbBalance: number = 20000;
    static latitude: number = 0;
    static longitude: number = 0;
    //

    static ethGenerator: EthGenerator | null;
    static EthAddrs = ["0xdead000000000000000042069420694206942069"];
}