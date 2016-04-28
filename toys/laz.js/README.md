# laz.js
for image lazy loading

## Usage
call `laz` function, and pass an option object.

```javascript
laz({
  selector: '.laz',
  attr: 'data-src',
  debounce: 1000,
})
```

And in the HTML:

```html
<img data-src="images/Superman.jpg" class="laz" alt="">
<script src="laz.js"></script>
```

## Options
an object passed to `laz` function.

#### selector
a selector for query image, **must set**.

#### attr
attribute for storing image's `src` value.

- type: `string`
- default: `data-src`

#### debounce
debounce to trigger loading image. 

- type: `number`
- default: `200`

## Resources

- [lazy-loading-images-on-the-web/](http://developer.telerik.com/featured/lazy-loading-images-on-the-web/)
- [lazy-loading-images](https://css-tricks.com/snippets/javascript/lazy-loading-images/)
- [blazy](https://github.com/dinbror/blazy/blob/master/README.md)