import React from 'react';

const QuestionOptions = ({ questionOptions, selectedQuestion, onSelect }) => {
  return (
    <div className='flex flex-col items-center mx-auto'>
      {questionOptions.map((option, index) => (
        <div
          key={index}
          className={`p-4 border-2 border-gray-300 hover:border-[#ee8bb9] w-64 mb-3 cursor-pointer ${
            selectedQuestion === option ? 'border-[#ee8bb9]' : ''
          }`}
          onClick={() => onSelect(option)}
        >
          <p className='text-center'>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionOptions;
