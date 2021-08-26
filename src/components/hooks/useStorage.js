import { projectFirestore, projectStorage, timeStamp } from "../../firebase";

import { useEffect, useState } from "react";

function useStorage(file) {
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const storageCollection = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        storageCollection.add({
          url,
          createdAt,
        });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
}

export default useStorage;
