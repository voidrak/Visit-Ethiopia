import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { MidLanding } from "./MidLanding/MidLanding";
import { Grid } from "react-loader-spinner";
export const TopPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const backgroundImage = new Image();
    const lalibelaPic = new Image();
    lalibelaPic.src = "/LallibelaPic.png";
    backgroundImage.src = "/BG-IMG.png";
    backgroundImage.onload = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    lalibelaPic.onload = () => {
      setImagesLoaded((prev) => prev + 1);
    };
  }, []);

  return (
    <div className="Top-Page">
      {imagesLoaded > 1 && (
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
