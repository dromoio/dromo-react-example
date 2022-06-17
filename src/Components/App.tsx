import { useState } from "react";
import "../Styles/App.css";
import Navbar from "./Navbar";
import { UploadPage } from "./UploadPage";
import { DataTable } from "./DataTable";

function App() {
  const [state, setState] = useState<{
    uploadData: any[][];
    tab: "upload" | "viewUpload";
  }>({ uploadData: [], tab: "upload" });

  return (
    <>
      <Navbar
        uploadData={state.uploadData}
        tab={state.tab}
        setTab={(tab) => setState({ ...state, tab })}
      />
      <section className="main">
        {state.tab === "upload" ? (
          <UploadPage
            uploadData={state.uploadData}
            setUploadData={(uploadData) => setState({ ...state, uploadData })}
          />
        ) : (
          <DataTable uploadData={state.uploadData} />
        )}
      </section>
    </>
  );
}

export default App;
