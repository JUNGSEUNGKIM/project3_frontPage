import React, { useState } from "react";
import styles from './SimpleSlider.module.css';

const CustomSlider = ({ myProp }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % myProp.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + myProp.length) % myProp.length);
    };

    return (
        <div className={styles.slider}>
            <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
            {myProp.map((item, index) => (
                <div key={index} className={index === currentIndex ? styles.slideActive : styles.slide}>
                    {/* 슬라이드 내용 */}
                </div>
            ))}
            <button className={styles.next} onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default CustomSlider;