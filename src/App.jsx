import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="container m-auto h-screen text-[#FAF1E4]">
      <Header />
      <Form />
      <List />
      <Sort />
      <Footer />
    </div>
  );
}

export default App;
