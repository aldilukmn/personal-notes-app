function NotesCardAction({ id, onDelete, onArchive, isArchived }) {
  return (
    <div className="notes_card_action">
      <button onClick={() => onDelete(id)}>Hapus</button>
      <button onClick={() => onArchive(id)}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}


export default NotesCardAction;
