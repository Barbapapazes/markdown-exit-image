export interface Options {
  /**
   * Path to the public folder.
   *
   * @default "public"
   */
  publicFolder?: string;
}

export interface ResolvedOptions extends Required<Options> {}
