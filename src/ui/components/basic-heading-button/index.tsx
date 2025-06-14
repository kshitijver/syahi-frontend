import { useCurrentEditor } from '@tiptap/react';
import React from 'react';

type BasicHeadingButtonProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    name: string;
    icon?: React.ReactNode;
};

export const BasicHeadingButton = ({ level, name, icon }: BasicHeadingButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <button
            key={level}
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            // className={editor.isActive('heading', { level }) ? 'is-active' : ''}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
            {icon ? icon : name}
        </button>
    );
};
