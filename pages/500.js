export default function Custom500(props) {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
}
