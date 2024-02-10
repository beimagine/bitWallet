import "./Download.css";
import { Slide } from "react-awesome-reveal";

const Download = () => {
    return (
            <Slide direction="up" triggerOnce delay={500}>
                <div className="Dsection">
                    <div className="DsectionText">
                    <h1>A more secure and transparent wallet!</h1>
                    <p>BitWallet: Manage your crypto securely on iOS, Android, and in your browser – all in one place</p>
                    </div>
                    <div className="buttons">
                        <button> <img src="/assets/IB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>App Store</span></div></button>
                        <button><img src="/assets/PB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>Play Store</span></div></button>
                    </div>
                    <button className="browserButton"><div><span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Download as your</span> <br></br> <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>Browser Extension</span></div></button>
                </div>
            </Slide>
    );
};

export default Download;
