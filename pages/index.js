import { Article, Dump } from '@rasahq/react-tabula/system';
import Link from 'next/link';

export async function getStaticProps({ params = {}, preview }) {
  return {
    props: {
      title: 'this is the index',
    },
  };
}

export default function PostsIndex({ title, params }) {
  return (
    <Article>
      <h1>{title}</h1>
      <p>Page Links:</p>
      <ul>
        <li>
          <Link href="/my-first-post/">my-first-post</Link>
        </li>
        <li>
          <Link href="/my-second-post/">my-second-post</Link>
        </li>
      </ul>
      <p>Preview Links:</p>
      <ul>
        <li>
          <a href="/blog/api/preview/?path=/blog/my-first-post/">
            PREVIEW MODE: my-first-post
          </a>
        </li>
        <li>
          <a href="/blog/api/preview/?path=/blog/my-second-post/">
            PREVIEW MODE: my-second-post
          </a>
        </li>
      </ul>
    </Article>
  );
}
