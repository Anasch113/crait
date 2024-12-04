import React, { useState, useEffect } from "react";
import "./styles/Top.css";
import phan from "./phan.png";
import { connectWallet } from "../wallet.js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet, ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {

  PhantomWalletAdapter,

} from "@solana/wallet-adapter-wallets";
import '@solana/wallet-adapter-react-ui/styles.css';
import { useFetcher } from "react-router-dom";
const network = 'https://api.devnet.solana.com';

const Top = ({
  balance,
  setBalance,
  walletAddress,
  setWalletAddress,
  handleWalletLogin,
  setIsDisconnect }) => {

  const wallet = useWallet();
  const [hasReloaded, setHasReloaded] = useState(false);

  // Connect to the Solana cluster
  const connection = new Connection(network);

  // Fetch wallet balance
  const fetchBalance = async (publicKey) => {
    console.log("public key", publicKey)
    const lamports = await connection.getBalance(publicKey);
    setBalance(lamports / 1e9);
  };

  useEffect(() => {
    if (wallet.connected && wallet.publicKey) {
      const address = wallet.publicKey.toBase58()
      setWalletAddress(address)
      fetchBalance(wallet.publicKey);
      handleWalletLogin(address);
    }
  }, [wallet]);

  useEffect(() => {
    if (!wallet.connected) {
      console.log("Wallet disconnected. Resetting state...");
      setWalletAddress(null);
      setBalance(null);
      setIsDisconnect(true)
    }
  }, [wallet.connected]);



  return (
    <>
      <div className="top">
        <div></div>
        <div className=" flex flex-col gap-2 p-2">
          <WalletMultiButton />

          <span className="">
            {wallet.connected && (
              <div className=" bg-purple-900 p-4 rounded-md">
                {/* <p>Wallet Address: {wallet.publicKey.toBase58()}</p> */}
                <p>Balance: {balance} SOL</p>
              </div>
            )}
          </span>

        </div>

      </div>

    </>

  );
};

export default Top;
