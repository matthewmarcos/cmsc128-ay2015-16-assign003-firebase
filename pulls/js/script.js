'use strict';

let noteData = {
    el: '.noteData',
    data: {
        notes: [],
        currentNote: {
            id: '',
            created: '',
            title: '',
            text: ''
        }
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
                this.notes[note.id] = note;
            }
        },
        createNote: function() {
            // Clear the fields of current text buffers
            this.currentNote.id = this.notes.length;
            this.currentNote.title = '',
            this.currentNote.text = '',
            this.currentNote.status = 'new'
        },
        editNote: function(_id) {
            // var tempNote = _.find(this.notes, [id, id]);
            // tempNote.status = 'edit';
            console.log('Editing id: ' + _id);
            // console.log('Editing note');
        }
    }
};

function updateValues() {
    noteData.data.currentNote.id = noteData.data.notes.length;
    noteData.data.currentNote.status = 'new';
}

function start() {
    new Vue(noteData);
    updateValues();
    _.each(['asc', 'asc'], (asc) => { return; });
}

start();
