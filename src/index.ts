import { resultsEl, search$ } from "./auto-suggest";
import { updateDom } from "./auto-suggest/util";

search$.subscribe(updateDom(resultsEl));
