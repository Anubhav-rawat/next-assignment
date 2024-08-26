import React from "react";
import Card from "./Card";

const HeroSection = () => {
  const cardData = [
    {
      title: "Cannabis Flos 18/1 PT Mango",
      price: "11,66",
      thc: "18%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Mango",
      genetics: "Genetik",
      status: "nicht lieferbar",
      image: "/bottle.png", 
    },
    {
      title: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      price: "11,66",
      thc: "25%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Pink Kush",
      genetics: "Genetik",
      status: "sofort lieferbar",
      image: "/bottle.png", 
    },
    {
      title: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      price: "11,66",
      thc: "25%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Pink Kush",
      genetics: "Genetik",
      status: "sofort lieferbar",
      image: "/bottle.png", 
    },
    {
      title: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      price: "11,66",
      thc: "25%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Pink Kush",
      genetics: "Genetik",
      status: "sofort lieferbar",
      image: "/bottle.png", 
    },
    {
      title: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      price: "11,66",
      thc: "25%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Pink Kush",
      genetics: "Genetik",
      status: "sofort lieferbar",
      image: "/bottle.png", 
    },
    {
      title: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      price: "11,66",
      thc: "25%",
      cbd: "<1%",
      strain: "Hybrid",
      cultivar: "Pink Kush",
      genetics: "Genetik",
      status: "sofort lieferbar",
      image: "/bottle.png", 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          thc={card.thc}
          cbd={card.cbd}
          strain={card.strain}
          cultivar={card.cultivar}
          genetics={card.genetics}
          status={card.status}
          image={card.image} // Passing the image prop
        />
      ))}
    </div>
  );
};

export default HeroSection;
