import React from 'react';
import { UsersIcon } from '@heroicons/react/20/solid'

const SearchBar: React.FunctionComponent<any> = ({setUrl}) => {
  return (
    <>
      <div className="flex rounded shadow-sm h-full">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            className="block w-full rounded border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search for a user" 
            onChange={(e) => setUrl(`http://localhost:8000/contacts?q=${e.target.value}`)}
          />
        </div>
        </div>
    </>
  )
}

export default SearchBar
