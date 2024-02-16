import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { MidLanding } from "./MidLanding/MidLanding";
import { Grid } from "react-loader-spinner";
export const TopPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = "/LallibelaPic.png";
    backgroundImage.onload = () => {
      setImagesLoaded(true);
    };
  }, []);
  return (
    <div className="Top-Page">
      {imagesLoaded && (
        <>
          <Header />
          <MidLanding />
        </>
      )}

      {!imagesLoaded && (
        <Grid
          visible={true}
          height="250"
          width="250"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      )}
    </div>
  );
};
