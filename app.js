// simple example with callbacks.
const getUserName = (id, callback) => {
  setTimeout(() => {
    if (id === 1) {
      callback("Gary");
    } else if (id === 2) {
      callback("Pete");
    }
  }, 1000);
};

const getFavoriteMovie = (user, callback) => {
  setTimeout(() => {
    if (user === "Gary") {
      callback("The Big Lebowski");
    } else if (user === "Pete") {
      callback("The Penguins of Madagascar");
    }
  }, 1000);
};
