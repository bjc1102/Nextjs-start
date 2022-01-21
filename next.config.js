const API_KEY  = process.env.API_KEY

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/contact", //      "/contact/:path"  "/contact/:path*"
        destination:"https://youtube.com", //      "/contact/:path"  "/newcontact/:path*"
        permanent: false,  //검색엔진에 정보를 기록하는 역할도 함
      }
    ]
  },
  async rewrites() {
    return [
      {
        //rewrties 사용자를 redirect 시키긴 하지만 주소는 바뀌지 않는다
        source :"/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}
