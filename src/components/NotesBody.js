import NotesAction from "./NotesAction";
import NotesContent from "./NotesContent";

function NotesBody({ title, date, body }) {
  return (
    <div className="notes_body">
      <NotesContent title={title} date={date} body={body} />
      <NotesAction />
    </div>
  );
}

export default NotesBody;
