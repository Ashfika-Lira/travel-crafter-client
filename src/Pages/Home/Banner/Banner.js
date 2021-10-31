import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
import img4 from '../../../images/img4.jpg';


const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div>
			<div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img1}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img2}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img3}
                     alt="Third slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img4}
                     alt="Fourth slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
		</div>
	);
};

export default Banner;