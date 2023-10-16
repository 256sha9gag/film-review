import React from "react";

import styles from "./addReviewPage.module.css";
import { AddReview } from "features";

const AddReviewPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <AddReview />
    </main>
  );
};

export default AddReviewPage;
