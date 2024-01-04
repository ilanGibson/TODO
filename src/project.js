import { parseISO } from "date-fns";

export class Project {
    constructor(name = "My Project") {
        this.name = name;
        this.todos = [];
    }
    
    setName(newName) {
        this.name = newName;
    }

    getName() {
        return this.name;
    }

    getTodos() {
        return this.todos;
    }

    getTodoByTitle(title) {
        // filter through each todo
        // if the todo title includes the input title
        // then return that todo
        return this.todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
    }

    getTodoByDate(date = new Date()) {
        // parseISO converts date string to date object
        date = parseISO(date);
        // setHours is used to set hours, minutes, seconds, milliseconds to 0
        // so that the date can be compared without worrying about time
        return this.todos.filter(todo => differenceInDays(todo.dueDate.setHours(0, 0, 0, 0), date) === 0);
    }

    getFutureTodos() {
        return this.todos.filter(todo => todo.dueDate > Date.now());
    }

    getPastTodos() {
        // current date is used to compare with dueDate
        // filter through each todo
        // if the difference in milliseconds converted to days is greater than 1
        // then that todo was due atleast 1 day ago
        // millisecond conversion handled in differenceInDays function below
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return this.todos.filter(todo => differenceInDays(todo.dueDate, currentDate) > 0);
    }

    getTodoByPriority(priority) {
        return this.todos.filter(todo => todo.priority === priority);
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed === true);
    }

    getUncompletedTodos() {
        return this.todos.filter(todo => todo.completed === false);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}

// helper function to get difference in days between current date and due date of todo
// used in getPastTodos function
// date2 is the current date for getPastTodos()
// date2 is the input date for getTodoByDate()
function differenceInDays(date1, date2) {
    // positive diffInMs means date1 is in the past
    const diffInMs = (date2 - date1);
    // const diffInDays = Math.floor(Math.abs(diffInMs) / (1000 * 60 * 60 * 24));
    return diffInMs;
}
