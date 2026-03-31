export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>BIM BFF API</h1>
      <p>Backend-for-Frontend proxy service</p>
      <h2>API Endpoints:</h2>
      <ul>
        <li><code>/api/bims?word=search</code> - Search BIM vocabulary by word</li>
      </ul>
    </div>
  );
}
