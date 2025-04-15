import { execSync } from "node:child_process";
import { LANG, Language } from "./types.ts";
import fs from "node:fs/promises";
import path from "node:path";

const EXEC_DIR_PATH = "out";

/**
 * Ensures the compiled directory exists. Creates it if it doesn't exist.
 * @returns {Promise<void>} - A promise that resolves when the directory is ensured.
 */
const ensureCompiledDir = async (): Promise<void> => {
  try {
    await fs.mkdir(EXEC_DIR_PATH, { recursive: true });
  } catch (err) {
    console.error(`Failed to ensure compiled directory: ${err}`);
  }
};

/**
 * Executes a shell command and returns the output as a string.
 * @param {string} command - The command to execute.
 * @returns {string} - The output of the executed command.
 * @throws {Error} - Throws an error if the command execution fails.
 */
const executeCommand = (command: string): string => {
  try {
    return execSync(command).toString();
  } catch (err) {
    throw new Error(`Command execution failed: ${err}`);
  }
};

/**
 * Resolves the language details (name and file extension) based on the provided language name.
 * @param {string} languageName - The name of the programming language.
 * @returns {Language} - An object containing the language name and file extension.
 */
const resolveLanguage = (languageName: string): Language => {
  const extensions: Record<string, string> = {
    [LANG.JAVA]: ".java",
  };

  return {
    name: languageName.toLowerCase(),
    fileExtension: extensions[languageName] || "",
  };
};

/**
 * Generates a unique file name using a UUID.
 * @returns {string} - A unique file name.
 */
const generateFileName = (): string => crypto.randomUUID();

/**
 * Creates a file with the specified name, extension, and content.
 * @param {string} fileName - The name of the file to create.
 * @param {string} fileExt - The file extension.
 * @param {string} code - The content to write to the file.
 * @returns {Promise<void>} - A promise that resolves when the file is created.
 */
const createFile = async (
  fileName: string,
  fileExt: string,
  code: string
): Promise<void> => {
  try {
    await ensureCompiledDir(); // Ensure the compiled directory exists
    await fs.writeFile(path.join(EXEC_DIR_PATH, `${fileName}${fileExt}`), code);
  } catch (err) {
    console.error(`Failed to create file: ${err}`);
  }
};

/**
 * Constructs the command to execute a file based on its language and file name.
 * @param {Language} lang - The language object containing name and file extension.
 * @param {string} fileName - The name of the file to execute.
 * @returns {string} - The command to execute the file.
 */
const getCommand = (lang: Language, fileName: string): string => {
  const commands: Record<string, string> = {
    [LANG.JAVA]: `java -cp ./Edu ./${EXEC_DIR_PATH}/${fileName}${lang.fileExtension}`,
  };

  return commands[lang.name] || "";
};

/**
 * Creates a file with the provided code, resolves the language, and executes the file.
 * @param {string} code - The source code to write to the file.
 * @param {string} langName - The name of the programming language.
 * @returns {Promise<string>} - The output of the executed command.
 */
const createAndRun = async (
  code: string,
  langName: string
): Promise<string> => {
  const langObject = resolveLanguage(langName);

  if (!langObject.fileExtension) return "Language not found!";

  const fileName = generateFileName();
  const command = getCommand(langObject, fileName);

  // Create the file and execute the command
  await createFile(fileName, langObject.fileExtension, code);
  return executeCommand(command);
};

export { createAndRun };
