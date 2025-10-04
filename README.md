# HolographicMenuTool
Easily improve your mobile users' experience when filling in forms, with this UI generator.

## Website
The official website: [www.weatherheadonline.com/holographic-menu](https://www.weatherheadonline.com/holographic-menu/)

## Installation instructions

1. Open [RequiredDiv.txt](https://github.com/WeatherheadOnline/HolographicMenuTool/blob/main/RequiredDiv.txt).
    - Add the included div to your page, as a direct child of the body.  
    For each input element (including textarea elements):
    - Add the class name "holograph-menu".
    - Add the custom property "data-holomenu".
    - Add a value to the custom property. This determines the text the user sees on the matching button in the input menu, so shorter is better.

2. Open [HolographicMenu.css](https://github.com/WeatherheadOnline/HolographicMenuTool/blob/main/HolographicMenu.css).
    - Save it to your project.
    - Remove the optional styling at the bottom of the file if you don't want it.
    - Replace the colors and length values with your preferred values.
    - Link to the CSS file in the head of your HTML file.
    Optional: If your form contains multiple fieldsets, color-coordinate their buttons' borders:
    - In the HTML file, give each fieldset a unique name attribute. For each fieldset, add this rule to the CSS file: .holomenu-btn.[your fieldset's name]-border {border-color: ___}

3. Open [HolographicMenu.js](https://github.com/WeatherheadOnline/HolographicMenuTool/blob/main/HolographicMenu.js).
    - Save this file to your project.
    - Add a script tag in the body of your HTML file, listing the JS file as the value for the src attribute.

The input menu is designed for mobile, and it's turned off by default for desktop devices. If you've installed it and would like to test it out on desktop, comment out line 39 in HolographicMenu.css ("display: none;").
