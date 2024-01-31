import React from "react";
import logoImage from "../../images/logo.png";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <div>
          <img src={logoImage} alt="Logo" />
        </div>
        <div>
          <div>
            <h2>Logged In User: </h2>
            <UserContext.Consumer>
              {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
            </UserContext.Consumer>
          </div>
          <h1>{this.props.name}</h1>
          <p>{this.props.location}</p>
          <p>{this.props.handle}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
