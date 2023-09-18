import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/MonolithStorySlider.module.css";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMoneyBill,
  faRocket,
  faChevronLeft,
  faChevronRight,
  faPeopleGroup,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import Second from "../images/mono/AssetOne.webp";
import Third from "../images/mono/Gartner-Cool-Vendor-white.webp";

export default function TimelineCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);
  const yearSlider = useRef(null);
  const isMobile = window.innerWidth <= 480;

  const mainSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesToShow: isMobile ? 1 : 3,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,

    asNavFor: yearSlider.current,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const yearSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: isMobile ? 3 : 6,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainSlider.current,
  };

  const items = [
    {
      icon: faRocket,
      subtitle: "2016",
      title: "Started with Richard Ahlfeld in September 2016",
      year: "2016",
    },
    {
      icon: Second,
      subtitle: "2018",
      title:
        "First paying projects with clients in March 2018 ( L’Oreal, McLaren, Airbus)",
      year: "2018",
    },
    {
      icon: faMoneyBill,
      subtitle: "2018",
      title: "Pre-seed round in August 2018",
      year: "2018",
    },
    {
      icon: faMoneyBill,
      subtitle: "2019",
      title: "Seed round of £1.9M in April 2019",
      year: "2019",
    },
    {
      icon: faPeopleGroup,
      subtitle: "2020",
      title: "Reached 20 employees in January 2020",
      year: "2020",
    },
    {
      icon: Third,
      subtitle: "2020",
      title: "Named a “Gartner Cool Vendor” in May 2020",
      year: "2020",
    },
    {
      icon: faMoneyBill,
      subtitle: "2021",
      title: "Series A funding of £8.5M in July 2021",
      year: "2021",
    },
    {
      icon: faBuilding,
      subtitle: "2022",
      title: "London office opened in March 2022",
      year: "2022",
    },
  ];

  return (
    <div className={styles.carouselContainer}>
      <h1>The Monolith story</h1>
      <div className={styles.mainContainer}>
        <div className={styles.ContainerSlider}>
          <Slider ref={mainSlider} {...mainSettings}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${
                  index === currentSlide ? styles.highlightedSlide : ""
                }`}
              >
                <span className={styles.carouselIcon}>
                  {item.icon === Second ? (
                    <Image
                      src={Second}
                      alt="Second Image"
                      width={80}
                      height={80}
                    />
                  ) : item.icon === Third ? (
                    <Image
                      src={Third}
                      alt="Third Image"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <FontAwesomeIcon icon={item.icon} />
                  )}
                </span>

                <span className={styles.carouselSubtitle}>{item.subtitle}</span>
                <h3 className={styles.carouselTitle}>{item.title}</h3>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.styledLine}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>

        <div className={styles.ContainerBottomSliderController}>
          <div className={` ${styles.carouselYearSlider}`}>
            <Slider ref={yearSlider} {...yearSettings}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.carouselYearItem} ${
                    index === currentSlide ? styles.highlightedSlide : ""
                  }`}
                >
                  <h3 className={styles.carouselYearItem}>{item.year}</h3>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.controlCircles}>
            <div
              className={styles.controlCircle}
              onClick={() => yearSlider.current.slickPrev()}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.controlCircleIcon}
              />
            </div>
            <div
              className={styles.controlCircle}
              onClick={() => yearSlider.current.slickNext()}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.controlCircleIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
