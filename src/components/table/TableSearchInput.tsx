import { ChangeEvent } from "react";

interface SearchInputProps {
    placeholder: string;
    value: string
    handleChange: (value: string) => void
    fetchData?: () => void
}

export const TableSearchInput: React.FC<SearchInputProps> = ({ placeholder,
    value, handleChange,
    fetchData }) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                value={value}
            />
            <button onClick={fetchData} className="text-white absolute end-1 bottom-1 bg-primary focus:ring-4 focus:outline-none focus:bg-primary font-medium rounded-lg text-sm px-3 py-1 top-1 ">Buscar</button>
        </div>
    );
};
