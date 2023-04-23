import NoNotesCardItem from "./NoNotesCardItem";
import NotesCardItem from "./NotesCardItem";

function NotesCardList({ notes, onDelete }) {
  return (
    <div className="notes_card_list">
      {notes.length === 0 ? (
        <NoNotesCardItem/>
      ) : (
        notes.map((note) => (
          <NotesCardItem key={note.id} date={note.createdAt} id={note.id} onDelete={onDelete} {...note} />
        ))
      )}

    </div>
  );
}

export default NotesCardList;
