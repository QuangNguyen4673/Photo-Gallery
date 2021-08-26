import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import MyProgressBar from "./MyProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const myFile = e.target.files[0];
    const types = ["image/png", "image/jpeg"];
    if (myFile && types.includes(myFile.type)) {
      setFile(myFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form className="img-upload">
      <label>
        <input type="file" onChange={changeHandler} />
        <div className="icon-container">
          <AddIcon />
        </div>
      </label>
      {error && <h5>{error}</h5>}
      {file && <MyProgressBar file={file} setFile={setFile} />}
    </form>
  );
}

export default UploadForm;
