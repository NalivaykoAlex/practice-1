import React, { Component } from 'react'

import Masonry from 'react-masonry-component'

import Note from './Note.jsx'

import './NotesGrid.less'

const masonryOptions = {
    itemSelector:'.Note',
    columWidth:250,
    gutter:10,
    isFitWidth:true
  }

class NotesCrid extends Component {
        

    render(){
        console.log(this.props.notes)
        return (
            <Masonry 
                className='NotesGrid'
                options={masonryOptions}
            >
            {
                this.props.notes.map(note =>
                    <Note
                        key={note.id}
                        title={note.title}
                        onDelete={this.props.onNoteDelete.bind(null, note)}
                        color={note.color}
                    >
                        {note.text}
                    </Note>
                )
                }
            </Masonry>
        )
    }
}

export default NotesCrid;