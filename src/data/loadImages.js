export function loadImages(folder) {
  // Importa todas las imágenes de la carpeta usando glob
  const modules = import.meta.glob(`../assets/${folder}/*.{png,jpg,jpeg,gif}`, { eager: true });
  return Object.values(modules).map(m => m.default);
}