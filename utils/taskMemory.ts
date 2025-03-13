// /utils/taskMemory.ts
export type TaskDetails = {
  publisherUrl: string; // The URL of the publisher
  taskToken: string; // Unique token for identifying the task
  sessionToken: string; // Token for tracking the user's session
  completed: boolean; // Indicates if the task has been completed
};

export type TaskMemory = {
  [key: string]: TaskDetails;
};

// In-memory storage for tasks
export const taskMemory: TaskMemory = {};

/**
 * Generates a unique token.
 */
export function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Adds a new task to the task memory.
 * @param linkId - The unique ID for the task.
 * @param publisherUrl - The URL of the publisher.
 */
export function addTask(linkId: string, publisherUrl: string): string {
  const taskToken = generateToken();
  const sessionToken = generateToken();
  taskMemory[linkId] = {
    publisherUrl,
    taskToken,
    sessionToken,
    completed: false,
  };
  return sessionToken;
}

/**
 * Validates a session token.
 * @param sessionToken - The session token to validate.
 */
export function validateSessionToken(sessionToken: string): TaskDetails | null {
  return Object.values(taskMemory).find((task) => task.sessionToken === sessionToken) || null;
}

/**
 * Marks a task as completed.
 * @param linkId - The unique ID for the task.
 */
export function completeTask(linkId: string): boolean {
  if (taskMemory[linkId]) {
    taskMemory[linkId].completed = true;
    return true;
  }
  return false;
}
