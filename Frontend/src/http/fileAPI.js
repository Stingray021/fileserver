import { $authHost } from ".";

export const getFiles = async () => {
  const result = await $authHost.get("api/file");
  return result.data;
};
export const getFileName = async (name) => {
  const result = await $authHost.get("api/file/" + name, {
    responseType: "blob",
  });
  return { type: result.headers.get("Content-Type"), data: result.data };
};
