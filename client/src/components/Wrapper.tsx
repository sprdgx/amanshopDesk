import React from "react";
import styles from "@/styles/Wrapper.module.css";
import { LocalShipping, Payment, Security, Policy } from "@mui/icons-material";

const serviceData = [
  {
    icon: <LocalShipping />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <Payment />,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <Security />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <Policy />,
    title: "Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

const Wrapper = () => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className="container">
        <div className={`${styles.row}`}>
          {serviceData.map((val, index) => (
            <div
              className={`${styles.feature}`}
              style={{ background: `linear-gradient(to top, teal, gray)`}}
              key={index}
            >
              <div className={styles.icon}>{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
