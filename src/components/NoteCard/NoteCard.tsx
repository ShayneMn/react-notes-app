import { Badge, Card, Stack } from "react-bootstrap";
import { Tag } from "../../App";
import { Link } from "react-router-dom";
import styles from "./NoteCard.module.css";

type SimplifiedNote = {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
};

export function NoteCard({ id, title, markdown, tags }: SimplifiedNote) {
  return (
    <>
      <Card
        as={Link}
        to={`/${id}`}
        className={`h-100 text-reset text-decoration-none ${styles.card}`}
      >
        <Card.Body>
          <Stack
            gap={2}
            className="align-items-center justify-content-center h-100"
          >
            <span className="mt-2 fs-3">{title}</span>
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => {
                return (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                );
              })}
            </Stack>
            <span className="w-75 my-2 text-center text-truncate">
              {markdown}
            </span>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
