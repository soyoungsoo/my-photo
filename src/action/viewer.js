// action type
const CHOOSE_PHOTO = 'CHOOSE_PHOTO';
const NEXT_PHOTO = 'NEXT_PHOTO';
const PREV_PHOTO = 'PREV_PHOTO';

// action creators
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
    CHOOSE_PHOTO,
    NEXT_PHOTO,
    PREV_PHOTO,
    choosePhoto,
    nextPhoto,
    prevPhoto
}

