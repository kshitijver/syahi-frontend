import React from 'react';
import { SidebarHeader } from '../components/sidebar-header';
import { SidebarContent } from '../components/sidebar-content';
import { SidebarSectionSeperator } from '../components/sidebar-section-seperator';

export const Sidebar = () => {
    return (
        // Sidebar container
        <div className="flex flex-col px-4 py-3 gap-3 min-w-72 w-fit h-screen bg-white shadow-lg border-r z-50 overflow-x-auto">
            <SidebarHeader />
            {/* <SidebarSectionSeperator /> */}
            <SidebarContent />
            <SidebarSectionSeperator />
        </div>
    );
};
