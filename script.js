$(document).ready(function () {
  const heading = $(".creative-heading");
  const textData = JSON.parse(heading.attr("data-text"));
  const textElement = $(".creative-text");
  let currentIndex = 0;

  function showWord(index) {
    const currentWord = textData[index];
    const nextIndex = (index + 1) % textData.length;

    const chars = currentWord.split("");
    textElement.empty();
    chars.forEach((char, i) => {
      const span = $("<span></span>")
        .addClass("splitting-char")
        .css("transition-delay", `${i * 0.05}s`)
        .text(char);
      textElement.append(span);
    });

    textElement.find(".splitting-char").each(function (i, char) {
      setTimeout(() => {
        $(char).css({
          opacity: 1,
          transform: "rotateX(0)",
        });
      }, i * 50);
    });

    setTimeout(() => {
      textElement.find(".splitting-char").each(function (i, char) {
        setTimeout(() => {
          $(char).css({
            opacity: 0,
            transform: "rotateX(70deg)",
          });
        }, i * 50);
      });
    }, 2000);

    setTimeout(() => {
      showWord(nextIndex);
    }, 3000);
  }

  showWord(currentIndex);
});
