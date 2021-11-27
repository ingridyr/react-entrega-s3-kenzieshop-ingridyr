import ShowCase from "./components/ShowCase";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <aside>
          <ul>pesquisa por filtro</ul>
            <li>Gatos</li>
            <li>Cães</li>
            <li>Peixes</li>
            <li>Hamsters</li>
        </aside>
        <ShowCase />
      </div>
    </div>
  );
}

export default App;
