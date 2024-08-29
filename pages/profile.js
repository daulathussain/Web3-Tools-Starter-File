import React from "react";

const profile = () => {

    // ETHEREUM MAINNET
  const ETHEREUM_MAIN = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Token Creator",
      image: "universe-vcutter-veditor",
      new: true,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
    {
      name: "ENS Name",
      image: "universe-vcutter-vrotate",
      new: false,
    },
    {
      name: "Contract ABI",
      image: "universe-vcutter-vflip",
      new: false,
    },
    {
      name: "Solidity Contract",
      image: "universe-vcutter-vresolution",
      new: false,
    },
    {
      name: "Ethereum Price",
      image: "universe-vcutter-vvolume",
      new: false,
    },
    {
      name: "Contract Owner",
      image: "universe-vcutter-vspeed",
      new: false,
    },
    {
      name: "Liqudity Finder",
      image: "universe-vcutter-stabilize",
      new: false,
    },
  ];

  // POLYGON MAINNET
  const POLYGON_MAINNET = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Token Creator",
      image: "universe-vcutter-veditor",
      new: true,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  // BASE MAINNET
  const BASE_MAINNET = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Token Creator",
      image: "universe-vcutter-veditor",
      new: true,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  // BINANCE MAINNET
  const BINANCE_MAINNET = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "ICO Marketplace",
      image: "universe-vcutter-vtts",
      new: true,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  // POLYGON AMOY TEST
  const POLYGON_AMOY = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Created ICO",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "ICO Address",
      image: "universe-pdf-rotate",
      new: true,
    },
    {
      name: "Created Token",
      image: "universe-acutter-atrim",
      new: false,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "Token Creator",
      image: "universe-vcutter-veditor",
      new: true,
    },
    {
      name: "ICO Creator",
      image: "universe-vcutter-screenrecorder",
      new: true,
    },
    {
      name: "ICO Marketplace",
      image: "universe-vcutter-vtts",
      new: true,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  // POLYGON AMOY TEST
  const SEPOLIA = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Created ICO",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Created Token",
      image: "universe-acutter-atrim",
      new: false,
    },
    {
      name: "ICO Address",
      image: "universe-pdf-rotate",
      new: true,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "Token Creator",
      image: "universe-vcutter-veditor",
      new: true,
    },
    {
      name: "ICO Creator",
      image: "universe-vcutter-screenrecorder",
      new: true,
    },
    {
      name: "ICO Marketplace",
      image: "universe-vcutter-vtts",
      new: true,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  // BESE SEPOLIA TEST
  const BESE_SEPOLIA = [
    {
      name: "Network Setup",
      image: "universe-vcutter-vloop",
      new: false,
    },
    {
      name: "Add Network",
      image: "universe-webcamera",
      new: false,
    },
    {
      name: "Added MetaMass",
      image: "universe-acutter-avolume",
      new: false,
    },
    {
      name: "Created Wallet",
      image: "universe-acutter-aspeed",
      new: false,
    },
    {
      name: "ICO Marketplace",
      image: "universe-vcutter-vtts",
      new: true,
    },
    {
      name: "Token Transfer",
      image: "universe-vcutter-addaudio",
      new: false,
    },
    {
      name: "ETH Transfer",
      image: "universe-vcutter-vtrim",
      new: false,
    },
    {
      name: "Token Explorer",
      image: "universe-vcutter-addimage",
      new: false,
    },
    {
      name: "Token Balance",
      image: "universe-vcutter-addtext",
      new: false,
    },
    {
      name: "Add Token",
      image: "universe-vcutter-delogo",
      new: false,
    },
    {
      name: "Ethereum Address",
      image: "universe-vcutter-vcrop",
      new: false,
    },
  ];

  //SOLANA
  const SOLANA = [
    {
      name: "Solana Network",
      image: "universe-acutter-pitch",
      new: false,
    },
    {
      name: "Airdrop",
      image: "universe-acutter-equalizer",
      new: false,
    },
    {
      name: "Solana Token",
      image: "universe-acutter-areverse",
      new: false,
    },
    {
      name: "Transfer Sol",
      image: "universe-ajoiner",
      new: false,
    },
    {
      name: "Solana Wallet",
      image: "universe-pdf-merge",
      new: false,
    },
    {
      name: "QR Code Creator",
      image: "universe-pdf-png2pdf",
      new: false,
    },
  ];

  //BITCOIN
  const BITCOIN = [
    {
      name: "BitCoin Wallet",
      image: "universe-pdf-merge",
      new: false,
    },
    {
      name: "QR Code Creator",
      image: "universe-pdf-png2pdf",
      new: false,
    },
  ];
  
  return <div>profile</div>;
};

export default profile;
