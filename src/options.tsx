import * as React from "preact";
import type { JSX } from "preact";
import { makeCheckboxList, makeRadioGroup } from "./options-helpers.jsx";

export const Environment = makeRadioGroup("environment",
    ["web", "Webpages", "Client-side code running in a browser"],
    ["nodejs", "NodeJS", "Backend code running in Node.JS"],
    ["donebun", "bun, deno, ts-node, tsx, etc.", "Backend code running a TypeScript-aware runtimes"],
    ["agnostic", "Anywhere", "Platform-agnostic code that can run in any environment"],
);

export const RuntimeVersion = makeRadioGroup("runtimeVersion",
    ["runtime-next", "Latest", "Use any JS features, including those that may not be in all runtimes yet"],
    ["runtime-modern", "ES 2022", "ECMAScript 2022 is the most recent version supported by all major browsers and supported Node versions"],
    ["runtime-older", "ES 2016", "Older unsupported versions of Node may only support ECMAScript 2016"],
);

export const ModuleSystem = makeRadioGroup("module",
    ["esm", "ECMAScript Modules (ESM)", "Modern module system using 'import' syntax. Recommended if you are using a bundler"],
    ["commonjs", "CommonJS", "Classic NodeJS modules using 'require' and 'module.exports'. Supported by bundlers, but not required"],
);

export const Bundler = makeRadioGroup("bundler",
    ["use-bundler", "Yes", "You will need to separately configure your bundler"],
    ["no-bundler", "No", "Use tsc to produce JS files"],
);

export const JSXGroup = makeRadioGroup("jsx",
    ["newer", "Yes", ""],
    ["no-jsx", "No", ""],
);

export const GoodIdeas = makeCheckboxList(
    ["verbatimModuleSyntax", <pre>verbatimModuleSyntax</pre>, "Always CommonJS and ESM import syntax when importing from modules of that type"],
    ["isolatedModules", <pre>isolatedModules</pre>, "Use bundler-friendly syntax for faster builds"],
    ["composite", <pre>composite</pre>, "Strictly define the set of input and output files for this config"],
);

export const Strictness = makeCheckboxList(
    ["noUncheckedIndexedAccess", <pre>noUncheckedIndexedAccess</pre>, "Assume that all array and string indexes might be out-of-bounds"],
    ["exactOptionalPropertyTypes", <pre>exactOptionalPropertyTypes</pre>, "Disallow undefined to be set to an optional property unless it's explicitly allowed"],
);

export const Style = makeCheckboxList(
    ["noImplicitReturns", <pre>noImplicitReturns</pre>, "Functions must explicitly return if a value is required"],
    ["noImplicitOverride", <pre>noImplicitOverride</pre>, "If a method is override, it must be marked as such"],
    ["noUnusedLocals", <pre>noUnusedLocals</pre>, "Local variables must be used if declared"],
    ["noUnusedParameters", <pre>noUnusedParameters</pre>, "Parameters must be used if declared"],
    ["noFallthroughCasesInSwitch", <pre>noFallthroughCasesInSwitch</pre>, "Make it an error for code to flow from one switch case to the next"],
    ["noPropertyAccessFromIndexSignature", <pre>noPropertyAccessFromIndexSignature</pre>, "Index signatures must be accessed through index notation instead of property access"],
);