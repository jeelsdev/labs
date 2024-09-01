import { ChangeEvent, forwardRef, RefObject, useEffect, useState } from 'react';
import Data from './data';
import EmojiSearch from './emojiSearch';
import EmojiButton from './emojiButton';
import { Emoji } from '../../types/emojiTypes';

import styles from './emojiPicker.module.css';

interface EmojiPickerContainerProps {
    onClick: (emoji: Emoji) => void;
    setIsOpen: (set: boolean) => void;
}

const EmojiPickerContainer = forwardRef<HTMLDivElement, EmojiPickerContainerProps>(({onClick, setIsOpen}, containerRef) => {
    const [emojiList, setEmojiList] = useState(Data);

    useEffect(() => {
        if (!containerRef || !(containerRef as RefObject<HTMLDivElement>).current) return;

        const handleClickOutside = (e: MouseEvent) => {
            if ((containerRef as RefObject<HTMLDivElement>).current && !(containerRef as RefObject<HTMLDivElement>).current!.contains(e.target as Node)) {
                setIsOpen(false);
                setEmojiList(Data);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [containerRef, setIsOpen]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value.toLowerCase();
        if (!!q) {
            const search = emojiList.filter((emoji) => {
                return (
                    emoji.name.includes(q) ||
                    emoji.keywords.includes(q)
                );
            });

            setEmojiList(search);
        }else {
            setEmojiList(Data);
        }
    }

    return (
        <div className={styles.emojiPickerContainer}>
            <EmojiSearch onSearch={handleSearch} />
            <div className={styles.emojisList}>
                {
                    emojiList.map((emoji) => (
                        <EmojiButton key={emoji.keywords} emoji={emoji} onClick={onClick} />
                    ))
                }
            </div>
        </div>
    )
});

export default EmojiPickerContainer;
