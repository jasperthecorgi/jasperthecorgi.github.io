import React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Footer } from "../components/Footer";
import { MaxContainer } from "../components/share-ui";

const CouponPage = ({ data, location }) => {
  const list = [
    {
      id: 1,
      image: data.image02,
      productName: "Homemade meal",
    },
    {
      id: 2,
      title: "Hounds on Raw",
      image: data.image06,
      productName: "Hounds on Raw Ground Mixes",
      link: "https://www.houndsonraw.com/",
      insName: "@hounds_on_raw",
      insLink: "https://www.instagram.com/hounds_on_raw/",
    },
    {
      id: 3,
      title: "Big Country Raw",
      image: data.image05,
      productName: "Big Country Raw Dinners",
      link: "https://bigcountryraw.ca/",
      insName: "@bigcountryraw",
      insLink: "https://www.instagram.com/bigcountryraw/",
    },
    {
      id: 4,
      title: "Primal",
      image: data.image04,
      productName: "Canine Freeze-Dried Nuggets(Turkey & Sardine)",
      link: "https://primalpetfoods.com/",
      insName: "@primalpetfoods",
      insLink: "https://www.instagram.com/primalpetfoods/",
      productDescription: (
        <div>
          <p tw="my-2">
            We tried Primal freeze-dried nuggets before going to raw. We just started to know there are better options than kibble but still
            hesitated to go with raw. And one day when we were at Global Pet Foods shopping for Jasper, the lady in the store talked with us
            and introduced that freeze-dried food is something between kibble and raw. We used it as a transition from kibble to raw. It
            didn't last for a long time because honestly the freeze-dried food is little pricey.
          </p>
          <p tw="my-2">Top 5 ingredients include: Turkey, Turkey Necks, Turkey Hearts, Whole Sardines, Turkey Livers.</p>
          <p tw="my-2">
            For more information, you can check the official website{" "}
            <a href="https://primalpetfoods.com/products/canine-freeze-dried-nuggets-turkey-sardine" target="_blank" tw="underline">
              here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Orijen",
      image: data.image02,
      productName: "Orijen Puppy Dog Food",
      link: "https://www.orijenpetfoods.com/en-CA/homepage",
      insName: "@orijenpetfood",
      insLink: "https://www.instagram.com/orijenpetfood/",
      productDescription: (
        <div>
          <p tw="my-2">
            Orijen is a well-known pet food brand for its high quality. When Jasper was still a puppy, as first-time dog parents, we were
            definitely trying to play safe as well as provide the best choice we have. We actually also tried{" "}
            <a href="https://www.orijenpetfoods.com/en-CA/dogs/dog-food/puppy-large/ns-ori-puppylrg.html" target="_blank" tw="underline">
              Orijen Puppy Large
            </a>{" "}
            on Jasper although corgi is a medium-size dog. Honestly, there's a little difference between those two.
          </p>
          <p tw="my-2">
            Top 5 ingredients include: Fresh chicken meat (11%), fresh turkey meat (7%), fresh cage-free eggs (6%), fresh whole herring
            (6%), fresh chicken liver (5%).
          </p>
          <p tw="my-2">
            For more information, you can check the official website{" "}
            <a href="https://www.orijenpetfoods.com/en-CA/dogs/dog-food/puppy/ns-ori-puppy.html" target="_blank" tw="underline">
              here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Royal Canin",
      image: data.image01,
      productName: "Royal Canin Medium Puppy Dog Food",
      link: "https://www.royalcanin.com/ca/en_ca",
      insName: "@royalcanincanada",
      insLink: "https://www.instagram.com/royalcanincanada/",
      productDescription: (
        <div>
          <p tw="my-2">
            The only reason why Jasper got this kibble is that he was fed on this product when he was at the breeder's place. Puppies have a
            very fragile stomach, so he had the same food for the first month and later we gave him a transition to the Orijen puppy food.
          </p>
          <p tw="my-2">Top 5 ingredients include: Chicken by-product Meal, Chicken Fat, Brewers Rice, Corn, Wheat.</p>
          <p tw="my-2">
            For more information, you can check the official website{" "}
            <a
              href="https://www.royalcanin.com/ca/en_ca/dogs/products/retail-products/medium-puppy-dry-dog-food"
              target="_blank"
              tw="underline"
            >
              here
            </a>
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout location={location}>
      <Seo title="Jasper's menu - what is a corgi eating everyday?" />
      <div tw="py-5 min-h-screen">
        <MaxContainer>
          <h1 tw="font-bold text-xl text-center bg-white p-2.5 my-4">What's on Jasper's menu?</h1>
          <div tw="grid grid-cols-1 gap-4">
            {list.map((item) => (
              <div tw="bg-white p-2.5 border-b">
                <GatsbyImage image={getImage(item.image)} alt={item.title} />
                <h3 tw="relative -top-6 font-semibold bg-white w-4/5 shadow px-2">{item.productName} </h3>
                <div tw="-mt-3">
                  {item.title && (
                    <>
                      Brand:{" "}
                      <a href={item.link} target="_blank" tw="underline">
                        {item.title}
                      </a>
                    </>
                  )}
                </div>
                {item.insName && (
                  <div tw="mb-2">
                    Instagram:{" "}
                    <a href={item.insLink} target="_blank" tw="underline">
                      {item.insName}
                    </a>
                  </div>
                )}
                <div tw="text-sm">{item.productDescription}</div>
              </div>
            ))}
          </div>
        </MaxContainer>
      </div>
    </Layout>
  );
};
export default CouponPage;

export const query = graphql`
  query {
    image01: file(relativePath: { eq: "food/royal-canin.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image02: file(relativePath: { eq: "food/orijen.png" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image04: file(relativePath: { eq: "food/primal.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image05: file(relativePath: { eq: "food/bigcountryraw.png" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image06: file(relativePath: { eq: "food/houndsonraw.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
  }
`;
