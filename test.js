console.log("This is test script!");

try {
  console.log(process.argv);
  console.log(process.argv[2]);
  console.log(process.argv[2].split(" "));
} catch (e) {
  console.log("EEE ", e);
}
