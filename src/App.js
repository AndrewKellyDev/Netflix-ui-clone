import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import requests from "./Requests";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetFlixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTreding} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
