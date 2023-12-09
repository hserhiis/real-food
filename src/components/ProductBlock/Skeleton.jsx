import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    class="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="9" rx="10" ry="10" width="216" height="150" />
    <rect x="51" y="171" rx="10" ry="10" width="172" height="19" />
    <rect x="3" y="206" rx="11" ry="11" width="273" height="80" />
    <rect x="4" y="304" rx="10" ry="10" width="76" height="29" />
    <rect x="150" y="301" rx="11" ry="11" width="124" height="42" />
  </ContentLoader>
);

export default Skeleton;
