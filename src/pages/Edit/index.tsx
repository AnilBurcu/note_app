import { useOutletContext } from "react-router-dom";
import Form from "../../components/Form";

const Edit = () => {
  const note = useOutletContext();

  return (
    <div>
      <h2>Notu Düzenle</h2>
      <Form />
    </div>
  );
};

export default Edit;
