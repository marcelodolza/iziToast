/*$(function(){
(function() {
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.substring(position, position + searchString.length) === searchString;
        };
    }

    const urls = [
        'http://izitoast.marcelodolza.com',
        'http://izitoast.dolza.dev'
    ];

    const currentUrl = window.location.href;
    const targetUrl = urls.find(url => currentUrl.startsWith(url));

    if (!targetUrl) window.location.href = urls[0];

    if (window.location !== window.parent.location) {
        const urlOrigin = window.location.origin;
        const iframeTargetUrl = urls.find(url => urlOrigin.startsWith(url));
        if (iframeTargetUrl) {
            window.top.location.href = iframeTargetUrl;
        }
    }
})();
*/

$(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function (e) {
        updateNavigation(e);
    });


    //smooth scroll to the section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        var hash = $(this.hash);

        smoothScroll(hash);

        history.pushState({}, '', hash.selector);

        hash = $(this.hash).selector.split('#')[1];
        document.title = "iziToast - " + hash;
        // history.pushState(null, hash, hash);
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function () {
        $('.touch #cd-vertical-nav').toggleClass('open');
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function () {
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation(e) {
        contentSections.each(function () {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }

            if ($(".no-touch #cd-vertical-nav li:nth-child(1) > a").hasClass('is-selected')) {
                $("body").addClass('first-section');
            } else {
                $("body").removeClass('first-section');
            }

        });
    }

    function smoothScroll(target) {
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
            600
        );
    }

    $(document).on('click', '[data-target-scroll]', function (event) {
        event.preventDefault();
        var target = $(this).attr('data-target-scroll');
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $(".buttons li a").on('click', function(){
        $(".buttons li").removeClass('active');
        $(this).parent().addClass('active');
    });


    SyntaxHighlighter.all();
});





//
// CONFIG IZIToast
//

iziToast.settings({
    timeout: 200000,
    // closeOnClick: true,
    // closeOnEscape: true,
    close: true,
    progressBar: true,
    progressBarEasing: 'ease',
    //displayMode: 2,
    // pauseOnHover: false,
    // zindex: 900,
    // maxWidth: 400,
    // rtl: true,
    // layout: 2,
    // resetOnHover: true,
    imageWidth: 54,
    // balloon: true,
    // target: '.target',
    // icon: 'material-icons',
    // iconText: 'face',
    // animateInside: false,
    // transitionIn: 'flipInX',
    // transitionOut: 'fadeOutLeft',
    // titleSize: 20,
    // titleLineHeight: 20,
    // messageSize: 20,
    // messageLineHeight: 20,
});


/*var myObj = {
    go: function() { alert("go called"); },
    callGo: function(){ this.go(); }
}

iziToast.show({
    title: 'Hey',
    message: 'Welcome!',
    buttons: [
        [ '<button>Ok</button>', myObj.callGo.bind(myObj) ]
    ]
});
*/



$(".trigger-info").on('click', function (event) {
    event.preventDefault();

    iziToast.info({
        id: 'info',
        title: 'Hello',
        // iconUrl: 'img/star.svg',
        // icon: 'fas fa-check-circle',
        // iconText: 'star',
        // message: 'Welcome!',
        // imageWidth: 70,

        // closeOnClick: true,

        position: 'bottomLeft',
        transitionIn: 'bounceInRight',
        // rtl: true,
        onOpening: function(instance, toast){
            console.info('Opening');
        },
        onOpened: function(instance, toast){
            console.info('Opened');
        },
        onClosing: function(instance, toast, closedBy){
            console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function(instance, toast, closedBy){
            console.info('Closed | closedBy: ' + closedBy);
        },
        onClick: function(instance, toast){
            // console.info('Click | closedBy: ' + closedBy);
            console.warn(instance)
            console.warn(toast)
        },
/*        buttons: [
            ['<button><b>YES</b></button>', function (instance, toast) {

                instance.hide({ transitionOut: 'fadeOut' }, toast);

            }, true],
            ['<button>NO</button>', function (instance, toast) {

                instance.hide({ transitionOut: 'fadeOut' }, toast);

            }]
        ],*/
    });
});
$(".trigger-success").on('click', function (event) {
    event.preventDefault();

    iziToast.success({
        id: 'success',
        title: 'Success',
        message: 'Thank you for your visit',
        position: 'bottomRight',
        transitionIn: 'bounceInLeft',
        // iconText: 'star',
        onOpened: function(instance, toast){
            // console.info(instance)
        },
        onClosed: function(instance, toast, closedBy){
            console.info('closedBy: ' + closedBy);
        }
    });
});
$(".trigger-warning").on('click', function (event) {
    event.preventDefault();

    iziToast.warning({
        id: 'warning',
        title: 'Warning',
        message: 'You forgot important data',
        position: 'topLeft',
        // close: false,
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX'
    });
    
});
$(".trigger-error").on('click', function (event) {
    event.preventDefault();

    iziToast.error({
        id: 'error',
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        transitionIn: 'fadeInDown'
    });
});


$(".trigger-progress").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        // backgroundColor: '#ffcbfb',
        progressBar: true,
        // color: 'dark',
        theme: 'dark', // 
        progressBarColor: 'rgb(0, 255, 184)',
        overlay: true,
        displayMode: 1,
        pauseOnHover: false,
        timeout: false,
        message: 'Progress control',
        position: 'center',
        onOpening: function(instance, settings, toast){
            
        },
        onClick: function(instance, settings, toast, e){
            // console.info('Click | closedBy: ' + closedBy);
            // console.warn(instance)
            // console.warn(toast)
            // console.warn(e)
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            /* instance.hide({
                transitionOut: 'fadeOutUp',
                onClosing: function(instance, toast, closedBy){
                    console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
                }
            }, toast, 'buttonName'); */
        },
        buttons: [
            ['START', function (instance, settings, elements, e) {
                // console.info(instance)
                // console.info(settings)
                // console.info(instance.getSettings(settings.ref, 'class'))
                // console.info(elements)
                // console.info(e)
                instance.progress({timeout: 10000}, elements.toast).start();
            }, true],
            ['RESET', function (instance, settings, elements, e) {
                console.warn('RESET button event: ', e)
                instance.progress({}, elements.toast).reset();
            }],
            ['RESUME', function (instance, settings, elements, e) {
                instance.progress({timeout: 10000}, elements.toast).resume();
            }],
            ['PAUSE', function (instance, settings, elements, e) {
                instance.progress({timeout: 10000}, elements.toast).pause();
            }]
        ]
    });
});




$(".trigger-question").on('click', function (event) {
    event.preventDefault();




/*    iziToast.question({
        drag: false,
        close: false,
        overlay: true,
        title: 'Hey',
        message: 'How old are you?',
        position: 'center',
        inputs: [
            ['<input type="text">', 'keyup', function (instance, toast, input, e) {
                console.info(input.value);
            }, true], // true to focus
            ['<select><option value="">Select</option><option value="10 ~ 20">10 ~ 20</option><option value="21 ~ 30">21 ~ 30</option><option value="31 ~ 40">31 ~ 40</option><option value="40+">40+</option></select>', 'change', function (instance, toast, select, e) {
                console.info(select.options[select.selectedIndex].value);
            }]
        ],
        buttons: [
            ['<button><b>Confirm</b></button>', function (instance, toast, button, e, inputs) {

                alert('First field: ' + inputs[0].value)
                alert('Second field: ' + inputs[1].options[inputs[1].selectedIndex].value)

                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }, false], // true to focus
        ]
    });
*/


var input = {
    class: '',
    id: '',
    name: '',
    type: '',
    placeholder: '',
    min: 1,
    max: 100,
    maxlength: '',
    minlength: '',
    pattern: '',
    title: '',
    value: '2',
    autocomplete: 'off',
    disabled: false
}


var options = [
    {
        value: '',
        text: 'Selecione'
    },
    {
        value: '2',
        text: 'valor 2'
    },
    {
        value: '3',
        text: 'valor 3'
    }
]
//instance, settings, elements, e


{/* <select>
    <option value="Select">Select</option>
    <option value="10 ~ 20">10 ~ 20</option>
    <option value="21 ~ 30">21 ~ 30</option>
    <option value="31 ~ 40">31 ~ 40</option>
    <option value="40+">40+</option>
</select> */}

var inputText = {
    label: 'Male',
    for: 'male',
    type: 'radio',
    name: 'gender',
    id: 'male',
    value: 'male'
}

var inputNumber = {
    label: 'Female',
    for: 'female',
    type: 'radio',
    name: 'gender',
    id: 'female',
    value: 'female'
}

var inputSelect = {
    type: 'select',
    name: 'nome',
    id: 'meuid',
    class: 'classe1 classe2',
    placeholder: 'Campo teste',
    options: options,
    value: '2'
}


    iziToast.question({
        rtl: false,
        layout: 1,
        drag: false,
        timeout: false,
        close: false,
        overlay: true,
        displayMode: 1,
        id: 'question',
        progressBar: true,
        title: 'Hey',
        message: 'How old are you?',
        position: 'center',
        inputs: [
            [inputText, 'change', function (instance, settings, elements, e) {
                console.info(e);
                console.info(input);
            }, true],
            [inputNumber, 'change', function (instance, settings, elements, e) {
                console.info(e);
                console.info(input);
            }],
            [inputSelect, 'change', function (instance, settings, elements, e) {
                console.info(e.target.options[e.target.selectedIndex].value)
            }]
        ],
        buttons: [
            ['Confirm', function (instance, settings, elements, e) {

                console.info(elements.inputs[2].firstChild);
                

                alert(elements.inputs[2].firstChild.options[elements.inputs[2].firstChild.options.selectedIndex].value)

                instance.hide({ transitionOut: 'fadeOut' }, elements.toast, 'button');

               /* iziToast.success({
                    id: 'success',
                    zindex: 9999,
                    timeout: 2000,
                    title: 'Success',
                    overlay: true,
                    message: 'Thank you',
                    position: 'center'
                });*/

            }, false], // true to focus
            /*['<button>NO</button>', function (instance, toast, button, e) {

                console.info(button);
                console.info(e);

                // instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

            }]*/
        ],
        onClosing: function(instance, toast, closedBy){
            // console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function(instance, toast, closedBy){
            // console.info('Closed | closedBy: ' + closedBy);
        }
    });

});






$(".trigger-custom1").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        id: 'show',
        title: 'Hey',
        icon: 'icon-drafts',
        class: 'custom1',
        displayMode: 2,
        message: 'This is a Balloon example with buttons',
        position: 'bottomCenter',
        image: 'https://avatars2.githubusercontent.com/u/2837790?s=460&u=ac9e3e819e3ff93273f7e1f2c4c6d242e641edfe',
        balloon: true,
        buttons: [
            ['Photo', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    theme: 'dark',
                    icon: 'icon-photo',
                    title: 'OK',
                    message: 'Callback Photo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }, true],
            ['Video', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    theme: 'dark',
                    icon: 'icon-ondemand_video',
                    title: 'OK',
                    message: 'Callback Vídeo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
            ['Text', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    theme: 'dark',
                    icon: 'icon-event_note',
                    title: 'OK',
                    message: 'Callback Text!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }]
        ]
    });

});









$(".trigger-inputs").on('click', function (event) {
    event.preventDefault();

    iziToast.info({
        timeout: 20000,
        overlay: true,
        displayMode: 1,
        once: true,
        id: 'inputs',
        zindex: 999,
        title: 'Inputs',
        message: 'Examples',
        position: 'center',
        drag: false,
        inputs: [
            ['<input type="checkbox">', 'change', function (instance, toast, input, e) {
                console.info(input.checked);
            }],
            ['<input type="text">', 'keyup', function (instance, toast, input, e) {
                console.info(input.value);
            }, true],
            ['<input type="number">', 'keydown', function (instance, toast, input, e) {
                console.info(input.value);
            }],
        ]
    });
});



$(".trigger-custom2").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        id: 'haduken',
        theme: 'dark',
        icon: 'icon-contacts',
        title: 'Hey',
        displayMode: 2,
        message: 'This is Layout 2 example',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'https://avatars2.githubusercontent.com/u/2837790?s=460&u=ac9e3e819e3ff93273f7e1f2c4c6d242e641edfe',
        imageWidth: 70,
        layout: 2,
        onClosing: function(){
            console.info('onClosing');
        },
        onClosed: function(instance, toast, closedBy){
            console.info('Closed | closedBy: ' + closedBy);
        },
        iconColor: 'rgb(0, 255, 184)'
    });
});


$(".trigger-animInsideFalse").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        title: 'Hey',
        icon: 'icon-drafts',
        class: 'animInsideFalse',
        message: 'What would you like to add?',
        position: 'bottomCenter',
        animateInside: false,
        image: 'https://avatars2.githubusercontent.com/u/2837790?s=460&u=ac9e3e819e3ff93273f7e1f2c4c6d242e641edfe',
        buttons: [
            ['Photo', function (instance, toast) {

            }],
            ['Video', function (instance, toast) {

            }],
            ['Text', function (instance, toast) {

            }],
        ]
    });

});


document.addEventListener('iziToast-opening', function(data){
    // if(data.detail.id == 'haduken'){
        // console.info('EventListener iziToast-opening');
    // }
});

document.addEventListener('iziToast-opened', function(data){
    // if(data.detail.id == 'haduken'){
        // console.info('EventListener iziToast-opening');
    // }
});

document.addEventListener('iziToast-closing', function(data){
    // if(data.detail.id == 'haduken'){
        // console.info('EventListener iziToast-closing');
        // console.info(data.detail.closedBy);
    // }
});

document.addEventListener('iziToast-closed', function(data){
    // if(data.detail.id == 'haduken'){
        // console.info('EventListener iziToast-closed');
        // console.info(data.detail.closedBy);
    // }
});






$(".trigger-bounceInLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInLeft',
        transitionIn: 'bounceInLeft',
        transitionInMobile: 'bounceInLeft',
        position: 'center'
    });
});

$(".trigger-bounceInRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInRight',
        transitionIn: 'bounceInRight',
        transitionInMobile: 'bounceInRight',
        position: 'center'
    });
});

$(".trigger-bounceInUp").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInUp',
        transitionIn: 'bounceInUp',
        transitionInMobile: 'bounceInUp',
        position: 'center'
    });
});

$(".trigger-bounceInDown").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInDown',
        transitionIn: 'bounceInDown',
        transitionInMobile: 'bounceInDown',
        position: 'center'
    });
});

$(".trigger-fadeIn").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeIn',
        transitionIn: 'fadeIn',
        transitionInMobile: 'fadeIn',
        position: 'center'
    });
});

$(".trigger-fadeInDown").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInDown',
        transitionIn: 'fadeInDown',
        transitionInMobile: 'fadeInDown',
        position: 'center'
    });
});

$(".trigger-fadeInUp").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInUp',
        transitionIn: 'fadeInUp',
        transitionInMobile: 'fadeInUp',
        position: 'center'
    });
});

$(".trigger-fadeInLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInLeft',
        transitionIn: 'fadeInLeft',
        transitionInMobile: 'fadeInLeft',
        position: 'center'
    });
});

$(".trigger-fadeInRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInRight',
        transitionIn: 'fadeInRight',
        transitionInMobile: 'fadeInRight',
        position: 'center'
    });
});

$(".trigger-flipInX").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'flipInX',
        transitionIn: 'flipInX',
        transitionInMobile: 'flipInX',
        position: 'center'
    });
});


$(".trigger-image").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        image: 'https://avatars2.githubusercontent.com/u/2837790?s=460&u=ac9e3e819e3ff93273f7e1f2c4c6d242e641edfe',
        theme: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'How are you?',
        position: 'center',
        layout: 1
    });
});

$(".trigger-imageWidth").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        imageWidth: 100,
        image: 'https://avatars2.githubusercontent.com/u/2837790?s=460&u=ac9e3e819e3ff93273f7e1f2c4c6d242e641edfe',
        theme: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'How are you?',
        position: 'center',
        layout: 2
    });
});

$(".trigger-maxWidth").on('click', function (event) {
    event.preventDefault();
    iziToast.success({
        maxWidth: 500,
        position: 'center',
        title: 'Welcome to the iziToast!',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga tenetur qui vel nesciunt nihil suscipit ab saepe illum itaque.',
        position: 'bottomRight',
        transitionIn: 'bounceInLeft',
        // iconText: 'star',
        onOpened: function(instance, toast){

        },
        onClosed: function(instance, toast, closedBy){
            console.info('closedBy: ' + closedBy);
        }
    });
});

$(".trigger-layout1").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        title: 'Layout 1',
        icon: 'icon-palette',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        layout: 1
    });
});
$(".trigger-layout2").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        title: 'Layout 2',
        icon: 'icon-palette',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        layout: 2
    });
});

$(".trigger-balloon").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        theme: 'dark',
        progressBarColor: '#d48d37',
        title: 'Balloon',
        icon: 'icon-chat_bubble',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        balloon: true
    });
});






$(".trigger-once").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        title: 'displayMode',
        message: "'once'",
        position: 'bottomLeft',
        displayMode: 1,
        progressBarColor: 'rgb(0, 255, 184)',
    });
});


$(".trigger-replace").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        title: 'displayMode',
        message: "'replace'",
        position: 'bottomRight',
        displayMode: 2,
        progressBarColor: 'rgb(0, 255, 184)',
    });
});







$(".trigger-bottomRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomRight',
        position: 'bottomRight'
    });
});
$(".trigger-bottomLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomLeft',
        position: 'bottomLeft'
    });
});
$(".trigger-topRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topRight',
        position: 'topRight'
    });
});
$(".trigger-topLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topLeft',
        position: 'topLeft'
    });
});
$(".trigger-topCenter").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topCenter',
        position: 'topCenter'
    });
});
$(".trigger-bottomCenter").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomCenter',
        position: 'bottomCenter'
    });
});
$(".trigger-center").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'center',
        position: 'center'
    });
});


$(".trigger-show").on('click', function (event) {
    event.preventDefault();


    iziToast.show({
        theme: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'Welcome!',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['OK', function (instance, toast) {
                alert("Hello world!");
            }, true], // true to focus
            ['Close', function (instance, toast) {
                instance.hide({
                    transitionOut: 'fadeOutUp',
                    onClosing: function(instance, toast, closedBy){
                        console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
                    }
                }, toast, 'buttonName');
            }]
        ],
        onOpening: function(instance, toast){
            console.info('callback abriu!');
        },
        onClosing: function(instance, toast, closedBy){
            console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
        }
    });


});


$(".trigger-pause").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-mouse',
        title: 'Pause',
        message: 'OnHover',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
    });
});

$(".trigger-reset").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        theme: 'dark',
        icon: 'icon-mouse',
        title: 'Reset',
        message: 'OnHover',
        position: 'center',
        resetOnHover: true,
        progressBarColor: 'rgb(0, 255, 184)',
    });
});




$(".trigger-target").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: '#fff',
        icon: 'icon-style',
        title: 'Target',
        message: 'Specifying a Target',
        transitionIn: 'flipInX',
        transitionInMobile: 'flipInX',
        target: '.target-example',
        targetFirst: false,
        progressBarColor: '#d48d37',
    });
});


$(".trigger-iconUrl").on('click', function (event) {
    event.preventDefault();

    iziToast.warning({
        id: 'iconUrl',
        title: 'Favorite!',
        message: 'Alternative icon example',
        iconUrl: 'img/star.svg',
        position: 'center'
    });
});