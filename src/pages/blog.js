import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      description {
        description
      }
      article {
        raw
      }
    }
  }
`;

export default Page;