import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, NoteData, Tag } from "./types";
import { v4 } from "uuid";
import Layout from "./components/Layout";

const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag]);
  };
  // etiket olusturma

  // yeni etiket olsuturma

  const createNote = (noteData: NoteData): void => {
    // formdan gelen veriye id ekle
    const newNote: Note = {
      id: v4(),
      ...noteData,
    };
    // state'e notu ekle
    setNotes((prev) => [...prev, newNote]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <Create
              handleSubmit={createNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
