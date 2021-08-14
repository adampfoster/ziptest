import { Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "../../styles/Products.module.scss";

export const ProductHeader: React.FC = () => {
  return (
    <Box
      className={styles.product__header}
      style={{
        width: "100%",
        maxWidth: 1000,
        padding: "130px 140px",
        backgroundColor: "#01259B",
      }}
    >
      <Typography variant={"h1"} component={"h2"}>
        Nike React Sneakers
      </Typography>
    </Box>
  );
};
