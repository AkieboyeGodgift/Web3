import React, { UseEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';
import { Children } from 'react';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEtheruemContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}


export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState(initialState)

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install Metamask")

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            console.log(accounts)
        }

        const connectWallet = async () => {
            try{
                if(!ethereum) return alert ("Please install MetaMask");

                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

                setCurrentAccount(accounts([0]));
            } catch (error) {
                console.log(error)

                throw new Error('No ethereum object')
            }
        }

        useEffect(() => {
            checkIfWalletIsConnected();
        }, [input])

    return (
        <TransactionContext.Provider value={{ connectWallet }}>
            {children}
        </TransactionContext.Provider>
    )
}