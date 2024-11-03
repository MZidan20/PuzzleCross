const answers = {
    "1-1": "s", "1-2": "o", "1-3": "l", "1-4": "a", "1-5": "r",
    "2-1": "e", "2-2": "m", "3-1": "o", "3-2": "b", "3-4": "l",
    "4-1": "p", "3-3": "i", "4-2": "s", "4-3": "a", "4-4": "n", "4-5": "g",
    "5-1": "e", "5-2": "r", "5-3": "a", "5-4": "i", "6-1": "r", "6-2": "a",
    "6-3": "d", "6-4": "i", "6-5": "o", "7-1": "a", "7-2": "r", "7-3": "b",
    "7-4": "g", "8-1": "m", "8-2": "t", "8-3": "o", "8-4": "r", "9-1": "o",
    "9-2": "d", "9-3": "a", "10-1": "k", "10-2": "p"
};

let score = 0;
let hasCompleted = false;


function checkAnswer() {
    if (hasCompleted) {
        alert("Anda sudah menyelesaikan teka-teki silang ini.");
        return; 
    }

    let correctCount = 0; 
    for (const id in answers) {
        const input = document.getElementById(id);
        if (input) {
            if (input.value.toLowerCase() === answers[id]) {
                input.style.backgroundColor = "#d4edda"; 
                correctCount++;
                score++; 
            } else {
                input.style.backgroundColor = "#f8d7da"; 
            }
        }
    }

    if (correctCount === Object.keys(answers).length) {
        hasCompleted = true; 
        alert("Selamat! Anda berhasil menyelesaikan teka-teki silang.");
    } else {
        alert(`Jawaban benar: ${correctCount} dari ${Object.keys(answers).length}`);
    }

    document.getElementById("result-message").textContent = `Skor Anda: ${score}`;
}
