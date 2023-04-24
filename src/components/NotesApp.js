import React from "react";
import { getInitialData } from "../utils/index";
import NewNotes from "./NewNotes";
import NotesCard from "./NotesCard";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
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
  

  render() {
    return (
      <div className="notes_app">
        <h1 className="notes_app_title">Aplikasi Catatan Pribadi</h1>
        <NewNotes addNotes={this.onAddNotesHandler}/>
        <NotesCard notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNotesHandler} />
      </div>
    );
  }
}

export default NotesApp;
