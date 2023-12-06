export const importCountriesIcons = (continentId) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }
  if (continentId === "northAmerica") {
    images = importAll(
      require.context(
        "../../assets/continent/northAmerica",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "southAmerica") {
    images = importAll(
      require.context(
        "../../assets/continent/southAmerica",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "africa") {
    images = importAll(
      require.context(
        "../../assets/continent/africa",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "europe") {
    images = importAll(
      require.context(
        "../../assets/continent/europe",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "asia") {
    images = importAll(
      require.context(
        "../../assets/continent/asia",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  if (continentId === "oceania") {
    images = importAll(
      require.context(
        "../../assets/continent/oceania",
        false,
        /\.(webp|jpe?g|svg)$/
      )
    );
  }
  return images;
};
export const fetchContinentData = async (continentId) => {
  const response = await fetch(
    `https://geo-meta-rest-api.vercel.app/api/continents/${continentId}`,
    { mode: "cors" }
  );
  const data = await response.json();
  const dataMod = data.data.map((obj) => {
    return { country: obj.country, img: obj.img.replace("svg", "webp") };
  });
  return dataMod;
};
