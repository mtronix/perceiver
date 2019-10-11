export interface Perceivable<ListenerArgs extends any[] = any[]> {
  // Add listener to the subscribers list
  // and return function which unsubscribes this listener
  subscribe(listener: (...args: ListenerArgs) => void): () => void;

  // Remove listener from subscriptions list
  unsubscribe(listener: (...args: ListenerArgs) => void): void;

  // Notify all listeners
  notify(...args: ListenerArgs): void;
}
