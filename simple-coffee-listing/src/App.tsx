import { useFetch } from "./hooks/useFetch";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Cards } from "./components/Cards";

function App() {
  const { data, isLoading } = useFetch();

  return (
    <>
      <Header />
      <main className="main">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="header-div">
              <h1 className="heading">Our Collection</h1>
              <img src="./vector.svg" alt="Vector" className="vector" />
              <p>
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
            </section>
            <Cards data={data} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
