import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className="" }) => {
    return (
        <h2 className={`text-3xl md:text-4xl text-navy dark:text-white ${className}`}>
            {children}
        </h2>
    );
};

export default SectionTitle;