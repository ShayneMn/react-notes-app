import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "../utils/NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type NoteProps = { onDelete: (id: string) => void };

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={2} direction="horizontal" className="flex-wrap my-3">
              {note.tags.map((tag) => {
                return (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                );
              })}
            </Stack>
          )}
        </Col>
        <Col xs="auto" className="align-self-start">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown className="my-4">{note.markdown}</ReactMarkdown>
    </>
  );
}
