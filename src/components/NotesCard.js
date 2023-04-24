import NotesCardList from "./NotesCardList";

function NotesCard({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);
  return (
    <div class="notes_card">
      <h2 className="notes_card_title">Catatan Aktif</h2>
      <NotesCardList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} isArchived={false}/>
      <h2 className="notes_card_title">Arsip</h2>
      <NotesCardList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} isArchived={true}/>
    </div>
  );
}

export default NotesCard;
