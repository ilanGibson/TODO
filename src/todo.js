import { parseISO } from "date-fns";

export class Todo {
    constructor(title = "New TODO", description = "", dueDate = new Date(), priority = "1", completed = false) {
        this.title = title;
        this.description = description;
        // check if dueDate is a string then parse it to a date object
        // otherwise assume it is a date object
        this.dueDate = typeof dueDate === "string" ? parseISO(dueDate) : dueDate;
        this.priority = priority;
        this.completed = completed;
        
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getTitle() {
        return this.title;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getDescription() {
        return this.description;
    }

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    getDueDate() {
        return this.dueDate;
    }

    getDueDateDay() {
        return this.dueDate.getDate();
    }
    
    setPriority(newPriority) {
        this.priority = newPriority;
    }

    getPriority() {
        return this.priority;
    }
}