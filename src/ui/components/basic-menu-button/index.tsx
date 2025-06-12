import { useCurrentEditor } from '@tiptap/react';
import React from 'react';

type MenuButtonProps = {
    name: string;
    type: 'bold';
};

export const MenuButton = ({ type, name }: MenuButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <>
            <div>
                <button
                    onClick={() => editor.chain().focus()[`toggle${name}`]().run()}
                    disabled={!editor.can().chain().focus()[`toggle${name}`]().run()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    {name}
                </button>
            </div>
        </>
    );
};
