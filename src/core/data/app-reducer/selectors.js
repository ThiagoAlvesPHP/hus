const app = (state) => state.app;
export const getScrollTop = (state) => app(state).scrollTop;
export const getScreen = (state) => app(state).screen;
export const getAll = (state) => app(state);
