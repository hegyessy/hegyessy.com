export const randomImageSelectorFromDirectory = async function (path: string) {
  const featuredImages: string[] = [];
  const dir = Deno.readDir(path);

  for await (const entry of dir) {
    if (entry.isFile && (/\.(jpe?g|png|tiff?)$/i).test(entry.name)) {
      featuredImages.push(entry.name);
    }
  }

  const featuredImage =
    featuredImages[(featuredImages.length * Math.random()) | 0];

  return featuredImage;
};
