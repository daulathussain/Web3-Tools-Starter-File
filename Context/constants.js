import { ethers } from "ethers";
import Web3Modal from "web3modal";

import factoryAbi from "./factoryAbi.json";
import ERC20Generator from "./ERC20Generator.json";
import ICOMarketplace from "./ICOMarketplace.json";

// MAINNET
export const ETHEREUM_ADDRESS = process.env.NEXT_PUBLIC_ETHEREUM_ADDRESS;
export const BINNANCE_ADDRESS = process.env.NEXT_PUBLIC_BINNANC;
export const BASE_ADDRESS = process.env.NEXT_PUBLIC_BASE_ADDRESS;
export const POLYGON_ADDRESS = process.env.NEXT_PUBLIC_POLYGON_ADDRESS;

// TESTNET
export const TEST_BASE_ADDRESS = process.env.NEXT_PUBLIC_BASE_ADDRESS;
export const TEST_POLYGON_ADDRESS = process.env.NEXT_PUBLIC_POLYGON_ADDRESS;
export const TEST_SEPOLIA_ADDRESS = process.env.NEXT_PUBLIC_SEPOLIA_ADDRESS;

//FACTORY MAINNET
export const ETHEREUM_FACTORY_ADDRESS =
  process.env.NEXT_PUBLIC_ETHEREUM_FACTORY_ADDRESS;

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;
export const FACTORY_ABI = factoryAbi;
export const ICOMARKETPLACE_ABI = ICOMarketplace.abi;

export let ICOMARKETPLACE_ADDRESS;
export const FACTORY_ADDRESS = ETHEREUM_FACTORY_ADDRESS;

//PINATA KEYS
export const PINATA_AIP_KEY = process.env.NEXT_PUBLIC_PINATA_AIP_KEY;
export const PINATA_SECRECT_KEY = process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY;

// SOLANA
export const SOLANA_FEE = process.env.NEXT_PUBLIC_SOLANA_TOKEN_CREATOR_FEE;
export const SOLANA_RECEIVER = process.env.NEXT_PUBLIC_SOLANA_FEE_RECEIVER;

// OTHER BLOCKCHAIN
export const CREATOR_FEE = process.env.NEXT_PUBLIC_TOKEN_CREATOR_FEE;
export const ADD_TOKEN_FEE = process.env.NEXT_PUBLIC_ADD_TOKEN;
export const ICO_FEE = process.env.NEXT_PUBLIC_ICO_FEE;
export const CREATOR_RECEIVER = process.env.NEXT_PUBLIC_OWNER_RECEIVER;
