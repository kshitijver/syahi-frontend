import './index.css';
import React from 'react';
import { Editor } from './ui/editor';
import { Sidebar } from './ui/sidebar';

function App() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <Editor />
            </div>
        </>
    );
}

export default App;
