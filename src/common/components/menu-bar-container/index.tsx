import React from 'react';

export const MenuBarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="control-group">
            <div className="button-group flex items-center p-3 shadow bg-white">{children}</div>
        </div>
    );
};
