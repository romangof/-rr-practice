import { DISPLAY_ABOUT } from '../../redux/reducers';

export function changeDisplayedSection() {
    console.log(3333);

    return { type: DISPLAY_ABOUT, payload: 'about' };

    // Need thunks package to dispatch functions
    
    // return dispatch => {
    //     console.log(123);
    //     dispatch({ type: DISPLAY_ABOUT, payload: 'about' });
    //     return;
    // };

}