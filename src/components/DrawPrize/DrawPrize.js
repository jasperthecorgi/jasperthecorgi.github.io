import React, { useState } from "react";
import tw from "twin.macro";
import { InternalLink, MaxContainer } from "../share-ui";
import Giveaway from "../../images/capImg.jpeg";
import mData from "./entryList.json"

const DrawPrize = () => {
  const [firstWinner, setFirstWinner] = useState()
  const [lastWinner, setLastWinner] = useState()
  const randomResult = () =>{
    let firstSet = []
    mData.forEach(user => {
      const newList = new Array(user.entry).fill(user.author);
      firstSet = firstSet.concat(newList);
    });
    const result = Math.floor(Math.random() * firstSet.length);
    return result
  }
  const drawWinner = () =>{
    let firstSet = []
    mData.forEach(user => {
      const newList = new Array(user.entry).fill(user.author);
      firstSet = firstSet.concat(newList);
    });
    // let lastSet = []
    // const newData = mData.filter(item => item.author !== firstSet[result])
    // newData.forEach(user => {
    //   const newList = new Array(user.entry).fill(user.author);
    //   lastSet = lastSet.concat(newList);
    // });
    // const lastResult = Math.floor(Math.random() * lastSet.length);
    const blink = setInterval(()=>setFirstWinner(firstSet[randomResult()]), 50)
    setTimeout(()=>{
      clearInterval(blink)
      setFirstWinner(firstSet[randomResult()])
    }, 1000)
    // setTimeout(()=>setLastWinner(lastSet[lastResult]), 2000)
  }
  return (
    <div tw="py-10 bg-darkBeige text-green-700 md:py-20">
      <MaxContainer>
        <div tw="md:(flex flex-col items-center) text-center">
          <div tw="text-3xl font-semibold pt-4 md:(text-4xl pt-6)">GIVEAWAY ANNOUNCEMENT!</div>
          <img tw="rounded-md my-5 w-2/3 mx-auto" src={Giveaway}/>
          <div>Thanks everyone for joining! We are announcing the winners now!</div>
          <button tw="inline-block my-4 bg-primaryBtn px-6 py-4 rounded-md text-beige" onClick={drawWinner}>Draw Prize</button>
          <div tw="text-xs">Prize: Gentle Dog Wash Essentials from @dandylionworld</div>
          <div tw="my-2 py-2 h-16 border border-green-700" css={firstWinner?tw`opacity-100`:tw`opacity-0`}>Winner:<br/> @{firstWinner}</div>
          <div tw="text-xs">We will PM you for the detail and your information.</div>
        </div>
      </MaxContainer>
    </div>
  );
}
export default DrawPrize;

// export default class DrawPrize extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       winner: -1,
//       poolList: [],
//       userList: [],
//       drawList: {},
//       blink: -1,
//       resultList: [],
//     };
//   }
//   componentDidMount() {
//     this.fetchComments();
//     const AList = poolJson;
//     let finalList = {};
//     for (let i = 0; i < AList.length; i++) {
//       if (finalList[AList[i].author]) {
//         let entry = finalList[AList[i].author].entry;
//         const replies = finalList[AList[i].author].reply;
//         if (replies.indexOf(AList[i].text) < 0) {
//           replies.push(AList[i].text);
//           finalList[AList[i].author].entry = entry + 1;
//           finalList[AList[i].author].reply = replies;
//         }
//       } else {
//         finalList[AList[i].author] = {
//           entry: 1,
//           reply: [AList[i].text],
//           logo: AList[i].logo,
//         };
//       }
//     }
//     const userList = Object.keys(finalList);
//     userList.forEach(item => {
//       if (finalList[item].entry < 3) {
//         delete finalList[item];
//       }
//     });
//     storyJson.forEach(user => {
//       if (finalList[user.author]) {
//         let entry = finalList[user.author].entry;
//         finalList[user.author].entry = entry + 15;
//       }
//     });
//     this.setState({ userList, drawList: finalList });
//   }
//   componentWillUnmount() {
//     clearInterval(this.switchCurrent);
//   }
//   startDraw = () => {
//     const { userList, drawList } = this.state;
//     let array = [];
//     userList.forEach(user => {
//       if (drawList[user]) {
//         const newList = new Array(drawList[user].entry).fill(user);
//         array = array.concat(newList);
//       }
//     });
//     const interval = setInterval(()=>this.blink(array), 100);
//     setTimeout(() => {
//       clearInterval(interval);
//       this.drawWinner();
//     }, 3000);
//   };
//
//   blink = (array) => {
//     const {userList}=this.state;
//     const result = Math.floor(Math.random() * array.length);
//     console.log(result)
//     const blinkIndex = userList.indexOf(array[result])
//     this.setState({ blink: blinkIndex });
//   };
//   drawWinner = () => {
//     const { userList, drawList } = this.state;
//     let array = [];
//     userList.forEach(user => {
//       if (drawList[user]) {
//         const newList = new Array(drawList[user].entry).fill(user);
//         array = array.concat(newList);
//       }
//     });
//     const result = Math.floor(Math.random() * array.length);
//     this.setState({ winner: result, blink: -1, resultList: array });
//   };
//
//   render() {
//     const { poolList, winner, drawList, blink, userList, resultList } = this.state;
//     return (
//       <div className="DrawPrize">
//         <div className="maxWidthContainer">
//           <div className="DrawPrize-Title">GIVEAWAY</div>
//           <div className="DrawPrize-Users">
//             {userList.map(
//               (item, index) =>
//                 drawList[item] && (
//                   <div className="DrawPrize-User" key={item}>
//                     <img src={drawList[item].logo} alt={item} />
//                     <div className="DrawPrize-Plus3">{drawList[item].entry}</div>
//                     <div className="DrawPrizeBlink" style={index === blink ? { opacity: 1 } : {}} />
//                   </div>
//                 )
//             )}
//           </div>
//           {/*<CSVLink data={poolList}>Download me</CSVLink>;*/}
//           <div className="DrawPrize-Btn" onClick={this.startDraw}>
//             DRAW THE WINNER
//           </div>
//         </div>
//         <Modal isOpen={winner > -1} className="winnerModal" overlayClassName="winnerOverlay" ariaHideApp={false}>
//           {winner > -1 && (
//             <div>
//               <div className="headLine">Congratulations!</div>
//               <div>Our winner is</div>
//               {/*<img src={drawList[winner].owner.profile_pic_url} alt={drawList[winner].owner.username} />*/}
//               <div className="winnerName">@{resultList[winner]}</div>
//               <div>We will PM you for the detail and your information.</div>
//             </div>
//           )}
//         </Modal>
//       </div>
//     );
//   }
// }
