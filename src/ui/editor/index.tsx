import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MenuBar } from '../components/menu-bar';

const INITIAL_CONTENT = `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
`;

const extensions = [StarterKit];

export const Editor = () => {
    return (
        <div>
            <EditorProvider
                editorProps={{
                    attributes: {
                        class: 'py-16 px-8 md:px-32',
                    },
                }}
                slotBefore={<MenuBar />}
                editorContainerProps={{
                    className:
                        'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
                }}
                extensions={extensions}
                content={INITIAL_CONTENT}
            />
        </div>
    );
};
