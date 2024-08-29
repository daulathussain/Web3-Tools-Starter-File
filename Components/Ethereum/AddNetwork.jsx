import React from "react";

const AddNetwork = () => {
   const MAIN_NETWORKS = [
    {
      id: "ethereum",
      chainId: `0x${Number(1).toString(16)}`,
      chainName: "Ethereum",
      image: "/logos/ethereum.png",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.infura.io/v3/"],
      blockExplorerUrls: ["https://etherscan.io/"],
    },
    {
      id: "polygon",
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      image: "/logos/polygon.png",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/polygon"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    {
      id: "bsc",
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Chain",
      image: "/logos/binance.png",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/bsc"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
    {
      id: "base_mainnet",
      chainId: `0x${Number(8453).toString(16)}`,
      chainName: "Base Mainnet",
      image: "/logos/base.png",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.base.org/"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  ];

  const TEST_NETWORKS = [
    {
      id: "polygon_amoy",
      chainId: `0x${Number(80002).toString(16)}`,
      chainName: "Polygon Amoy",
      image: "/logos/polygon.png",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-amoy.polygon.technology/"],
      blockExplorerUrls: ["https://www.oklink.com/amoy"],
    },
    {
      id: "sepolia",
      chainId: `0x${Number(11155111).toString(16)}`,
      chainName: "Sepolia",
      image: "/logos/ethereum.png",
      nativeCurrency: {
        name: "SepoliaETH",
        symbol: "SepoliaETH",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/eth_sepolia"],
      blockExplorerUrls: ["https://sepolia.etherscan.io/"],
    },
    {
      id: "base_sepolia",
      chainId: `0x${Number(84532).toString(16)}`,
      chainName: "Base Sepolia",
      image: "/logos/base.png",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://sepolia.base.org"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  ];
  
  return <div>AddNetwork</div>;
};

export default AddNetwork;
