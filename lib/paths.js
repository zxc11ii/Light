// Префикс для статических ресурсов (нужен для GitHub Pages)
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Light' : '';

// Хелпер для путей к публичным файлам
export function publicPath(path) {
  return `${BASE_PATH}${path}`;
}
