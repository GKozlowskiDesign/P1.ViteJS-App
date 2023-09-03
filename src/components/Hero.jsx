import styles from "../style";
import { discount, platform } from "../assets";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Meta</span>{"Tracker"}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>  
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         The Metaverse Of Things (MVoT) is a groundbreaking web3 blockchain-based Decentralized Autonomous Organization (DAO) 
         dedicated to advancing the integration of the world into Web3. MVoT's visionary approach encompasses three distinct projects to meet our goal.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={platform} alt="platform" className="w-1/2 rounded-2xl shadow-2xl relative z-[5]" />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
