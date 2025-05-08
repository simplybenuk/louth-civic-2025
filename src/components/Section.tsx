
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
