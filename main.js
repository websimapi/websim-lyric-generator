document.addEventListener('DOMContentLoaded', () => {
    const lyricsOutput = document.getElementById('lyrics-output');
    if (!lyricsOutput) return;

    // Use a copy of the text content to avoid issues with live collections
    const originalLyrics = lyricsOutput.textContent.trim();
    lyricsOutput.textContent = ''; // Clear the element for the typing effect

    let i = 0;
    function typeWriter() {
        if (i < originalLyrics.length) {
            lyricsOutput.textContent += originalLyrics.charAt(i);
            i++;
            setTimeout(typeWriter, 15); // Adjust typing speed here (milliseconds)
        }
    }

    // Use a brief delay before starting to ensure the page is fully rendered
    setTimeout(typeWriter, 200);
});

