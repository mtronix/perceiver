import { Perceivable } from './Perceivable';

export const Perceiver = function<ListenerArgs extends any[] = any[]>(): Perceivable<ListenerArgs> {
  type ListenerFn = (...args: ListenerArgs) => void;
  let listeners: ListenerFn[] = [];

  return {
    // Remove listener from subscriptions list
    unsubscribe(listener: ListenerFn) {
      const trimmedListeners: ListenerFn[] = [];

      // Copy
      for (let i = 0, length = listeners.length; i < length; i++) {
        if (listener !== listeners[i]) {
          trimmedListeners.push(listeners[i]);
        }
      }

      // Replace existing list of listeners with new one
      listeners = trimmedListeners;
    },

    // Add listener to the subscribers list
    subscribe(listener: ListenerFn) {
      listeners.push(listener);

      return () => this.unsubscribe(listener);
    },

    // Notify all listeners
    notify(...args: ListenerArgs) {
      for (let i = 0, length = listeners.length; i < length; i++) {
        listeners[i](...args);
      }

      return this;
    },
  };
}
