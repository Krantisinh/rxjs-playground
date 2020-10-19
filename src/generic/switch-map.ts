import { interval } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";

const a$ = interval(500).pipe(
  map((x) => `A${x}`),
  take(3)
); // A0, A1, A2, ...

const b$ = interval(200).pipe(
  map((x) => `B${x}`),
  take(3)
); // B0, B1, B2, ...

const consoleLogger = (x) => console.log(x);

a$.pipe(switchMap((x) => b$.pipe(map((y) => x + y)))).subscribe(consoleLogger);
// A0B0, A0B1, A1B0, A1B1, A2B0, A2B1, A2B2
