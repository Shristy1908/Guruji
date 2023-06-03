import styles from "./premiumAstrologer.module.css";
import star from "../../media/star.png";
import Card from "./AstrologersCard";

function PremiumAstrologer(){
    return ( 
        <div className={styles.container}>
              <div className={styles.heading}>
                
                <img className={styles.star} alt="star" src={star} />
                 <h3>Premium Astrilogers</h3>
                <img className={styles.star} alt="star" src={star} />
            </div>
            <div className={styles.cards}>
                <Card/>
            </div>
        </div>
    )
}

export default PremiumAstrologer