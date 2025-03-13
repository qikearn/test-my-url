// /utils/refererMemory.ts
type RefererMemory = {
  [sessionId: string]: string; // Map session ID to the referer URL
};

export const refererMemory: RefererMemory = {};

/**
 * Stores the referer for a session.
 * @param sessionId - A unique session ID
 * @param referer - The referer URL to store
 */
export function storeReferer(sessionId: string, referer: string) {
  refererMemory[sessionId] = referer;
}

/**
 * Retrieves the referer for a session.
 * @param sessionId - A unique session ID
 * @returns The referer URL or null if not found
 */
export function getReferer(sessionId: string): string | null {
  return refererMemory[sessionId] || null;
}

/**
 * Generates a unique session ID.
 */
export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
