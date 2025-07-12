# Howdy Cafe - Coming Soon Page

A responsive, animated "Coming Soon" page for Howdy Cafe, a Pakistani-Canadian fusion restaurant in Williams Lake, BC. This page features a Canadian-centric design with subtle maple leaf elements, red and white color scheme, and modern animations.

## Features

- Responsive design that works on all device sizes
- Modern animations using CSS transitions and keyframes
- Newsletter subscription form connected to Google Sheets
- Dynamic content loading from local storage
- Canadian-themed design elements
- Social media links
- Accessible and semantic HTML

## Technical Details

This page is built with vanilla HTML, CSS, and JavaScript, requiring no build tools or frameworks. The newsletter subscription functionality uses the same Google Apps Script backend as the main project.

### Files Structure

- `index.html` - Main HTML file
- `css/styles.css` - All styling and animations
- `js/script.js` - JavaScript functionality
- `images/favicon.svg` - Maple leaf favicon

### Newsletter Integration

The newsletter form connects to a Google Apps Script web app that adds email addresses to a Google Sheet. The same integration mechanism from the main Howdy Cafe project is used here.

## How to Use

1. Simply open `index.html` in a web browser to view the Coming Soon page.
2. To customize the project name, add an entry to local storage with the key `projectName`.

## Customization

- Colors and styling variables can be modified in the `:root` section of `styles.css`
- Background maple leaf elements can be adjusted in the `.maple-leaves` section
- Social media links can be updated in the HTML file

## Browser Compatibility

This page works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- Fonts: Google Fonts (Montserrat, Playfair Display)
- Icons: Feather Icons (inline SVG)
- Maple Leaf SVG: FontAwesome (modified) 