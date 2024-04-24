import * as React from 'preact';
import { useRef, useEffect, useLayoutEffect, useContext, useCallback } from 'preact/hooks';

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

};

const update = (() => {
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
        composite: true
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
            <RadioContext.Provider value={{ propKey: "environment" }}>
                <RadioButton value="dom" name="Webpages" description="Client-side code running in a browser" />
                <RadioButton value="nodejs" name="NodeJS" description="Backend code running in Node.JS" />
                <RadioButton value="donebun" name="bun, deno, ts-node, etc." description="Backend code running a TypeScript-aware runtimes" />
                <RadioButton value="agnostic" name="Anywhere" description="Platform-agnostic code that can run in any environment" />
            </RadioContext.Provider>
        </div>

        <NavBar />
    </>;
}

function Page_RuntimeTarget() {
    return <>
        <h2 class="header">Runtime Version</h2>
        <div class="explanation">How old of a JavaScript version do you need to support?</div>

        <div class="options">
            <RadioContext.Provider value={{ propKey: "runtimeVersion" }}>
                <RadioButton value="runtime-next" name="Latest" description="Use any JS features, including those that may not be in all runtimes yet" />
                <RadioButton value="runtime-modern" name="ES 2022" description="ECMAScript 2022 is the most recent version supported by all major browsers and supported Node versions" />
                <RadioButton value="runtime-older" name="ES 2016" description="Older unsupported versions of Node may only support ECMAScript 2016" />
            </RadioContext.Provider>
        </div>

        <NavBar />
    </>;
}

function Page_ModuleSystem() {
    return <>
        <h2 class="header">Module System</h2>
        <div class="explanation">Are you primarily writing ECMAScript modules (ESM) or CommonJS modules?</div>

        <div class="options">
            <RadioContext.Provider value={{ propKey: "module" }}>
                <RadioButton value="esm" name="ECMAScript Modules (ESM)" description="Modern module system using 'import' syntax. Recommended if you are using a bundler" />
                <RadioButton value="commonjs" name="CommonJS" description="Classic NodeJS modules using 'require' and 'module.exports'. Supported by bundlers, but not required" />
            </RadioContext.Provider>
        </div>

        <NavBar />
    </>;
}

function Page_Bundler() {
    return <>
        <h2 class="header">Bundler</h2>
        <div class="explanation">Do you want to use a tool like esbuild, rollup, webpack, parcel, etc, to produce JS from your TypeScript files?</div>

        <div class="options">
            <RadioContext.Provider value={{ propKey: "bundler" }}>
                <RadioButton value="use-bundler"
                    name="Yes" description="You will need to separately configure your bundler" />
                <RadioButton value="no-bundler"
                    name="No" description="Use tsc to produce JS files" />
            </RadioContext.Provider>
        </div>

        <NavBar />
    </>;
}

function Page_JSX() {
    return <>
        <h2 class="header">JSX</h2>
        <div class="explanation">Are you using JSX syntax?</div>

        <div class="options">
            <RadioContext.Provider value={{ propKey: "jsx" }}>
                <RadioButton value="newer"
                    name="Yes" description="" />
                <RadioButton value="no"
                    name="No" description="" />
            </RadioContext.Provider>
        </div>

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

        <div class="options">
            <CheckBox id="verbatimModuleSyntax" name=<pre>verbatimModuleSyntax</pre> description="Always CommonJS and ESM import syntax when importing from modules of that type" />
            <CheckBox id="isolatedModules" name=<pre>isolatedModules</pre> description="Use bundler-friendly syntax for faster builds" />
            <CheckBox id="composite" name=<pre>composite</pre> description="Strictly define the set of input and output files for this config" />
        </div>

        <NavBar />
    </>;
}

function Page_Strictness() {
    return <>
        <h2 class="header">Strictness Options</h2>
        <div class="explanation">
            You can enable some additional strictness options that are not on by default. These may or may not be a good fit for the way you write code.
        </div>

        <div class="options">
            <CheckBox id="noUncheckedIndexedAccess" name=<pre>noUncheckedIndexedAccess</pre> description="Assume that all array and string indexes might be out-of-bounds" />
            <CheckBox id="exactOptionalPropertyTypes" name=<pre>exactOptionalPropertyTypes</pre> description="Disallow undefined to be set to an optional property unless it's explicitly allowed" />
        </div>

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

        <div class="options">
            <CheckBox id="noImplicitReturns" name=<pre>noImplicitReturns</pre> description="Functions must explicitly return if a value is required" />
            <CheckBox id="noImplicitOverride" name=<pre>noImplicitOverride</pre> description="If a method is override, it must be marked as such" />
            <CheckBox id="noUnusedLocals" name=<pre>noUnusedLocals</pre> description="Local variables must be used if declared" />
            <CheckBox id="noUnusedParameters" name=<pre>noUnusedParameters</pre> description="Parameters must be used if declared" />
            <CheckBox id="noFallthroughCasesInSwitch" name=<pre>noFallthroughCasesInSwitch</pre> description="Make it an error for code to flow from one switch case to the next" />
            <CheckBox id="noPropertyAccessFromIndexSignature" name=<pre>noPropertyAccessFromIndexSignature</pre> description="Index signatures must be accessed through index notation instead of property access" />
        </div>

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
    return <div class="progress-bar">🔘🔘🔘🔘🔘🔘🔘🔘🔘|🔘🔘🔘</div>;
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

