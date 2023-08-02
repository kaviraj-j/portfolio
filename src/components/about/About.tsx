import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
// import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "4rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  // const Alert = () => {
  //   if(isVisible) {
  //     return(
  //       <div className="alert">
  //         <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="mailto:kavirajmailz@gmail.com" className="contact-link">Hire Me!</a></Heading>
  //         <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
  //       </div>
  //     )
  //   }else{
  //     return null
  //   }
  // }

  return(
    <>
    {/* <Alert /> */}
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='3xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='3xl'>
              I'm <span className="name">Kaviraj</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>passionate <span className="name">BLOCKCHAIN DEVELOPER</span> from India with almost 4 months of experience in web3 development. Interested in DeFi and developing DApps</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/kaviraj-j" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://instagram.com/kaviraj_jk" target="_blank">
              <AiFillInstagram className="icon" />
            </a>
            <a href="https://twitter.com/kaviraj_jk" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://t.me/kaviraj_j" target="_blank">
              <BsTelegram className="icon" />
            </a>
          </div>

          <a href="mailto:kavirajmailz@gmail.com" target="_blank">
            <Button className="icon" size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
          
          <a href="https://drive.google.com/file/d/1O1ALjCDFGrIfcDn9qexSieszy7LCFniA/view?usp=sharing" target="_blank">
            <Button className="icon" size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              My Resume
            </Button>
          </a>

          <a href="https://drive.google.com/uc?id=1O1ALjCDFGrIfcDn9qexSieszy7LCFniA&export=download">
            <Button size='lg'  colorScheme="blue" variant='solid'>
              Download Resume
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Tijan Bitmoji" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;