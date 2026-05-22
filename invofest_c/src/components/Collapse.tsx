import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface collapsProps {
    title : string ;
    description : string ;    
};

const Collapse :React.FC <collapsProps> = ({title, description}) => {
        const[isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border border-red-500 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 flex justify-between hover:bg-red-400 transition-colors w-full">
                <div className="p-2 bg-red-50">
                    <ChevronDown
                        className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  
                </div>
                <h3>{title}</h3>
            </button>
            {isOpen && <div className="p-4 bg-red-50">{description}</div>}
        </div>
    );
};

export default Collapse;