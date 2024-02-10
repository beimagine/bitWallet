import Link from "next/link";
import "./HomePage.css"
import Features from "../Features/Features";
import Download from "../Download/Download";
import { Slide } from "react-awesome-reveal";;

const HomePage = () => {
    return (<>
        <div className="vision">
            <div className="vision-text">
                <h1 className="title">Give your NFTs a home with <span className="bitWord1">BitWallet</span></h1>
                <p className="para"> Enhance your user experience with <br></br> <span className="bitword2"> BitWallet</span>, the key to blockchain world</p>
                <div className="main1Img"><img className="main1" src="/assets/main1.png" /></div>
                <Link href= '/download'>
                <button><b>Download</b> <img className="dIcon" src="/assets/download-Icon.png" /></button>
                </Link>
            </div>
            <div className="image">
                <img src="/assets/main.png"></img>
            </div>
        </div>

        <Slide direction="up" triggerOnce duration={2000} >
            <div className="walletContent1">
                <h1 className="content1-title1" >Secure, Simple, Everywhere </h1>
                <h1 className="content1-title2" >BitWallet on Browser and Mobile</h1 >
                <div className="walletInfo1">
                    <p>BitWallet, offering a key vault, secure login, and simplified NFT and Crypto storage and transfer, is accessible seamlessly as both a browser extension and a mobile app.</p>
                    <img className="walletInfoImg1" src="/assets/walletInfo1.png" />
                </div>
            </div>
        </Slide>

        <Slide direction="up" triggerOnce  duration={2000}  >
            <div className="walletContent2">
                <h1 className="content2-title1" variant="h2">Security for your digital assets</h1>
                <div className="walletInfo2">
                    <img src="/assets/walletInfo2.png" />
                    <p>BitWallet generates passwords and keys on your device, so only you have access to your accounts and data. Assistance navigating through various decentralised websites and blockchain apps.</p>
                </div>
            </div>
        </Slide>

        <Slide direction="up" triggerOnce  duration={2000} >
            <div className="walletContent3">
                <h1 className="content3-title1" variant="h2">Zero downtime </h1>
                <h1 className="content3-title2" variant="h2">Continuous Operation without Interruption</h1 >
                <div className="walletInfo3">
                    <p>The Web3 and blockchain revolution is ushering in an era of continuous and secure digital operations, eliminating downtime and transforming the landscape of online systems</p>
                    <img src="/assets/walletInfo3.png" />
                </div>
            </div>
        </Slide>

        <Slide direction="up" triggerOnce  duration={2000} >
            <Features />
        </Slide>
        <div className="Dimg"><img src="/assets/Dimg.png"/></div>
        <Download />
        <div className="footerA"></div>
    </>
    )
}

export default HomePage;