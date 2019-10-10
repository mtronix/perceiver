// Listener.d.ts
export declare type Listener = Function;

// Percievable.d.ts
export interface Perceivable<ListenerFn extends Listener> {
  subscribe(listener: ListenerFn): Function;
  unsubscribe(listener: ListenerFn): void;
  notify(...args: any): this;
}

// Perceiver.d.ts
export declare const Perceiver: <ListenerFn extends Function>() => Perceivable<ListenerFn>;
