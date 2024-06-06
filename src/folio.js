// The folio represents the header of a newspaper page, typically containing the newspaper name, page number, and today's date.
// Implement logic to dynamically display your newspapers name and the current date.
// The date metadata should have the following format: "My Newspaper Monday 1 May 2025".
// Ensure that the date includes the day of the week, the date, the month, and the year in the specified order, preceded by the name of the newspaper.
// Refer to the mockup image in the 'static/inspiration' folder for an example of how the folio might look.

const folioWrapper = document.getElementById("folio");
const folio = createFolio();
folioWrapper.append(folio);

// Create a folio element with the newspaper name and the current date
export function createFolio() {
  const newspaperName = "My Newspaper";

  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short",
  };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const element = document.createElement("div");
  element.textContent = `${newspaperName} | ${formattedDate}`;
  return element;
}
