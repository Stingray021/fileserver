import { $authHost } from ".";

export const getJokes = async () => {
  const result = await $authHost.get("api/jokes");
  return result.data;
};
