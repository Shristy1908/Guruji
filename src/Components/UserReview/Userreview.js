import style from "./Userreview.module.css";
import star from "../../media/star.png";
import img1 from "../../media/Ellipse 1628.png";
import img2 from "../../media/Ellipse 1629.png";
import img3 from "../../media/Ellipse 1630.png";
import img4 from "../../media/Ellipse 1631.png";
import img5 from "../../media/Ellipse 1632.png";
import img6 from "../../media/Ellipse 1633.png";
import img7 from "../../media/Ellipse 1634.png";
import star1 from "../../media/蒙版.png";
import star2 from "../../media/蒙版 (1).png";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";

const userReviewData=[
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image:img4,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image: img2,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image: img3,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image: img1,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image:img5,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image: img6,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
    {
        id:1,
        rating:4,
        name: "Harsh Patel",
        image: img7,
        review:
          "Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
    },
]

export default function Userreview(){

    const [activeIndex, setActiveIndex] = useState(3);
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === userReviewData.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? userReviewData.length - 1 : prevIndex - 1));
    };

    return (
     <div className={style.container}>
      <div className={style.chevron}>
           <div className={style.ChevronSide} onClick={handlePrev}><ChevronLeft/></div>
           <div className={style.ChevronSide} onClick={handleNext}><ChevronRight/></div>
     </div>
     <div className={style.heading}>
        
        <img className={style.star} alt="star" src={star} />
            <h3>User review</h3>
        <img className={style.star} alt="star" src={star} />
   </div>
    <div className={style.carouselContainer}>
  
      <div className={style.rating}>
        <img
          src={
            userReviewData[activeIndex].rating >= 1
              ? star1
              : star2
          }
          alt="star1"
        />
        <img
          src={
            userReviewData[activeIndex].rating >= 2
              ? star1
              :star2
          }
          alt="star2"
        />
        <img
          src={
            userReviewData[activeIndex].rating >= 3
              ?star1
              :star2
          }
          alt="star3"
        />
        <img
          src={
            userReviewData[activeIndex].rating >= 4
              ? star1
              : star2
          }
          alt="star4"
        />
        <img
          src={
            userReviewData[activeIndex].rating === 5
              ? star1
              :star2
          }
          alt="star5"
        />
      </div>
      <div className={style.contain}>{userReviewData[activeIndex].review}</div>
      <div className={style.name}><b>~{userReviewData[activeIndex].name}</b></div>
      <div className={style.userImageList}>
        {userReviewData.map((review, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? style.activeReview : style.inActiveReview
            }
            onClick={() => setActiveIndex(index)}
          >
            <img src={review.image} alt="reviewer-img" />
          </div>
        ))}
      </div>
    </div>
     </div>
    )
}