import React from "react";
import "@fontsource/montserrat";
import { XIcon } from "@primer/octicons-react";
import { styles } from "./style";
const Card = ({
  name,
  employment,
  disabled,
  onClick,
  description,
  style,
  ...props
}) => {
  return (
    <div>
      <div style={styles.containerTop}>
        <div>
          <div style={styles.groupHeader}>
            <div style={styles.avatarImage} />
            <div style={styles.groupTitle}>
              <text style={styles.textName}>{name}</text>
              <text style={styles.textDeveloper}>{employment}</text>
            </div>
          </div>
          <div style={styles.description}>{description}</div>
        </div>
        <div style={styles.iconCloseContainer}>
          <XIcon size={24} fill={"#FFFFFF"} />
        </div>
      </div>
      <div style={styles.containerBottom}>
        <input placeholder={"Type message..."} style={styles.typeMessage} />
        <button style={styles.sendButton} disabled={disabled} onClick={onClick}>
          <text style={styles.text}>Send</text>
        </button>
      </div>
    </div>
  );
};

export default Card;
