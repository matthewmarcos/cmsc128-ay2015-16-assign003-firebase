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

            var note = {
                id: this.currentNote.id,
                created: this.currentNote.created,
                title: this.currentNote.title,
                text: this.currentNote.text,
                finished: this.currentNote.finished
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
                note.id = this.getNextId();
                note.created = new Date();

                console.log('Saving:');
                console.log(note);
                this.notes.push(note);
            }
            else {
                var index = _.findIndex(this.notes, function(o) {
                    return o.id = note.id;
                });

                console.log('Editing:');
                console.log(note);

                this.notes.$set(index, note);
            }

            this.currentNote.id = '',
            this.currentNote.created = '',
            this.currentNote.title = '',
            this.currentNote.text = '',
            this.currentNote.finished = false,
            this.currentNote.status = 'new'

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
            console.log('ID clicked for edit: ' + id);
            var tempNote = _.find(this.notes, ['id', id]);

            tempNote.status = 'edit';

            console.log('Editing Note:');
            console.log('id:' + tempNote.id);
            console.log(tempNote);

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

            // console.log('Deleting note' + id);

            _.remove(tempNoteList, function(note) {
                return note.id === id;
            });

            this.notes = tempNoteList;
            this.initializeNewNote();

            return true;
        },
        getNextId: function () {
        // Gets tne next id, given the initial array
            var tempId;

            tempId = _.maxBy(this.notes, function(o) {
                return o.id;
            });

            if(typeof tempId === 'undefined') {
                tempId = 0;
            }
            else {
                tempId = ++tempId.id;
            }

            return tempId;
        }
    }
};

start();
