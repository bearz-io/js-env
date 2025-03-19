/**
 * Options for variable substitution.
 */
export interface SubstitutionOptions {
    /**
     * Enables or disables Windows-style variable expansion.
     * @default true
     */
    windowsExpansion?: boolean;
    /**
     * Enables or disables Unix-style variable expansion.
     * @default true
     */
    unixExpansion?: boolean;
    /**
     * Enables or disables Unix-style variable assignment.
     * @default true
     */
    unixAssignment?: boolean;
    /**
     * Enables or disables Unix-style custom error messages.
     * @default true
     */
    unixCustomErrorMessage?: boolean;
    /**
     * Enables or disables Unix-style argument expansion.
     * @default true
     */
    unixArgsExpansion?: boolean;
    /**
     * A function that retrieves the value of an environment variable.
     * Setting this option overrides the default behavior
     * @param key - The name of the environment variable.
     * @returns The value of the environment variable, or `undefined` if it is not set.
     */
    get?: (key: string) => string | undefined;
    /**
     * A function that sets the value of an environment variable.
     * Setting this option overrides the default behavior.
     * @param key - The name of the environment variable.
     * @param value - The value to set.
     */
    set?: (key: string, value: string) => void;
}
/**
 * Expands variables in a string using bash or windows style expansion.
 * @param template The template to expand.
 * @param get The function to get the value of a variable.
 * @param set The function to set the value of a variable.
 * @param options The substitution options for the expansion.
 * @returns The string with the expanded variables.
 */
export declare function expand(
    template: string,
    get: (key: string) => string | undefined,
    set: (key: string, value: string) => void,
    options?: SubstitutionOptions,
): string;
