// action type
const ADD_PHOTO = 'ADD_PHOTO';
const CHOOSE_PHOTO = 'CHOOSE_PHOTO';
const NEXT_PHOTO = 'NEXT_PHOTO';
const PREV_PHOTO = 'PREV_PHOTO';

// action creators
function addPhoto(title, desc, url) {
    return { type: ADD_PHOTO, title, desc, url };
}
function choosePhoto(currentIndex) {
    return { type: CHOOSE_PHOTO, currentIndex };
}

function nextPhoto(currentIndex) {
    return { type: NEXT_PHOTO, currentIndex };
}

function prevPhoto(currentIndex) {
    return { type: PREV_PHOTO, currentIndex };
}

export  {
    ADD_PHOTO,
    CHOOSE_PHOTO,
    NEXT_PHOTO,
    PREV_PHOTO,
    addPhoto,
    choosePhoto,
    nextPhoto,
    prevPhoto
}

