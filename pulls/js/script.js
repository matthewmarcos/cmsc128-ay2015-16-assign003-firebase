'use strict';

function start() {
    new Vue(noteData);
}

var noteData = {
    el: '.noteData',
    data: {
        notes: [],
        currentNote: {
            id: '',
            created: '',
            title: '',
            text: '',
            finished: '',
            status: 'new'
        }
    },
    methods: {
        save: function() {

            // console.log('save to notes:');
            // console.log(this.notes);
            var note = {
                id: this.currentNote.id,
                created: this.currentNote.created,
                title: this.currentNote.title,
                text: this.currentNote.text,
                finished: this.currentNote.finished
            }

            // console.log('logging note:');
            // console.log(note);
            if(note.title === '') {
                alert('Add a note title!');
                return false;
            }

            if(note.text === '') {
                alert('Cannot save an empty note!');
                return false;
            }

            if(this.currentNote.status === 'new') {
                console.log('Logging note ids 1');
                this.notes.forEach(function(notee) {
                    console.log(notee.title + ': ' + notee.id);
                });


                note.id = this.getNextId();
                note.created = new Date();

                this.notes.push(note);

            }
            else {
                var index = _.findIndex(this.notes, function(o) {
                    return o.id = note.id;
                });

                this.notes.$set(index, note);
            }

            this.currentNote.id = '';
            this.currentNote.created = '';
            this.currentNote.title = '';
            this.currentNote.text = '';
            this.currentNote.finished = false;
            this.currentNote.status = 'new';

        },
        initializeNewNote: function() {

            // Clear the fields of current text buffers
            this.currentNote.id = this.getNextId(this.notes);
            this.currentNote.created = '';
            this.currentNote.title = '';
            this.currentNote.text = '';
            this.currentNote.finished = 'false';
            this.currentNote.status = 'new';
        },
        editNote: function(id) {

            var tempNote = _.find(this.notes, ['id', id]);

            tempNote.status = 'edit';

            this.currentNote.id = tempNote.id;
            this.currentNote.created = tempNote.created;
            this.currentNote.title = tempNote.title,
            this.currentNote.text = tempNote.text;
            this.currentNote.finished = tempNote.finished;
            this.currentNote.status = tempNote.status;
        },
        deleteNote: function(id) {

            var tempNoteList = this.notes;

            if(this.currentNote.status === 'new') {
                this.initializeNewNote();
                return false;
            }

            _.remove(tempNoteList, function(note) {
                return note.id === id;
            });

            this.notes = tempNoteList;
            this.initializeNewNote();

            return true;
        },
        getNextId: function () {
        // Gets tne next id, given the initial array
            var tempNotes = this.notes,
                tempId = _.maxBy(tempNotes, function(o) {
                    return o.id;
                });

            if(typeof tempId === 'undefined') {
                return 0;
            }
            else {
                return tempId.id + 1;
            }
        }
    }
};

start();
