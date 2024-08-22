import React from "react";
import { Helmet } from "react-helmet-async";

interface propTypes {
  title?: string;
  description?: string;
}

const Title = ({
  title = "ChatApp",
  description = "This is a chat app",
}: propTypes) => {
  return (
    <Helmet>
      <title> {title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
