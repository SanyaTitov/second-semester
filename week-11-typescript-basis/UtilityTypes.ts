interface User {
    id: number;
    name: string;
    email?: string;
    age: number;
}
type UpdateUserRequest = Partial<User>;