import ImageGrid from "./components/ImageGrid";
import Modals from "./components/Modals";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { useState } from "react";
function App() {
  const [imgUrl, setimgUrl] = useState("");
  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid setimgUrl={setimgUrl} />
      {imgUrl && <Modals url={imgUrl} setimgUrl={setimgUrl} />}
    </>
  );
}

export default App;
