import { $authHost } from ".";

export const getCat = async () => {
  const result = await $authHost.get("api/cat");
  console.log(JSON.stringify(result))
  return result.data;
};