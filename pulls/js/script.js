'use strict';

let noteData = {
    el: '.noteData',
    data: {
        newNote: {
            created: '',
            title: 'Title Placeholder',
            text: ''
        },
        notes: []
    },
    methods: {
        save: function(event) {
            event.preventDefault();
            // alert("save");
            var note = {
                title: this.newNote.title,
                text: this.newNote.text,
                created: new Date()
            }
            this.notes.push(note)
            // console.log(note);
        }
    }
};

new Vue(noteData);
