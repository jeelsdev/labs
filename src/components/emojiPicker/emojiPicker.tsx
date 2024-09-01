import { forwardRef, MutableRefObject, useRef, useState } from "react"
import EmojiPickerContainer from "./emojiPickerContainer";
import { Emoji } from "../../types/emojiTypes";

import styles from './emojiPicker.module.css';

const EmojiPicker = forwardRef<HTMLInputElement, {}>((props, ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const handleClickOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClickEmoji = (emoji: Emoji) => {

        if(!ref) return;

        const inputRef = ref as MutableRefObject<HTMLInputElement>;

        const cursorPosition = inputRef.current.selectionStart??0;
        const text = inputRef.current.value??0;
        const prev = text.slice(0, cursorPosition);
        const next = text.slice(cursorPosition);

        inputRef.current.value = `${prev}${emoji.symbol}${next}`;
        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
        inputRef.current.focus();
    }

    return (
        <div ref={containerRef} className={styles.inputContainer}>
            <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😊</button>
            {
                isOpen ? <EmojiPickerContainer onClick={handleClickEmoji} setIsOpen={setIsOpen} ref={containerRef}/>: ''
            }
        </div>
    )
})

export default EmojiPicker;