const masonry = new Macy({
  container: ".gallery__images",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    700: 3,
    1024: 4,
  },
  margin: {
    x: 40,
    y: 40,
  },
});
