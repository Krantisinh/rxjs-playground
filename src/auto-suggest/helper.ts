import { Observable, of } from "rxjs";

const users = [
  "Amit",
  "Amrish",
  "Animesh",
  "Anu",
  "Arshpreet",
  "Atul",
  "Ayush",
  "Chetan",
  "Dipti",
  "Dhanashree",
  "Devendra",
  "Divyata",
  "Harshal",
  "Joy",
  "Junaid",
  "Kedar",
  "Kishore",
  "Kumar",
  "Krantisinh",
  "Mahesh",
  "Nilam",
  "Nikhil",
  "Nitesh",
  "Nishil",
  "Piyush",
  "Prachi",
  "Pramod",
  "Pragati",
  "Rakesh",
  "Sachin",
  "Sarthak",
  "Satish",
  "Saurabh",
  "Shraddha",
  "Swati",
  "Vaibhav",
];

const searchUser = (text: string) =>
  users.filter(
    (user: string) => text && user.toLowerCase().includes(text.toLowerCase())
  );

/**
 * Observable of search results
 * @param text string to be searched
 */
export const searchUser$ = (text: string): Observable<string[]> =>
  of(searchUser(text));

export const flattenUsers = (users: string[]) =>
  users.reduce((a, user) => `${a} <br /> ${user}`, "");

export const updateDom = (element: HTMLElement) => (users: string[]) =>
  (element.innerHTML = flattenUsers(users));

export const searchTxtEl: HTMLElement = document.getElementById("searchTxt");
export const resultsEl: HTMLElement = document.getElementById("results");