import { analytics } from "../constants";
import styles, { layout } from "../style";
const AnalyticsCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== analytics.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () =>  (
  <section id="analytics" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        MVoT<br className="sm:block hidden" /> Projects
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Firstly, it offers a cutting-edge cryptocurrency portfolio tracker, enabling users to efficiently manage their 
        digital assets within the decentralized landscape. Secondly, MoT pioneers a blockchain-based storage system, akin to a database, 
        leveraging IPFS technology for secure and decentralized data storage. Lastly, MoT fosters a vibrant social platform where 
        DAO members can seamlessly connect, exchange knowledge, and collaborate on innovative ideas, 
        fostering a dynamic and inclusive web3 community.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {analytics.map((analytic, index) => (
        <AnalyticsCard key={analytic.id} {...analytic} index={index} />
      ))}
    </div>
  </section>
);
export default About;


