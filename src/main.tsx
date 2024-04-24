import * as React from 'preact';
import { useRef, useEffect, useLayoutEffect, useContext, useCallback } from 'preact/hooks';
import { AppPropsContext, RadioContext } from './context.jsx';
import { CheckBox, RadioButton, TextBox } from './controls.jsx';
import { Bundler, Environment, GoodIdeas, JSXGroup, ModuleSystem, RuntimeVersion, Strictness, Style } from './options.jsx';

export const PageNames = [
    "Environment",
    "Runtime-Target",
    "Bundler",
    "File-Layout",
    "Module-System",
    "JSX",
    "Good-Ideas",
    "Strictness-Options",
    "Style-Options"
] as const;

export type PageName = (typeof PageNames)[number];

export type AppProps = {
    pageName: PageName;

    environment: "web" | "nodejs" | "donebun" | "agnostic";
    runtimeVersion: "runtime-next" | "runtime-modern" | "runtime-older";
    bundler: "use-bundler" | "no-bundler";
    module: "commonjs" | "esm";
    jsx: "no-jsx" | "older" | "newer";

    srcDir: string;
    outDir: string;

    verbatimModuleSyntax: boolean;
    isolatedModules: boolean;
    composite: boolean;

    exactOptionalPropertyTypes: boolean;
    noUncheckedIndexedAccess: boolean;

    noImplicitReturns: boolean;
    noImplicitOverride: boolean;
    noUnusedLocals: boolean;
    noUnusedParameters: boolean;
    noFallthroughCasesInSwitch: boolean;
    noPropertyAccessFromIndexSignature: boolean;
};

export const update = (() => {
    const renderTarget = document.getElementById("app") ?? (() => { throw new Error("Couldn't find div#app") })();

    let props: AppProps = {
        pageName: PageNames[0],

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
        {getPage()}
    </AppPropsContext.Provider>;

    function getPage() {
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
        }
        return <Page_Environment />;
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
    </>;
}

function Page_RuntimeTarget() {
    return <>
        <h2 class="header">Runtime Version</h2>
        <div class="explanation">How old of a JavaScript version do you need to support?</div>
        <div class="options">{RuntimeVersion}</div>
        <NavBar />
    </>;
}

function Page_ModuleSystem() {
    return <>
        <h2 class="header">Module System</h2>
        <div class="explanation">Are you primarily writing ECMAScript modules (ESM) or CommonJS modules?</div>
        <div class="options">{ModuleSystem}</div>
        <NavBar />
    </>;
}

function Page_Bundler() {
    return <>
        <h2 class="header">Bundler</h2>
        <div class="explanation">Do you want to use a tool like esbuild, rollup, webpack, parcel, etc, to produce JS from your TypeScript files?</div>
        <div class="options">{Bundler}</div>
        <NavBar />
    </>;
}

function Page_JSX() {
    return <>
        <h2 class="header">JSX</h2>
        <div class="explanation">Are you using JSX syntax?</div>
        <div class="options">{JSXGroup}</div>
        <NavBar />
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

export { };


function classNames(obj: object) {
    return Object.entries(obj).filter(([k, v]) => !!v).map(([k]) => k).join(" ");
}
function getNextPage(props: AppProps): PageName {
    return PageNames[PageNames.indexOf(props.pageName) + 1];
}

function getPreviousPage(props: AppProps): PageName {
    return PageNames[PageNames.indexOf(props.pageName) - 1];
}

