export function formatNumber(num) {
  return numeral(num).format("0a");
}

// https://stackoverflow.com/a/38340730/8919391
export function removeEmptyArrays(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v.length != 0)
  );
}

export function redirect(url) {
  window.open(url, `_blank`);
}

export function squeezeWebsiteName(url, hasSuffix) {
  url = url.toLowerCase();
  let searchFor = url.includes(`www.`)
    ? `www.`
    : url.includes(`https://`)
    ? `https://`
    : `http://`;

  let endingIndex = url.indexOf(`.`, url.indexOf(searchFor));
  if (hasSuffix) {
    endingIndex =
      url.indexOf(`/`, url.indexOf(`.`, url.indexOf(searchFor))) !== -1
        ? url.indexOf(`/`, url.indexOf(`.`, url.indexOf(searchFor)))
        : url.length;
  }

  return url.substring(url.indexOf(searchFor) + searchFor.length, endingIndex);
}

export function objToUrl(obj) {
  // https://stackoverflow.com/a/38340730/8919391
  obj = Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v.length > 0)
  );
  return decodeURIComponent(new URLSearchParams(obj));
}

export function isEmptyObj(obj) {
  for (let i in obj) return false;
  return true;
}

export function isUrl(val) {
  let url;
  try {
    url = new URL(val);
  } catch (e) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
