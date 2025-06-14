import React from 'react';

interface SidebarButtonProps {
    icon: React.ReactNode;
    title: string;
}

export const SidebarButton = ({ icon, title }: SidebarButtonProps) => {
    return (
        <>
            <div className="flex items-center justify-start gap-2 py-2 px-2 hover:shadow rounded-lg text-gray-500 hover:text-gray-900">
                <button
                    type="button"
                    className="flex items-center focus:outline-none bg-transparent gap-2 w-full font-medium"
                >
                    {icon}
                    <span>{title}</span>
                </button>
            </div>
        </>
    );
};
