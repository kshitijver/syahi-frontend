import React from 'react';
import { useCurrentEditor } from '@tiptap/react';
import { FormattingMenuButton } from '../formatting-menu-button';
import { UndoRedoMenuButton } from '../undo-redo-button';
import {
    TextQuoteIcon,
    BoldIcon,
    BracesIcon,
    ItalicIcon,
    StrikethroughIcon,
    Undo2Icon,
    Redo2Icon,
    CodeIcon,
    MinusIcon,
    ListIcon,
    ListOrderedIcon,
} from 'lucide-react';
import { HeadingDropdown } from '../dropdown';
import { MenuItemSeparator } from '../../../common/components/menu-item-separator';
import { MenuBarSection } from '../../../common/components/menu-bar-section';
import { ListButton } from '../list-button';
import { MenuBarContainer } from '../../../common/components/menu-bar-container';

export const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <MenuBarContainer>
            {/* Undo Redo section */}
            <MenuBarSection>
                <UndoRedoMenuButton name="undo" icon={<Undo2Icon className="w-5 h-5" />} />
                <UndoRedoMenuButton name="redo" icon={<Redo2Icon className="w-5 h-5" />} />
            </MenuBarSection>
            <MenuItemSeparator />
            {/* Formatting section */}
            <MenuBarSection>
                <FormattingMenuButton name="Bold" icon={<BoldIcon className="w-5 h-5" />} />
                <FormattingMenuButton
                    name="Italic"
                    customClass="italic"
                    icon={<ItalicIcon className="w-5 h-5" />}
                />
                <FormattingMenuButton
                    name="Strike"
                    customClass="line-through"
                    icon={<StrikethroughIcon className="w-5 h-5" />}
                />
                <FormattingMenuButton
                    name="Code"
                    customClass="font-mono"
                    icon={<CodeIcon className="w-5 h-5" />}
                />
            </MenuBarSection>
            <MenuItemSeparator />
            {/* Heading section */}
            <MenuBarSection>
                <HeadingDropdown />
            </MenuBarSection>
            <MenuItemSeparator />
            {/* List section */}
            <MenuBarSection>
                <ListButton name="Bullet" icon={<ListIcon className="w-5 h-5" />} />
                <ListButton name="Ordered" icon={<ListOrderedIcon className="w-5 h-5" />} />
            </MenuBarSection>
            <MenuItemSeparator />
            {/* Code section */}
            <MenuBarSection>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className="p-2 hover:bg-gray-100 rounded"
                >
                    <BracesIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className="p-2 hover:bg-gray-100 rounded"
                >
                    <TextQuoteIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className="p-2 hover:bg-gray-100 rounded"
                >
                    <MinusIcon className="w-5 h-5" />
                </button>
            </MenuBarSection>
        </MenuBarContainer>
    );
};
