import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PreviewControls() {
  const router = useRouter();
  return router.isPreview ? (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '0.5em 0',
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'wrap',
      }}
    >
      <div>
        This site is in Preview Mode!&ensp;
        <a
          style={{ textDecoration: 'underline' }}
          href={`/blog/api/exit-preview/?path=${window.location.pathname}`}
        >
          Click here to exit
        </a>
      </div>
    </div>
  ) : null;
}
