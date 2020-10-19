import { combineLatest, forkJoin, fromEvent, interval, merge } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { consoleLogger } from "../util";

const a$ = interval().pipe(
  map((x) => `A${x}`),
  take(3)
);

const b$ = interval().pipe(
  map((x) => `B${x}`),
  take(3)
);

const click$ = fromEvent(document, "click");

// Avoid nested subscriptions
click$.subscribe((click) => {
  a$.subscribe(consoleLogger);
  b$.subscribe(consoleLogger);
});

// Preferred
const parallel$ = click$.pipe(switchMap((x) => combineLatest([a$, b$])));
const parallel1$ = click$.pipe(switchMap((x) => forkJoin([a$, b$])));

parallel$.subscribe(consoleLogger);
