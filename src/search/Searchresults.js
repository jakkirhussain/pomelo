import { Link } from "react-router-dom";
import defaultImage from "../images/default.png";
function Results({ doc }) {
  return (
    <div className="search-result-cont bx--no-gutter">
      <div className="bx--row">
        <div className=" bx--col-lg-2 bx--col-md-1 pub_date">
          {new Date(doc.pub_date).toDateString()}
        </div>
        <div className="bx--col-lg-8 bx--col-md-6 search-detail">
          <div className="news_desk">{doc.news_desk}</div>

          <Link
            to={`/details/${doc._id.split("/").pop()}`}
            state={{ web_url: doc.web_url }}
          >
            <h4 className="headline">{doc.headline.main}</h4>
            <div className="abstract">{doc.snippet}</div>
          </Link>
          <div className="by-line">
            <small>{doc.byline.original}</small>
          </div>
        </div>

        <div className="bx--col-lg-2 bx--col-md-1">
          {doc.multimedia.length ? (
            doc.multimedia
              .filter((image) => {
                return image.subtype === "thumbLarge";
              })
              .map((filteredImage, index) => {
                return (
                  <img
                    key={index}
                    alt="doc.headline.main"
                    src={`https://static01.nyt.com/${filteredImage.url}`}
                    width={140}
                  />
                );
              })
          ) : (
            <img alt="doc.headline.main" src={defaultImage} width={140} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
