const { createStore } = require("redux");
const { rootReducer } = require("./rootReducer");

export const store = createStore(rootReducer);