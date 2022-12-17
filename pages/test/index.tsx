import styles from "../../styles/Home.module.css";
import {useEffect, useState} from "react";
import Head from "next/head";

export default function Test({ breeds = [] }) {
    const [breedList, setBreedList] = useState([] as string[]);

    useEffect(() => {
        setBreedList(Object.keys(breeds));
    }, [breeds]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Amplify Hosting Test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.description}>
                    <h1 className={styles.title}>Amplify Hosting Test App</h1>
                    <br />
                    <select>
                        {breedList.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps() {
    const url = "https://dog.ceo/api/breeds/list/all";
    const res = await fetch(url);
    const data = await res.json();
    const breeds = data.message;

    return {
        props: { breeds },
    };
}
