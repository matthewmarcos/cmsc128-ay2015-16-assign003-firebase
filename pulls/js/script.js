'use strict';

let noteDatum = {
    el: '.noteDatum',
    data: {
        created: '',
        title: 'Title Placeholder',
        text: ''
    }
};

let noteData = {
    el: '.noteData',
    data: {
        notes: []
    },
    methods: {
        addNote: function (note) {
            if(note.title !== '') {
                this.notes.push(note);
            }
        },
        removeNote: function (index) {
            this.todos.splice(index, 1)
        }
    }
};

new Vue(noteDatum);
new Vue(noteData);
