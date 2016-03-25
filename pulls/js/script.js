'use strict';

function getNextId(array) {

    var tempId;

    tempId = _.maxBy(array, function(o) {
        return o.id;
    });

    if(typeof tempId === 'undefined') {
        tempId = 0;
    }
    else {
        tempId = ++tempId.id;
    }
    // console.log('Next Id:' + tempId);
    return tempId;
}

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
                this.currentNote.id = this.getNextId(this.notes);
                this.currentNote.created = new Date();
                this.notes.push(note);
            }
            else {
                this.notes.$set(note.id, note);
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
            console.log('Deleting note' + id);
        },
        getNextId: getNextId
    }
};

start();
