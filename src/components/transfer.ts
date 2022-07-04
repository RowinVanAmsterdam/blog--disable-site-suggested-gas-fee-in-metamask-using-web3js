import Web3 from "web3";
import ABI from "../assets/contracts/polygon/titan-coin-contract-abi.json";
import { AbiItem } from "web3-utils";

const getCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
    return provider;
};

const contractABI = ABI;
const contractAddess = "0x3bef4a5A756F2d458beED05cCa83eD8558FBDF20";
const web3 = new Web3(getCurrentProvider());
const contract = new web3.eth.Contract(contractABI as AbiItem[], contractAddess as string);

export const transfer = async (address: string, suggestedGasFee?: boolean) => {
    const amount = BigInt(10 * 10 ** 18);
    const options = suggestedGasFee ? { from: address, gas: 70000 } : { from: address, gas: 70000, maxPriorityFeePerGas: null, maxFeePerGas: null };
    await contract.methods.transfer("0x3bef4a5A756F2d458beED05cCa83eD8558FBDF20", amount).send(options);
};
