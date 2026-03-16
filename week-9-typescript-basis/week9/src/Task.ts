export interface ITask {
    title: string;
    complete: boolean;
    id: number;
    createdAt: Date;
}

export type STask = Omit<ITask, 'createdAt'> & { createdAt: string };

export interface TaskActions {
    close: () => void;
    isComplete: () => boolean;
}

export class Task implements ITask, TaskActions {
    title: string;
    complete: boolean;
    id: number;
    createdAt: Date;

    constructor(title: string) {
        this.title = title;
        this.complete = false;
        this.createdAt = new Date();
        this.id = Date.now();
    }
    close(): void {
        this.complete = true;
    }
    isComplete(): boolean {
        return this.complete;
    }

}