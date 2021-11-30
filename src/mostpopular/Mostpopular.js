import { AspectRatio, Loading } from "carbon-components-react";
import { useErrorHandler } from "react-error-boundary";
import { useEffect, useState } from "react";
import { fetchMostPopularResults } from "../apis/apis";
import "./mostpopular.scss";
import defaultImage from "../images/default.png";

function Mostpopular({ doc }) {
  const [mostPopular, setMostPopular] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const handleError = useErrorHandler();

  const loadingProps = () => ({
    active: true,
    withOverlay: false,
    small: false,
    description: "Active loading indicator",
  });

  useEffect(() => {
    fetchMostPopularResults().then((data) => {
      setLoadingState(false);
      setMostPopular(data.results);
    }, handleError);
  });

  return (
    <div className="bx--grid most-popular">
      <div className="bx--row heading-bar">
        <div className="bx--col-lg-5 bx--no-gutter">
          <h1 className="heading">Trending</h1>
        </div>
        <div className="bx--col-lg-7 bx--no-gutter">
          <div className="greeting">
            Good morning. These stories are most popular with our readers this
            minute.
          </div>
        </div>
      </div>
      <div className="bx--row">
        {loadingState && <Loading {...loadingProps()} className="loading" />}
        {mostPopular &&
          mostPopular.length &&
          mostPopular.map((doc, index) => {
            return (
              <div className="bx--col-lg-3 card-cont" key={index}>
                <AspectRatio ratio="1x1" className="card">
                  {doc.media && doc.media.length ? (
                    doc.media.map((media) => {
                      return media["media-metadata"]
                        .filter((image) => {
                          return image.format === "mediumThreeByTwo210";
                        })
                        .map((filteredImage, index) => {
                          return filteredImage ? (
                            <img
                              key={index}
                              alt={doc.title}
                              src={`${filteredImage.url}`}
                            />
                          ) : null;
                        });
                    })
                  ) : (
                    <img
                      alt="doc.headline.main"
                      src={defaultImage}
                      width={140}
                      height={135}
                    />
                  )}
                  <div className="card-copy">
                    <h6 className="headline">{doc.title}</h6>
                  </div>
                </AspectRatio>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Mostpopular;
