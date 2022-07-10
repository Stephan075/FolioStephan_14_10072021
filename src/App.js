import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
