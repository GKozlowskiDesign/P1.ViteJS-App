import styles from './style'
import { CTA, Footer, Clients, CardDeal, Navbar, Stats, Testimonials, Hero, Analytics } from "./components";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    
    {/* Nav Content */} 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar />
      </div>
    </div>
    
    {/* Intro Content */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    {/* Main Content */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Analytics />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
    
  </div>
);
export default App;
