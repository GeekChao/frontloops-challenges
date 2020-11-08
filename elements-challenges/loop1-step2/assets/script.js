window.addEventListener("DOMContentLoaded", () => {
  let tab_active_index = 1
  const tab_content_dict = {
    1: "Positive content",
    2: "Negative content",
    3: "Neutral content"
  }

  const tab_input = document.getElementById("tab-index")
  const tab_submit_button = document.querySelector(".tab-controller__submit")
  const tab_list_items = document.querySelectorAll(".tab__list__item")
  const tab_content = document.querySelector(".tab__content")

  Object.values(tab_list_items).forEach((item) => {
    item.addEventListener("click", () => {
      const item_tab_index = item.getAttribute("data-tabIndex")
      handleTabChange(Number(item_tab_index))
    })
  })

  const handleTabChange = (new_tab_active_index) => {
    Object.values(tab_list_items).forEach((item) => {
      const item_tab_index = Number(item.getAttribute("data-tabIndex"))

      if (item_tab_index === tab_active_index) {
        item.classList.remove("tab__list__item--active")
      }

      if (item_tab_index === new_tab_active_index) {
        item.classList.add("tab__list__item--active")
      }
    })

    tab_active_index = new_tab_active_index
    tab_content.textContent = tab_content_dict[tab_active_index]
  }

  tab_submit_button.addEventListener("click", (evt) => {
    evt.preventDefault()

    const value = tab_input.value
    tab_input.value = ""

    if (Object.is(Number(value), NaN)) {
      alert("Please input a number!")
      return
    }

    if (Number(value) < 1 || Number(value) > 3) {
      alert("Only accept a number between 1 and 3!")
      return
    }

    handleTabChange(Number(value))
  })

  handleTabChange(1)
})
