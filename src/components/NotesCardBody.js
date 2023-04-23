import NotesCardAction from "./NotesCardAction";
import NotesCardContent from "./NotesCardContent";

function NotesCardBody({ title, date, body, id, onDelete }) {
  return (
    <div className="notes_card_body">
      <NotesCardContent title={title} date={date} body={body} />
      <NotesCardAction id={id} onDelete={onDelete}/>
    </div>
  );
}

export default NotesCardBody;
