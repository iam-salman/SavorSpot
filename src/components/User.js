import logoImage from "../../images/logo.png";
import { useState } from "react";

const User = ({ name, location, handle }) => {

  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <div>
        <img src={logoImage} alt="Logo" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{handle}</p>
        <h3>{count}</h3>
        <h3>{count1}</h3>
      </div>
    </div>
  );
};

export default User;
