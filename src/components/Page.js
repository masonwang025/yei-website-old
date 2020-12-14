import React from "react";
import { Helmet } from "react-helmet";

export default function Page(props) {
  return (
    <div className="page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {props.title
            ? props.title
            : props.pageTitle + " - Youth Economics Initiative (YEI)"}
        </title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="../../assets/favicon.ico" />
      </Helmet>
      {props.children}
    </div>
  );
}
