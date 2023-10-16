import React from "react";

import styles from "./textarea.module.css";

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  comment: string;
  handleCommentChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextAreaProps> = ({
  handleCommentChange,
  comment,
  placeholder,
}) => {
  return (
    <>
      <textarea
        className={styles.textArea}
        placeholder={placeholder}
        value={comment}
        onChange={handleCommentChange}
      />
    </>
  );
};
