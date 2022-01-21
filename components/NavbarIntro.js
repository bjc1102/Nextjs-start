import Link from "next/link"
import {useRouter} from 'next/router';
import styles from "./Navbar.module.css"

export default function NavBarIntro() {

    const router = useRouter();

    return (
        <nav>
            <Link href="/"><a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a></Link>
            <Link href="/About"><a className={router.pathname === "/About" ? styles.active : ""}>about</a></Link>
            <Link href="/button">button</Link>
        </nav>
    );
}