function progbar (instance) {
  // (A) WRAPPER CSS 
  instance.classList.add("prog-wrap");

  // (B) CREATE PROGRESS BAR
  instance.innerHTML =
    `<div class="prog-bar"></div>
     <div class="prog-percent">0%</div>`;
  instance.hbar = instance.querySelector(".prog-bar");
  instance.hpercent = instance.querySelector(".prog-percent");

  // (C) SET PROGRESS
  instance.set = (percent) => {
    instance.hbar.style.width = percent + "%";
    instance.hpercent.innerHTML = percent + "%";
  };

  // (D) RETURN RESULT
  return instance;
}
