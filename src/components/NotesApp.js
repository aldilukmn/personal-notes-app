import React from "react";
import { getInitialData } from "../utils/index";
import NotesList from "./NotesList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div class="notes_app">
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
