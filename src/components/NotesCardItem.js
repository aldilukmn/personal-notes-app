import NotesCardBody from "./NotesCardBody";

function NotesCardItem({ title, date, body, id, onDelete }) {
  return (
    <div class="notes_card_item">
      <NotesCardBody title={title} date={date}  body={body} id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesCardItem;
