export const DISPLAY_ABOUT = 'DISPLAY_ABOUT';

const initialState = {
    displayedPage: 'home'
};

export function changeDisplay(state = initialState, {type, payload}) {
    if (type === DISPLAY_ABOUT) {
        return Object.assign(state, { displayedPage: payload });        
    }

    return initialState;
}