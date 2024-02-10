'use client'
import { Grid, Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <Grid container spacing={2} className="footerDiv">
                <Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
                    <Box sx={{ width: '20%' }}>
                        <img
                            src='https://static.wixstatic.com/media/a065f2_8066744694014295adf44b9ae12883d6~mv2.png/v1/fill/w_176,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bit%20logo%20.png'
                            alt=""
                            style={{ marginTop: ".5rem", }}
                            id="footerImg"
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={4}
                    lg={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                    }}
                    id="footerIcons">
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: '0.3rem'
                    }}>
                        <Typography><b>Address :</b></Typography>
                        <p>3891 Ranchview Dr. Richardson, California 62639</p>
                        <p>(319) 555-0115</p>
                        <p>deanna.curtis@example.com</p>
                    </Box>
                    <Box className="FooterContent">
                        <Typography><b>Follow us on :</b></Typography>
                        <a href='https://www.instagram.com/bitindiaofficial/' target="blank">
                        <img className="footerIcons" src="/assets/instagram.png"/>
                        </a>
                        <a href="https://www.linkedin.com/company/beyond-imagination-technlogies-pvt-ltd/" target="blank">
                        <img className="footerIcons" src="/assets/linkedin.png"/>
                        </a>
                        <a href="https://twitter.com/BitIndia_" target="blank">
                        <img className="footerIcons" src="/assets/twitter.png"/>
                        </a>
                    </Box>
                </Grid>
            </Grid>
            <p className="copyrightText">© Copyright 2023, All Rights Reserved Beyond Imagination Technologies Pvt. Ltd.</p>
        </>
    );
};

export default Footer;
