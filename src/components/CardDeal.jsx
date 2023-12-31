import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover a simpler way to oversee your digital assets <br className="sm:block hidden" /> effortlessly.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Picture the future where both businesses and individuals seamlessly merge their inventory management, 
        banking operations, and portfolio tracking into one cohesive, game-changing solution – just like the way Web3 revolutionizes our digital landscape.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-1/2 rounded-2xl shadow-purple-2xl" />
    </div>
  </section>
);

export default CardDeal;
