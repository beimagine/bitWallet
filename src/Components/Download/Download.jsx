import "./Download.css";
// import { Slide } from "react-awesome-reveal";
import Link from "next/link";

const Download = () => {
    return (
        <div className="Dsection">
            <div className="DsectionText">
                <h1>A more secure and transparent wallet!</h1>
                <p>BitWallet: Manage your crypto securely on iOS, Android, and in your browser – all in one place</p>
            </div>
            <div className="buttons">
                <Link href={'https://apps.apple.com/in/app/be-imagine-technology-wallet/id6443855034'} target="blank">
                    <button> <img src="/assets/IB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>App Store</span></div></button>
                </Link>
                <Link href={'https://play.google.com/store/apps/details?id=beimagine.tech&pli=1'} target="blank">
                    <button><img src="/assets/PB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>Play Store</span></div></button>
                </Link>
            </div>
            <Link href={'https://chrome.google.com/webstore/detail/bitwallet/ddphokhghjkekfdoddpeffdpojdofcan'} target="blank">
                <button className="browserButton"><div className="browserButton1"><span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Download as your</span> <br></br> <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>Browser Extension</span></div></button>
            </Link>
        </div>
    );
};

export default Download;
