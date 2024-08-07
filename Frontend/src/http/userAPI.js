import { $authHost, $host } from "./index";

export const registration = async (username, password, name) => {
  const { data } = await $host.post("api/user/registration", {
    username,
    password,
    name,
  });
  return data;
};

export const login = async (username, password) => {
  const result = await $host.post("api/user/auth", { username, password });
  return result.data;
};

export const changePassword = async (username, password, newPassword) => {
  const result = await $host.post("api/user/password-change", {
    username,
    password,
    newPassword,
  });
  return result.data;
};

export const check = async () => {
  try {
    const result = await $host.get("api/user/check-auth");
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
export const logout = async () => {
  try {
    await $authHost.post('/api/user/logout')
  } catch (error) {
    console.log(error)
  }
}