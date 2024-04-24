import * as React from 'preact';
import { useRef, useEffect, useLayoutEffect, useContext, useCallback } from 'preact/hooks';
import { AppPropsContext, RadioContext } from './context.jsx';
import { CheckBox, RadioButton, TextBox } from './controls.jsx';
import { Bundler, Environment, GoodIdeas, JSXGroup, ModuleSystem, RuntimeVersion, Strictness, Style } from './options.jsx';
import { JSX } from 'preact';

export const PageNames = [
    "Environment",
    "Runtime-Target",
    "Bundler",
    "File-Layout",
    "Module-System",
    "JSX",
    "Good-Ideas",
    "Strictness-Options",
    "Style-Options",
    "Done"
] as const;

const GoodIdeaNames = [
    "verbatimModuleSyntax",
    "isolatedModules",
    "composite"
] as const;

const StrictnessNames = [
    "noUncheckedIndexedAccess",
    "exactOptionalPropertyTypes",
] as const;

const StyleNames = [
    "noImplicitReturns",
    "noImplicitOverride",
    "noUnusedLocals",
    "noUnusedParameters",
    "noFallthroughCasesInSwitch",
    "noPropertyAccessFromIndexSignature",
] as const;

type AllBooleanOptionsNames =
    (typeof GoodIdeaNames)[number] |
    (typeof StrictnessNames)[number] |
    (typeof StyleNames)[number];

export type PageName = (typeof PageNames)[number];

export type AppProps = {
    pageName: PageName;
    previewJSON: boolean;

    environment: "web" | "nodejs" | "donebun" | "agnostic";
    runtimeVersion: "runtime-next" | "runtime-modern" | "runtime-older";
    bundler: "use-bundler" | "no-bundler";
    module: "commonjs" | "esm";
    jsx: "no-jsx" | "older" | "newer";

    srcDir: string;
    outDir: string;
} & Record<AllBooleanOptionsNames, boolean>;

export const update = (() => {
    const renderTarget = document.getElementById("render-target") ?? (() => { throw new Error("Couldn't find div#render-target") })();

    let props: AppProps = {
        pageName: PageNames[0],
        previewJSON: false,

        srcDir: "./src",
        outDir: "./dist",
        environment: "web",
        runtimeVersion: "runtime-modern",
        module: "esm",
        bundler: "no-bundler",
        jsx: "no-jsx",

        verbatimModuleSyntax: true,
        isolatedModules: true,
        composite: true,

        exactOptionalPropertyTypes: true,
        noUncheckedIndexedAccess: true,

        noImplicitReturns: false,
        noImplicitOverride: false,
        noUnusedLocals: false,
        noUnusedParameters: false,
        noFallthroughCasesInSwitch: false,
        noPropertyAccessFromIndexSignature: false,
    };

    const saved = window.localStorage.getItem("saved-props");
    if (saved) {
        const urlParams = new URLSearchParams(window.location.search);
        const clear = urlParams.get('clear');
        if (clear) {
            window.location.search = "";
        } else {
            props = { ...props, ...JSON.parse(saved) };
        }
    }
    mut(props);
    return mut;

    function mut(newProps: AppProps) {
        props = newProps;
        React.render(<App {...props} />, renderTarget);
        window.localStorage.setItem("saved-props", JSON.stringify(props, undefined, 2));
    }
})();

function App(props: AppProps) {
    return <AppPropsContext.Provider value={props}>
        <div class="wizard">
            {getPage()}
        </div>
        {!props.previewJSON ? null : <pre>{getJSON(props)}</pre>}
    </AppPropsContext.Provider>;

    function getPage(): JSX.Element {
        switch (props.pageName) {
            case 'Environment':
                return <Page_Environment />;
            case 'Runtime-Target':
                return <Page_RuntimeTarget />;
            case 'Bundler':
                return <Page_Bundler />;
            case 'File-Layout':
                return <Page_FileLayout />;
            case 'Module-System':
                return <Page_ModuleSystem />;
            case 'JSX':
                return <Page_JSX />;
            case 'Good-Ideas':
                return <Page_GoodIdeas />;
            case 'Strictness-Options':
                return <Page_Strictness />;
            case 'Style-Options':
                return <Page_Style />;
            case 'Done':
                debugger;
                return <Page_Done />;
        }
    }
}

function Page_Environment() {
    return <>
        <h2 class="header">Environment</h2>
        <div class="explanation">Where will your code be running? Note that if you have different runtime environments and aren't writing platform-agnostic code, you'll need to use multiple tsconfig files.</div>
        <div class="options">
            {Environment}
        </div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_RuntimeTarget() {
    return <>
        <h2 class="header">Runtime Version</h2>
        <div class="explanation">How old of a JavaScript version do you need to support?</div>
        <div class="options">{RuntimeVersion}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_ModuleSystem() {
    return <>
        <h2 class="header">Module System</h2>
        <div class="explanation">Are you primarily writing ECMAScript modules (ESM) or CommonJS modules?</div>
        <div class="options">{ModuleSystem}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_Bundler() {
    return <>
        <h2 class="header">Bundler</h2>
        <div class="explanation">Do you want to use a tool like esbuild, rollup, webpack, parcel, etc, to produce JS from your TypeScript files?</div>
        <div class="options">{Bundler}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_JSX() {
    return <>
        <h2 class="header">JSX</h2>
        <div class="explanation">Are you using JSX syntax?</div>
        <div class="options">{JSXGroup}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_FileLayout() {
    return <>
        <h2 class="header">File Layout</h2>
        <div class="explanation">
            How will you arrange your project on disk?
        </div>

        <div class="options">
            <TextBox propKey="srcDir" name="Source Directory" description="Location of input files" />
            <TextBox propKey="outDir" name="Output Directory" description="Where .js, .d.ts, and other outputs should be built to" />
        </div>

        <NavBar />
        <DownloadBar />
    </>;
}

function Page_GoodIdeas() {
    return <>
        <h2 class="header">Additional Configuration Checks</h2>
        <div class="explanation">
            We recommend these options for new codebases, though you might have reason to turn them off.
            They're easiest to comply with in a new project but can be a lot of work to enable later.
        </div>
        <div class="options">{GoodIdeas}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_Strictness() {
    return <>
        <h2 class="header">Strictness Options</h2>
        <div class="explanation">
            You can enable some additional strictness options that are not on by default. These may or may not be a good fit for the way you write code.
        </div>
        <div class="options">{Strictness}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_Style() {
    return <>
        <h2 class="header">Coding Style Options</h2>
        <div class="explanation">
            You can enable some additional style checks that are not on by default.
            These do not affect the correctness of a program, just the way you write code.
        </div>
        <div class="options">{Style}</div>
        <NavBar />
        <DownloadBar />
    </>;
}

function Page_Done() {
    const clear = useCallback(() => {
        const params = new URLSearchParams();
        params.set("clear", "true");
        window.location.search = params.toString();
    }, []);
    return <>
        <h2 class="header">Complete!</h2>
        <div class="explanation">
            <p>This is all of the options! Use the download links below to get your tsconfig file.</p>

            <p>You can also <a class="is-link" onClick={clear}>start over</a></p>
        </div>
        <NavBar />
        <DownloadBar />
    </>;
}

function NavBar() {
    const props = useContext(AppPropsContext);
    const goNext = useCallback(() => {
        update({ ...props, pageName: getNextPage(props) })
    }, [props]);
    const goBack = useCallback(() => {
        update({ ...props, pageName: getPreviousPage(props) })
    }, [props]);
    return <div class="navigation-bar">
        <button class="back" onClick={goBack}>Back</button>
        <ProgressBar />
        <button class="next" onClick={goNext}>Next</button>
    </div>;
}

function ProgressBar() {
    const props = useContext(AppPropsContext);
    const currentIndex = PageNames.indexOf(props.pageName);
    return <div class="progress-bar">
        {PageNames.map((pageName, index) => {
            if (index < currentIndex) {
                return <div title={pageName} class="progress-done">☑️</div>;
            } else if (index === currentIndex) {
                return <div title={pageName} class="progress-current">🔵</div>;
            } else {
                return <div title={pageName} class="progress-next">🔘</div>;
            }
        })}
    </div>;
}

function DownloadBar() {
    const props = useContext(AppPropsContext);
    const copyToClipboard = useCallback(() => {
        if (window.location.protocol === "https") {
            navigator.clipboard.writeText(getJSON(props));
        } else {
            alert(getJSON(props));
        }
    }, [props]);

    const download = useCallback(() => {
        const link = document.createElement('a');
        const blob = new Blob([getJSON(props)], { 'type': "text/json" });
        link.href = window.URL.createObjectURL(blob);
        link.download = "tsconfig.json";
        link.click();        
    }, [props]);

    const toggleJson = useCallback(() => {
        update({...props, previewJSON: !props.previewJSON })
    }, [props])

    return <>
        <div class="download-bar">
            <a href="#" onClick={download}>
                <span class="material-symbols-outlined icon">download</span>
                Download
            </a>

            <a href="#" onClick={toggleJson}>
                <span class="material-symbols-outlined icon">data_object</span>
                Show JSON
            </a>

            <a href="#" onClick={copyToClipboard}>
                <span class="material-symbols-outlined icon">content_copy</span>
                Copy to Clipboard
            </a>
        </div>
    </>
}

function getJSON(props: AppProps) {
    const lines: string[] = [];

    const optionsLines: string[] = [];

    // Environment, target, module
    optionsLines.push(`"lib": ${getLib()}`);;
    optionsLines.push(`"target": "${getTargetName()}"`);

    // Module logic, god help me
    if (props.environment === "donebun") {
        // donebun users don't need to use a bundler, presumably
        optionsLines.push(`"module": "preserve"`);
    } else {
        // Possible bundler
        if (props.bundler === "use-bundler") {
            optionsLines.push(`"module": "esnext"`);
            optionsLines.push(`"allowImportingTsExtensions": true`);
            optionsLines.push(`"moduleResolution": "bundler"`);
        } else {
            optionsLines.push(`"module": "nodenext"`);
        }
    }

    // File layout
    optionsLines.push(`"rootDir": "${props.srcDir}"`);
    if (props.environment === "donebun" || props.bundler === "use-bundler") {
        // Emit declarations for libraries only
        if (props.environment === "agnostic") {
            optionsLines.push(`"emitDeclarationOnly": true`);
        } else {
            optionsLines.push(`"noEmit": true`);
        }
    } else {
        optionsLines.push(`"outDir": "${props.outDir}"`);
    }

    // JSX
    if (props.jsx === "newer") {
        if (props.bundler === "use-bundler") {
            // Let bundlers handle jsx
            optionsLines.push(`"jsx": "preserve"`);
        } else {
            optionsLines.push(`"jsx": "react-jsx"`);
        }
    }

    // Set 'types'
    if (props.environment === "nodejs") {
        optionsLines.push(`"types": ["node"]`)
    } else {
        optionsLines.push(`"types": []`)
    }

    // Strictness + good ideas
    optionsLines.push(`"strict": true`);
    optionsLines.push(`"forceConsistentCasingInFileNames": true`);
    optionsLines.push(`"moduleDetection": "force"`);
    for (const str of [...StrictnessNames, ...GoodIdeaNames]) {
        if (props[str]) optionsLines.push(`"${str}": true`);
    }

    // Style
    for (const str of StyleNames) {
        if (props[str]) optionsLines.push(`"${str}": true`);
    }

    // Misc
    optionsLines.push(`"skipLibCheck": true`);

    lines.push("{");
    lines.push(`\t"compilerOptions": {`);
    lines.push(optionsLines.map(line => `\t\t${line}`).join(",\n"));
    lines.push(`\t},`);
    lines.push(`\t"include": ["${props.srcDir}"]`);

    lines.push("}\n");
    return lines.join("\n");

    function getLib() {
        if (props.environment === "web") {
            return `["dom", "${getTargetName()}"]`;
        } else {
            return `["${getTargetName()}"]`;
        }
    }

    function getTargetName() {
        return {
            "runtime-next": "esnext",
            "runtime-modern": "es2022",
            "runtime-older": "es2016"
        }[props.runtimeVersion];
    }
}


function classNames(obj: object) {
    return Object.entries(obj).filter(([k, v]) => !!v).map(([k]) => k).join(" ");
}
function getNextPage(props: AppProps): PageName {
    return PageNames[Math.min(PageNames.indexOf(props.pageName) + 1, PageNames.length - 1)];
}

function getPreviousPage(props: AppProps): PageName {
    return PageNames[Math.max(PageNames.indexOf(props.pageName) - 1, 0)];
}

