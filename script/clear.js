const rm = require("rimraf");
rm("*.js", (err) => {
  if (err) throw err;
});
