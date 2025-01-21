export type ExtractType<T> = T extends { data: infer D } ? D : never;
