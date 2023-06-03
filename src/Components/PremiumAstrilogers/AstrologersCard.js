import img1 from "../../media/photo_wall1.png";
import img2 from "../../media/photo_wall2.png";
import img3 from "../../media/photo_wall3.png";
import img4 from "../../media/photo_wall4.png";
import img5 from "../../media/photo_wall5.png";
import img6 from "../../media/photo_wall6.png";
import img7 from "../../media/photo_wall7.png";
import img8 from "../../media/photo_wall8.png";
import style from "./AstrologerCard.module.css";

const images=[
    {
        img:img8,
    },
    {
        img:img5,
    },
    {
        img:img3,
    },
    {
        img:img1,
    },
    {
        img:img2,
    },
    {
        img:img4,
    },
    {
        img:img5,
    },
    {
        img:img6,
    },
    {
        img:img7,
    },
]

function Card(){
    return (
        <>
        <div className={style.cardBox}>
        {images.map((image, i) => (
          <div key={i}>
            <div className={style.singleCard} style={{backgroundImage: `url(${image.img})`}}>

              <div className={style.expAndOnlineIndicator}>
                <span>10+ Years</span>
                <div className={style.online}>
                  <div className={style.dot}></div>
                  <p>Online</p>
                </div>
              </div>
              <div className={style.priceBox}>
                <p>price</p>
                <span>
                  <i className="fa-solid fa-indian-rupee-sign">10</i>/min
                </span>
              </div>
              <div className={style.astroDetails}>
                <div className={style.rating}>
                  <i className="fa-solid fa-star"></i>4.5
                </div>
                
                <h3>Astrologer Ramraj</h3>
                <p>Specialties</p>
                <h5>Love, Business, Life </h5>
                <p>Skills</p>
                <h5>Vedic Astrology, Kundali, </h5>
               
              </div>
              <div className={style.liveBox}>
                <i className="fa-regular fa-circle-play">
                  <div className={style.liveLetter}>Live</div>
                </i>
              </div>
              <div className={style.downCompo}>
                <div className={style.chat}>
                  <i className="fa-brands fa-rocketchat"></i>
                  Chat
                </div>
                <div className={style.call}>
                  <i className="fa-solid fa-phone"></i>
                  Call
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}

export default Card