import "@iframe-resizer/child";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Dialog,
  Heading,
  Input,
  Label,
  Modal,
  ModalOverlay,
  TextField,
} from "react-aria-components";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setOpen(true)}>Open</button>
        <ModalOverlay className="overlay" isOpen={open} onOpenChange={setOpen}>
          <Modal className="popup">
            <Dialog className="dialog">
              {({ close }) => {
                return (
                  <form onSubmit={close} className="content">
                    <Heading slot="title">Sign up</Heading>
                    <TextField>
                      <Label>First Name</Label>
                      <Input />
                    </TextField>
                    <TextField>
                      <Label>Last Name</Label>
                      <Input />
                    </TextField>
                    <Button slot="close" style={{ marginTop: 8 }}>
                      Submit
                    </Button>
                  </form>
                );
              }}
            </Dialog>
          </Modal>
        </ModalOverlay>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
