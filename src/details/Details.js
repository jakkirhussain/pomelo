import { useEffect, useState } from "react";
import { Loading } from "carbon-components-react";

import { useLocation } from "react-router-dom";
import { fetchArticleDetail } from "../apis/apis";
import { useErrorHandler } from "react-error-boundary";
import "./details.scss";

function Results(props) {
  const location = useLocation();
  const [loadingState, setLoadingState] = useState(true);
  const handleError = useErrorHandler();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    fetchArticleDetail(location.state.web_url).then((data) => {
      setLoadingState(false);
      setSearchResults(data.response.docs);
    }, handleError);
  });

  const loadingProps = () => ({
    active: true,
    withOverlay: false,
    small: false,
    description: "Active loading indicator",
  });

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          {loadingState && <Loading {...loadingProps()} className="loading" />}
          {searchResults &&
            searchResults.length &&
            searchResults.map((doc) => {
              return (
                <div className="details">
                  <h1 className="detail-heading">{doc.headline.main}</h1>
                  <main className="detail-copy">
                    <p>
                      {doc.snippet}
                      <br />
                      {doc.lead_paragraph}
                    </p>
                  </main>
                  {doc.multimedia
                    .filter((image) => {
                      return image.subtype === "master1050";
                    })
                    .map((filteredImage) => {
                      return (
                        <img
                          alt="doc.headline.main"
                          src={`https://static01.nyt.com/${filteredImage.url}`}
                        />
                      );
                    })}
                  <div className="abstract">{doc.abstract}</div>
                  <div className="by-line">
                    By
                    {doc.byline &&
                      doc.byline.person &&
                      doc.byline.person.map((person, index) => {
                        if (
                          index === doc.byline.person.length - 1 &&
                          doc.byline.person.length > 1
                        ) {
                          return <span>and {person.firstname}</span>;
                        } else if (index === doc.byline.person.length - 1) {
                          return <span> {person.firstname}</span>;
                        }
                        return <span>{person.firstname},</span>;
                      })}
                  </div>
                  <div>{new Date(doc.pub_date).toDateString()}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Results;
