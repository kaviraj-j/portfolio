import { getSkill, Skill, skills } from "../skills/config"
import DecentralizedLottery from "./../../images/decentralized-lottery.png";

import WeatherApp from "./../../images/weather-app.png";
import TvShowApp from "./../../images/tv-show-app.png";
import Dappazon from "./../../images/dappazon.png";
import YelpCamp from "./../../images/yelpcamp.png";
import FundMe from "./../../images/fund-me.png";
import NFTMarketplace from "./../../images/NFTMarketplace.png";
import Blockexplorer from "./../../images/blockexplorer.png"
import ECDSA from "./../../images/ecdsa.png"
import RealEstateApp from "./../../images/real-estate-app.png"
import Sociopedia from "./../../images/sociopedia.png"

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  
  {
    name: "Dappazon",
    description: "Decentralized amazon Clone!",
    image: Dappazon,
    url: "https://dappazon.on.fleek.co/",
    github: "https://github.com/kaviraj-j/dappazon",
    technologies: getSkill([ "solidity", "hardhat", "nodejs", "react", "IPFS"])
  },
  {
    name: "NFT Marketplace",
    description: "A marketplace for selling, buying and also minting NFTs!",
    image: NFTMarketplace,
    url: "https://nft-market.on.fleek.co/",
    github: "https://github.com/kaviraj-j/hardhat-nft-marketplace",
    technologies: getSkill([ "solidity", "hardhat", "nodejs", "moralis", "nextjs", "The Graph", "IPFS"])
  },
  {
    name: "Decentralized Lottery",
    description: "Decentralized lottery system which chooses the winner using the Chainlink VRF",
    image: DecentralizedLottery,
    url: "https://web3-lottery.on.fleek.co",
    github: "https://github.com/kaviraj-j/hardhat-smartcontract-lottery",
    technologies: getSkill(["html", "css", "javascript", "chainlink", "moralis", "nextjs"])
  },
  {
    name: "Blockexplorer",
    description: "An Ethereum Block explorer",
    image: Blockexplorer,
    url: "https://blockexplorer-ruddy.vercel.app/",
    github: "https://github.com/kaviraj-j/blockexplorer",
    technologies: getSkill(["Alchemy SDK", "react", "javascript"])
  },
  {
    name: "Fund Me",
    description: "Smart Contract Funding application",
    image: FundMe,
    url: "https://fund-me-eth.on.fleek.co/",
    github: "https://github.com/kaviraj-j/hardhat-fund-me",
    technologies: getSkill(["solidity", "hardhat", "javascript", "html"])
  },
  {
    name: "ECDSA Node App",
    description: "A simple ECDSA implementation to send ETH",
    image: ECDSA,
    url: "https://ecdsa-nodejs.vercel.app/",
    github: "https://github.com/kaviraj-j/ecdsa-nodejs",
    technologies: getSkill(["javascript", "NodeJS", "react"])
  },
  {
    name: "Real Estate App",
    description: "Real estate application to buy and sell properties",
    image: RealEstateApp,
    url: "https://real-estate-app-steel-six.vercel.app/",
    github: "https://github.com/kaviraj-j/real-estate-app",
    technologies: getSkill(["javascript", "NodeJS", "react", "mongodb", "ExpressJS", "Auth0"])
  },
  {
    name: "Sociopedia",
    description: "A social media platform",
    image: Sociopedia,
    url: "https://sociopedia.vercel.app/",
    github: "https://github.com/kaviraj-j/sociopedia",
    technologies: getSkill(["javascript", "NodeJS", "react", "mongodb", "ExpressJS", ])
  },
  {
    name: "Tv Show Search App",
    description: "A Tv show search app built using React.js and tvmaze api",
    image: TvShowApp,
    url: "https://tv-show-app-kaviraj.netlify.app/",
    github: "https://github.com/kaviraj-j/tv-show-app",
    technologies: getSkill(["react", "javascript"])
  },
  {
    name: "Weather App",
    description: "Check the weather of any city in the world",
    image: WeatherApp,
    url: "https://kaviraj-j.github.io/weather-app/",
    github: "https://github.com/kaviraj-j/weather-app",
    technologies: getSkill(["javascript", "html", "css"])
  },
  {
    name: "YelpCamp",
    description: "Create user accounts, add campgrounds, add comments and more!",
    image: YelpCamp,
    url: "",
    github: "https://github.com/kaviraj-j/yelpcamp",
    technologies: getSkill(["javascript", "html", "css", "nodejs", "mongodb", "ExpressJS"])
  },
]