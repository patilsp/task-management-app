"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useBoardStore } from "@/store/BoardStore";
import fetchSuggestion from "@/lib/fetchSuggestion";
import Gravatar from "react-gravatar";

export default function Header() {
  const readyForGPTRef = useRef(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>('');
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  useEffect(() => {
    if (!board.columns?.size) {
      return;
    }
    const fetchSuggestionFunc = async () => {
      setLoading(true);
      const suggestionResult = await fetchSuggestion(board);
      setSuggestion(suggestionResult);
      setTimeout(() => {
        readyForGPTRef.current = true;
      }, 10000);
      setLoading(false);
    };
    if (!loading && readyForGPTRef.current) {
      readyForGPTRef.current = false;
      fetchSuggestionFunc();
    }
  }, [board]);

  return (
    <header>
      <div className="flex flex-col items-center rounded-b-2xl p-5 md:flex-row">
        <div className="flex items-center justify-center px-5 md:py-5">
          <p className="flex w-fit max-w-3xl items-center rounded-xl bg-white p-5 py-2 text-sm font-light italic text-[#0055D1] shadow-xl">
            <UserCircleIcon
              className={`mr-1 inline-block h-10 w-10 text-[#0055D1]
            ${loading && 'animate-spin'}`}
            />
            {suggestion && !loading ? suggestion : 'GPT is summarizing your tasks for the day...'}
          </p>
        </div>
        <div className="flex w-full flex-1 items-center justify-end space-x-5">
          <form className="flex flex-1 items-center space-x-5 rounded-md bg-white p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon
              className="h-6 w-6 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 outline-none"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* <Gravatar email="a-email@example.com" size={50} /> */}
        </div>
      </div>
    </header>
  );
}
