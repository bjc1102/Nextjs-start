import {useEffect, useState} from "react";
import Helmet from "../components/Helmet"


export default function Home({results}) {

    return  (
        <div className="container">
            <Helmet title="Home"/>
            {results?.map(movie => 
                <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>{movie.original_title}</h4>
                </div>)}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                cursor:pointer
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
        `}</style>
        </div>
    );
}

export async function getServerSideProps() { //이름이 정말 중요하고 이 코드는 서버에서 실행된다
    //여기서 API요청을 보내도 된다, 서버에서만 실행되기 때문에
    const { results } = await (await fetch(`http://localhost:3000//api/movies`)).json();
    return {
        props: {
            results,
        },
    }
}
//여기서 무엇을 리턴해도 이걸 props로 현재 페이지에게 전달하게 된다.
//_app.js에서 있는 pageProps로 인해서 실행됨