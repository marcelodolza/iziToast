// Type definitions for IziToast
// Project https://github.com/dolce/iziToast
// Author: Tarık İNCE <incetarik@hotmail.com>
//         Marcelo Dolce <dolcemarcelo@gmail.com>
//         ZSkycat <https://github.com/ZSkycat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type IziToastPosition = 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft' | 'topCenter' | 'bottomCenter' | 'center';
export type IziToastTransitionIn = 'bounceInLeft' | 'bounceInRight' | 'bounceInUp' | 'bounceInDown' | 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'flipInX';
export type IziToastTransitionOut = 'fadeOut' | 'fadeOutUp' | 'fadeOutDown' | 'fadeOutLeft' | 'fadeOutRight' | 'flipOutX';

export interface IziToastSettings {
    /**
     * Id of the toast
     */
    id?: string;
    /**
     * The class that will be applied to the toast. It may be used as a reference.
     */
    class?: string;
    /**
     * Title of the toast.
     */
    title?: string;
    /**
     * Title color.
     */
    titleColor?: string;
    /**
     * Title fontSize.
     */
    titleSize?: string;
    /**
     * Title lineHeight.
     */
    titleLineHeight?: string;
    /**
     * Message of notification.
     */
    message?: string;
    /**
     * Message color.
     */
    messageColor?: string;
    /**
     * Message fontSize.
     */
    messageSize?: string;
    /**
     * Message lineHeight.
     */
    messageLineHeight?: string;
    /**
     * Background color of the Toast
     */
    backgroundColor?: string;
    /**
     * It can be light or dark or set another class. Create and use like this ".iziToast-theme-name"
     * Default value: light
     */
    theme?: string;
    /**
     * It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name"
     */
    color?: string;
    /**
     * Icon class (font-icon of your choice, Icomoon, Fontawesome etc.).
     */
    icon?: string;
    /**
     * Icon text (font-icon using text, Material Icons, etc.).
     */
    iconText?: string;
    /**
     * Icon color.
     */
    iconColor?: string;
    /**
     * Cover image.
     */
    image?: string;
    /**
     * Width of cover image.
     * Default value: 50
     */
    imageWidth?: number;
    /**
     * Sets maxWidth of toast.
     */
    maxWidth?: number;
    /**
     * The z-index CSS attribute of the toast
     * Default value: 99999
     */
    zindex?: number;
    /**
     * It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3"
     * Default value: 1
     */
    layout?: number;
    /**
     * Applies a balloon like toast.
     * Default value: false
     */
    balloon?: boolean;
    /**
     * Show "x" close button.
     * Default value: true
     */
    close?: boolean;
    /**
     * Allows to close toast using the Esc key.
     * Default value: false
     */
    closeOnEscape?: boolean;
    /**
     * Allows to close toast by clicking itself.
     * Default value: false
     */
    closeOnClick?: boolean;
    /**
     * RTL option
     * Default value: false
     */
    rtl?: boolean;
    /**
     * Where it will be shown.
     * Default value: bottomRight
     */
    position?: IziToastPosition;
    /**
     * Fixed place where you want to show the toasts.
     */
    target?: string;
    /**
     * Add toast to first position.
     * Default value: true
     */
    targetFirst?: boolean;
    /**
     * Waits until the toast is closed so you can open it (Use 1 or 'once').
     * Replaces the toast that was already open (Use 2 or 'replace').
     * Default value: 0
     */
    displayMode?: number;
    /**
     * Amount in milliseconds to close the toast or false to disable.
     * Default value: 5000
     */
    timeout?: boolean | number;
    /**
     * Drag feature used to close the toast.
     * Default value: true
     */
    drag?: boolean;
    /**
     * Pause the toast timeout while the cursor is on it.
     * Default value: true
     */
    pauseOnHover?: boolean;
    /**
     * Reset the toast timeout while the cursor is on it.
     * Default value: false
     */
    resetOnHover?: boolean;
    /**
     * Enable timeout progress bar.
     * Default value: true
     */
    progressBar?: boolean;
    /**
     * Progress bar color.
     */
    progressBarColor?: string;
    /**
     * Animation Easing of progress bar.
     * Default value: linear
     */
    progressBarEasing?: string;
    /**
     * Enables display the Overlay layer on the page.
     * Default value: false
     */
    overlay?: boolean;
    /**
     * Allows to close toast clicking on the Overlay.
     * Default value: false
     */
    overlayClose?: boolean;
    /**
     * Overlay background color.
     * Default value: rgba(0, 0, 0, 0.6)
     */
    overlayColor?: string;
    /**
     * Enable animations of elements in the toast.
     * Default value: true
     */
    animateInside?: boolean;
    /**
     * Array of buttons.
     * The first parameter is html string
     * The second parameter is click event callback
     * The last parameter is a boolean that defines whether there will be focus or not.
     */
    buttons?: ([string, (instance: IziToast, toast: HTMLDivElement, button: HTMLButtonElement, event: MouseEvent, inputs: Array<HTMLInputElement>) => void, boolean])[];
    /**
     * Array of inputs.
     * The first parameter is html string
     * The second and third parameters is event type and event callback
     * The last parameter is a boolean that defines whether there will be focus or not.
     */
    inputs?: ([string, string, (instance: IziToast, toast: HTMLDivElement, input: HTMLInputElement, event: Event) => void, boolean])[];
    /**
     * Default toast open animation.
     * Default value: 'fadeInUp'
     */
    transitionIn?: IziToastTransitionIn;
    /**
     * Default toast close animation.
     * Default value: 'fadeOut'
     */
    transitionOut?: IziToastTransitionOut;
    /**
     * Default toast opening mobile transition.
     * Default value: 'fadeInUp'
     */
    transitionInMobile?: IziToastTransitionIn;
    /**
     * Default toast closing mobile transition.
     * Default value: 'fadeOutDown'
     */
    transitionOutMobile?: IziToastTransitionOut;
    /**
     * Callback function triggered when opening the toast.
     * @param settings Settings of opening toast.
     * @param toast Toast DOM element.
     */
    onOpening?: (settings: IziToastSettings, toast: HTMLDivElement) => void;
    /**
     * Callback function triggered when opened the toast.
     * @param settings Settings of opening toast.
     * @param toast Toast DOM element.
     */
    onOpened?: (settings: IziToastSettings, toast: HTMLDivElement) => void;
    /**
     * Callback function triggered when closing the toast.
     * @param settings Settings of closing toast.
     * @param toast Toast DOM element.
     * @param closedBy Closed by info set by hide method.
     */
    onClosing?: (settings: IziToastSettings, toast: HTMLDivElement, closedBy: string) => void;
    /**
     * Callback function triggered when closed the toast.
     * @param settings Settings of closing toast.
     * @param toast Toast DOM element.
     * @param closedBy Closed by info set by hide method. (default: drag | timeout | button | overlay | esc | toast)
     */
    onClosed?: (settings: IziToastSettings, toast: HTMLDivElement, closedBy: string) => void;
}

export interface IziToastProgress {
    pause(): void;
    reset(): void;
    resume(): void;
    start(): void;
}

export interface IziToast {
    /**
    * Sets default values.
    * @param settings Settings to set as default.
    */
    settings(settings: IziToastSettings): void;
    /**
    * Destroys all toasts.
    */
    destroy(): void;
    /**
    * Opens the toast.
    * @returns Returns false if toast can not be opened.
    */
    show(settings: IziToastSettings): void | boolean;
    /**
     * Closes the specific toast.
     * @param settings Settings for this toast.
     * @param toast Toast element or selector to hide.
     * @param closedBy Custom closed by info to use in other functions.
     */
    hide(settings: IziToastSettings, toast: HTMLDivElement | string, closedBy?: string): void;
    /**
     * Control progress bar time.
     * @param settings Settings for this toast.
     * @param toast Toast element
     * @param callback Callback function triggered when invoke IziToastProgress
     */
    progress(settings: IziToastSettings, toast: HTMLDivElement, callback?: () => void): IziToastProgress;
    /**
     * Shows an info toast.
     * @param settings Settings for this toast.
     */
    info(settings: IziToastSettings): void;
    /**
     * Shows an error toast.
     * @param settings Settings for this toast.
     */
    error(settings: IziToastSettings): void;
    /**
     * Shows a warning toast.
     * @param settings Settings for this toast.
     */
    warning(settings: IziToastSettings): void;
    /**
     * Shows a success toast.
     * @param settings Settings for this toast.
     */
    success(settings: IziToastSettings): void;
    /**
     * Shows a question toast.
     * @param settings Settings for this toast.
     */
    question(settings: IziToastSettings): void;
}

declare const iziToast: IziToast;
export default iziToast;
