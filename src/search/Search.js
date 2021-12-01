import { Search, Button, Pagination, Loading } from "carbon-components-react";
import { useErrorHandler } from "react-error-boundary";
import { useEffect, useState } from "react";
import { fetchSearchResults } from "../apis/apis";
import { Search16 } from "@carbon/icons-react";
import Results from "./Searchresults";

function SearchComponent(props) {
  const [searchResults, setSearchResults] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const handleError = useErrorHandler();

  const searchProps = () => ({
    className: "search",
    size: "xl",
    light: false,
    disabled: false,
    name: "search",
    labelText: "Search",
    closeButtonLabelText: "Clear search input",
    placeholder: "Search",
    onChange: (event) => {
      setSearchTerm(event.target.value);
    },
    onKeyDown: () => {},
    onClear: () => {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingState(true);
    fetchSearchResults(searchTerm, 1).then((results) => {
      setLoadingState(false);
      setSearchResults(results);
    }, handleError);
  };

  const paginationProps = (props) => ({
    disabled: false,
    size: "lg",
    page: props.page,
    totalItems: 100000,
    pagesUnknown: false,
    pageInputDisabled: undefined,
    pageSizeInputDisabled: undefined,
    backwardText: "Previous page",
    forwardText: "Next page",
    pageSize: 10,
    pageSizes: [10],
    itemsPerPageText: "Items per page:",
    onChange: (obj) => {
      setPage(obj.page);
      fetchSearchResults(searchTerm, obj.page).then((data) => {
        setSearchResults(data.response.docs);
      }, handleError);
    },
  });

  useEffect(() => {
    fetchSearchResults("", page).then((data) => {
      setLoadingState(false);
      setSearchResults(data.response.docs);
    }, handleError);
  }, []);

  const loadingProps = () => ({
    active: true,
    withOverlay: false,
    small: false,
    description: "Active loading indicator",
  });

  return (
    <>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-11 bx--col-md-7 bx--col-sm-3 bx--no-gutter">
            <Search {...searchProps()} value={searchTerm} />
          </div>
          <div className="bx--col-lg-1 bx--col-md-1 bx--col-sm-1 bx--no-gutter">
            <Button
              renderIcon={Search16}
              iconDescription="Icon Description"
              hasIconOnly
              onClick={handleSubmit}
              name="search-button"
            />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col bx--no-gutter">
            {loadingState && (
              <Loading {...loadingProps()} className="loading" />
            )}

            {searchResults && !searchResults.length && (
              <div> No results found</div>
            )}

            {searchResults &&
              searchResults.length &&
              searchResults.map((doc, index) => {
                return <Results doc={doc} key={index} />;
              })}
            {searchResults && searchResults.length && (
              <Pagination {...paginationProps({ page })} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchComponent;
