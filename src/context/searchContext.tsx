import React, { ReactNode, useState, createContext, useContext } from "react";

interface ISearchContext {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchSize: number;
  setSearchSize: React.Dispatch<React.SetStateAction<number>>;
}

interface ISearchContextProps {
  children: ReactNode;
}

const SearchContext = createContext({} as ISearchContext);

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }: ISearchContextProps) {
  const [searchText, setSearchText] = useState("");
  const [searchSize, setSearchSize] = useState(20);

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, searchSize, setSearchSize }}
    >
      {children}
    </SearchContext.Provider>
  );
}
