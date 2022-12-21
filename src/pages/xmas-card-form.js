import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Footer } from "../components/Footer";
import { InternalLinkBtn, MaxContainer } from "../components/share-ui";
import XmasCard from "../images/xmas-card.png";
import { animateScroll as scroll } from 'react-scroll';

const XmasCardPage = ({ data, location }) => {
  const [submitted, setSubmitted] = useState(true);
  const [errorState, setErrorState] = useState(false);
  useEffect(()=>{
    const submitted = localStorage.getItem('submitted')
    if (submitted){
      setSubmitted(true);
    }
  }, [])
  const handleErrorBack = (e) =>{
    e.stopPropagation();
    setErrorState(false)
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = {};
    formData.forEach(function(value, key){
      formObj[key] = value;
    });
    if (!formObj.name || !formObj.address1 || !formObj.city || !formObj.state || !formObj.country || !formObj.zipcode){
      setErrorState(true)
    } else{
      fetch("https://getform.io/f/bfe268b1-6611-4701-a6e2-3b0d52b32925", {
        method: "post",
        body: formData
      })
        .then(() => {
          setSubmitted(true);
          localStorage.setItem('submitted', '1');
          scroll.scrollToTop();
        })
        .catch(() => {
          console.log('here')
        });
    }
  }

  return (
    <Layout location={location} bgColor="darkBeige">
      <Seo title="Jasper's Holiday Card Form" />
      <div tw="bg-darkBeige pb-5 min-h-screen text-green-700">
        {
          submitted && (
            <MaxContainer>
              <div tw="text-center">
                <h1 tw="font-bold text-xl text-green-700 rounded py-4 mb-2">Submitted Successfully!</h1>
                <h4 tw="text-base text-green-700 rounded p-1">We will send out a card very soon!</h4>
                <p tw="text-base text-green-700 rounded p-1">Wish you a Merry Christmas and<br/>a Happy New Year!</p>
                <div tw="w-3/4 mx-auto my-6 rounded-md bg-beige p-3 md:(w-72 mx-auto)">
                  <img src={XmasCard} alt="Jasper's Christmas Card" tw="rounded-md shadow-md rotate-[-4deg]" />
                </div>
                <InternalLinkBtn to="/">Homepage</InternalLinkBtn>
              </div>
            </MaxContainer>
          )
        }
        {
          !submitted && (
            <MaxContainer>
              {errorState && (
                <div tw="fixed inset-0 bg-transparent flex items-center px-4 z-10">
                  <div tw="bg-green-700 w-full h-32 p-5 mb-10 text-center shadow-md rounded-md">
                    <div tw="text-beige">Please fill all the form fields required.</div>
                    <button onClick={handleErrorBack}
                            tw="bg-primaryBtn text-beige w-40 rounded-lg py-2 mt-4"
                    >Back to form</button>
                  </div>
                </div>
              )}
              <h1 tw="font-bold text-xl text-center text-green-700 rounded px-2.5 md:(mb-2)">Jasper's Holiday Card</h1>
              <h4 tw="text-base text-center text-green-700 rounded p-2.5 mb-2 md:(mb-6)">Holiday season is here and we want to say thanks to everyone following us!</h4>
              <div tw="mb-6 rounded-md bg-beige p-3 md:(w-96 mx-auto)">
                <img src={XmasCard} alt="Jasper's Christmas Card" tw="rounded-md shadow-md rotate-[-4deg]" />
              </div>
              <div tw="border-b-2 border-green-700 w-5/6 mx-auto"/>
              <p tw="text-base text-center text-green-700 rounded p-2.5 mb-2 md:(mt-6)">Submit the following form and we will send a Holiday Card!</p>
              <form onSubmit={handleOnSubmit} tw="md:(w-96 mx-auto)">
                <label htmlFor="name" tw="block">Name:</label>
                <input name="name" type="text"
                       tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                <div>
                  <label tw="block">Your Pet's Name:(optional)</label>
                  <input name="petName" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Instagram:(optional)</label>
                  <input name="insHandle" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Address Line 1:</label>
                  <input name="address1" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Address Line 2:(optional)</label>
                  <input name="address2" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">City/Town:</label>
                  <input name="city" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Province/State:</label>
                  <input name="state" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Country:</label>
                  <input name="country" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <div>
                  <label tw="block">Postal Code:</label>
                  <input name="zipcode" type="text"
                         tw="bg-transparent text-green-700 border-b-2 border-green-700 px-1 py-0.5 mt-1 mb-1.5 w-full"/>
                </div>
                <button type="submit" tw="block bg-primaryBtn text-beige w-full rounded-lg py-2 mt-4">Submit</button>
              </form>
            </MaxContainer>
          )
        }
      </div>
    </Layout>
  );
};
export default XmasCardPage;