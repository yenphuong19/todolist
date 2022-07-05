import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    // Giá trị ban đầu của danh sách task
    initialState: [
    
    ],
    // Mỗi key của object reducer là một action creator
    reducers: {
        addTask: (state, action) => {
            // Không dùng return
            state.splice(state.length -1, 0, action.payload)
        }
    }
})

const { actions, reducer } = taskSlice;

export const { addTask } = actions;
export default reducer;