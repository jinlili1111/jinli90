import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
      <title>{siteTitle}</title>
      </Head>

      <div class="home">

        <h1 class="title">
          欢迎来到 {siteTitle}
        </h1>

        <p class="description">
          玩的开心哦！
        </p>

        <div class="text-center py-4">
          
          <div class="stats bg-primary text-primary-content servers">
            <Online server="近离3.4GIO真端" />
            <Online server="星铁2.5剧情端" />
			<Online server="星铁2.5无剧情端" />
          </div>

        </div>
        
        <p class="text-center">
		pc端请使用网盘内的代理工具，ios,安卓端下载对应版本的安装包<br/>
        </p>

        <p class="description">
        <a href="https://qm.qq.com/q/ToJL6RgfwQ" target="_blank" rel="sponsored">Q群|教程</a>
        </p>

      </div>
    </Layout>
  )
}
