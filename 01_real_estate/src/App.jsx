import React from "react";
import {
  Navbar,
  Header,
  Services,
  Apartments,
  Properties,
  Customers,
  Footer,
} from "./containers";
import styles from "./styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={`${styles.boxWidth}`}>
        <div className="bg-[#EFF8FF]">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Services />
        <Apartments />
        <Properties />
        <Customers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
