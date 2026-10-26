export function slugify(str) {
  return (
    str
      // Split accented letters into base letter + mark and drop the mark,
      // so "educación" becomes "educacion" instead of "educaci-n".
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  );
}
