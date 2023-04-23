function NotesCardAction({id, onDelete }) {
  return (
    <div class="notes_card_action">
      <button onClick={() => onDelete(id)}>Hapus</button>
      <button>Arsipkan</button>
    </div>
  );
}

export default NotesCardAction;
