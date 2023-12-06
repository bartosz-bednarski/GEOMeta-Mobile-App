export const getTopics = async (accessToken) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/forum/getTopics",
    // "http://localhost:9001/api/forum/getTopics",
    {
      method: "GET",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.data;
};

export const sendComment = async (accessToken, topicId, newComment) => {
  const url = accessToken
    ? `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/authorized`
    : `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/unauthorized`;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newComment),
  });
  const data = await response.json();
  return data;
};

export const createTopic = async (
  accessToken,
  usernameShort,
  textInput,
  iconBackgroundColor
) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/forum/createTopic",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        usernameShort: usernameShort,
        topic: textInput,
        iconBackgroundColor: iconBackgroundColor,
      }),
    }
  );
  const data = await response.json();
  return data;
};
