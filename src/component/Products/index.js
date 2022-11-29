import React from "react";
import "@fontsource/montserrat/600.css";
import { styles } from "./style";
import firstImage from "./assets/product/1Shoes.png";
import secondImage from "./assets/product/2Shoes.png";
import thirdImage from "./assets/product/3Shoes.png";
const Products = ({
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
      <div style={styles.container}>
        <div>
          <span style={styles.title}>{"Bestsellers"}</span>
        </div>
        <div>
          <div style={styles.selectedProduct}>
            <div>
              <img
                src={firstImage}
                style={styles.image}
                alt={"Nike Air Max 270"}
              />
            </div>
            <div style={styles.groupText}>
              <div style={styles.titleProduct}>{"Nike Air Max 270"}</div>
              <div style={styles.descriptionProduct}>{"Nike"}</div>
              <div style={styles.priceProduct}>{"$195.80"}</div>
            </div>
          </div>
          <div style={styles.product}>
            <div>
              <img
                src={secondImage}
                style={styles.image}
                alt={"Nike Air Max 90"}
              />
            </div>
            <div style={styles.groupText}>
              <div style={styles.titleProduct}>{"Nike Air Max 90"}</div>
              <div style={styles.descriptionProduct}>{"Nike"}</div>
              <div style={styles.priceProduct}>{"$195.80"}</div>
            </div>
          </div>
          <div style={styles.product}>
            <div>
              <img
                src={thirdImage}
                style={styles.image}
                alt={"Nike Air Max Plus"}
              />
            </div>
            <div style={styles.groupText}>
              <div style={styles.titleProduct}>{"Nike Air Max Plus"}</div>
              <div style={styles.descriptionProduct}>{"Nike"}</div>
              <div style={styles.priceProduct}>{"$195.80"}</div>
            </div>
          </div>
        </div>
        <div style={styles.bottomCard}>
          <div style={styles.card}>
            <span style={styles.titleBottoCard}>Free Shipping</span>
            <span style={styles.dropIconBottomCard}>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.93369 6.93369L12.8674 1"
                  stroke="#12121F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <div style={styles.card}>
            <span style={styles.titleBottoCard}>Reviews (180)</span>
            <span style={styles.dropIconBottomCard}>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.93369 6.93369L12.8674 1"
                  stroke="#12121F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
