document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('loremText');
    let text = textElement.innerHTML;

    const wordsToReplace = [
        { word: 'sed', replacement: 'UNO', color: '#FF5500' },
        { word: 'vehicula', replacement: 'DOS', color: '#FF99B2' },
        { word: 'vivamus', replacement: 'TRES', color: '#FF99F5' },
        { word: 'nam', replacement: 'CUATRO', color: '#BB99FF' },
        { word: 'eros', replacement: 'CINCO', color: '#99C5FE' },
        { word: 'vestibulum', replacement: 'SEIS', color: '#00CEFF' },
        { word: 'quam', replacement: 'SIETE', color: '#01FFFE' },
        { word: 'sollicitudin', replacement: 'OCHO', color: '#00FF9F' },
        { word: 'finibus', replacement: 'NUEVE', color: '#B6FF01' },
        { word: 'dictum', replacement: 'DIEZ', color: '#FFFF00' },
        { word: 'morbi', replacement: 'ONCE', color: '#FFB600' },
    ];

    wordsToReplace.forEach((item, index) => {
        let regex = new RegExp(`\\b${item.word}\\b`, 'gi');
        let count = (text.match(regex) || []).length;
        text = text.replaceAll(regex, `<span class="replaced">${item.replacement}</span>`);

        let countVar = count;
        countVar ||= (countVar === count);

        console.log(`%c${item.word}: ${count}`, `color: ${item.color}`);
    });

    textElement.innerHTML = text;
});
