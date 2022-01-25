import Onboard from "bnc-onboard";
import { ethers } from "ethers";

import { useEffect, useState } from "react";
import { SpinnerDotted } from "spinners-react";

import Web3Ctx from "../Context/Web3Ctx.js";
import config from "../../config";

const DEPLOYED_NTW_NAME = config.DEPLOYED_NTW_NAME;
const DEPLOYED_CHAIN_ID = config.DEPLOYED_CHAIN_ID;
const INFURA_ID = config.INFURA_ID;
const FORTMATIC_KEY = config.FORTMATIC_KEY;
const RPC_URL = config.RPC_URL;

const Web3Manager = ({ children }) => {
  const [onboard, setOnboard] = useState(null);
  const [address, setAddress] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [defaultProvider, setDefaultProvider] = useState(null);
  const [chainId, setChainId] = useState(DEPLOYED_CHAIN_ID);
  const [networkName, setNetworkName] = useState(DEPLOYED_NTW_NAME);

  const [connecting, setConnecting] = useState(false);
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      setInitDone(false);
      try {
        const ob = Onboard({
          networkId: DEPLOYED_CHAIN_ID, // [Integer] The Ethereum network ID your Dapp uses.
          darkMode: false,
          blockPollingInterval: 12000,
          walletSelect: {
            wallets: [
              { walletName: "metamask" },
              { walletName: "coinbase" },
              { walletName: "trust", rpcUrl: RPC_URL },
              { walletName: "authereum" },
              { walletName: "wallet.io", rpcUrl: RPC_URL },
              { walletName: "atoken" },
              {
                walletName: "fortmatic",
                apiKey: FORTMATIC_KEY,
              },
              {
                walletName: "walletConnect",
                rpc: {
                  1: RPC_URL,
                  4: RPC_URL,
                },
              },
              { walletName: "opera" },
              { walletName: "operaTouch" },
              { walletName: "torus" },
              { walletName: "status" },
              { walletName: "walletLink", rpcUrl: RPC_URL },
              {
                walletName: "trezor",
                appUrl: "ether.cards",
                email: "info@ether.cards",
                rpcUrl: RPC_URL,
              },
              {
                walletName: "ledger",
                rpcUrl: RPC_URL,
              },
            ],
          },
          walletCheck: [
            { checkName: "derivationPath" },
            { checkName: "accounts" },
            { checkName: "connect" },
            { checkName: "network" },
          ],

          subscriptions: {
            wallet: (obWallet) => {
              setWallet(obWallet);
              console.log(obWallet);
            },
            address: (obAddress) => {
              setAddress(obAddress);
              console.log(obAddress);
            },
            network: (network) => {
              setChainId(network);
              console.log(network);

              if (network !== DEPLOYED_CHAIN_ID) {
                setDefaultProvider(
                  new ethers.providers.JsonRpcProvider(RPC_URL)
                );
              } else {
                setDefaultProvider(null);
              }
            },
          },
        });

        const savedWallet = localStorage
          ? localStorage.getItem("selectedWallet")
          : null;
        console.log("fetchLocalStorage", savedWallet);
        if (savedWallet) {
          setConnecting(true);
          await ob.walletSelect(savedWallet);
          await ob.walletCheck();
        } else {
          const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
          setEthersProvider(provider);
        }

        setOnboard(ob);
      } catch (e) {
        console.log("onboard init error", e);
      }
    };

    initApp();
  }, []);

  useEffect(() => {
    if (onboard && wallet && wallet.name && chainId) {
      checkWallet(onboard, chainId, wallet);
    } else {
      setConnecting(false);
      if (ethersProvider) {
        setInitDone(true);
      }
    }
  }, [wallet, chainId, onboard]);

  const checkWallet = async (onboard, chainId, wallet) => {
    await onboard.walletCheck();
    window.localStorage.setItem("selectedWallet", wallet.name);
    setEthersProvider(new ethers.providers.Web3Provider(wallet.provider));
    setInitDone(true);
    setConnecting(false);
  };

  useEffect(() => {
    if (ethersProvider) {
      subscribeNetwork(ethersProvider);
    }
  }, [ethersProvider]);

  useEffect(() => {
    if (address && isWalletConnected() == false) {
      console.log("set address null");
      setAddress(null);
    }
  }, [address]);

  const subscribeNetwork = async (provider) => {
    const network = await provider.getNetwork().catch((e) => {
      console.log("error:", e);
    });
    if (network) {
      setNetworkName(network.name);
      setChainId(network.chainId);
    }
  };

  const isWalletConnected = () => {
    console.log("check wallet state");
    if (onboard) {
      const state = onboard.getState();
      return state.wallet.name != null;
    } else return null;
  };

  const handleConnect = async (e) => {
    if (!initDone) return;
    if (onboard) {
      e.stopPropagation();
      console.log("reset");
      onboard.walletReset();
      console.log("walletSelect");
      await onboard.walletSelect();
    }
  };

  const handleDisconnect = () => {
    if (onboard) {
      console.log("logout wallet");
      onboard.walletReset();
      if (localStorage) {
        localStorage.removeItem("selectedWallet");
      }
    }
  };

  const isCorrectNetwork = chainId === DEPLOYED_CHAIN_ID;

  if (!initDone) {
    return (
      <div
        className="row"
        style={{ height: "100%", weight: "100%", background: "#fff" }}
      >
        <div className="col m-auto text-center">
          <SpinnerDotted color="#19A8B4" />
        </div>
      </div>
    );
  }

  if (initDone && chainId && chainId !== DEPLOYED_CHAIN_ID) {
    // return (
    //   <div className="row" style={{ height: "100%", weight: "100%" }}>
    //     <div className="col m-auto text-center">
    //       <h3>You Must Change Networks</h3>
    //       <p>
    //         Please switch to{" "}
    //         <span style={{ color: "black" }}>{DEPLOYED_NTW_NAME}</span> from{" "}
    //         <span style={{ color: "black" }}>
    //           {networkName == "homestead" ? "mainnet" : networkName}
    //         </span>
    //       </p>
    //       <a className="btn btn-outline btn-black" onClick={handleDisconnect}>
    //         Disconnect
    //       </a>
    //     </div>
    //   </div>
    // );
  }

  return (
    <Web3Ctx.Provider
      value={{
        onboard,
        wallet,
        address,
        ethersProvider,
        defaultProvider,
        chainId,
        defaultChainId: config.DEPLOYED_CHAIN_ID,
        connecting,
        handleConnect,
        handleDisconnect,
        isCorrectNetwork,
      }}
    >
      {children}
    </Web3Ctx.Provider>
  );
};
export default Web3Manager;
