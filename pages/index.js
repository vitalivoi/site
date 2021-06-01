import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>Vitali Voinski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software Engineer & Founder" />
      </Head>
      <section>
        <div>
          <h1>Vitali Voinski</h1>
          <h2>Software Engineer & Founder</h2>
          <p>
            <a href="https://t.me/vitalivoi" target="_blank">@vitalivoi</a>
            <br/>
            <a href="mailto:vitalivoi@protonmail.com">vitalivoi@protonmail.com</a>
          </p>
          <style jsx global>{`
            * {
              margin: 0;
              box-sizing: border-box;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
                'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
            }
            h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 400;
              line-height: 1.3;
            }
            h2 {
              margin: 0;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.2;
              color: #999;
              margin-bottom: 34px;
              text-transform: uppercase;
            }
            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 1.75;
            }
            b {
              font-weight: 600;
            }
            a {
              color: black;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            a:first-of-type {
              color: #067df7;
            }
            section {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}