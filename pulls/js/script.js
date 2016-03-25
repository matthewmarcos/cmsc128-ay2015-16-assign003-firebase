'use strict';

let noteData = {
    el: '.noteData',
    data: {
        notes: [],
        currentNote: {
            id: '',
            created: '',
            title: '',
            text: '',
            finished: '',
            status: ''
        },
        nextId: 0
    },
    methods: {
        save: function(event) {
            event.preventDefault();

            var note = {
                id: this.currentNote.id,
                title: this.currentNote.title,
                text: this.currentNote.text,
                created: new Date()
            }

            if(note.title === '') {
                alert('Add a note title!');
                return false;
            }

            if(note.text === '') {
                alert('Cannot save an empty note!');
                return false;
            }

            if(this.currentNote.status === 'new') {
                this.notes.push(note);
                this.currentNote.status = 'edit';
            }
            else {
                this.notes.$set(note.id, note);
            }
        },
        createNote: function() {

            // Clear the fields of current text buffers
            this.currentNote.id = this.notes.length;
            this.currentNote.title = '';
            this.currentNote.text = '';
            this.currentNote.status = 'new';
        },
        editNote: function(id) {

            var tempNote = _.find(this.notes, ['id', id]);
            tempNote.status = 'edit';
            console.log('Editing id: ' + id);
            this.currentNote.id = tempNote.id;
            this.currentNote.title = tempNote.title,
            this.currentNote.text = tempNote.text;
        }
    }
};

function initValues() {
    noteData.data.nextId = noteData.data.notes.length;
    noteData.data.currentNote.id = noteData.data.nextId;
    noteData.data.currentNote.status = 'new';
}

function start() {
    new Vue(noteData);
    initValues();
}

start();
