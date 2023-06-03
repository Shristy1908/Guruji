import styles from "./Home.module.css";
import logo from "../../media/gurujilogo.jpg";
import profilephoto from "../../media/ProfilePhoto.png"
import {data} from "./HomeFooterData";
import filleddot from "../../media/filleddot.png";
import blankdot from "../../media/blankdot.png";


function Home(){
    return (
        <div className={styles.homeContainer}>

        {/* Navbar section */}

            <div className={styles.navbar}>
                <div className={styles.icon}>
                    <img className={styles.logo} alt="logo" src={logo}/>
                    <h1>Guruji</h1>
                </div>
                <div className={styles.menulinks}>
                    <p>Home</p>
                    <p>Call With Astrologer</p>
                    <p>Live (Coming Soon)</p>
                </div>
                <div className={styles.profilephoto}>
                    <img alt="Profile Photo" src={profilephoto}/>
                </div>
            </div>

        {/* body section */}

            <div className={styles.main}>
                <h1>"Astrology For Clarity"</h1>
                <p>Your Name is a Vedic Astrologer and has expertise in Vaastu <br/>and Mantra Theraphy </p>
                <button>Consult Now</button>
            </div>

        {/* homefooter section */}

            <div className={styles.homefooter}>
                {
                    data.map((data)=>{
                        return (
                            <>
                               <div className={styles.wrapdata}>
                                  <img src={data.img}/>
                                  <p>{data.text}</p>
                               </div>
                           </>
                        )
                     
                   })
                }
            </div>

        {/* home section end */}

            <div className={styles.homeend}>
                    <img alt="dot" src={filleddot}/>
                    <img alt="dot" src={blankdot}/>
                    <img alt="dot" src={blankdot}/>
            </div>

        </div>
    )
}

export default Home;