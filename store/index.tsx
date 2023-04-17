(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process, Buffer) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.reducer = exports.addEntry = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    entries: [],
};
const entriesSlice = (0, toolkit_1.createSlice)({
    name: 'entries',
    initialState,
    reducers: {
        addEntry(state, action) {
            state.entries.push(action.payload);
        },
    },
});
exports.addEntry = entriesSlice.actions.addEntry;
exports.reducer = entriesSlice.reducer;
exports.store = ({
    reducer: { entries: entriesSlice.reducer },
});

