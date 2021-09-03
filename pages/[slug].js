import { Article, Dump } from '@rasahq/react-tabula/system';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const slugs = ['my-first-post', 'my-second-post'];

export async function getStaticPaths() {
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking', // could also be `true`, then we can inspect router.isFallback
  };
}

export async function getStaticProps({
  params,
  params: { slug } = {},
  preview,
}) {
  return {
    notFound: !~slugs.indexOf(slug),
    props: {
      title: 'this is a post',
      params,
    },
  };
}

export default function PostSingle({ title, params }) {
  const router = useRouter();
  return (
    <Article>
      <Link href="/">back</Link>
      <h1>{title}</h1>
      <Dump data={params} />
      <Dump data={router} />
    </Article>
  );
}
