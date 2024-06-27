import { Badge, Card, Stack } from "react-bootstrap";
import { Note } from "../../types";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

type Props = {
  note: Note;
};

const NoteCard = ({ note }: Props) => {
  const navigate = useNavigate();
  console.log("Note:", note);
  console.log("Tags:", note.tags);

  return (
    <Card
      onClick={() => navigate(`/note/${note.id}`)}
      className={styles.note_card}
    >
      <Card.Body>
        <Stack
          className="align-items-center justify-content-between h-100"
          gap={2}
        >
          <span className="fw-bold">{note.title}</span>

          <Stack
            direction="horizontal"
            className="justify-content-center"
            gap={2}
          >
            {note.tags?.map((tag) => (
              <Badge key={tag.value} bg="primary">
                {tag.label}
              </Badge>
            ))}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
