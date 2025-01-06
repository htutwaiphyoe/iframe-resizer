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

    window.addEventListener("message", (event) => {
      if (event.data.action === "scrollToTop") {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <main>
      <header style={{ textAlign: "center", padding: "3rem" }}>
        <h1>Ulta Header</h1>
      </header>
      <section
        style={{
          gap: "2rem",
          padding: "0rem",
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        {/* <IframeResizer
          log
          title="Amity"
          className="AmitySocialHub__iframe"
          src="https://mui.com/material-ui/react-dialog/"
          style={{ width: "100%", height: "300vh" }}
          waitForLoad
          resizeFrom="child"
          heightCalculationMethod="lowestElement"
          checkOrigin={false}
        /> */}
        <IframeResizer
          log
          title="Amity"
          className="AmitySocialHub__iframe"
          src="http://192.168.1.104:5173/"
          style={{ width: "100%", height: "300vh" }}
          waitForLoad
          resizeFrom="child"
          heightCalculationMethod="lowestElement"
          checkOrigin={false}
        />
        {/* <IframeResizer
          log
          title="Amity"
          className="AmitySocialHub__iframe"
          src="http://192.168.1.104:6006/iframe.html?id=v4-social--sdk-community-app-v-4&viewMode=story"
          style={{ width: "100%" }}
          waitForLoad
          resizeFrom="child"
          heightCalculationMethod="lowestElement"
          checkOrigin={false}
        /> */}
        {/* <iframe
          title="Amity"
          ref={iframeRef}
          src="http://192.168.1.101:6006/iframe.html?args=&id=v4-social--sdk-community-app-v-4&viewMode=story"
          style={{ width: "100%" }}
        /> */}
      </section>
      <footer style={{ textAlign: "center", padding: "3rem" }}>
        <p>Ulta Footer</p>
      </footer>
    </main>
  );
}

export default App;
