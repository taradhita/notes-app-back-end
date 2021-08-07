const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../error/InvariantError');

class NotesService {
  constructor() {
    this._pool = new Pool();
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      title, tags, body, id, createdAt, updatedAt,
    };

    this._notes.push(newNote);

    const isSuccess = this._notes.filter((note) => note.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError('Catatan gagal ditambahkan');
    }

    return id;
  }
}

module.exports = NotesService;
