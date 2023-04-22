import NotesBody from "./NotesBody";

function NotesItem({ title, date, body }) {
  return (
    <div class="notes_item">
      <NotesBody title={title} date={date}  body={body} />
    </div>
  );
}

export default NotesItem;
