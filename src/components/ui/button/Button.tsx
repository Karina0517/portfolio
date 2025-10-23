interface ButtonProps {
  variant?: "primary" | "primary_1" | "secondary" | "danger" | "info"; 
  text: string;
  click?: () => void;
}

export const MiButton = ({ variant = "primary", text, click }: ButtonProps) => {
  const base = "mt-4 px-4 py-2 rounded font-semibold transition m-2 focus:outline-none focus:ring-2";
  
const variants = {
    primary: "bg-sky-400 text-white hover:bg-sky-600 hover:text-white focus:ring-sky-400",
    primary_1: "bg-[#B66D82]/70 text-white hover:bg-[#B66D82] hover:text-white focus:ring-[#B66D82]",
    secondary: "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-300",
    danger: " text-rose-400 hover:bg-rose-400 hover:text-white focus:ring-rose-300",
    info: "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300" 
  };

  return (
    <button 
      onClick={click}
      className={`${base} ${variants[variant]} miButton`}
    >
      {text}
    </button>
  );
};