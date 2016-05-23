// script
var script = document.querySelector('script');

// Wrapper
var wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.insertBefore(wrapper, script);

// Header
var header = document.createElement('header');
header.setAttribute('id', 'header');
wrapper.appendChild(header);

var header_logo = document.createElement('div');
header_logo.innerHTML = 'User Directory';
header.appendChild(header_logo);

// Main Content
var main_content = document.createElement('main_content');
main_content.setAttribute('id', 'main_content');
wrapper.appendChild(main_content);

//Footer
var footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.innerHTML = 'Matthew Wolf | Peapod JSON Exercise';
wrapper.appendChild(footer);
