import { Dispatch, SetStateAction } from "react";

import styles from "../styles/components/Input.module.css";

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

const InputText = ({ state, setState }: Props): JSX.Element => {
  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  return (
    <>
      <h1 className={styles.title}>Type Something</h1>

      <input
        className={styles.input}
        type="text"
        maxLength={300}
        placeholder="Enter Text Here"
        value={state}
        onChange={(event: any) => {
          handleChange(event);
        }}
      />
    </>
  );
};

export default InputText;
