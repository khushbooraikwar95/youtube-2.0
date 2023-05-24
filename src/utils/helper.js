export const convertViews = (views) => {
  if (views < 1e3) return views;
  else if (views >= 1e3 && views < 1e6) return +(views / 1e3).toFixed(1) + "K";
  else if (views >= 1e6 && views < 1e9) return +(views / 1e6).toFixed(1) + "M";
  else if (views >= 1e9 && views < 1e12) return +(views / 1e9).toFixed(1) + "B";
  else if (views >= 1e12) return +(views / 1e12).toFixed(1) + "T";
};
