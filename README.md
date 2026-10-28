# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student:** Yersaiyn Taubay
**Group:** SE-2524

Web Technologies / Front-End Development. A multi-page site that shows how jQuery simplifies
work with the DOM: selectors, effects, attribute changes and animations, plus a small image
gallery as the mini project.

## Live demo

https://arcaneyears.github.io/assignment6/

## Pages

| Page | Task | What it shows |
| --- | --- | --- |
| `index.html` | — | Home page with the navigation bar and a short description of every task |
| `task0.html` | Task 0 | jQuery from a CDN, `$(document).ready()`, a message in the console |
| `task1.html` | Task 1 | Selecting by id, class and tag; `.text()`, `.html()` and `.css()` |
| `task2.html` | Task 2 | `.hide()`, `.show()` and `.toggle()` |
| `task3.html` | Task 3 | `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` and `.fadeTo()` on an image |
| `task4.html` | Task 4 | A collapsible panel with `.slideUp()`, `.slideDown()` and `.slideToggle()` |
| `task5.html` | Task 5 | `.append()`, `.prepend()`, `.remove()` and `.empty()` on a list |
| `task6.html` | Task 6 | Changing the `src` of an image and the `href` of a link with `.attr()` |
| `task7.html` | Task 7 | Live output of the form fields with `.val()` and `.text()` |
| `task8.html` | Task 8 | A square that grows and moves with `.animate()` |
| `task9.html` | Task 9 | Four animations in a queue: right, down, shrink, back to the start |
| `task10.html` | Task 10 | Position, size and opacity in one `.animate()` call |
| `task11.html` | Task 11 | Mini project: image gallery with fade effects and hover animations |

## Structure

```
.
├── index.html
├── task0.html … task11.html
├── css
│   └── style.css
├── img
│   └── photo1.svg … photo6.svg
├── js
│   ├── task0.js … task11.js
└── README.md
```

## How to run it locally

1. Clone the repository:
   ```
   git clone https://github.com/arcaneyears/assignment6.git
   ```
2. Open `index.html` in a browser, or start it with a local server
   (for example the Live Server extension in VS Code).
3. Use the navigation bar to move between the tasks; the tasks are grouped into dropdown menus
   by the parts of the assignment.
4. For Task 0 open the developer tools with `F12` and look at the Console tab.

jQuery 3.7.1 and Bootstrap 5.3 are loaded from a CDN, so an internet connection is needed.

## Notes

- The pictures in `img/` are simple SVG files made for this assignment, so the gallery works
  without downloading anything from the internet.
- In Task 9 the four `.animate()` calls use the jQuery animation queue, so they run one after
  another without any timers.
