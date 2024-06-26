import Form from "../../components/Form";
import { NoteData, Tag } from "../../types";
export type CreateProps = {
  handleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const Create = ({ handleSubmit, createTag, availableTags }) => {
  return (
    <div className="container py-5">
      <h2>Create Note</h2>
      <Form
        handleSubmit={handleSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default Create;
