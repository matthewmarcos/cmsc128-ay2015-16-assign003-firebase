'use strict';

let noteData = {
    el: '.noteData',
    data: {
        newNote: {
            id: '',
            created: '',
            title: '',
            text: ''
        },
        notes: []
    },
    methods: {
        save: function(event) {
            event.preventDefault();

            var note = {
                id: this.notes.length + 1;
                title: this.newNote.title,
                text: this.newNote.text,
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

            this.notes.push(note)
        }
    }
};

new Vue(noteData);
