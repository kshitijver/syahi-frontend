import React from 'react';
import { useCurrentEditor } from '@tiptap/react';

type ListButtonProps = {
    name: 'Bullet' | 'Ordered';
    icon: React.ReactNode;
};

export const ListButton = ({ name, icon }: ListButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <div>
            <button
                onClick={() => editor.chain().focus()[`toggle${name}List`]().run()}
                className="p-2 hover:bg-gray-100 rounded"
            >
                {icon}
            </button>
        </div>
    );
};
