import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import { motion } from "framer-motion";

function MyProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  if (!progress) {
    return "";
  }
  return (
    <>
      <div className="my-progress-bar">
        <motion.div
          className="my-progress-bar-current"
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
        ></motion.div>
      </div>
    </>
  );
}

export default MyProgressBar;
