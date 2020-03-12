import React from "react";
import poolList from "../../data/pool.json";
import Modal from "react-modal";
import Logo from "../../static/Logo.png";
import "./DrawPrize.scss";

export default class DrawPrize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: -1,
      poolList: [],
      drawList: [],
      blink: -1,
    };
  }
  componentDidMount() {
    const AList = poolList.edges;
    let uniList = [];
    let plus3List = [];
    AList.forEach(item => {
      if (uniList.findIndex(user => user.owner.id === item.node.owner.id) < 0) {
        uniList.push(item.node);
        if (item.node.owner.plus3) {
          plus3List.push(item.node);
        }
      }
    });
    let finalList = uniList
      .concat(plus3List)
      .concat(plus3List)
      .concat(plus3List);
    this.setState({ poolList: uniList, drawList: finalList });
  }
  componentWillUnmount() {
    clearInterval(this.switchCurrent);
  }
  startDraw = () => {
    const interval = setInterval(this.blink, 100);
    setTimeout(() => {
      clearInterval(interval);
      this.drawWinner();
    }, 3000);
  };

  blink = () => {
    const { poolList } = this.state;
    const result = Math.floor(Math.random() * poolList.length);
    this.setState({ blink: result });
  };
  drawWinner = () => {
    const { drawList } = this.state;
    const result = Math.floor(Math.random() * drawList.length);
    this.setState({ winner: result, blink: -1 });
  };

  render() {
    const { poolList, winner, drawList, blink } = this.state;
    return (
      <div className="DrawPrize">
        <div className="maxWidthContainer">
          <div className="DrawPrize-Title">GIVEAWAY</div>
          <div className="DrawPrize-Users">
            {poolList.map((item, index) => (
              <div className="DrawPrize-User" key={item.id}>
                <img src={item.owner.profile_pic_url} alt={item.owner.username} />
                {item.owner.plus3 && <div className="DrawPrize-Plus3">+3</div>}
                <div className="DrawPrizeBlink" style={index === blink ? { opacity: 1 } : {}}>
                </div>
              </div>
            ))}
          </div>
          <div className="DrawPrize-Btn" onClick={this.startDraw}>
            DRAW THE WINNER
          </div>
        </div>
        <Modal isOpen={winner > -1} className="winnerModal" overlayClassName="winnerOverlay" ariaHideApp={false}>
          {winner > -1 && (
            <div>
              <div className="headLine">Congratulations!</div>
              <div>Our winner is</div>
              <img src={drawList[winner].owner.profile_pic_url} alt={drawList[winner].owner.username} />
              <div className="winnerName">@{drawList[winner].owner.username}</div>
              <div>We will PM you for the detail and your information.</div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
