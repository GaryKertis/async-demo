// -> 1 = The big Lebowski

// simple example with callbacks.

(name) => {
  // ??? MYSTERIOUS STUFF.
  // DO something mysterious with name.
};

const getUserName = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === 1) {
        resolve("Gary");
      } else if (id === 2) {
        resolve("Pete");
      }
    }, 1000);
  });
};

const getFavoriteMovie = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (user === "Gary") {
        resolve("The Big Lebowski");
      } else if (user === "Pete") {
        resolve("The Penguins of Madagascar");
      }
    }, 1000);
  });
};

const doStuff = async () => {
  try {
    let userName = await getUserName(1);
    let favoriteMovie = await getFavoriteMovie(userName);
  } catch (e) {
    console.error(e);
  }
  console.log(favoriteMovie);
};

doStuff();
