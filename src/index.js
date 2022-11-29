import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import WebFont from "webfontloader";
import Products from "./component/Products";

WebFont.load({
  google: {
    families: ["Montserrat Web:300,400,700", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card
      name={"Emily Dougrer"}
      employment={"Developer"}
      disabled={false}
      description={
        "Hi there. 👋 We use Boards to share initial goals and ideas."
      }
      onClick={() => console.log("Done!")}
    />
    <br />
    <Products />
  </React.StrictMode>
);
