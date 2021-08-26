import { motion } from "framer-motion";
function Modals({ url, setimgUrl }) {
  const clickHandler = (e) => {
    if (e.target.classList.value === "img-modal") {
      setimgUrl("");
    }
  };
  return (
    <div className="img-modal" onClick={clickHandler}>
      <motion.img src={url} alt="\#" initial={{ y: -500 }} animate={{ y: 0 }} />
    </div>
  );
}

export default Modals;
