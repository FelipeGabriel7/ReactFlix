import React from "react";

import styles from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";


export const Footer = () => {
  return (
    <>
    <div className={styles.end}>
      <div className={styles.titles}>
      <p> Desenvolvido por Felipe Gabriel </p>
      <p> &copy; 2022 Todos os direitos reservados. </p>
      </div>
      <div className={styles.contact}>

        <p >
          <a href="https://github.com/FelipeGabriel7" target="_blank">    <BsGithub/></a>
          {" "}
       {" "}
        </p>
        <p>
          {" "}
          <a href="mailto:felipegabfd@gmail.com" >    <AiOutlineMail/></a>
        </p>
      </div>
    </div>
   
    </>
  );
};
