import React, { useState } from 'react';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

type SearchType = 'flights' | 'hotels';

const SearchWidget: React.FC = () => {
    const [searchType, setSearchType] = useState<SearchType>('flights');

    const affiliateLink = "https://wayaway.tpx.li/iVfBSncs";

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-4xl mx-auto text-gray-800">
            <div className="flex border-b mb-6">
                <button
                    onClick={() => setSearchType('flights')}
                    className={`py-2 px-6 font-semibold text-lg transition-colors duration-300 ${searchType === 'flights' ? 'border-b-4 border-brand-orange text-brand-orange' : 'text-gray-500 hover:text-brand-orange'}`}
                >
                    Flights
                </button>
                <button
                    onClick={() => setSearchType('hotels')}
                    className={`py-2 px-6 font-semibold text-lg transition-colors duration-300 ${searchType === 'hotels' ? 'border-b-4 border-brand-orange text-brand-orange' : 'text-gray-500 hover:text-brand-orange'}`}
                >
                    Hotels
                </button>
            </div>
            <form action={affiliateLink} method="GET" target="_blank" rel="noopener noreferrer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700 text-left">Origin</label>
                        <LocationIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                        <input type="text" id="origin" name="origin" placeholder="New York (JFK)" className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
                    </div>
                    <div className="relative">
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 text-left">Destination</label>
                        <LocationIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                        <input type="text" id="destination" name="destination" placeholder="London (LHR)" className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
                    </div>
                </div>
                <div className="relative">
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 text-left">Passengers</label>
                    <UserIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                    <input type="text" id="passengers" name="passengers" placeholder="2 Adults" className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                     <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchWidget;