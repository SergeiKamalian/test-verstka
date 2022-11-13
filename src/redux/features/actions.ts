import { TEXT_TYPES } from "./textsReducer";

export const setLanguage = (language: string) => ({
	type: TEXT_TYPES.SET_LANGUAGE,
	payload: language
})
