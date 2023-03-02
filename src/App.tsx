import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Inline from "yet-another-react-lightbox/plugins/inline";
// import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import photos from "./photos";
import React from "react";

const App = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 600) return 2;
          return 3;
        }}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ position: "relative", ...wrapperStyle }}>
            {renderDefaultPhoto({ wrapped: true })}
            {photo.id && (
              <div
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  backgroundColor: "rgba(255 255 255 / .5)",
                  inset: "auto 0 0 0",
                  padding: 8,
                }}
              >
                {photo.id}
              </div>
            )}
          </div>
        )}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
        // plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </>
  );
};

export default App;
