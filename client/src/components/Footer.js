import React from "react";
import {
  Box,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h2 style={{ color: "gray", 
                   textAlign: "center",  }}>
        Yigithan Guven 2021
      </h2>
      <FooterLink href="http://yigithanguven.com/">Website</FooterLink>
    </Box>
  );
};
export default Footer;