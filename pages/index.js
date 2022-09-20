import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Joss. I'm a software engineer and a translator
          (English/Spanish.) You can contact me on{" "}
          <a href="https://twitter.com/jossjacobo">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you'll be building a site on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map((post) => (
            <li className={utilStyles.listItem} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={post.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
