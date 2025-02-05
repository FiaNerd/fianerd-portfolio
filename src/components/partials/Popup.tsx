interface PopupProps {
  text: string;
  show: boolean;
}

const Popup = ({ text, show }: PopupProps) => {
  if (!show) return null;

  return (
    <div className="absolute z-20 py-2 px-4 rounded shadow-lg bg-bg-primary text-text-primary whitespace-nowrap transform -translate-x-1/2 left-1/2 top-full mt-2">
      <p className="text-xs text-center mb-0">{text}</p>
    </div>
  );
};

export default Popup;