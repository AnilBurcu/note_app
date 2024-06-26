import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../../types";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import Card from "../../components/Card";

type Props = {
  availableTags: Tag[];
  notes: Note[];
};

const Main = ({ availableTags, notes }: Props) => {
  return (
    <div className="container py-5">
      {/* Üst Kısım */}
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notes</h1>
        <Link to="/">
          <Button>Create</Button>
        </Link>
      </Stack>
      {/* Form Alanı */}
      <Form className="mt-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search by Title</Form.Label>
              <Form.Control className="shadow"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Search by Tag</Form.Label>
              <ReactSelect
                className="text-black"
                isMulti
                options={availableTags}
              ></ReactSelect>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      {/* Not Listesi */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {notes.map((note) => (
          <Col>
            <Card note={note} key={note.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
