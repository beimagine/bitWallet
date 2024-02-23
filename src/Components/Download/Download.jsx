import "./Download.css";

const openLinkInNewTab = (url) => {
    const newTab = window.open(url, '_blank');
    newTab.focus();
};

const Download = () => {
    return (
        <div className="Dsection">
            <div className="DsectionText">
                <h1>A more secure and transparent wallet!</h1>
                <p>BitWallet: Manage your digital assets securely on iOS, Android, and in your browser – all in one place</p>
            </div>
            <div className="buttons">
                <button onClick={() => openLinkInNewTab('https://apps.apple.com/in/app/be-imagine-technology-wallet/id6443855034')}>
                    <img src="/assets/IB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>App Store</span></div>
                </button>
                <button onClick={() => openLinkInNewTab('https://play.google.com/store/apps/details?id=beimagine.tech&pli=1')}>
                    <img src="/assets/PB.png" /> <div className="Btext"><span style={{ fontSize: '0.6rem', fontWeight: '700' }}>Get it on the</span> <br></br> <span style={{ fontSize: '1.3rem', fontWeight: '700' }}>Play Store</span></div>
                </button>
            </div>
            <button onClick={() => openLinkInNewTab('https://chrome.google.com/webstore/detail/bitwallet/ddphokhghjkekfdoddpeffdpojdofcan')} className="browserButton"><div className="browserButton1"><span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Download as your</span> <br></br> <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>Browser Extension</span></div>
            </button>
        </div>
    );
};

export default Download;
