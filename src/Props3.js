
import React, { useState } from 'react'


class Props3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { favoritecolor: "red" };
    }
  
    // static getDerivedStateFromProps(props, state) {
    //   return { favoritecolor: props.color };
    // }

    shouldComponentUpdate(){      //If the value will be update or not whether it's true or false
        return true;
    }

    changeColor = () => {
      this.setState({ favoritecolor: "blue" });
    }

    // componentDidUpdate() {
    //     document.getElementById("color").innerHTML =
    //       "The updated favorite color is " + this.state.favoritecolor; ////The values of the component did update without triggering the button/onClick
    //   }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  export default Props3;