// ---1--2---3--4---X---|

// Someone needs to produce the data

function createObs(subscribe) {
  return {
    subscribe: subscribe,
  };
}

const a$ = createObs((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(5);
});

// Some one needs to observe & react to the data

const observer = {
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log("Done"),
};

a$.subscribe(observer);
