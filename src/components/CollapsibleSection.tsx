import React from "react";

interface CollapsibleSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    isOpen,
    onToggle,
    children,
}) => {
    return (
        <div className="mr-4">
            <div
                className={`collapse collapse-arrow border-b-2 rounded-none border-dotted border-black dark:border-white${
                    isOpen ? "collapse-open" : ""
                }`}
            >
                <input
                    type="checkbox"
                    className="collapse-checkbox"
                    checked={isOpen}
                    onChange={onToggle}
                />
                <div className="collapse-title text-xl">{title}</div>
                <div className="collapse-content flex flex-wrap">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CollapsibleSection;
