import Head from "next/head";
import styles from "../styles/Layout.module.css"
import Menu from "./Menu";

export default function Layout ({children, title}) {
    return (
        <div>
            <Head>
                <title>Github Merch {title ? `| ${title}` : ""}</title>
            </Head>
            <Menu />
            <div className={styles.container}>{children}</div>
        </div>
    )
}