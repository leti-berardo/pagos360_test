import "material-symbols";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <main>
        <div className={styles.Home_head}>
          <span className="material-symbols-outlined">savings</span>
          <h1 className={styles.title}>PayLet</h1>
        </div>

        <Card
          className={styles.Home_card}
          sx={{
            maxWidth: 345,
            borderRadius: "5px",
          }}
        >
          <CardActionArea>
            <Link href="/payment-request" className={styles.Home_card_link}>
              <CardContent
                style={{
                  padding: "2rem",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  marginBottom="0"
                >
                  Crear link de pago
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </main>
    </div>
  );
}
