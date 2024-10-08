const copyButton = document.querySelectorAll(".button_link .copy-link-action");

copyButton.forEach((copy) => {
  copy.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(copy.parentElement.getAttribute("href"));
    document.getElementById("toast").innerHTML = `
    <div class="toast">
        <p>✅ Link <strong>${copy.parentElement.innerText} Berhasil Disalin</p>
    </div>`;
    setTimeout(() => {
      document.querySelector("#toast .toast").classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast").remove();
    }, 4000);
  });
});

document.addEventListener("scroll", (e) => {
  document.querySelector(
    ".bg-text-animation"
  ).style.transform = `translateX(${window.scrollY}px)`;
});
