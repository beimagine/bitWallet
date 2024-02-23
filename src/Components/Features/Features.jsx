import './Features.css'

const cardData = [
    {
        imageSrc: '/assets/F1.png',
        title: "Easy to use",
        para: "Effortless and intuitive, designed for a seamless user experience",
        classname: "cardT1"
    },
    {
        imageSrc: '/assets/F2.png',
        title: "Data Protection",
        para: "Advanced encryption techniques safeguarding sensitive user information",
        classname: "cardT2"
    },
    {
        imageSrc: '/assets/F3.png',
        title: "Decentralized",
        para: "Increased user control and reduced dependency on centralized authorities",
        classname: "cardT3"
    },
    {
        imageSrc: '/assets/F4.png',
        title: "Verified and Secured",
        para: "Trustworthy & cutting-edge security protocols ensuring safety of users' funds and data",
        classname: "cardT4"

    },
    {
        imageSrc: '/assets/F5.png',
        title: "Robust Infrastructure",
        para: "Resilient and reliable infrastructure providing uninterrupted transaction processing",
        classname: "cardT5"
    },
    {
        imageSrc: '/assets/F6.png',
        title: "Support Assets",
        para: "Comprehensive support for wide range of digital assets, enabling seamless management",
        classname: "cardT6"
    },
];

const titleColors = [
    'linear-gradient(90deg, #FF836E 43.15%, #FF39F7 100%)',
    'linear-gradient(90deg, #54D6FF 0%, #FF39F7 100%)',
    'linear-gradient(90deg, #FF39F7 33.88%, #FF836E 100%)',
    'linear-gradient(90deg, #FF39F7 26.38%, #41A4FF 100%)',
    'linear-gradient(90deg, #FF862F 0%, #FF00F5 100%)',
    'linear-gradient(90deg, #EE48F8 0%, #42A1D7 100%)'
];

const Features = () => {
    return (
        <>
            <div className='featuresHeader'>
                <h1 className='featuresTitle'>Why choose BitWallet</h1>
                <p className='featuresPara'>Bitwallet ensures secure storage and easy management of digital assets, providing users with peace of mind and convenient access to their collectibles.</p>
                <div className='box'>
                    <div className='allcards'>
                        {cardData.map((card, index) => (
                            <div className={`card ${index === 3 || index === 4 ? 'special-card' : ''}`} key={index} >
                                <div className='cardWrapper'>
                                    <img className='visible-image' src={card.imageSrc} />
                                    <div className='cardInfo'>
                                        <h3 className={`cardTitle ${card.classname}`} style={{ background: titleColors[index], color: 'transparent', WebkitBackgroundClip: 'text' }} >{card.title}</h3>
                                        <p className='cardPara'>{card.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
