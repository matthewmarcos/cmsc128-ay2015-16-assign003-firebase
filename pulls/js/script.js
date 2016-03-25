'use strict';

var fire = new Firebase('https://fbmarcos.firebaseio.com/');

function start() {

    var app = new Vue(noteData);

    function update (snapshot) {
        var item = snapshot.val()
        app.notes = item;
    }

    function error(err) {
        return console.error(err)
    }

    fire.on("value", update, error);
    fire.on('child_added', update);
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
            finished: false,
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

                this.notes.push(note);

            }
            else {
                var index = _.findIndex(this.notes, function(o) {
                    return o.id === note.id;
                });

                this.notes.$set(index, note);
            }

            this.currentNote.id = '';
            this.currentNote.created = '';
            this.currentNote.title = '';
            this.currentNote.text = '';
            this.currentNote.finished = false;
            this.currentNote.status = 'new';

            fire.set(this.notes);
        },
        initializeNewNote: function() {

            // Clear the fields of current text buffers
            _.assign(this.currentNote, {
                id: this.getNextId(this.notes),
                created: '',
                title: '',
                text: '',
                finished: false,
                status: 'new'
            });
        },
        editNote: function(id) {
        // Prepares currentNote for editing
            var tempNote =  _.find(this.notes, function(o) { return o.id === id; });
            _.assign(this.currentNote, tempNote);
            this.currentNote.status = 'edit';
        },
        deleteNote: function(id) {
        // Deletes the note from notes with id passed to this function
            if(this.currentNote.status === 'edit') {
                var tempNote = _.find(this.notes, function(o) { return o.id === id; });
                this.notes.$remove(tempNote);
            }

            this.initializeNewNote();
            return true;
        },
        getNextId: function () {
        // Gets tne next id, given the initial array
            var tempNotes = this.notes,
                tempId = _.maxBy(tempNotes, function(o) { return o.id; });

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
