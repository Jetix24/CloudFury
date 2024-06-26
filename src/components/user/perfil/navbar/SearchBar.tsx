"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState(''); // Se inicializa el estado con un string vacío
    const router = useRouter(); // Se obtiene el router de Next.js
    

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        const encodedSearchQuery = encodeURI(searchQuery); // Codifica la cadena de búsqueda
        router.push(`/search?q=${encodedSearchQuery}`); // Redirige a la página de búsqueda con la cadena codificada
    };

    return ( 
    <form onSubmit={onSearch} className="w-full px-1 lg:px-8" autoComplete="off">
        <div className="relative w-full h-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input value={searchQuery} onChange={(event)=> setSearchQuery(event.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
        </div>
    </form>
);
}
 
export default SearchBar;