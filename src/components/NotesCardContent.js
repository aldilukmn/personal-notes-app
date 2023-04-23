import { showFormattedDate } from "../utils/index";

function NotesCardContent({ title, date, body }) {
  return (
    <div className="notes_card_content">
      <h1 className="notes_card_content_title" title={title}>{title}</h1>
      <p className="notes_card_content_date">{showFormattedDate(date)}</p>
      <p className="notes_card_content_body">{body}</p>
    </div>
  );
}

export default NotesCardContent;
