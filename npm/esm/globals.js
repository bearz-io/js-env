export const globals = globalThis;

export const WIN = (globals.Deno && globals.Deno.build.os === "windows") ||
    (globals.process && globals.process.platform === "win32") ||
    (globals.navigator && globals.navigator.userAgent.includes("Windows"));
