const { slate } = require("@radix-ui/colors");

const themes = {
  light: {
    loContrast: slate.slate12,
    hiContrast: "white",
  },
  dark: {
    loContrast: "white",
    hiContrast: "black",
  },
};

const themeValues = Object.keys(themes).reduce((prev, curr) => {
  const theme = themes[curr];
  const themeValues = {};
  for (const [key, value] of Object.entries(theme)) {
    themeValues[`--${key}`] = value;
  }
  prev.push(themeValues);
  return prev;
}, []);

module.exports = { themes, themeValues };
