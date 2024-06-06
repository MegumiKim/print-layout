# Welcome to ReadyForInk

**Welcome to the age of digital newsprint, where the scent of fresh ink is but a nostalgic memory!** Your mission, should you choose to accept it, is to design and implement a newspaper page that incorporates components typical of a newspaper: headline, intro, body text, images, captions, and quotes..

We have provided a mockup for inspiration, but feel free to let your creativity run wild and design your own layout. This is your chance to bring the news to life in a way that is both informative and visually engaging. Ready to make headlines? Let's get started!

## Time Limit:

Please note that it is recommended to spend a maximum of 3 hours on this assignment. This time frame ensures a balanced effort and allows for a reasonable completion of the tasks.

## Rules

No external libraries or frameworks are allowed; everything you need is provided.

## Getting Started

To set up your digital press:

1. **Install Necessary Tools**:

   - Install all dependencies to get your tools ready for publishing:
     ```
     npm install
     ```

2. **Launch the Development Server**:

   - Activate the development environment with:
     ```
     npm run dev
     ```

3. **View Your Newspaper**:

   - Open your browser and go to `http://localhost:3000` to see the initial setup.

   ## Task Overview

Here are the specifics of what your role entails:

1. **JavaScript Functionality**:

   - Develop the functionality in `src/navbar.js` for toggling different news sections.
   - Develop the functionality in `src/folio.js`. The date metadata should have the following format: "My Newspaper Monday 1 May 2025". Ensure that the date includes the day of the week, the date, the month, and the year in the specified order, preceded by the name of the newspaper.

2. **Section Dynamics**:

   - Each section (e.g., News, Sport, Culture, Politics) typically represents a thematic focus. When switching sections, the styling should change to reflect the mood and tone of the current section, without altering the component structure. This dynamic shift in appearance helps differentiate sections and enhances the reader's visual experience.

3. **Design and Layout**:
   - Take inspiration from the provided mockup in the `static/insipration` folder to layout your newspaper page, or create a distinctive design of your own.

## Project Structure

Your editorial room is organized as follows:

- **src/**: Contains JavaScript logic.
  - `navbar.js`: Here you will code the logic to toggle different sections. Toggling a section involves applying different styles to your newspaper page.
  - `folio.js`: Here you will code the logic to dynamically display your newspapers name, current section and the current date.
- **components/**: Contains HTML and CSS for each newspaper component — your primary workspace for design.
- **stylesheets/utils/**: Holds base styles, themes, and SCSS variables.
- **static/**: Resources like images, icons, logos, and fonts are stored here.
- **index.html**: The main HTML document. Modify this as needed to structure your page.

## Important Note:

Please refrain from modifying the **output.css** file directly. This file is compiled from SCSS files and any changes made directly to it will be overwritten. Instead, make your modifications in the SCSS files.

## Submission Instructions

When your edition is ready to hit the digital stands:

- Please delete the node_modules folder from your project directory and compress the entire project into a ZIP file. Then, send the ZIP file back to us.

## Evaluation Criteria

- **Code Quality**: Well-organized, clean code with essential comments.
- **Global Styles and Sass Variables**: Evaluation of the use of global styles and the implementation of Sass variables.
- **Design**: The newspaper should be visually appealing, reflecting either the provided mockup or your own creative design.

Happy coding!
