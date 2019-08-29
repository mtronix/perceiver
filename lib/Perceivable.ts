import { Listener } from './Listener';

export interface Perceivable<ListenerFn extends Listener> {
  // Add listener to the subscribers list
  // and return function which unsubscribes this listener
  subscribe(listener: ListenerFn): Function;

  // Remove listener from subscriptions list
  unsubscribe(listener: ListenerFn): void;

  // Notify all listeners
  notify(...args: any): this;
}
