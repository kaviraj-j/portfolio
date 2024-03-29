import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Hardhat from "./../../images/hardhat-logo.png"; 
import Truffle from "./../../images/truffle-logo.png"; 
import Ganache from "./../../images/ganache-logo.png"; 
import Chainlink from "./../../images/chainlink-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import YARN from "./../../images/yarn-logo.png";
import Git from "./../../images/git-logo.png";
import Moralis from "./../../images/moralis-logo.png";
import Native from "./../../images/react-native.png";
import Web3 from "./../../images/web3js.png";
import Ethers from "./../../images/ethers-logo.png";
import Waffle from "./../../images/waffle.png";
import Next from "./../../images/nextjs-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import Graph from "./../../images/thegraph-logo.png";
import Arweave from "./../../images/arweave.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";
import ExpressJs from "./../../images/express-js.png";
import MongoDB from "./../../images/mongo-db.png";
import Alchemy from "./../../images/alchemy-sdk.png"
import Auth0 from "./../../images/auth0.png"


export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "Waffle",
    url: "https://getwaffle.io/",
    img: Waffle
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  // {
  //   name: "Truffle",
  //   url: "https://trufflesuite.com/",
  //   img: Truffle
  // },
  {
    name: "Ganache",
    url: "https://trufflesuite.com/ganache/",
    img: Ganache
  },
  {
    name: "Chainlink",
    url: "https://chain.link/",
    img: Chainlink
  },
  {
    name: "Alchemy SDK",
    url: "https://docs.alchemy.com/reference/alchemy-sdk-quickstart",
    img: Alchemy
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  // {
  //   name: "TypeScript",
  //   url: "https://www.typescriptlang.org/",
  //   img: TS
  // },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "ExpressJS",
    url: "https://expressjs.com/",
    img: ExpressJs
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    img: MongoDB
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next
  },
  {
    name: "Auth0",
    url: "",
    img: Auth0
  },
  {
    name: "Moralis",
    url: "https://moralis.io/",
    img: Moralis
  },
  
  {
    name: "The Graph",
    url: "https://thegraph.com/en/",
    img: Graph
  },
  {
    name: "IPFS",
    url: "https://ipfs.io/",
    img: IPFS
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
]