import React from 'react';
import { useCurrentEditor } from '@tiptap/react';

type FormattingMenuButtonProps = {
    name: string;
    customClass?: string;
    icon?: React.ReactNode;
};

export const FormattingMenuButton = ({ name, customClass, icon }: FormattingMenuButtonProps) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <>
            <div>
                <button
                    type="button"
                    //@ts-ignore
                    onClick={() => editor.chain().focus()[`toggle${name}`]().run()}
                    //@ts-ignore
                    disabled={!editor.can().chain().focus()[`toggle${name}`]().run()}
                    className={`p-2 hover:bg-gray-100 rounded ${customClass}`}
                    title={name}
                >
                    {icon}
                </button>
            </div>
        </>
    );
};
