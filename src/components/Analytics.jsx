import { analytics } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
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

const Business = () =>  (
  <section id="analytics" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        MVoT<br className="sm:block hidden" /> Tracker
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        MetaTracker is a state-of-the-art cryptocurrency analytical tracker that empowers users with comprehensive insights 
        and real-time tracking capabilities. Dive deep into the world of cryptocurrencies, explore market trends, and gain a profound understanding 
        of digital assets. With advanced charting tools, real-time price tracking, and analytical insights, MetaTracker ensures you never miss out on crucial market movements. 
        Effortlessly manage your cryptocurrency portfolio, stay informed with the latest news and updates, and create personalized watchlists with custom 
        alerts. Make data-driven decisions, navigate the dynamic crypto market, and unleash the power of cryptocurrency insights with MetaTracker.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Analytics;
