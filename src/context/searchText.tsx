import React, { ReactNode, useState, createContext, useContext } from "react";

interface ISearchContext {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

interface ISearchContextProps {
  children: ReactNode;
}

const SearchContext = createContext({} as ISearchContext);

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }: ISearchContextProps) {
  const [searchText, setSearchText] = useState("a");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
}
