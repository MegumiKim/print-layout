// Implement logic to toggle different styles within 'sectionWrapper' when switching between sections.
// This should include changing CSS classes to visually differentiate between 'news', 'sport', 'culture', and 'politics'.
// Refer to the mockup image in the 'static/inspiration' folder for an example of how the navbar can look.

const sectionWrapper = document.getElementById("sectionWrapper");
const nav = document.querySelector("nav");
const sectionTitle = document.getElementById("sectionTitle");

const sections = ["news", "sport", "culture", "politics"];
let activeButton = null;

// Create a button for each section
function createSectionBtn(section, index) {
  const element = document.createElement("button");

  // Set the initial active section for first section
  if (index === 0) {
    element.classList.add("active");
    sectionWrapper.className = `theme-${section}`;
    activeButton = element;
    sectionTitle.textContent = section;
  }

  element.textContent = section;

  element.addEventListener("click", () => {
    sectionTitle.textContent = section;
    sectionWrapper.className = `theme-${section}`;

    if (activeButton) {
      activeButton.classList.remove("active");
    }
    element.classList.add("active");
    activeButton = element;
  });

  return element;
}

sections.forEach((section, index) => {
  const btn = createSectionBtn(section, index);
  nav.append(btn);
});

// const buttons = document.querySelectorAll("button");
// let activeButton = buttons[0];

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     sectionTitle.textContent = sections[index];
//     sectionWrapper.className = `theme-${sections[index]}`;
//     activeButton.classList.remove("active");
//     button.classList.add("active");
//     activeButton = button;
//   });
// });
