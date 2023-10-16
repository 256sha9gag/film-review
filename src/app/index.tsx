import React from "react";
import styles from "./index.module.css";
import { withProviders } from "./providers";
import { Routing } from "pages";
import { Header } from "widgets";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routing />
    </div>
  );
};

export default withProviders(App);
