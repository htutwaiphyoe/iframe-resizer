import { iframeResizer } from "iframe-resizer";
import IframeResizer from "iframe-resizer-react";
import { useEffect, useRef } from "react";

function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeResizer(
        {
          log: true,
          checkOrigin: false,
          resizeFrom: "child",
          heightCalculationMethod: "lowestElement",
        },
        iframeRef.current
      );
    }
  }, []);

  return (
    <main>
      <header style={{ textAlign: "center", padding: "3rem" }}>
        <h1>Ulta Header</h1>
      </header>
      <section
        style={{
          gap: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <IframeResizer
          log
          title="Amity"
          className="AmitySocialHub__iframe"
          src="http://localhost:5174/"
          style={{ width: "100%" }}
          tolerance={400}
          waitForLoad
          resizeFrom="child"
          heightCalculationMethod="lowestElement"
          checkOrigin={false}
        />
        <iframe
          title="Amity"
          ref={iframeRef}
          src="http://localhost:5174/"
          style={{ width: "100%" }}
        />
      </section>
      <footer style={{ textAlign: "center", padding: "3rem" }}>
        <p>Ulta Footer</p>
      </footer>
    </main>
  );
}

export default App;
