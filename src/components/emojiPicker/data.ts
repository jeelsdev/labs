interface Emoji {
    symbol: string;
    name: string;
    keywords: string;
}

const Data = (): Emoji[] => [
    {
        symbol: '😀',
        name: 'grinning face',
        keywords: 'face, grin, grinning face'
    },
    {
        symbol: '😃',
        name: 'grinning face with big eyes',
        keywords: 'face, grinning face with big eyes'
    },
    {
        symbol: '😄',
        name: 'grinning face with smiling eyes',
        keywords: 'eye, face, grinning face with smiling eyes'
    },
    {
        symbol: '😁',
        name: 'beaming face with smiling eyes',
        keywords: 'beaming face with smiling eyes, eye, face'
    },
    {
        symbol: '😆',
        name: 'grinning squinting face',
        keywords: 'face, grinning squinting face'
    },
    {
        symbol: '😅',
        name: 'grinning face with sweat',
        keywords: 'cold, face, grinning face with sweat, open mouth, smile'
    },
    {
        symbol: '😂',
        name: 'face with tears of joy',
        keywords: 'face with tears of joy, joy, laugh, tear'
    },
    {
        symbol: '🤣',
        name: 'rolling on the floor laughing',
        keywords: 'floor, laugh, rolling, rolling on the floor laughing'
    },
    {
        symbol: '😊',
        name: 'smiling face with smiling eyes',
        keywords: 'blush, eye, face, smile, smiling face with smiling eyes'
    },
    {
        symbol: '😇',
        name: 'smiling face with halo',
        keywords: 'angel, face, fairy tale, fantasy, halo, innocent, smiling face with halo'
    },
    {
        symbol: '🙂',
        name: 'slightly smiling face',
        keywords: 'face, smile, slightly smiling face'
    },
    {
        symbol: '🙃',
        name: 'upside-down face',
        keywords: 'face, upside-down'
    },
    {
        symbol: '😉',
        name: 'winking face',
        keywords: 'face, wink, winking face'
    },
    {
        symbol: '😌',
        name: 'relieved face',
        keywords: 'face, relieved'
    },
    {
        symbol: '😍',
        name: 'smiling face with heart-eyes',
        keywords: 'eye, face, love, smile, smiling face with heart-eyes'
    },
]

export default Data;