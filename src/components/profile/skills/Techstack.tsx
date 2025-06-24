import { Icon } from '@iconify/react';

interface TechstackProps {
  name: string;
  icon: string;
}

const Techstack = ({ name, icon }: TechstackProps) => {
  return (
    <div className="text-center items-center grid grid-cols gap-0 p-2 rounded-lg hover:scale-105 transition-transform duration-300 bg-[#535437] dark:bg-[#489c80] opacity-90 hover:opacity-100">
      <p className="text-center items-center text-text-primary mb-0">{name}</p>
      <Icon
        icon={icon}
        name={name}
        className=" text-2xl md:text-3xl justify-center w-96 align-middle"
      />
    </div>
  );
};

export default Techstack;
