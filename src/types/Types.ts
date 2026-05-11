export type User = {
  id: number;
  name: string;
  email: string;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export type UnifiedTodo = Todo & {
  user: User;
};
