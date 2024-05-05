// eslint-disable-next-line
/* eslint-disable */
/*
export default {
  mounted: (element, binding) => {
    element.style.position = 'absolute';
    Object.keys(binding.value).forEach((key) => {
      element.style[key] = binding.value[key];
    });
    //   Object.keys(binding.modifiers).forEach((key) => {
    //     element.style[key] = '5px';
    // });
    // element.style.bottom = '5px';
    // element.style.right = '5px';
  }
}
*/
export default function (element, binding) {
  element.style.position = 'absolute';
  Object.keys(binding.value).forEach((key) => {
    element.style[key] = binding.value[key];
  });


}
