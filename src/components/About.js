import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-1/2 mx-auto my-10 p-8">
      <h1 className="font-bold text-3xl mb-5">About Us</h1>
      <div className="p-3 text-justify leading-8">
        <p>
          Welcome to <span className="font-bold">SavorSpot</span> – Where
          Culinary Delights Await!
        </p>
        <p>
          At SavorSpot, we believe that great food has the power to bring people
          together and elevate everyday moments into extraordinary experiences.
          We are your ultimate destination for indulging your taste buds,
          discovering new flavors, and enjoying the convenience of having
          delicious meals delivered right to your doorstep.
        </p>

        <h1 className="font-bold text-xl my-4">Our Story</h1>
        <p>
          SavorSpot was born out of a passion for good food and a commitment to
          making dining experiences seamless and enjoyable. Inspired by the rich
          tapestry of global cuisines, we set out to create a platform that
          connects food lovers with the best restaurants in town, offering a
          diverse array of dishes to suit every palate.
        </p>

        <h1 className="font-bold text-xl my-4">Our Mission</h1>
        <p>
          Our mission at SavorSpot is simple – to redefine the way you
          experience food. We strive to provide a one-stop culinary destination
          where you can explore, savor, and celebrate the art of dining. Whether
          you're craving comfort food from your favorite local spot or eager to
          explore exotic cuisines from around the world, SavorSpot is here to
          make it happen.
        </p>
        
        <h1 className="font-bold text-xl my-4">Connect with Us</h1>
        <p>
          SavorSpot is more than just a food delivery service; it's a community
          of food enthusiasts. Follow us on social media to stay updated on the
          latest culinary trends, get exclusive offers, and join in on the
          conversations about all things food.
        </p>
        <h1 className="font-bold text-xl my-4">Contact Us</h1>
        <p>
          Have a question or need assistance? Our customer support team is
          available around the clock to ensure your experience with SavorSpot is
          nothing short of exceptional. Visit our <span className="text-blue-600 font-bold"><Link to="/contact">Contact Us</Link></span> page for ways to
          get in touch.
        </p>
      </div>
    </div>
  );
};

export default About;
