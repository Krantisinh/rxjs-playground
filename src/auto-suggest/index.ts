import { fromEvent, Observable } from "rxjs";
import { filter, pluck, switchMap, tap } from "rxjs/operators";

import { searchUser$ } from "./util";

const consoleLogger = (x: string) => console.log(x);

const searchTxtEl: HTMLElement = document.getElementById("searchTxt");
export const resultsEl: HTMLElement = document.getElementById("results");

const input$: Observable<Event> = fromEvent(searchTxtEl, "input");

export const search$ = input$.pipe(
  pluck("target", "value"),
  filter((x: string) => x.length > 2),
  // debounceTime(500),
  tap(consoleLogger),
  switchMap((x: string) => searchUser$(x))
);
