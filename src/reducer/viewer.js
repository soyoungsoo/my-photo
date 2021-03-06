import todoAction from '../action/index';
const {ADD_PHOTO, DELETE_PHOTO, CHOOSE_PHOTO, NEXT_PHOTO, PREV_PHOTO} = todoAction.viewer;

const view = (state, action) => {
    let size = 0;
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state,
                photo: [...state.photo, {title: action.title, desc: action.desc, url: action.url}]
            };
        case DELETE_PHOTO:
            state.photo.splice(action.index, 1);
            return {
                ...state,
                currentIndex: 0,
                type: action.type
            };
        case CHOOSE_PHOTO:
            return {
                    ...state,
                    currentIndex: action.currentIndex,
                    type: action.type
            };
        case NEXT_PHOTO:
             size = state.photo.length;

            if (action.currentIndex + 1 >= size) {
                return {
                    ...state,
                    currentIndex: 0,
                    type: action.type
                };
            } else {
                return {
                    ...state,
                    currentIndex: action.currentIndex + 1,
                    type: action.type
                };
            }
        case PREV_PHOTO:
            size = state.photo.length;

            if (action.currentIndex == 0) {
                return {
                    ...state,
                    currentIndex: size - 1,
                    type: action.type
                };
            } else {
                return {
                    ...state,
                    currentIndex: action.currentIndex - 1,
                    type: action.type
                };
            }
        default:
            return state;
    }
};



const viewer = (state = [], action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return view(state, action);
        case DELETE_PHOTO:
            return view(state, action);
        case CHOOSE_PHOTO:
            return view(state, action);
        case NEXT_PHOTO:
            return view(state, action);
        case PREV_PHOTO:
            return view(state, action);
        default:
            return state;
    }
};

export default viewer;
