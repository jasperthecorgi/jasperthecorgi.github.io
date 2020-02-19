import React from "react";
import "./CustomCarousel.scss";

export default class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  componentDidMount() {
    this.switchCurrent = setInterval(this.updateCurrent, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.switchCurrent);
  }

  updateCurrent = () => {
    const { images } = this.props;
    const { current, next } = this.state;
    if (current + 1 < images.length) {
      this.setState({ current: current + 1 });
    } else {
      this.setState({ current: 0 });
    }
  };

  render() {
    const { images } = this.props;
    const { current } = this.state;
    return (
      <div className="CustomCarousel">
        <div className={current % 2 === 1 && "hide"}>
          <img src={images[current]} alt="" />
        </div>
        <div className={current % 2 === 0 && "hide"}>
          <img src={images[current]} alt="" />
        </div>
      </div>
    );
  }
}
