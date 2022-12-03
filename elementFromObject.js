// create an element from an object
// const el = elementFromObject({
//   tag: "div",
//   id: "myDiv",
//   classes: ["myClass1", "myClass2"],
//   attrs: {
//     "data-foo": "bar",
//   },
//   cssText: "color: red; font-size: 2em;",
//   styles: {
//     color: "red",
//     fontSize: "20px",
//   },
//   prepend: [],
//   append: [
//     {
//       tag: "p",
//       innerText: "This is a paragraph",
//     },
//   ],
// });

window.elementFromObject = ({
  tag = "div", // tagname OR existing Node
  classes = [], // all added class names
  attrs = {}, // all added attributes
  cssText = false, // tag.style.cssText string!
  styles = {}, // all added styles
  prepend = [], // prepended Children
  append = [], // appended Children
  ...props // all remaining properties, event handlers etc.
} = {}) => {
  tag = typeof tag == "string" ? document.createElement(tag) : tag;
  //this.setAttributes(attrs, el);
  Object.keys(attrs).map((key) => tag.setAttribute(key, attrs[key]));
  cssText && (tag.style.cssText = cssText);
  Object.keys(styles).map((key) => (tag.style[key] = styles[key]));
  tag.classList.add(...classes);
  tag.prepend(...prepend.flat());
  tag.append(...append.flat());
  Object.assign(tag, props);
  return tag;
};

