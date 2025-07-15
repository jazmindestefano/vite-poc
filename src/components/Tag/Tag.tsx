import React from 'react';

export interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="inline-block bg-[#E1EE32] text-gray-800 px-3 py-1 rounded-full">
      {label}
    </span>
  );
};