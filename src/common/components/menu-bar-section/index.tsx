import React from 'react';

export const MenuBarSection = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex gap-2">{children}</div>;
};
