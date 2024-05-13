export const copyTextToClipboard = (text: string): boolean => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let success: boolean = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('복사 실패:', err);
  }
  document.body.removeChild(textArea);
  return success;
};
