import React from "react";
import { getInitialData } from "../utils/index";
import NewNotes from "./NewNotes";
import NotesCard from "./NotesCard";
import NotesSearch from "./NotesSearch";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveNotesHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  onSearchNotesHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const searchNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div className="notes_app">
        <NotesSearch onSearch={this.onSearchNotesHandler} value={this.state.search} />
        <NewNotes addNotes={this.onAddNotesHandler} />
        <NotesCard notes={searchNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNotesHandler} />
      </div>
    );
  }
}

export default NotesApp;
