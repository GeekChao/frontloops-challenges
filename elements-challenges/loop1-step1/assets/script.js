window.addEventListener("DOMContentLoaded", () => {
  let selectedOption = null
  const options = document.querySelectorAll("li.option")

  const findSelectedOption = (optionContent) => {
    return Object.values(options).find(
      ({ firstChild: option }) => option === optionContent
    )
  }

  Object.values(options).map((option) => {
    option.addEventListener("click", (evt) => {
      const current_selectedOption = evt.target.firstChild

      if (!selectedOption) {
        selectedOption = current_selectedOption
        evt.target.classList.add("option-active")
        return
      }

      if (selectedOption === current_selectedOption) {
        return
      }

      if (selectedOption !== current_selectedOption) {
        const previous_selected_option = findSelectedOption(selectedOption)

        if (previous_selected_option) {
          previous_selected_option.classList.remove("option-active")
        }

        selectedOption = current_selectedOption
        evt.target.classList.add("option-active")
      }
    })
  })
})
