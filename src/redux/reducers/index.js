const initialState = {
  favouriteList: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  console.log(state.favouriteList);
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteList: {
          ...state.favouriteList,
          content: [...state.favouriteList.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favouriteList: {
          ...state.favouriteList,
          content: state.favouriteList.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
