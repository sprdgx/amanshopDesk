import { useState, useEffect } from 'react';
import styles from '@/styles/Slider.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { publicRequest } from '@/requestMethods';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import LoadingAnimation from './WebLoading'; // Import your loading animation component

interface ImageObject {
  img: string;
}

interface SliderData {
  imgs: ImageObject[];
  imgsR: ImageObject[];
}

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderData, setSliderData] = useState<SliderData>({ imgs: [], imgsR: [] });
  const [isSlidersFetched, setIsSlidersFetched] = useState(false); 
  const [showLoading, setShowLoading] = useState(true); // Control visibility of loading animation

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await publicRequest.get<SliderData>('sliders/65ce4891067319d1395c6e53');
        setSliderData(response.data);
        setIsSlidersFetched(true);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };

    fetchSliderData();
  }, []);

  // Show loading animation while sliders are being fetched
  useEffect(() => {
    if (isSlidersFetched) {
      setTimeout(() => {
        setShowLoading(false); // Hide loading animation after a delay
      }, 2000); // Adjust delay as needed
    }
  }, [isSlidersFetched]);

  return (
    <>
      <CSSTransition
        in={showLoading}
        timeout={300}
        classNames="loading-animation-container"
        unmountOnExit
      >
        <LoadingAnimation />
      </CSSTransition>

      {/* Slider content */}
      <div className={styles.container}>
        <div className={styles.carouselContainer}>
          <Carousel className={styles.carousel}>
            {isMobile ? (
              sliderData.imgsR.map((image, index) => (
                <div key={index} className={styles.carouselItem}>
                  <Image src={image.img} alt={`ImageR ${index}`} className={styles.carouselImg} width={500} height={700} />
                </div>
              ))
            ) : (
              sliderData.imgs.map((image, index) => (
                <div key={index} className={styles.carouselItem}>
                  <Image src={image.img} alt={`Image ${index}`} className={styles.carouselImg} width={50} height={50} />
                </div>
              ))
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
