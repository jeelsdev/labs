import { Emoji } from '../../types/emojiTypes';

import styles from './emojiPicker.module.css';

const EmojiButton = ({emoji, onClick}: {emoji: Emoji, onClick: (emoji:Emoji) => void }) => {
    
    const handleClick = () => {
        onClick(emoji);
    }

    return (
        <button onClick={handleClick} className={styles.emojiButton}>
            {emoji.symbol}
        </button>
    )
}

export default EmojiButton;