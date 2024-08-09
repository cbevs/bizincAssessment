import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import fs from "fs"
import path from "path"

const inter = Inter({ subsets: ["latin"] });

export default function Home({ iceCreams }) {

  const iceCreamList = iceCreams.data.map((iceCream, index) => {
    return (
      <li key={index}>
        {iceCream.name}: {iceCream.rating}
      </li>
    )
  })

  return (
    <>
      <Head>
        <title>Ice Creams</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Ice Cream Ratings</p>

        <ul>
          {iceCreamList}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), '/src/data/iceCreams.json')

  const response = fs.readFileSync(filePath, "utf-8")

  const iceCreams = JSON.parse(response)

  return {
    props: {
      iceCreams
    }
  }
}