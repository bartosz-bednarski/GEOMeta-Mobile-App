export const getAchievements = async (accessToken) => {
  const response = await fetch(
    `https://geo-meta-rest-api.vercel.app/api/profile/getProfile`,
    {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.body;
};

export const changePassword = async (
  accessToken,
  oldPassword,
  newPassword,
  newPasswordConfirm
) => {
  const url = "https://geo-meta-rest-api.vercel.app/api/profile/changePassword";
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordConfirm: newPasswordConfirm,
    }),
  });
  const data = await response.json();
  return data;
};

export const postChangeShortname = async (accessToken, shortName) => {
  const url =
    "https://geo-meta-rest-api.vercel.app/api/profile/changeShortname";
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      usernameShort: shortName,
    }),
  });
  const data = await response.json();
  return data;
};
