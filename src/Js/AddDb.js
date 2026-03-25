const getInstalledApps = () => {
  const storeInstallApps = localStorage.getItem("installedApps");
  if (storeInstallApps) {
    const storedApps = JSON.parse(storeInstallApps);
    return storedApps;
  } else {
    return [];
  }
};

const addInstallApps = (id) => {
  const installApps = getInstalledApps();
  if (installApps.includes(id)) {
    return;
  } else {
    installApps.push(id);
    const data = JSON.stringify(installApps);
    localStorage.setItem("installedApps", data);
  }
};

const uninstallApp = (id) => {
  const installedAppsstring = getInstalledApps();
  const installedApps = installedAppsstring.map((i) => parseInt(i));
  const updated = installedApps.filter((appId) => appId !== id);
  localStorage.setItem("installedApps", JSON.stringify(updated));
};

export { getInstalledApps, addInstallApps, uninstallApp };
