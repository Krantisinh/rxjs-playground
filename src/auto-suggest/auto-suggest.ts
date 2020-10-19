import { fromEvent, Observable } from "rxjs";
import { filter, pluck, switchMap, tap } from "rxjs/operators";
import { consoleLogger, errorLogger } from "../util";

import { resultsEl, searchTxtEl, searchUser$, updateDom } from "./helper";

const input$: Observable<Event> = fromEvent(searchTxtEl, "input");

export const search$ = input$.pipe(
  pluck("target", "value"),
  filter((x: string) => x.length > 2),
  tap(consoleLogger),
  switchMap((x: string) => searchUser$(x))
);

search$.subscribe(updateDom(resultsEl), errorLogger);
