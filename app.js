const express = require('express');
const app = express();

// Custom HTML/CSS for the banner
const customHTML = `
<div class="banner">
  <img src="https://www.iaea.org/sites/default/files/styles/2016_landing_page_banner_1140x300/public/iaea-landing-page-banner.jpg" alt="Banner Image">
</div>
<style>
.banner {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.banner img {
  width: 100%;
  object-fit: cover;
}
</style>
`;

// Display the banner
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>IAEA Learning - Google Agent</title>
    </head>
    <body>
      ${customHTML}
      <h1>IAEA Learning - Google Agent</h1>
      <textarea id="html_code1" rows="20" cols="80"></textarea>
      <input type="checkbox" id="run_poc1">
      <label for="run_poc1">Vertex AI Agent</label>
      <div id="poc1_output"></div>

      <script>
        const html_code1 = document.getElementById('html_code1');
        const run_poc1 = document.getElementById('run_poc1');
        const poc1_output = document.getElementById('poc1_output');

        run_poc1.addEventListener('change', () => {
          if (run_poc1.checked) {
            poc1_output.innerHTML = html_code1.value;
          } else {
            poc1_output.innerHTML = '';
          }
        });
      </script>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
