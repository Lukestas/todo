import Styles from "./Label.module.css"

interface LabelAttributes{
    text: string,
    for?: string,
}

export default function Label(options:LabelAttributes){
    return <label className={Styles.Label} htmlFor={options.for}>
        {options.text}
    </label>
}