import NotesCardBody from "./NotesCardBody";

function NotesCardItem({ title, date, body, id, onDelete, onArchive, isArchived }) {
  return (
    <div class="notes_card_item">
      <NotesCardBody title={title} date={date} body={body} id={id} onDelete={onDelete} onArchive={onArchive} isArchived={isArchived}/>
    </div>
  );
}

export default NotesCardItem;
