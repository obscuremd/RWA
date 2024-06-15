// import { ethers } from "ethers";
import { formatEther } from "ethers";
import toast from "react-hot-toast";

interface RequestArguments {
  method: string;
  params?: unknown[];
}

interface Ethereum {
  request: (args: RequestArguments) => Promise<unknown>;
}

interface EthereumWindow extends Window {
  ethereum?: Ethereum;
}

declare const window: EthereumWindow;

export const Ethlog = async (setMetaData: (balance: string) => void) => {
  if (window.ethereum) {
    try {
      // Request accounts and assert the type to string[]
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];

      if (accounts.length > 0) {
        // Request balance and assert the type to string
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], "latest"]
        }) as string;

        const formattedBalance = formatEther(balance);
        setMetaData(formattedBalance);
      } else {
        toast.error('No accounts found');
      }
    } catch (error) {
      console.error("Error fetching accounts or balance:", error);
      toast.error('Failed to retrieve account information');
    }
  } else {
    toast.error('Please install MetaMask');
  }
};
