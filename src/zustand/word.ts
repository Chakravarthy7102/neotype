import getWords from "@/utils/getWords";
import { create } from "zustand";

interface WordState {
  words: Array<string>;
  currectActiveCharacterIndex: number;
  currentActiveWordIndex: number;
  errors: {
    [index: number]: boolean;
  };
  //sets new words or gets random words from the json store and
  //resets to new paragraphs.
  setWords: () => void;
  //sets a word as error if the types charecter is wrong, compared to the original one.
  setError: () => void;

  //this will set a word to some state in which the word is typed correct by the user.
  setTypesCorrect: () => void;
  //sets the current active charecter the user at.
  setCurrentActiveIndex: () => void;
}

const useWordStore = create<WordState>((set) => ({
  words: getWords(),
  currectActiveCharacterIndex: 0,
  currentActiveWordIndex: 0,
  errors: {},
  setCurrentActiveIndex: () =>
    set((state) => {
      return state;
    }),
  setTypesCorrect: () =>
    set((state) => {
      return state;
    }),
  setWords: () =>
    set((state) => {
      return state;
    }),
  setError: () =>
    set((state) => {
      return state;
    }),
}));

export default useWordStore;
