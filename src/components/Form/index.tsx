import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { v4 } from "uuid";
import { Tag } from "../../types";
import { CreateProps } from "../../pages/Create";

const CustomForm = ({
  handleSubmit,
  createTag,
  availableTags,
  markdown = "",
  title = "",
  tags = [],
}: CreateProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    // yeni notu locale kaydeder
    handleSubmit({
      title: titleRef.current?.value as string,
      markdown: markdownRef.current?.value as string,
      tags: selectedTags,
    });
    // anasayfa yönlendir
    navigate("/");
  };
  return (
    <Form onSubmit={handleSend} className="mt-4">
      <Stack>
        {/* Baslik Alani */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={title}
                ref={titleRef}
                className="shadow"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                // eleman kaldirildiginda calisir
                onChange={(all_tags) => setSelectedTags(all_tags as Tag[])}
                // Yeni etiket olusturuldugunda calisir
                onCreateOption={(text) => {
                  // etiket objesi olustur ve id ekle
                  const newTag: Tag = { label: text, value: v4() };

                  // todo locale kaydet
                  createTag(newTag);
                  //state'e ekle
                  setSelectedTags([...selectedTags, newTag]);
                }}
                // daha once eklenenleri goruntule
                value={selectedTags}
                // daha önce eklenenleri seçenek olarak göster
                options={availableTags}
                className="text-black shadow"
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Icerik Alani */}
        <Form.Group className="mt-4">
          <Form.Label>Content (Supports Markdown)</Form.Label>
          <Form.Control
            defaultValue={markdown}
            ref={markdownRef}
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
