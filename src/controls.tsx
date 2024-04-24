import * as React from 'preact';
import { useRef, useEffect, useLayoutEffect, useContext, useCallback } from 'preact/hooks';
import { AppProps } from './main.jsx';
import { AppPropsContext, RadioContext } from './context.jsx';

type OptionProps = {
    name: string | React.JSX.Element;
    description: string | React.JSX.Element;
    value: string;
    onClick?: () => void;
};

export function RadioButton(props: OptionProps) {
    const context = useContext(RadioContext);

    return <label class="option" for={props.value}>
        <input type="radio" id={props.value} name={context.propKey} />
        <div class="option-description">
            <div class="option-title">{props.name}</div>
            <div class="option-blurb">{props.description}</div>
        </div>
    </label>;
}

type CheckBoxProps = {
    name: string | React.JSX.Element;
    description: string | React.JSX.Element;
    id: string;
};

export function CheckBox(props: CheckBoxProps) {
    return <label class="option" for={props.id}>
        <input type="checkbox" id={props.id} />
        <div class="option-description">
            <div class="option-title">{props.name}</div>
            <div class="option-blurb">{props.description}</div>
        </div>
    </label>;
}

type TextBoxProps = {
    name: string | React.JSX.Element;
    description: string | React.JSX.Element;
    propKey: keyof AppProps;
}

export function TextBox(props: TextBoxProps) {
    const appProps = useContext(AppPropsContext);
    const ref: React.Ref<HTMLInputElement> = useRef(null);
    const updateValue = useCallback(() => {
        update({ ...appProps, [props.propKey]: ref.current!.value });
    }, [ref, appProps, props]);

    return <label class="option">
        <div class="option-description">
            <div class="option-title">{props.name}</div>
            <div class="option-blurb">{props.description}</div>
            <input type="textbox" value={appProps[props.propKey] as string} onChange={updateValue} ref={ref} />
        </div>
    </label>;
}