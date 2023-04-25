import NoNotesCardItem from "./NotesNoCardItem";
import NotesCardItem from "./NotesCardItem";

function NotesCardList({ notes, onDelete, onArchive}) {
  return (
    <div className="notes_card_list">
      {notes.length === 0 ? (
        <NoNotesCardItem/>
      ) : (
        notes.map((note) => (
          <NotesCardItem key={note.id} date={note.createdAt} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
        ))
      )}
    </div>
  );
}

export default NotesCardList;
