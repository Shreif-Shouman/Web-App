import streamlit as st
import streamlit.components.v1 as components

# Custom HTML/CSS for the banner
custom_html = """
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
"""

# Display the banner
st.markdown(custom_html, unsafe_allow_html=True)

# Add the title and text under the title
st.title("IAEA Learning -  Google Agent")
#st.write("Created by: BSS Innovation Team")

# Create a layout with two columns
col1, col2 = st.columns(2)

# Use one column for each POC
with col1:
    html_code1_placeholder = st.empty()
    html_code1 = html_code1_placeholder.text_area("Google", height=400)
    run_poc1 = st.checkbox("Vertex AI Agent")

    if run_poc1:
        html_code1_placeholder.empty()
        #st.write("Running POC1...")
        components.html(html_code1, height=500, scrolling=True)
