export const kiddingMe = (close = false) => {
  const emojies = ["🤨", "🤔", "🤌", "🔤", "😐"];
  figma[close ? "closePlugin" : "notify"](
    `Kidding me?  ${emojies[Math.floor(Math.random() * emojies.length)]}`,
    { timeout: 2500 }
  );
};