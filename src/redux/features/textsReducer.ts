export enum TEXT_TYPES {
    SET_LANGUAGE = 'SET_LANGUAGE'
}

const textContent = {
    helloHeader: {
        en: "Hello, I'm",
        ru: 'Привет, я'
    },
    myName: {
        en: 'Sergey Kamalyan',
        ru: 'Сергей Камалян'
    },
    myProfession: {
        en: 'Frontend Developer',
        ru: 'Фронтенд Разработчик'
    },
    downloadCV: {
        en: 'Download CV',
        ru: 'Скачать CV'
    },
    letsTalk: {
        en: "Let's talk",
        ru: 'Давай поговорим'
    }
};

const INITIAL_STATE = {
    textContent: textContent,
    language: 'en'
};

const texts = (state = INITIAL_STATE, action: { type: string; payload: string }) => {

    switch (action.type) {
        case TEXT_TYPES.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload as string,
            };
        default:
            return state;
    }
};
export default texts;