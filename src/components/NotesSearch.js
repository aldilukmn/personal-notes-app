function NotesSearch({ value, onSearch }) {
  return (
    <div className="notes_search">
      <h1>Notes</h1>
      <input type="text" value={value} onChange={onSearch} placeholder="Cari catatan ..." />
    </div>
  );
}

export default NotesSearch;
