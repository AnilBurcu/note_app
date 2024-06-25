import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";

const CustomForm = () => {
  const navigate = useNavigate();
  return (
    <Form className="mt-4">
      <Stack>
        {/* Baslik Alani */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Baslik</Form.Label>
              <Form.Control className="shadow" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect className="text-black shadow" isMulti />
            </Form.Group>
          </Col>
        </Row>
        {/* Icerik Alani */}
        <Form.Group className="mt-4">
          <Form.Label>Icerik (markdown destekler)</Form.Label>
          <Form.Control
            as="textarea"
            className="shadow"
            style={{ minHeight: "300px", maxHeight: "500px" }}
          />
        </Form.Group>
        {/* Butonlar */}

        <Stack
          direction="horizontal"
          className="justify-content-end mt-5"
          gap={4}
        >
          <Button type="submit">Kaydet</Button>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            variant="secondary"
          >
            Geri
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default CustomForm;
