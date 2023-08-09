import React from 'react';

const SectionHeading = ({ title, textColor }) => {
    return (
        <div className="w-full px-4 sm:px-0">
            <h1 className={`mb-10 md:text-4xl sm:text-3xl text-2xl font-medium ${textColor} text-center uppercase`}>
                {title}
            </h1>
        </div>
    );
};

export default SectionHeading;
