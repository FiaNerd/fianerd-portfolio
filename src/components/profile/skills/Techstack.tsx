import { Icon } from '@iconify/react';

interface TechstackProps {
  name: string;
  icon: string;
}

const Techstack = ({ name, icon }: TechstackProps) => {
  return (
    <div className="text-center items-center grid grid-cols-2 gap-0 p-2 rounded-lg hover:scale-105 transition-transform duration-300 bg-[#b7b994] dark:bg-[#489c80] opacity-90 hover:opacity-100">
      <Icon
        icon={icon}
        name={name}
        className="text-2xl md:text-3xl justify-center items-center text-text-secondary mb-0 mx-auto"
      />
      <p className="text-center items-center text-text-primary mb-0">{name}</p>
    </div>
  );
};

export default Techstack;
