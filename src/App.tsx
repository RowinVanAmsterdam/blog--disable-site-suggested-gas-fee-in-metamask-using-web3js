import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { transfer } from "./components/transfer";

declare global {
    interface Window {
        web3: any;
    }
}

type CardProps = {
    address: string | undefined;
    suggestedGasFee?: boolean;
};

const Card = ({ address, suggestedGasFee }: CardProps) => {
    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-6">
                    <span className="font-bold italic">{suggestedGasFee ? "With" : "Without"}</span> site suggested gas fee
                </h5>
                <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => transfer(address as string, suggestedGasFee)}
                >
                    Open MetaMask
                </button>
            </div>
        </div>
    );
};

function App() {
    const { address } = useAccount();

    return (
        <div className="App text-white bg-slate-800 h-screen flex justify-center items-center">
            <section className="flex flex-col items-center justify-center">
                <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-center">Disable site suggested gas fees in MetaMask</h1>
                <p className="text-gray-500 text-base mb-4 max-w-xl text-center">
                    A quick example on how you can disable site suggested gas fees within MetaMask using web3.js.
                </p>

                <section className="flex justify-center mt-2">
                    <ConnectButton />
                </section>

                {address && (
                    <section className="flex flex-wrap gap-5 mt-24">
                        <Card address={address} suggestedGasFee />
                        <Card address={address} />
                    </section>
                )}
            </section>
        </div>
    );
}

export default App;
