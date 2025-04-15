/**
 * Represents a programming language with its name and file extension.
 */
export type Language = {
  name: string; // The name of the programming language (e.g., "java", "python").
  fileExtension: string; // The file extension associated with the language (e.g., ".java", ".py").
};

/**
 * Enum for supported programming languages.
 * Provides a fixed set of language names for type safety.
 */
export const enum LANG {
  JAVA = "java",
}

/**
 * A mapping of language names to their file extensions.
 * Useful for resolving language details dynamically.
 */
export const LANGUAGE_EXTENSIONS: Record<LANG, string> = {
  [LANG.JAVA]: ".java",
};
