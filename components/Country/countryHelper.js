function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}
export const importEmblemsIcons = () => {
  const emblems = importAll(
    require.context(
      "../../assets/country/emblems",
      false,
      /\.(webp|jpe?g|png)$/
    )
  );
  return emblems;
};
export const importFlagsIcons = () => {
  const flags = importAll(
    require.context("../../assets/country/flags", false, /\.(webp|jpe?g|png)$/)
  );
  return flags;
};
export const importPlatesIcons = () => {
  const plates = importAll(
    require.context("../../assets/country/plates", false, /\.(webp|jpe?g|png)$/)
  );
  return plates;
};
export const fetchCountryData = async (countryName) => {
  const response = await fetch(
    `https://geo-meta-rest-api.vercel.app/api/countries/${countryName}`,
    { mode: "cors" }
  );
  const data = await response.json();
  const dataMod = {
    ...data.data[0],
    country_flag: data.data[0].country_flag.replace("svg", "webp"),
    emblem: data.data[0].emblem.replace("svg", "webp"),
    plate: data.data[0].plate.replace("svg", "webp"),
  };
  return dataMod;
};
