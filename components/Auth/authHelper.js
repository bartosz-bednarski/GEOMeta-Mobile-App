export const loginUser = async (username, password) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/users/login",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }
  );
  const data = await response.json();
  return data;
};

export const registerUser = async (username, email, password) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/users/register",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        iconBackgroundColor: randomColor,
      }),
    }
  );
  const data = await response.json();
  return data;
};
