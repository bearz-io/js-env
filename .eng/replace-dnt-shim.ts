import { dirname, fromFileUrl } from "jsr:@std/path@1";

const __dirname = dirname(fromFileUrl(import.meta.url));
const pwd = dirname(__dirname);

export async function deleteShim(path: string) {
    await Deno.remove(path);
}

export async function replaceGlobalsFile(path: string) {
    const content = `export const globals = globalThis;

export const WIN = (globals.Deno && globals.Deno.build.os === "windows") || 
    (globals.process && globals.process.platform === "win32") ||
    (globals.navigator && globals.navigator.userAgent.includes("Windows"));
    `;

    await Deno.writeTextFile(path, content);
}

export async function replaceGlobalsTypeFile(path: string) {
    const content = `export declare const globals: typeof globalThis & Record<string, any>;

export declare const WIN: boolean;
`;

    await Deno.writeTextFile(path, content);
}

await replaceGlobalsTypeFile(`${pwd}/npm/types/globals.d.ts`);
await replaceGlobalsFile(`${pwd}/npm/esm/globals.js`);
await deleteShim(`${pwd}/npm/esm/_dnt.shims.js`);
await deleteShim(`${pwd}/npm/types/_dnt.shims.d.ts`);
