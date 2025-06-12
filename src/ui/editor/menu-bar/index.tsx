import React from 'react';
import { useCurrentEditor } from '@tiptap/react';
import { MenuButton } from '../../components/basic-menu-button';
import { BasicHeadingButton } from '../../components/basic-heading-button';

export const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <MenuButton type="bold" name="Bold" />
                <MenuButton type="italic" name="Italic" />
                <MenuButton type="strike" name="Strike" />
                <MenuButton type="code" name="Code" />
                {/* <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    Code
                </button> */}
                {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    Clear marks
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>
                    Clear nodes
                </button> */}
                {/* <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    Paragraph
                </button> */}
                <BasicHeadingButton level={1} name="H1" />
                <BasicHeadingButton level={2} name="H2" />
                <BasicHeadingButton level={3} name="H3" />
                <BasicHeadingButton level={4} name="H4" />
                <BasicHeadingButton level={5} name="H5" />
                <BasicHeadingButton level={6} name="H6" />
                {/* <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    Ordered list
                </button> */}
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    Code block
                </button>
                {/* <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    Blockquote
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    Horizontal rule
                </button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                    Hard break
                </button> */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    Undo
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    Redo
                </button>
                {/* <button
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={
                        editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''
                    }
                >
                    Purple
                </button> */}
            </div>
        </div>
    );
};
