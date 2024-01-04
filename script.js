const prevBtn = document.querySelector(
  `button[data-controls="prev"]`
)
const nextBtn = document.querySelector(
  `button[data-controls="next"]`
)

const scrollers = document.querySelectorAll(
  "[data-scroller] > div"
)

let activeIdx = 0

prevBtn.addEventListener("click", () => {
  if (activeIdx !== 0) {
    activeIdx--
  } else {
    activeIdx = 2
  }
  translateScrollers()
})

nextBtn.addEventListener("click", () => {
  if (activeIdx !== 2) {
    activeIdx++
  } else {
    activeIdx = 0
  }
  translateScrollers()
})

function translateScrollers() {
  scrollers.forEach(scroller => {
    scroller.style.translate = `${activeIdx * -100}%`
  })
}
