import useFirestore from "./hooks/useFirestore";
import useGridDivide from "./hooks/useGridDivide";
import { motion } from "framer-motion";

function ImageGrid({ setimgUrl }) {
  const { docs } = useFirestore("images");
  const [gridOne, gridTwo, gridThree] = useGridDivide(docs);

  const imageRender = (param) => {
    return param.map((item) => (
      <motion.div key={item.id} className="img-wraper">
        <motion.img
          src={item.url}
          alt="\#"
          onClick={() => setimgUrl(item.url)}
        />
      </motion.div>
    ));
  };
  return (
    <>
      {docs && (
        <div className="image-grid-container">
          <div className="grid-one">{imageRender(gridOne)}</div>
          <div className="grid-two">{imageRender(gridTwo)}</div>
          <div className="grid-three">{imageRender(gridThree)}</div>
        </div>
      )}
    </>
  );
}

export default ImageGrid;
