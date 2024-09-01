import { ChangeEvent, useState } from "react";

import styles from "./emojiPicker.module.css";

const EmojiSearch = ({ onSearch }: {onSearch: (e: ChangeEvent<HTMLInputElement>) => void}) => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e);
  };

  return (
      <input
        type="text"
        placeholder="Buscar emoji"
        value={search}
        onChange={handleChange}
        className={styles.search}
      />
  );
};

export default EmojiSearch;
