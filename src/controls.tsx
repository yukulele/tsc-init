import * as React from 'preact';
import { useRef, useEffect, useLayoutEffect, useContext, useCallback } from 'preact/hooks';
import { AppProps, update } from './main.jsx';
import { AppPropsContext, RadioContext } from './context.jsx';

type OptionProps = {
    name: string | React.JSX.Element;
    description: string | React.JSX.Element;
    value: string;
    selected: boolean;
    onChanged: (value: string) => void;
};

export function RadioButton(props: OptionProps) {
    const context = useContext(RadioContext);
    const ref: React.Ref<HTMLInputElement> = useRef(null);
    const onChange = useCallback(() => {
        if (ref.current?.value) {
            props.onChanged(props.value);
        }
    }, [props]);

    return <label class="option" for={props.value}>
        <input type="radio" id={props.value} name={context.propKey} checked={props.selected} onChange={onChange} ref={ref} />
        <div class="option-description">
            <div class="option-title">{props.name}</div>
            <div class="option-blurb">{props.description}</div>
        </div>
    </label>;
}

type CheckBoxProps = {
    name: string | React.JSX.Element;
    description: string | React.JSX.Element;
    isChecked: boolean;
    id: string;
    onChanged: (value: boolean) => void;
};

export function CheckBox(props: CheckBoxProps) {
    const ref: React.Ref<HTMLInputElement> = useRef(null);
    const changed = useCallback(() => {
        props.onChanged(ref.current!.checked);
    }, [props.onChanged]);

    return <label class="option" for={props.id}>
        <input type="checkbox" id={props.id} checked={props.isChecked} onChange={changed} ref={ref} />
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