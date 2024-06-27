import { useOutletContext } from "react-router-dom";

const Detail = () => {
  const note = useOutletContext();

  return <div>Detail</div>;
};

export default Detail;
