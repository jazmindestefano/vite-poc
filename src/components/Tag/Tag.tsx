import React from 'react';

export interface TagProps {
  label: string;
  color: string;
}

export const Tag = ({ label, color }: TagProps) => {
  return (
    <span className={`inline-block bg-[${color}] text-gray-800 px-3 py-1 rounded-full`}>
      {label}
    </span>
  );
};