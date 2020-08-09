import React from "react";
import poolJson from "../../data/pool.json";
import storyJson from "../../data/story";
import { CSVLink } from "react-csv";
import Modal from "react-modal";
import Logo from "../../static/Logo.png";
import "./DrawPrize.scss";

export default class DrawPrize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: -1,
      poolList: [],
      userList: [],
      drawList: {},
      blink: -1,
      resultList: [],
    };
  }
  componentDidMount() {
    // this.fetchComments();
    const AList = poolJson;
    let finalList = {};
    for (let i = 0; i < AList.length; i++) {
      if (finalList[AList[i].author]) {
        let entry = finalList[AList[i].author].entry;
        const replies = finalList[AList[i].author].reply;
        if (replies.indexOf(AList[i].text) < 0) {
          replies.push(AList[i].text);
          finalList[AList[i].author].entry = entry + 1;
          finalList[AList[i].author].reply = replies;
        }
      } else {
        finalList[AList[i].author] = {
          entry: 1,
          reply: [AList[i].text],
          logo: AList[i].logo,
        };
      }
    }
    const userList = Object.keys(finalList);
    userList.forEach(item => {
      if (finalList[item].entry < 3) {
        delete finalList[item];
      }
    });
    storyJson.forEach(user => {
      if (finalList[user.author]) {
        let entry = finalList[user.author].entry;
        finalList[user.author].entry = entry + 10;
      }
    });
    this.setState({ userList, drawList: finalList });
  }
  componentWillUnmount() {
    clearInterval(this.switchCurrent);
  }
  // fetchComments = (end = "") => {
  //   const self = this;
  //   fetch(
  //     `https://www.instagram.com/graphql/query/?query_hash=bc3296d1ce80a24b1b6e40b1e72903f5&variables=%7B%22shortcode%22%3A%22CDBzlajJ87F%22%2C%22first%22%3A50%2C%22after%22%3A%22${end}%22%7D`
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       const metaInfo = res.data.shortcode_media.edge_media_to_parent_comment.page_info;
  //       const comments = [];
  //       res.data.shortcode_media.edge_media_to_parent_comment.edges.forEach(({node}) =>
  //         comments.push({
  //           text: node.text,
  //           author: node.owner && node.owner.username,
  //           logo: node.owner && node.owner.profile_pic_url,
  //         })
  //       );
  //       const newPool = this.state.poolList.concat(comments);
  //       this.setState({ poolList: newPool });
  //       if (metaInfo.has_next_page) {
  //         setTimeout(()=>{
  //           self.fetchComments(metaInfo.end_cursor);
  //         }, 5000)
  //       }
  //     });
  // };
  startDraw = () => {
    const interval = setInterval(this.blink, 100);
    setTimeout(() => {
      clearInterval(interval);
      this.drawWinner();
    }, 3000);
  };

  blink = () => {
    const { userList } = this.state;
    const result = Math.floor(Math.random() * userList.length);
    this.setState({ blink: result });
  };
  drawWinner = () => {
    const { userList, drawList } = this.state;
    let array = [];
    userList.forEach(user => {
      if (drawList[user]) {
        const newList = new Array(drawList[user].entry).fill(user);
        array = array.concat(newList);
      }
    });
    const result = Math.floor(Math.random() * array.length);
    console.log(array)
    this.setState({ winner: result, blink: -1, resultList: array });
  };

  render() {
    const { poolList, winner, drawList, blink, userList, resultList } = this.state;
    return (
      <div className="DrawPrize">
        <div className="maxWidthContainer">
          <div className="DrawPrize-Title">GIVEAWAY</div>
          <div className="DrawPrize-Users">
            {userList.map(
              (item, index) =>
                drawList[item] && (
                  <div className="DrawPrize-User" key={item}>
                    <img src={drawList[item].logo} alt={item} />
                    <div className="DrawPrize-Plus3">{drawList[item].entry}</div>
                    <div className="DrawPrizeBlink" style={index === blink ? { opacity: 1 } : {}} />
                  </div>
                )
            )}
          </div>
          {/*<CSVLink data={poolList}>Download me</CSVLink>;*/}
          <div className="DrawPrize-Btn" onClick={this.startDraw}>
            DRAW THE WINNER
          </div>
        </div>
        <Modal isOpen={winner > -1} className="winnerModal" overlayClassName="winnerOverlay" ariaHideApp={false}>
          {winner > -1 && (
            <div>
              <div className="headLine">Congratulations!</div>
              <div>Our winner is</div>
              {/*<img src={drawList[winner].owner.profile_pic_url} alt={drawList[winner].owner.username} />*/}
              <div className="winnerName">@{resultList[winner]}</div>
              <div>We will PM you for the detail and your information.</div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
