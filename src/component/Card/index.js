import React from "react";
import "@fontsource/montserrat";
import { XIcon } from "@primer/octicons-react";
import avatar from "./assets/avatarImage/avatar.jpeg";
const Card = ({
  name,
  employment,
  disabled,
  onClick,
  description,
  style,
  ...props
}) => {
  const styles = {
    containerTop: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      width: 375,
      height: 154,
      left: 166,
      top: 117,
      background: "#4643D3",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    containerBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: 375,
      height: 58,
      left: 166,
      top: 271,

      background: "#FFFFFF",
      borderBottomRightRadius: 24,
      borderBottomLeftRadius: 24,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    typeMessage: {
      width: 160,
      height: 24,
      left: 198,
      top: 289,
      marginLeft: 32,
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 24,
      alignItems: "center",
      letterSpacing: 0.25,
      color: "#AFAFBD",
      border: 0,
    },
    sendButton: {
      display: "flex",
      backgroundColor: "#FFF",
      width: 60,
      height: 18,
      left: 449,
      top: 292,
      marginRight: 20,
      alignItems: "center",
      textAlign: "right",
      color: "#5856D7",
      border: 0,
    },
    text: {
      fontFamily: "Montserrat",
      fontStyle: "bold",
      fontWeight: "900",
      fontSize: 18,
    },
    textDeveloper: {
      fontFamily: "Montserrat",
      fontStyle: "bold",
      fontWeight: "100",
      fontSize: 15,
      color: "#FFFFFF",
      opacity: 0.5,
    },
    textName: {
      fontFamily: "Montserrat",
      fontStyle: "bold",
      fontWeight: "900",
      fontSize: 15,
      color: "#FFFFFF",
    },
    iconCloseContainer: {
      marginTop: 16,
      marginRight: 24,
      borderRadius: 0,
      opacity: 0.5,
    },
    groupHeader: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },
    avatarImage: {
      height: 48,
      width: 48,
      left: 198,
      top: 139,
      marginLeft: 32,
      marginTop: 22,
      borderRadius: 100,
      backgroundImage: `url(${avatar})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: 80,
    },
    groupTitle: {
      marginTop: 22,
      marginLeft: 14,
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
    },
    description: {
      margin: 14,
      marginLeft: 30,
      opacity: 0.8,
      fontFamily: "Montserrat",
      fontStyle: "bold",
      fontWeight: "900",
      fontSize: 15,
      color: "#FFFFFF",
    },
  };

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
