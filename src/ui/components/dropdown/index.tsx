import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Heading1Icon, Heading2Icon, Heading3Icon, Heading4Icon } from 'lucide-react';
import { BasicHeadingButton } from '../basic-heading-button';

type HeadingOption = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    label: string;
    icon: React.ReactNode;
};

export const HeadingDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headingOptions: HeadingOption[] = [
        { level: 1, label: 'Heading 1', icon: <Heading1Icon className="w-5 h-5" /> },
        { level: 2, label: 'Heading 2', icon: <Heading2Icon className="w-5 h-5" /> },
        { level: 3, label: 'Heading 3', icon: <Heading3Icon className="w-5 h-5" /> },
        { level: 4, label: 'Heading 4', icon: <Heading4Icon className="w-5 h-5" /> },
    ];

    // if (!options) return null;
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-trigger flex items-center gap-2 hover:bg-gray-100 rounded-lg px-2 py-2"
            >
                Heading
                <ChevronDownIcon className="w-4 h-4" />
            </button>
            {isOpen && (
                <div className="dropdown-menu absolute bg-white shadow rounded mt-2 z-50">
                    {headingOptions.map((option, index) => (
                        <BasicHeadingButton
                            key={index}
                            level={option.level}
                            name={option.label}
                            icon={option.icon}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
