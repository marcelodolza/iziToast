# [iziToast](http://izitoast.dolce.ninja)
Elegant, responsive, flexible and lightweight notification plugin with no dependencies.

[**izitoast**.marcelodolce.com](http://izitoast.marcelodolce.com)

![capa](http://i.imgur.com/NKk7Rxm.png)

[logo]: http://i.imgur.com/hCYIhep.png "Check icon"
[new]: http://i.imgur.com/41zuVDk.png "New label"
[bug]: http://i.imgur.com/92lu4ln.png "Bug label"

Fast | Responsive | Animated | Lightweight | Customizable | No dependencies | Retina
:-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: 
![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo]


- All modern browsers are supported (Tested in Chrome, Firefox, Opera, Safari, IE10+ and Edge).
- Bugs? create an issue [here](https://github.com/dolce/iziToast/issues).

___
### Version Log

- **v1.1.0**
  - ![alt text][new] Drag/Touch support - *Implemented.*
  - ![alt text][new] ClosedBy param ('drag' or 'button') - *Implemented.*
  - ![alt text][new] Targetfirst option - *Implemented.*
  - ![alt text][new] Background & message color options - *Implemented.*
  - ![alt text][new] Write HTML elements in toast messages. - *Implemented.*
  - ![alt text][bug] Leap in animation when used Target - *Fixed.*
  - ![alt text][bug] zIndex, unexpected behavior - *Fixed.*
  - ![alt text][bug] box-shadow of balloon toast with progressbar not applied correctly - *Fixed.*

- **v1.0.2**
  - ![alt text][new] Original stylus source files - *Implemented.*
  - ![alt text][new] Folder structure - *Modified.*
  - ![alt text][new] Larger zIndex and Option to set it - *Implemented.*
  - ![alt text][bug] Flip animation - *Fixed.*
  - ![alt text][bug] Wrong positioning of internal elements - *Fixed.*

- **v1.0.1**
  - ![alt text][new] Internet Explorer support - *Implemented.*

___
### Install

#### [npm](https://www.npmjs.com/package/izitoast)
```
npm install izitoast --save
```

#### bower
```
bower install izitoast --save
```

___
### Default Options

```javascript
iziToast.show({
    class: '',
    title: '',
    titleColor: '',
    message: '',
    messageColor: '',
    backgroundColor: '',
    color: '', // blue, red, green, yellow
    icon: '',
    iconText: '',
    iconColor: '',
    image: '',
    imageWidth: 50,
    zindex: 99999,
    layout: 1,
    balloon: false,
    close: true,
    rtl: false,
    position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    target: '',
    targetFirst: true,
    timeout: 5000,
    drag: true,
    pauseOnHover: true,
    resetOnHover: false,
    progressBar: true,
    progressBarColor: '',
    animateInside: true,
    buttons: {},
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOut',
    transitionInMobile: 'fadeInUp',
    transitionOutMobile: 'fadeOutDown',
    onOpen: function () {},
    onClose: function () {}
});
```


Argument | Default Value | Description
:---: | :---: | ---
**class** | *''* | The class that will be applied to the toast. It may be used as a reference.
**title** | *''* | Title of the toast.
**titleColor** | *''* | Title color.
**message** | *''* | Message of the toast.
**messageColor** | *''* | Message color.
**backgroundColor** | *''* | Background color of the Toast.
**color** | *''* | It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name".
**icon** | *''* | Icon class (font-icon of your choice, Icomoon, Fontawesome etc.).
**iconText** | *''* | Icon text (font-icon using text, Material Icons, etc.).
**iconColor** | *''* | Icon color.
**image** | *''* | Cover image.
**imageWidth** | *50* | Width of cover image.
**zindex** | *99999* | The z-index CSS attribute of the toast.
**layout** | *1* | It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3"
**balloon** | *false* | Applies a balloon like toast.
**close** | *true* | Show "x" close button.
**rtl** | *false* | RTL option.
**position** | *'bottomRight'* | Where it will be shown. It can be bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter or center.
**target** | *''* | Fixed place where you want to show the toasts. 
**targetFirst** | *true* | Add toast to first position
**timeout** | *5000* | Amount in milliseconds to close the toast or false to disable.
**drag** | *true* | Drag Feature. Is used to close the toast.
**pauseOnHover** | *true* | Pause the toast timeout while the cursor is on it.
**resetOnHover** | *false* | Reset the toast timeout while the cursor is on it.
**progressbar** | *true* | Enable timeout progress bar.
**progressBarColor** | *''* | Progress bar color.
**animateInside** | *true* | Enable animations of elements in the toast. 
**buttons** | *{}* | You can specify an array of buttons.
**transitionIn** | *'fadeInUp'* | Default toast open animation. It can be: bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
**transitionOut** | *'fadeOut'* | Default toast close animation. It can be: fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
**transitionInMobile** | *'fadeInUp'* | Default toast opening mobile transition.
**transitionOutMobile** | *'fadeOutDown'* | Default toast closing mobile transition.
**onOpen** | *function () {}* | Callback function triggered when open the toast.
**onClose** | *function () {}* | Callback function triggered when close the toast.


___
### Methods

- **Settings** - is used to set default values.
```javascript
iziToast.settings({
    timeout: 10000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX'
});
```

- **Show** - Opens the toast. (Example with buttons).
```javascript
iziToast.show({
    color: 'dark',
    icon: 'icon-person',
    title: 'Hey',
    message: 'Welcome!',
    position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [
        ['<button>Ok</button>', function (instance, toast) {
            alert("Hello world!");
        }],
        ['<button>Close</button>', function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOutUp' }, toast);
        }]
    ],
    onOpen: function(instance, toast){
        console.info('callback abriu!');
    },
    onClose: function(instance, toast, closedBy){
        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
    }
});
```

- **Hide** - Closes the specific toast.
```javascript
var toast = document.querySelector('.toast');
 
iziToast.hide({
    transitionOut: 'fadeOutUp'
}, toast);
```

- **Destroy** - Destroy all toasts.
```javascript
iziToast.destroy();
```

- **Info**
```javascript
iziToast.info({
    title: 'Hello',
    message: 'Welcome!',
});
```

- **Success**
```javascript
iziToast.success({
    title: 'OK',
    message: 'Successfully inserted record!',
});
```

- **Warning**
```javascript
iziToast.warning({
    title: 'Caution',
    message: 'You forgot important data',
});
```

- **Error**
```javascript
iziToast.error({
    title: 'Error',
    message: 'Illegal operation',
});
```


___
### Events

- **Open** - Capture when the toast is opening.
```javascript
document.addEventListener('iziToast-open', function(data){
    if(data.detail.class == 'test'){
        console.log('test open');
    }
});
```

- **Close** - Capture when the toast is closing.
```javascript
document.addEventListener('iziToast-close', function(data){
    if(data.detail.class == 'test'){
        console.log('test close');
    }
});
```
