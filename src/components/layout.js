import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = '近离服务器'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>                
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="近离服务器" />
            </Head>
            <header>

            </header>
            {children}
            {home ? (
                <>

                </>
            ) : (
                <>
                    <h3 class="text-center">
                        <Link href="/">
                            <button class="btn btn-primary">Back to Home</button>
                        </Link>
                    </h3>
                </>
            )}
            <footer class="text-center">
                <p>
                    <a href="https://qm.qq.com/q/ToJL6RgfwQ">加群</a>
                </p>
                <p class="small">
                    <br/><br/>
                    <a href="https://pan.quark.cn/s/129ef2aa99c6" target="_blank" rel="sponsored">游戏资源</a>
                </p>

            </footer>
        </div>
    )
}