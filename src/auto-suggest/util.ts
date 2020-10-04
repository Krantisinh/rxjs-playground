import { Observable, of } from "rxjs";

const users = [
  "Arshpreet",
  "Animesh",
  "Swati",
  "Krantisinh",
  "Satish",
  "Kedar",
  "Chetan",
  "Junaid",
  "Anu",
  "Nitesh",
  "Atul",
  "Harshal",
  "Devendra",
  "Ayush",
  "Vaibhav",
  "Amrish",
  "Saurabh",
  "Nikhil",
];

const searchUser = (text: string) =>
  users.filter(
    (user: string) => text && user.toLowerCase().includes(text.toLowerCase())
  );

export const searchUser$ = (text: string): Observable<string[]> =>
  of(searchUser(text));

export const flattenUsers = (users: string[]) =>
  users.reduce((a, user) => `${a} <br /> ${user}`, "");

export const updateDom = (element: HTMLElement) => (users: string[]) =>
  (element.innerHTML = flattenUsers(users));
