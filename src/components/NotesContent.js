import { showFormattedDate } from "../utils/index";

function NotesContent({ title, date, body }) {
  return (
    <div className="notes_content">
      <h1 className="notes_body_title">{title}</h1>
      <p className="notes_body_date">{showFormattedDate(date)}</p>
      <p className="notes_body_body">{body}</p>
    </div>
  );
}

export default NotesContent;
