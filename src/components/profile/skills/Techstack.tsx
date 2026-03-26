import { Icon } from '@iconify/react';

interface TechstackProps {
  name: string;
  icon: string;
}

const Techstack = ({ name, icon }: TechstackProps) => {
  return (
    // <div className='grid grid-cols-4'>
    <div className="text-center items-center grid grid-cols-1 gap-2 p-1 rounded-lg hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100">
  <Icon
        icon={icon}
        name={name}
        className="text-2xl md:text-3xl justify-center items-center text-text-secondary mb-0 mx-auto"
      />
      <p className="text-center items-center text-text-primary mb-0">{name}</p>
    
    </div>
    // </div>
  );
};

export default Techstack;
