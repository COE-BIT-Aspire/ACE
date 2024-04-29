

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
  export interface NewTodoRequest {
    text: string;
  }
  
  export interface UpdateTodoRequest {
    id: string;
    text?: string;
    completed?: boolean;
  }
  