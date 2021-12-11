import { createStore } from "vuex";
import { findIndex } from 'lodash';
import Task from "../models/Task"

export default createStore({
  state: {
    tasks: [
      {
        name: "Demo for VueJS and TS",
        created: new Date(),
        lastUpdated: new Date(),
        completed: false
      },
      {
        name: "UI Design",
        created: new Date(),
        updatedAt: new Date(),
        completed: false
      }
    ] as Task[]
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),
    deleteTask(state, task){
      let taskIndex = findIndex(state.tasks, task);
      state.tasks.splice(taskIndex, ++taskIndex);
    },
    completeTask(state, task){
      const taskIndex = findIndex(state.tasks, task);
      state.tasks[taskIndex].completed = true;
    }
  },
  actions: {},
  modules: {},
});
