import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navigationItem.module.css";

interface NavigationItemProps {
  title: string;
  path: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  path,
}) => {
  const location = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        location.pathname === path ? styles.active : ""
      }`}
      to={path}
    >
      {title}
    </Link>
  );
};
