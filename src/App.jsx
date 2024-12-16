import "bootstrap/dist/css/bootstrap.min.css";
import AppCard from "./components/AppCard";
import AppLanguage from "./components/AppLanguage";


function App() {

  return (
    <>
      <header className="p-4 bg-light">
        <h1>Learn Web development</h1>
      </header>
      <div className="container m-3">
        <AppLanguage />
      </div>
    </>
  )
}

export default App;
