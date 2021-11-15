// simple example with callbacks.
const getUserName = (id, callback) => {
  setTimeout(() => {
    if (id === 1) {
      callback("Gary");
    }
    if (id === 2) {
      callback("Pete");
    }
  }, 1000);
};

const getFavoriteMovie = (user, callback) => {
  setTimeout(() => {
    if (user === "Gary") {
      callback("The Big Lebowski");
    }
    if (user === "Pete") {
      callback("The Penguins of Madagascar");
    }
  }, 1000);
};

getUserName(1, (userName) => {
  getFavoriteMovie(userName, (favoriteMovie) => {
    console.log(favoriteMovie);
  });
});
