import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import styles from './emojiPicker.module.css';

const EmojiPickerInput = () => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.container}>
            <input ref={ref} type="text" placeholder="Escribe tu mensaje" className={styles.input} />
            <EmojiPicker ref={ref}/>
        </div>
    )
}

export default EmojiPickerInput;