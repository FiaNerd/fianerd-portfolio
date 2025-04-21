export const mergeTranslations = (...files: any[]) => {
  return files.reduce((acc, file) => {
    return { ...acc, ...file };
  }, {});
};
