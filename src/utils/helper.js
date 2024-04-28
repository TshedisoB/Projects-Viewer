export function trimDate() {
  const date = new Date();
  const dateStr = date.toDateString();
  const time = date.toLocaleTimeString();

  return dateStr + " - " + time;
}

export function getDeviceType() {
  let deviceType;
  if (window.innerWidth < 768) {
    deviceType = "Mobile";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    deviceType = "Tablet";
  } else {
    deviceType = "Desktop";
  }
  return deviceType;
}

export function splitString(str) {
  const char = [];
  const regex = /[\s\S]/gu;
  let match;

  while ((match = regex.exec(str))) {
    char.push(match[0]);
  }

  return char;
}
