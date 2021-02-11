import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    images: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/210/350",
      "https://picsum.photos/300/340",
    ],
    idx: 0,
  };

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.images[this.state.idx]} alt="random" />
        <button onClick={this.handleNext}>Next image</button>
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1,
            });
          }}
        >
          Prev image
        </button>
      </div>
    );
  }
}

export default ImageSlider;
