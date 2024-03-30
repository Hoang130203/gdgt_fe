'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Typical from 'react-typical';
import EmojiRain from "../components/EmojiRain";
export default function Home() {
  const stepsContent = [`Một phút lầm lỡ, đánh mất tương lai`,
    'Tuổi dậy thì có điều gì kì diệu'];

  return (
    <main className={styles.main} style={{ padding: '30px 30px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', justifyContent: 'center', backgroundImage: 'url("https://cdcvinhphuc.vn/wp-content/uploads/2023/05/cdcvinhphuc-suckhoesinhsanvtn.jpg")' }}>
      <Grid container maxWidth='100%'>
        <EmojiRain />

        <h1>
          <Typical
            steps={[...stepsContent, 3000]}
            className={styles.custom_text}
            loop={Infinity}
          />

        </h1>
      </Grid>
    </main>
  );
}
