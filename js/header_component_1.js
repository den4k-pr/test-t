(() => {
  var __webpack_exports__ = {};
  const marquee = document.getElementById("marquee");
  let speed = .3;
  let offset = 0;
  marquee.innerHTML += marquee.innerHTML;
  function animate() {
    offset -= speed;
    if (Math.abs(offset) >= marquee.scrollWidth / 2) {
      offset = 0;
    }
    marquee.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(animate);
  }
  animate();
  marquee.addEventListener("mouseenter", () => speed = 0);
  marquee.addEventListener("mouseleave", () => speed = 1);
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();