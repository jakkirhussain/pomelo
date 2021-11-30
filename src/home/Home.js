import Mostpopular from "../mostpopular/Mostpopular";
import Search from "../search/Searchwrapper";

function Home(props) {
  return (
    <>
      <Search />
      <Mostpopular />
    </>
  );
}
export default Home;
