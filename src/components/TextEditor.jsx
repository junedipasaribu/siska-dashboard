import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TextEditor = ({ value, onChange }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    return (
        <div className="border border-gray-300 rounded p-2 bg-white">
            <EditorContent editor={editor} />
        </div>
    )
}

export default TextEditor
