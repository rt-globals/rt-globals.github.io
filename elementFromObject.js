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
  tag = "div", //     string OR existing DOM element
  innerHTML = ``, //  capture now so append can append childelements after it
  cssText = ``, //    String of CSS REPLACES existing styles
  classes = [], //    array of class names
  styles = {}, //     object with css properties
  attrs = {}, //      {name:value}
  append = [], //     Array of DOM elements to append
  prepend = [], //    Array of DOM elements to prepend
  ...props //         any other properties AND EventHandlers
} = {}) => {
  tag = typeof tag == "string" ? document.createElement(tag) : tag; //   create tag OR use tag
  cssText && (tag.style.cssText = cssText);
  Object.keys(attrs).map((key) => tag.setAttribute(key, attrs[key])); // set attributes
  Object.keys(styles).map((key) => (tag.style[key] = styles[key])); //   set styles
  tag.classList.add(...classes); //
  tag.prepend(...prepend.flat());
  innerHTML && (tag.innerHTML = innerHTML);
  tag.append(...append.flat());
  return Object.assign(tag, props);
};

  // TODO: add support for innerHTML Template Literal String, replacing this. properties
  // let parseStringLiteral = (str, v = {}) => {
  //   console.log("parseStringLiteral", { str: [str] }, v);
  //   try {
  //     return
  //       new Function("v", "return((" + Object.keys(v).join(",") + ")=>`" + str + "`)(...Object.values(v))")(v) || "";
  //   } catch (e) {
  //     console.error(
  //       "parseStringLiteral",
  //       v,
  //       str
  //     );
  //     //! DO not return ""; this will list the error for every frame
  //     console.error(new Error().stack);
  //   }
  // };

  console.warn("loaded window.elementFromObject");