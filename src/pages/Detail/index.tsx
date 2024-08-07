import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../../types";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

type Props = {
  deleteNote: (is: string) => void;
};
const Detail = ({ deleteNote }: Props) => {
  // kapsayici route'dan outlet bilesenine context propu yardimiyla gonderilen verilere eristik
  const note = useOutletContext<Note>();

  return (
    <div className="container py-5">
      <Row>
        <Col>
          <h1>{note.title}</h1>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {note.tags.map((tag) => (
              <Badge>{tag.label}</Badge>
            ))}
          </Stack>
        </Col>
        <Col>
          <Stack direction="horizontal" gap={3}>
            <Link to="edit">
              <Button>Edit</Button>
            </Link>
            <Link to="/">
              <Button onClick={() => deleteNote(note.id)} variant="danger">
                Remove
              </Button>
            </Link>

            <Link to="/">
              <Button variant="secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      {/* Markdown icerigini ekrana bas */}
      <ReactMarkdown className="my-5">{note.markdown}</ReactMarkdown>
    </div>
  );
};

export default Detail;
