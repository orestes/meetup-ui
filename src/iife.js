(function() {
    const elementId = 'meetupUIStyle';
    const selectors = [
        '[jsmodel=Sn6dIe]',
        '.H0YpEc.N1c98',
        '.LCXT6, .rG0ybd',
        '.aSjf3c',
        '.lvE3se',
        '.ZHdB2e.iy732',
        '.lMHHZ.pZFrDd',
        '.rG0ybd.LCXT6'
    ];
    let styleElement = document.getElementById(elementId);

    if (styleElement) {
        document.head.removeChild(styleElement);
        return;
    }

    styleElement = document.createElement('style');
    styleElement.setAttribute('id', elementId);
    styleElement.textContent = `${selectors.join(', ')} {
    display: none
}`;
    document.head.append(styleElement);
})();
