import { Options, ResolvedOptions } from "./types.js";

export function resolveOptions(userOptions: Options = {}): ResolvedOptions {
  const defaultOptions: ResolvedOptions = {
    publicFolder: 'public',
  };

  const options = {
    ...defaultOptions,
    ...userOptions,
  }

  return options;
}
