import React from "react";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import Logo from "../../Atoms/Logo/Logo";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  LogoBlock,
  FooterContainer,
  FooterContent,
  SocialConnect,
  FooterLinks,
  SubscribeContainer,
  Content,
  Subscribe,
  PrivacyLinks,
  CopyRights,
} from "./Footer.styled";
function Footer() {
  return (
    <>
      <FooterContainer>
        <LogoBlock>
          <Logo showName={true} />
          <FooterContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            tenetur, eum, sint velit excepturi in quam ab quae veritatis, earum
            illum. Unde illum tempore delectus, optio rerum in nam. Temporibus.
          </FooterContent>

          <SocialConnect>
            <NavIcon
              icon={<FaFacebook />}
              link="/app/explore"
              hideIcon={false}
            />

            <NavIcon
              icon={<FaTwitter />}
              text=" "
              link="/app/explore"
              hideIcon={false}
            />

            <NavIcon
              icon={<FaInstagram />}
              text=" "
              link="/app/explore"
              hideIcon={false}
            />

            <NavIcon
              icon={<FaLinkedin />}
              text=" "
              link="/app/explore"
              hideIcon={false}
            />

            <NavIcon
              icon={<FaGoogle />}
              text=" "
              link="/app/explore"
              hideIcon={false}
            />
          </SocialConnect>
        </LogoBlock>
        <FooterLinks>
        <h3>Links</h3> 
          <NavIcon icon={""} text="Home" link="/app/home" hideIcon={true} />
          <NavIcon
            icon={""}
            text="Explore"
            link="/app/explore"
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="Products"
            link="/app/products"
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="About Us"
            link="/app/about"
            hideIcon={true}
          />
        </FooterLinks>
        <FooterLinks>
           <h3>Contact Us </h3> 
          <NavIcon
            icon={<FaPhoneAlt />}
            text="(91) 98765 4321 54"
            link="/app/contact"
            hideIcon={false}
          />
          <NavIcon
            icon={<MdEmail />}
            text="support@gmail.com"
            link="/app/support"
            hideIcon={false}
          />
        </FooterLinks>
        <SubscribeContainer>
          <Content>
            Subscribe to our newsletter to get updates to our latest collections
            <p>
              Get 20% on your first order just buy subscribing to our newsletter
            </p>
          </Content>
          <Subscribe>
            <MdEmail className="input-icon" />
            <label>
              <input type="email" placeholder="Enter your email" />
            </label>
            <button type="button">Subscribe</button>
          </Subscribe>
          <p>You will be able to unsubscribe at any time.</p>
          <p>
            Read our privacy policy <span>here</span>
          </p>
        </SubscribeContainer>
      </FooterContainer>
      <CopyRights>
        <b>© Copyright by CodeUi. All rights reserved</b>
        <PrivacyLinks>
          <NavIcon icon={""} text="Privacy Policy" link="/app/privacy" hideIcon={true} />
          <NavIcon icon={""} text="Terms of Use" link="/app/termsofuse" hideIcon={true} />
          <NavIcon icon={""} text="Legal" link="/app/legal" hideIcon={true} />
          <NavIcon icon={""} text="Site Map" link="/app/sitemap" hideIcon={true} />
        </PrivacyLinks>
      </CopyRights>
    </>
  );
}
export default Footer;
