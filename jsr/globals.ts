// deno-lint-ignore no-explicit-any
export const globals: typeof globalThis & Record<string, any> = globalThis as any;

export const WIN = (globals.Deno && globals.Deno.build.os === "windows") ||
    (globals.process && globals.process.platform === "win32") ||
    (globals.navigator && globals.navigator.userAgent.includes("Windows"));
