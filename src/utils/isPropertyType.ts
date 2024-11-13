// Helper function to check if a property exists on an object
// Used to see of an object is of a certain type
export function isPropertyType<T>(obj: {} | T, key: keyof T): obj is T {
  return obj !== null && typeof obj === "object" && key in obj;
}
