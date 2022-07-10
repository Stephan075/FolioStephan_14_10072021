import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
