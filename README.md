# Perceiver

Ridiculously simple implementation of the observer pattern

Installing perceiver:
```
npm install --save perceiver
```

Importing perceiver to your project:
```js
import { Perceiver } from 'perceiver';
// or const { Perceiver } = require('perceiver');

const MyObserver = Perceiver();
MyObserver.subscribe(() => console.log('Listener one'));
MyObserver.subscribe(() => console.log('Listener two'));
MyObserver.subscribe(() => console.log('Listener three'));

MyObserver.notify();
```

Every listener is invoked with the same arguments as passed to notify()
Example with passing data to notify() function:

```js
import { Perceiver } from 'perceiver';

const MyObserver = Perceiver();
MyObserver.subscribe((eventId, eventName, eventPayload) => {
  console.log('Listener one', eventId, eventName, eventPayload)
});

MyObserver.subscribe((eventId, eventName, eventPayload) => {
  console.log('Listener two', eventId, eventName, eventPayload)
});

MyObserver.subscribe((eventId, eventName, eventPayload) => {
  console.log('Listener three', eventId, eventName, eventPayload)
});

MyObserver.notify(23, 'event name', { foo: 'bar' });
```

Typescript example:

```ts
import { Perceiver } from 'perceiver';

type CustomListenerFn = (id: number, name: string) => void;

const MyObserver = Perceiver<CustomListenerFn>();
MyObserver.subscribe((id: number, name: string) => console.log('listener: ', id, name));
```
