import { iframeResizer } from "iframe-resizer";
import { useEffect, useRef } from "react";

function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeResizer(
        {
          checkOrigin: false,
          heightCalculationMethod: "bodyScroll",
          log: true,
          resizeFrom: "child",
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
          gridTemplateColumns: "1fr",
        }}
      >
        <iframe
          // title="Amity"
          // className="AmitySocialHub__iframe"
          // src={iframeUrl}
          // onResized={() => iframeRef?.current?.resize()}
          // tolerance={400}
          // forwardRef={iframeRef}
          // waitForLoad
          ref={iframeRef}
          style={{ width: "100%" }}
          src="http://localhost:6006/iframe.html?args=&id=v4-social--sdk-community-app-v-4&viewMode=story"
        />
      </section>
      <footer style={{ textAlign: "center", padding: "3rem" }}>
        <p>Ulta Footer</p>
      </footer>
    </main>
  );
}

export default App;
