import React from 'react';
import { Card } from 'react-bootstrap';
import about from '../../../images/about.jpg'

const About = () => {
	return (
		<div  className="mb-5">
			<h2 className="heading py-2 text-dark ps-4 text-center bg-dark text-white">About Us</h2>
			<Card className="text-white">
  <Card.Img src= {about} alt="Card image" />
  <Card.ImgOverlay>
    <h1 className="text-center my-5">Welcome to Travel Crafter</h1>
    <h3 className="text-center text-dark">
	Traveling is beneficial in a vast variety of ways. Some people find traveling relaxing and some people travel for the inspiration. As long as you feel fulfillment in traveling, there is no right or wrong reason to travel.The thing I miss most about traveling is the feel of being “on holiday” or away from the normal routine of life. When on the road, life is more about meeting our essential needs – finding a place to sleep and eat – than things like earning an income or cleaning the house!To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes. Someone travels to gain knowledge and experience, someone travels for pleasure, someone travels for business purposes etc. It has much educative value. It is a part of education. Our education and book knowledge remain imperfect without travelling. We can learn many things from travelling. It teaches us to trade and commerce, language, sociology, customs, culture, history, geography and so on. Therefore, the educative value of travelling beggars description. Besides this, there are some special benefits of travelling. If a man stays in one place for a long time, he becomes monotonous. Travelling removes our monotony and gives pleasure. It also broadens our outlook and refreshes our mind. A good traveller can easily educate others. He can give us first-hand knowledge of men and matters of another country.
    </h3>
  </Card.ImgOverlay>
</Card>
		</div>
	);
};

export default About;