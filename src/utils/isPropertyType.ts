export function isPropertyType<T>(obj: {} | T, key: keyof T): obj is T {
  return obj !== null && typeof obj === "object" && key in obj;
}
