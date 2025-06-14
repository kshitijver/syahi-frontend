import React from 'react';
import { FileIcon, ChevronsUpDownIcon } from 'lucide-react';

export const SidebarHeader = ({ email = 'scav28@gmail.com' }: { email?: string }) => {
    return (
        <div className="flex items-center justify-start gap-2">
            <FileIcon className="w-10 h-10" />
            <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium">Docs</span>
                <span className="text-xs text-gray-900 font-semibold">{email}</span>
            </div>
            <div className="flex flex-1 items-center justify-end">
                <ChevronsUpDownIcon className="w-5 h-5" />
            </div>
        </div>
    );
};
