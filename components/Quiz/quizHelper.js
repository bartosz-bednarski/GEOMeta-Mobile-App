export const getQuizGame = async (route) => {
  const url = `https://geo-meta-rest-api.vercel.app/api/quiz/get${route}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const dataMod = data.data.map((question) => {
    return {
      ...question,
      data: question.data.map((img) => {
        if (route === "Flags") {
          return { country_flag: img.country_flag.replace("svg", "webp") };
        } else if (route === "Emblems") {
          return {
            country_emblem: img.emblem.replace("svg", "webp"),
          };
        } else if (route === "Plates") {
          return {
            country_plate: img.plate.replace("svg", "webp"),
          };
        }
      }),
    };
  });
  return dataMod;
};

export const postQuizAnswers = async (route, accessToken, answersUser) => {
  const url = accessToken
    ? `https://geo-meta-rest-api.vercel.app/api/quiz/post${route}/auth`
    : `https://geo-meta-rest-api.vercel.app/api/quiz/post${route}`;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(answersUser),
  });
  const data = await response.json();
  return data;
};
