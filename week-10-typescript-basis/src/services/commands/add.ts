// src/services/commands/add.ts
import { Command } from "../types";
import { TaskManager } from "../../models/TaskManager";

export const add: Command = {
    accept(...argv: string[]) {
        return argv[0] === "add" && argv.length >= 2;
    },

    run(tm: TaskManager, ...argv: string[]) {
        const title = argv.slice(1).join(" ");

        if (!title.trim()) {
            console.log("Error: title cannot be empty");
            return false;
        }

        tm.add(title);
        console.log(`Added task: "${title}"`);
        return true; // нужно сохранить
    },

    description: "add [long title]: add new task"
};