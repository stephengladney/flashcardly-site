export function contact(emailBody: string) {
  return fetch("https://api.2x4game.com/v1/contact/flashcardly", {
    method: "POST",
    body: JSON.stringify({ text: emailBody }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
