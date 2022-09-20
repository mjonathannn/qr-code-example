import QRCode from "react-qr-code";
import { useState } from "react";

import styles from "../styles/components/Main.module.css";

import InputText from "./Input";

const Main = (): JSX.Element => {
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>QR Code Example</h1>

        <div className={styles.qrCode}>
          <QRCode value={text} />
        </div>

        <InputText state={text} setState={setText} />
      </div>
    </div>
  );
};

export default Main;
