// Footer section
import React, {useState} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, FormStyle, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import styles from "./footer.module.css";
import { SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  const [status, setStatus] = useState("Submit");

  // Handles contact form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    }
  
  return (
    <div>
      { /* Contact form */}
      <SectionTitle id ="contact" className={styles.title}>Contact Me</SectionTitle>
      <form onSubmit={handleSubmit}>
        <div className={styles.div1}>
          <input className={styles.name} type="text" id="name" placeholder="Name"
          size="25" required />
        </div>
        <div className={styles.div2}>
          <input className={styles.email} type="email" id="email" placeholder="Email" size="25" required />
        </div>
        <div className={styles.div3}>
          <textarea className={styles.message} id="message" placeholder="Message" required />
        </div>
        <div className={styles.div4}>
          <button className={styles.button} type="submit">{status}</button>
          <button className={styles.button} type="reset">Reset</button>
        </div>
      </form>

      { /* Social icons */}
      <FooterWrapper>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan></Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/GurudetaSingh" target="_blank">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/gurudetasingh/" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper> 
    </div>
  ); 
}

export default Footer;
