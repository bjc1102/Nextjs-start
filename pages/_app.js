import Layout from "../components/Layout"
import "../styles/globals.css"

export default function CustomApp ({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
    //이 페이지를 자동으로 부를 것이다. 각각에 잇는 컴포넌트를 받아와서
}