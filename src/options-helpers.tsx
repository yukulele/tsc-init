import * as React from "preact";
import type { JSX } from "preact";
import { update, type AppProps } from "./main.jsx";
import { AppPropsContext, RadioContext } from "./context.jsx";
import { CheckBox, RadioButton } from "./controls.jsx";
import { useCallback, useContext } from "preact/hooks";

export function makeRadioGroup<K extends keyof AppProps>(targetProp: K, ...values: readonly [AppProps[K] & string, string | JSX.Element, string | JSX.Element][]) {
    return <RadioContext.Provider value={{ propKey: targetProp }}>
        <AppPropsContext.Consumer>
            {appProps => {
                return values.map(([value, name, description]) => {
                    const onChanged = useCallback((value: string) => {
                        update({ ...appProps, [targetProp]: value as AppProps[K] })
                    }, [appProps]);
                    return <RadioButton
                        value={value}
                        name={name}
                        description={description}
                        selected={appProps[targetProp] === value}
                        onChanged={onChanged} />
                });
            }}
        </AppPropsContext.Consumer>
    </RadioContext.Provider>;
}

export function makeCheckboxList(...values: [keyof AppProps, string | JSX.Element, string | JSX.Element][]) {
    return <AppPropsContext.Consumer>
        {appProps => {
            return values.map(([keyName, name, description]) => {
                const onChanged = useCallback((checked: boolean) => {
                    update({ ...appProps, [keyName]: checked })
                }, [appProps]);
                return <CheckBox
                    id={keyName}
                    name={name}
                    description={description}
                    isChecked={appProps[keyName] as boolean}
                    onChanged={onChanged} />
            });
        }}
    </AppPropsContext.Consumer>
}
