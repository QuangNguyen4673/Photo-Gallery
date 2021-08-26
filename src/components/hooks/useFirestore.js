import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase";

function useFirestore(collection) {
  const [docs, setDocs] = useState(null);
  useEffect(() => {
    const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return unsub;
  }, [collection]);
  return { docs };
}

export default useFirestore;
