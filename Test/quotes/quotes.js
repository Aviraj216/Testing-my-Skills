    const clipboardjs = document.querySelector(".clipboard");
    const copyquoteJS = document.querySelector(".copy-quote");
    const genBtn = document.querySelector(".gen-quote");

    genBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        document.querySelector(".quote").textContent = randomQuote.text;
        document.querySelector(".author").textContent = "- " + randomQuote.author;
    });

    copyquoteJS.addEventListener("click", () => {
    const quoteJS = document.querySelector(".quote").textContent;
    const authorJS = document.querySelector(".author").textContent;

    const textoCopy = `${quoteJS} ${authorJS}`

    const copyText = document.createElement("textarea");

    copyText.value = textoCopy;
    document.body.appendChild(copyText);

    copyText.select();
    document.execCommand("copy");

    document.body.removeChild(copyText);

    alert("Quote copied to clipboard!");
    })
// Download as image
const downloadBtn = document.querySelector(".download-quote");

downloadBtn.addEventListener("click", () => {
    const quoteBox = document.querySelector(".quote-ndwriter");

    html2canvas(quoteBox).then(canvas => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "quote.png";
        link.click();
    });
});
