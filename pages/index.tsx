import "material-symbols";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PayLet</title>
        <link rel="icon" href="/saving.png" />
      </Head>

      <main>
        <span className="material-symbols-outlined">savings</span>
        <h1 className={styles.title}>PayLet</h1>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Link href="/payment-request" className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </main>
    </div>
  );
}
