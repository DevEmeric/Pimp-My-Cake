import axios from 'axios';

export const allowMessage = () => ({
  type: 'ALLOW_MESSAGE',
});

export const updateCustomMessage = e => ({
  type: 'UPDATE_CUSTOM_MESSAGE',
  customMessage: e.target.value,
});

export const toggle = () => ({
  type: 'TOGGLE_FONTS',
});


export const chooseDecorationType = dimension => ({
  type: 'CHOOSE_DECORATION_TYPE',
  decorationChoice: dimension,
});

export const chooseFont = choice => ({
  type: 'CHOOSE_FONT',
  font: choice,
});

export const getFonts = fonts => ({
  type: 'UPDATE_FONTS',
  fonts,
});

export const addFont = font => ({
  type: 'ADD_FONT',
  font,
});

export const changeBgColor = color => ({
  type: 'CHANGE_BACKGROUND_COLOR',
  color,
});

export const changeFontColor = color => ({
  type: 'CHANGE_FONT_COLOR',
  color,
});

export const fetchFonts = () => {
  return (dispatch) => {
    return axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBvHfWdKdPsFRaVwwh8z5lNIto2Ct9xzaA')
      .then((res) => {
        const fonts = res.data.items;
        dispatch(getFonts(fonts));
      });
  };
};