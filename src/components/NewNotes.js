import React from "react";

class NewNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputChar = event.target.value;
    const maxChar = 50;
    const remainChar = maxChar - inputChar.length;
    if (remainChar >= 0) {
      this.setState({
        title: inputChar,
        remainChar: remainChar,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();

    const title = this.state.title.trim();
    const body = this.state.body.trim();

    if (title === "" && body === "") {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    if (title === "") {
      alert("Judul catatan tidak boleh kosong!");
      return;
    }

    if (body === "") {
      alert("Isi catatan tidak boleh kosong!");
      return;
    }

    this.props.addNotes(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <form className="new_notes" onSubmit={this.onSubmitChangeEventHandler}>
        <h2 className="new_notes_title">Buat Catatan Baru</h2>
        {this.state.title.length === 0 ? <p className="max_char_new_notes_title">Sisa karakter: 50</p> : <p className="max_char_new_notes_title">Sisa karakter: {this.state.remainChar}</p>}
        <input type="text" placeholder="Tuliskan judulmu di sini ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea cols="30" rows="12" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button>Buat</button>
      </form>
    );
  }
}

export default NewNotes;
