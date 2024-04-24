import { JSX } from "preact";
import { AppProps } from "./main.jsx";

/*
                <RadioButton value="dom" name="Webpages" description="Client-side code running in a browser" />
                <RadioButton value="nodejs" name="NodeJS" description="Backend code running in Node.JS" />
                <RadioButton value="donebun" name="bun, deno, ts-node, etc." description="Backend code running a TypeScript-aware runtimes" />
                <RadioButton value="agnostic" name="Anywhere" description="" />
*/

function makeRadioGroup<K extends keyof AppProps>(targetProp: K, ...values: readonly [AppProps[K], string | JSX.Element, string | JSX.Element][]) {
    return <>
        {(values.map(([value, name, description]) => {
            return <RadioButton value={value} name={name} description={description} />;
        }))}
    </>;
}

export const Environment = makeRadioGroup("environment",
    ["web", "Webpages", "Client-side code running in a browser"],
    ["nodejs", "NodeJS", "Backend code running in Node.JS"],
    ["donebun", "bun, deno, ts-node, tsx, etc.", "Backend code running a TypeScript-aware runtimes"],
    ["agnostic", "Anywhere", "Platform-agnostic code that can run in any environment"]
);
