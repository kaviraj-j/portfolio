import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "kavirajmailz@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:kavirajmailz@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "kaviraj_jk",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/kaviraj_jk",
  },
  {
    name: "TELEGRAM:",
    info: "@kaviraj_j",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/kaviraj_j",
  },
  {
    name: "DISCORD:",
    info: "Kaviraj#6212",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/1015227818587725965",
  },
  {
    name: "GitHub:",
    info: "kaviraj-j",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/kaviraj-j",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Chennai, India - UTC/GMT +5:30 hours",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/india/chennai",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contacte Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href="mailto:kavirajmailz@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;