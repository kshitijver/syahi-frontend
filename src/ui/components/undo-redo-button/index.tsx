import React from 'react';
import { useCurrentEditor } from '@tiptap/react';

type UndoRedoMenuButtonProps = {
    name: string;
    customClass?: string;
    icon?: React.ReactNode;
};

export const UndoRedoMenuButton = ({ name, customClass, icon }: UndoRedoMenuButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <>
            <div>
                <button
                    //@ts-ignore
                    onClick={() => editor.chain().focus()[name]().run()}
                    //@ts-ignore
                    disabled={!editor.can().chain().focus()[name]().run()}
                    className={`p-2 hover:bg-gray-100 rounded ${customClass}`}
                    title={name}
                >
                    {icon}
                </button>
            </div>
        </>
    );
};
