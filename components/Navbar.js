import Link from "next/link"
import {useRouter} from 'next/router';
import styles from "./Navbar.module.css"

export default function NavBar() {

    const router = useRouter();

    return (
        <nav>
            <img src="/vercel.svg" />
            <Link href="/"><a className={router.pathname === "/" ? "active" : null}>Home</a></Link>
            <Link href="/About"><a className={router.pathname === "/About" ? "active" : null}>about</a></Link>
            <Link href="/button"><a className={router.pathname === "/button" ? "active" : null}>button</a></Link>
            <style jsx >{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
} 