const textarea = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', () => {
  const count = textarea.value.length;
  charCount.textContent = `Characters: ${count}`;
});
