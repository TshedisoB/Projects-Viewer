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
  console.log(deviceType);
  return deviceType;
}
