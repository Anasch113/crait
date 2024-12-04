import { Connection, clusterApiUrl } from "@solana/web3.js";

export const connectWallet = async () => {
    const provider = window.solana;
    if (!provider) {
        alert("Please install a Solana wallet like Phantom!");
        return null;
    }

    try {
        const response = await provider.connect(); 
        const walletAddress = response.publicKey.toString(); 
        return walletAddress;
    } catch (err) {
        console.error("Wallet connection failed:", err);
        return null;
    }
};
