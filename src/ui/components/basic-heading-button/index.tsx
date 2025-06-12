import { useCurrentEditor } from '@tiptap/react';
import React from 'react';

type BasicHeadingButtonProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    name: string;
};

export const BasicHeadingButton = ({ level, name }: BasicHeadingButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <button
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={editor.isActive('heading', { level }) ? 'is-active' : ''}
        >
            {name}
        </button>
    );
};
