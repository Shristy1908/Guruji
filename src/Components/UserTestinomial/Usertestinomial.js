import styles from "./Usertestinomial.module.css";
import sun from "../../media/sun.png";
import star from "../../media/star.png";
import VideoCarousel from "./VideoCarousel";
import banner from "../../media/trustbanner.png";
import filleddot from "../../media/filleddot.png";
import blankdot from "../../media/blankdot.png";
import PremiumAstrologer from "../PremiumAstrilogers/PremiumAstrologer";

function Usertestinomial(){
    return (
        <>
             <div className={styles.testinomialContainer}>

{/* testinomial header */}

  <div className={styles.header}>
    <div className={styles.sun}>
       <img alt="sun image" src={sun}/>
    </div>
     <div className={styles.heading}>
        
        <img className={styles.star} alt="star" src={star} />
         <h3>User Testimonial</h3>
        <img className={styles.star} alt="star" src={star} />
    </div>
  </div>

{/* testimonial vedio */}

  <div className={styles.main}>
     <VideoCarousel/>
  </div>

{/* testimonial end */}

   <div className={styles.banner} >
       <img alt="trust banner" src={banner} />
   </div>
   <div className={styles.testimonialend}>
            <img alt="dot" src={filleddot}/>
            <img alt="dot" src={blankdot}/>
            <img alt="dot" src={blankdot}/>
            <img alt="dot" src={blankdot}/>
            <img alt="dot" src={blankdot}/>
    </div>

   
    <PremiumAstrologer/>
</div>
        </>
       
       
    )
}

export default Usertestinomial;