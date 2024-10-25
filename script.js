function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Tambahkan pesan pengguna ke chat
    addMessage(userInput, "user");

    // Proses respons sederhana dari "AI"
    setTimeout(() => {
        const response = getResponse(userInput);
        addMessage(response, "bot");
    }, 500);

    document.getElementById("userInput").value = ""; // Kosongkan input
}

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;
    document.getElementById("chatBox").appendChild(messageElement);

    // Scroll ke bawah agar pesan baru terlihat
    document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getResponse(userInput) {
    // Respons sederhana dari "AI" berdasarkan kata kunci
    const responses = {
        "hai": "Hai! Ada yang bisa saya bantu?",
        "halo": "Halo! Selamat datang di obrolan.",
        "kabar": "Saya baik, terima kasih sudah bertanya!",
        "nama": "Saya adalah AI sederhana yang siap membantu Anda.",
    };

    return responses[userInput.toLowerCase()] || "Maaf, saya belum mengerti itu. Coba pertanyaan lain.";
}
