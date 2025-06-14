import React from 'react';
import { CirclePlusIcon, SearchIcon, CalendarIcon } from 'lucide-react';
import { SidebarButton } from '../sidebar-button';
import { SidebarSectionSeperator } from '../sidebar-section-seperator';

export const SidebarContent = () => {
    return (
        <div className="flex flex-col mx-1 my-2 gap-2">
            <SidebarButton icon={<CirclePlusIcon className="w-5 h-5" />} title="New note" />
            <SidebarButton icon={<SearchIcon className="w-5 h-5" />} title="Search" />
            <SidebarButton icon={<CalendarIcon className="w-5 h-5" />} title="Recents" />
        </div>
    );
};
