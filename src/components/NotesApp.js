import React from "react";
import { getInitialData } from "../utils/index";
import NotesCardList from "./NotesCardList";
import NewNotes from "./NewNotes";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="notes_app">
        <h1 className="notes_app_title">Aplikasi Catatan Pribadi</h1>
        <NewNotes addNotes={this.onAddContactHandler}/>
        <h2>Catatan Aktif</h2>
        <NotesCardList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }
}

export default NotesApp;
