const adviceText = document.querySelector("blockquote");
const adviceHeader = document.querySelector("h3");
const adviceBtn = document.querySelector(".generate-advice");
// const card = document.querySelector('.card')

const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    adviceHeader.textContent = `ADVICE #  ${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
    // console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
getAdvice();

adviceBtn.addEventListener("click", getAdvice);
