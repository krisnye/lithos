/***************************************************************
This file was generated automatically from lib.dom.d.ts,
which is distributed by Microsoft under the Apache 2.0 license. 
***************************************************************/

import { type Constructor } from "../../core/types.js"
import { HTMLElementProperties } from "../elements.js"
import { type HTMLElementTagNameMapExact } from "./types.js";

export interface HTMLAnchorProperties extends HTMLElementProperties {
    download?: string;
    /** Sets or retrieves the language code of the object. */
    hreflang?: string;
    ping?: string;
    referrerPolicy?: string;
    /** Sets or retrieves the relationship between the object and the destination of the link. */
    rel?: string;
    /** Sets or retrieves the window or frame at which to target content. */
    target?: string;
    /** Retrieves or sets the text of the object as a string. */
    text?: string;
    type?: string;
}

export interface HTMLAreaProperties extends HTMLElementProperties {
    /** Sets or retrieves a text alternative to the graphic. */
    alt?: string;
    /** Sets or retrieves the coordinates of the object. */
    coords?: string;
    download?: string;
    ping?: string;
    referrerPolicy?: string;
    rel?: string;
    /** Sets or retrieves the shape of the object. */
    shape?: string;
    /** Sets or retrieves the window or frame at which to target content. */
    target?: string;
}

export interface HTMLAudioProperties extends HTMLMediaProperties {
}

export interface HTMLBRProperties extends HTMLElementProperties {
}

export interface HTMLBaseProperties extends HTMLElementProperties {
    /** Gets or sets the baseline URL on which relative links are based. */
    href?: string;
    /** Sets or retrieves the window or frame at which to target content. */
    target?: string;
}

export interface HTMLBodyProperties extends HTMLElementProperties {
}

export interface HTMLButtonProperties extends HTMLElementProperties {
    disabled?: boolean;
    /** Overrides the action attribute (where the data on a form is sent) on the parent form element. */
    formAction?: string;
    /** Used to override the encoding (formEnctype attribute) specified on the form element. */
    formEnctype?: string;
    /** Overrides the submit method attribute previously specified on a form element. */
    formMethod?: string;
    /** Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option. */
    formNoValidate?: boolean;
    /** Overrides the target attribute on a form element. */
    formTarget?: string;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** Gets the classification and default behavior of the button. */
    type?: "submit" | "reset" | "button";
    /** Sets or retrieves the default or selected value of the control. */
    value?: string;
}

export interface HTMLCanvasProperties extends HTMLElementProperties {
    /** Gets or sets the height of a canvas element on a document. */
    height?: number;
    /** Gets or sets the width of a canvas element on a document. */
    width?: number;
}

export interface HTMLDListProperties extends HTMLElementProperties {
}

export interface HTMLDataProperties extends HTMLElementProperties {
    value?: string;
}

export interface HTMLDataListProperties extends HTMLElementProperties {
}

export interface HTMLDetailsProperties extends HTMLElementProperties {
    open?: boolean;
}

export interface HTMLDialogProperties extends HTMLElementProperties {
    open?: boolean;
    returnValue?: string;
}

export interface HTMLDivProperties extends HTMLElementProperties {
}

export interface HTMLEmbedProperties extends HTMLElementProperties {
    /** Sets or retrieves the height of the object. */
    height?: string;
    /** Sets or retrieves a URL to be loaded by the object. */
    src?: string;
    type?: string;
    /** Sets or retrieves the width of the object. */
    width?: string;
}

export interface HTMLFieldSetProperties extends HTMLElementProperties {
    disabled?: boolean;
    name?: string;
}

export interface HTMLFormProperties extends HTMLElementProperties {
    /** Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form. */
    acceptCharset?: string;
    /** Sets or retrieves the URL to which the form content is sent for processing. */
    action?: string;
    /** Specifies whether autocomplete is applied to an editable text field. */
    autocomplete?: AutoFillBase;
    /** Sets or retrieves the MIME encoding for the form. */
    encoding?: string;
    /** Sets or retrieves the encoding type for the form. */
    enctype?: string;
    /** Sets or retrieves how to send the form data to the server. */
    method?: string;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** Designates a form that is not validated when submitted. */
    noValidate?: boolean;
    rel?: string;
    /** Sets or retrieves the window or frame at which to target content. */
    target?: string;
}

export interface HTMLHRProperties extends HTMLElementProperties {
}

export interface HTMLHeadProperties extends HTMLElementProperties {
}

export interface HTMLHeadingProperties extends HTMLElementProperties {
}

export interface HTMLHtmlProperties extends HTMLElementProperties {
}

export interface HTMLIFrameProperties extends HTMLElementProperties {
    allow?: string;
    allowFullscreen?: boolean;
    /** Sets or retrieves the height of the object. */
    height?: string;
    loading?: string;
    /** Sets or retrieves the frame name. */
    name?: string;
    referrerPolicy?: ReferrerPolicy;
    /** Sets or retrieves a URL to be loaded by the object. */
    src?: string;
    /** Sets or retrives the content of the page that is to contain. */
    srcdoc?: string;
    /** Sets or retrieves the width of the object. */
    width?: string;
}

export interface HTMLImageProperties extends HTMLElementProperties {
    /** Sets or retrieves a text alternative to the graphic. */
    alt?: string;
    crossOrigin?: string | null;
    decoding?: "async" | "sync" | "auto";
    /** Sets or retrieves the height of the object. */
    height?: number;
    /** Sets or retrieves whether the image is a server-side image map. */
    isMap?: boolean;
    /** Sets or retrieves the policy for loading image elements that are outside the viewport. */
    loading?: "eager" | "lazy";
    referrerPolicy?: string;
    sizes?: string;
    /** The address or URL of the a media resource that is to be considered. */
    src?: string;
    srcset?: string;
    /** Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map. */
    useMap?: string;
    /** Sets or retrieves the width of the object. */
    width?: number;
}

export interface HTMLInputProperties extends HTMLElementProperties {
    /** Sets or retrieves a comma-separated list of content types. */
    accept?: string;
    /** Sets or retrieves a text alternative to the graphic. */
    alt?: string;
    /** Specifies whether autocomplete is applied to an editable text field. */
    autocomplete?: AutoFill;
    capture?: string;
    /** Sets or retrieves the state of the check box or radio button. */
    checked?: boolean;
    /** Sets or retrieves the state of the check box or radio button. */
    defaultChecked?: boolean;
    /** Sets or retrieves the initial contents of the object. */
    defaultValue?: string;
    dirName?: string;
    disabled?: boolean;
    /** Returns a FileList object on a file type input object. */
    files?: FileList | null;
    /** Overrides the action attribute (where the data on a form is sent) on the parent form element. */
    formAction?: string;
    /** Used to override the encoding (formEnctype attribute) specified on the form element. */
    formEnctype?: string;
    /** Overrides the submit method attribute previously specified on a form element. */
    formMethod?: string;
    /** Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option. */
    formNoValidate?: boolean;
    /** Overrides the target attribute on a form element. */
    formTarget?: string;
    /** Sets or retrieves the height of the object. */
    height?: number;
    /** When set, overrides the rendering of checkbox controls so that the current value is not visible. */
    indeterminate?: boolean;
    /** Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field. */
    max?: string;
    /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
    maxLength?: number;
    /** Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field. */
    min?: string;
    minLength?: number;
    /** Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. */
    multiple?: boolean;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** Gets or sets a string containing a regular expression that the user's input must match. */
    pattern?: string;
    /** Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field. */
    placeholder?: string;
    readOnly?: boolean;
    /** When present, marks an element that can't be submitted without a value. */
    required?: boolean;
    selectionDirection?: "forward" | "backward" | "none" | null;
    /** Gets or sets the end position or offset of a text selection. */
    selectionEnd?: number | null;
    /** Gets or sets the starting position or offset of a text selection. */
    selectionStart?: number | null;
    size?: number;
    /** The address or URL of the a media resource that is to be considered. */
    src?: string;
    /** Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field. */
    step?: string;
    /** Returns the content type of the object. */
    type?: string;
    /** Returns the value of the data at the cursor's current position. */
    value?: string;
    /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
    valueAsDate?: Date | null;
    /** Returns the input field value as a number. */
    valueAsNumber?: number;
    webkitdirectory?: boolean;
    /** Sets or retrieves the width of the object. */
    width?: number;
}

export interface HTMLLIProperties extends HTMLElementProperties {
    /** Sets or retrieves the value of a list item. */
    value?: number;
}

export interface HTMLLabelProperties extends HTMLElementProperties {
    /** Sets or retrieves the object to which the given label object is assigned. */
    htmlFor?: string;
}

export interface HTMLLegendProperties extends HTMLElementProperties {
}

export interface HTMLLinkProperties extends HTMLElementProperties {
    as?: string;
    crossOrigin?: string | null;
    disabled?: boolean;
    /** Sets or retrieves a destination URL or an anchor point. */
    href?: string;
    /** Sets or retrieves the language code of the object. */
    hreflang?: string;
    imageSizes?: string;
    imageSrcset?: string;
    integrity?: string;
    /** Sets or retrieves the media type. */
    media?: string;
    referrerPolicy?: string;
    /** Sets or retrieves the relationship between the object and the destination of the link. */
    rel?: string;
    /** Sets or retrieves the MIME type of the object. */
    type?: string;
}

export interface HTMLMapProperties extends HTMLElementProperties {
    /** Sets or retrieves the name of the object. */
    name?: string;
}

export interface HTMLMediaProperties extends HTMLElementProperties {
    /** Gets or sets a value that indicates whether to start playing the media automatically. */
    autoplay?: boolean;
    /** Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player). */
    controls?: boolean;
    crossOrigin?: string | null;
    /** Gets or sets the current playback position, in seconds. */
    currentTime?: number;
    defaultMuted?: boolean;
    /** Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource. */
    defaultPlaybackRate?: number;
    disableRemotePlayback?: boolean;
    /** Gets or sets a flag to specify whether playback should restart after it completes. */
    loop?: boolean;
    /** Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted. */
    muted?: boolean;
    /** Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource. */
    playbackRate?: number;
    /** Gets or sets a value indicating what data should be preloaded, if any. */
    preload?: "none" | "metadata" | "auto" | "";
    preservesPitch?: boolean;
    /** The address or URL of the a media resource that is to be considered. */
    src?: string;
    srcObject?: MediaProvider | null;
    /** Gets or sets the volume level for audio portions of the media element. */
    volume?: number;
}

export interface HTMLMenuProperties extends HTMLElementProperties {
}

export interface HTMLMetaProperties extends HTMLElementProperties {
    /** Gets or sets meta-information to associate with httpEquiv or name. */
    content?: string;
    /** Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header. */
    httpEquiv?: string;
    media?: string;
    /** Sets or retrieves the value specified in the content attribute of the meta object. */
    name?: string;
}

export interface HTMLMeterProperties extends HTMLElementProperties {
    high?: number;
    low?: number;
    max?: number;
    min?: number;
    optimum?: number;
    value?: number;
}

export interface HTMLModProperties extends HTMLElementProperties {
    /** Sets or retrieves reference information about the object. */
    cite?: string;
    /** Sets or retrieves the date and time of a modification to the object. */
    dateTime?: string;
}

export interface HTMLOListProperties extends HTMLElementProperties {
    reversed?: boolean;
    /** The starting number. */
    start?: number;
    type?: string;
}

export interface HTMLObjectProperties extends HTMLElementProperties {
    /** Sets or retrieves the URL that references the data of the object. */
    data?: string;
    /** Sets or retrieves the height of the object. */
    height?: string;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** Sets or retrieves the MIME type of the object. */
    type?: string;
    /** Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map. */
    useMap?: string;
    /** Sets or retrieves the width of the object. */
    width?: string;
}

export interface HTMLOptGroupProperties extends HTMLElementProperties {
    disabled?: boolean;
    /** Sets or retrieves a value that you can use to implement your own label functionality for the object. */
    label?: string;
}

export interface HTMLOptionProperties extends HTMLElementProperties {
    /** Sets or retrieves the status of an option. */
    defaultSelected?: boolean;
    disabled?: boolean;
    /** Sets or retrieves a value that you can use to implement your own label functionality for the object. */
    label?: string;
    /** Sets or retrieves whether the option in the list box is the default item. */
    selected?: boolean;
    /** Sets or retrieves the text string specified by the option tag. */
    text?: string;
    /** Sets or retrieves the value which is returned to the server when the form control is submitted. */
    value?: string;
}

export interface HTMLOutputProperties extends HTMLElementProperties {
    defaultValue?: string;
    name?: string;
    /** Returns the element's current value. Can be set, to change the value. */
    value?: string;
}

export interface HTMLParagraphProperties extends HTMLElementProperties {
}

export interface HTMLPictureProperties extends HTMLElementProperties {
}

export interface HTMLPreProperties extends HTMLElementProperties {
}

export interface HTMLProgressProperties extends HTMLElementProperties {
    /** Defines the maximum, or "done" value for a progress element. */
    max?: number;
    /** Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value. */
    value?: number;
}

export interface HTMLQuoteProperties extends HTMLElementProperties {
    /** Sets or retrieves reference information about the object. */
    cite?: string;
}

export interface HTMLScriptProperties extends HTMLElementProperties {
    async?: boolean;
    crossOrigin?: string | null;
    /** Sets or retrieves the status of the script. */
    defer?: boolean;
    integrity?: string;
    noModule?: boolean;
    referrerPolicy?: string;
    /** Retrieves the URL to an external file that contains the source code or data. */
    src?: string;
    /** Retrieves or sets the text of the object as a string. */
    text?: string;
    /** Sets or retrieves the MIME type for the associated scripting engine. */
    type?: string;
}

export interface HTMLSelectProperties extends HTMLElementProperties {
    autocomplete?: AutoFill;
    disabled?: boolean;
    /** Sets or retrieves the number of objects in a collection. */
    length?: number;
    /** Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. */
    multiple?: boolean;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** When present, marks an element that can't be submitted without a value. */
    required?: boolean;
    /** Sets or retrieves the index of the selected option in a select object. */
    selectedIndex?: number;
    /** Sets or retrieves the number of rows in the list box. */
    size?: number;
    /** Sets or retrieves the value which is returned to the server when the form control is submitted. */
    value?: string;
}

export interface HTMLSlotProperties extends HTMLElementProperties {
    name?: string;
}

export interface HTMLSourceProperties extends HTMLElementProperties {
    height?: number;
    /** Gets or sets the intended media type of the media source. */
    media?: string;
    sizes?: string;
    /** The address or URL of the a media resource that is to be considered. */
    src?: string;
    srcset?: string;
    /** Gets or sets the MIME type of a media resource. */
    type?: string;
    width?: number;
}

export interface HTMLSpanProperties extends HTMLElementProperties {
}

export interface HTMLStyleProperties extends HTMLElementProperties {
    /** Enables or disables the style sheet. */
    disabled?: boolean;
    /** Sets or retrieves the media type. */
    media?: string;
}

export interface HTMLTableCaptionProperties extends HTMLElementProperties {
}

export interface HTMLTableCellProperties extends HTMLElementProperties {
    /** Sets or retrieves abbreviated text for the object. */
    abbr?: string;
    /** Sets or retrieves the number columns in the table that the object should span. */
    colSpan?: number;
    /** Sets or retrieves a list of header cells that provide information for the object. */
    headers?: string;
    /** Sets or retrieves how many rows in a table the cell should span. */
    rowSpan?: number;
    /** Sets or retrieves the group of cells in a table to which the object's information applies. */
    scope?: string;
}

export interface HTMLTableColProperties extends HTMLElementProperties {
    /** Sets or retrieves the number of columns in the group. */
    span?: number;
}

export interface HTMLTableProperties extends HTMLElementProperties {
    /** Retrieves the caption object of a table. */
    caption?: HTMLTableCaptionElement | null;
    /** Retrieves the tFoot object of the table. */
    tFoot?: HTMLTableSectionElement | null;
    /** Retrieves the tHead object of the table. */
    tHead?: HTMLTableSectionElement | null;
}

export interface HTMLTableRowProperties extends HTMLElementProperties {
}

export interface HTMLTableSectionProperties extends HTMLElementProperties {
}

export interface HTMLTemplateProperties extends HTMLElementProperties {
}

export interface HTMLTextAreaProperties extends HTMLElementProperties {
    autocomplete?: AutoFill;
    /** Sets or retrieves the width of the object. */
    cols?: number;
    /** Sets or retrieves the initial contents of the object. */
    defaultValue?: string;
    dirName?: string;
    disabled?: boolean;
    /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
    maxLength?: number;
    minLength?: number;
    /** Sets or retrieves the name of the object. */
    name?: string;
    /** Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field. */
    placeholder?: string;
    /** Sets or retrieves the value indicated whether the content of the object is read-only. */
    readOnly?: boolean;
    /** When present, marks an element that can't be submitted without a value. */
    required?: boolean;
    /** Sets or retrieves the number of horizontal rows contained in the object. */
    rows?: number;
    selectionDirection?: "forward" | "backward" | "none";
    /** Gets or sets the end position or offset of a text selection. */
    selectionEnd?: number;
    /** Gets or sets the starting position or offset of a text selection. */
    selectionStart?: number;
    /** Retrieves or sets the text in the entry field of the textArea element. */
    value?: string;
    /** Sets or retrieves how to handle wordwrapping in the object. */
    wrap?: string;
}

export interface HTMLTimeProperties extends HTMLElementProperties {
    dateTime?: string;
}

export interface HTMLTitleProperties extends HTMLElementProperties {
    /** Retrieves or sets the text of the object as a string. */
    text?: string;
}

export interface HTMLTrackProperties extends HTMLElementProperties {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srclang?: string;
}

export interface HTMLUListProperties extends HTMLElementProperties {
}

export interface HTMLUnknownProperties extends HTMLElementProperties {
}

export interface HTMLVideoProperties extends HTMLMediaProperties {
    disablePictureInPicture?: boolean;
    /** Gets or sets the height of the video element. */
    height?: number;
    /** Gets or sets the playsinline of the video element. for example, On iPhone, video elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins. */
    playsInline?: boolean;
    /** Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available. */
    poster?: string;
    /** Gets or sets the width of the video element. */
    width?: number;
}

export interface HTMLPropertyMap extends Record<keyof HTMLElementTagNameMapExact, HTMLElementProperties> {
    a: HTMLAnchorProperties,
    abbr: HTMLElementProperties,
    address: HTMLElementProperties,
    area: HTMLAreaProperties,
    article: HTMLElementProperties,
    aside: HTMLElementProperties,
    audio: HTMLAudioProperties,
    b: HTMLElementProperties,
    base: HTMLBaseProperties,
    bdi: HTMLElementProperties,
    bdo: HTMLElementProperties,
    blockquote: HTMLQuoteProperties,
    body: HTMLBodyProperties,
    br: HTMLBRProperties,
    button: HTMLButtonProperties,
    canvas: HTMLCanvasProperties,
    caption: HTMLTableCaptionProperties,
    cite: HTMLElementProperties,
    code: HTMLElementProperties,
    col: HTMLTableColProperties,
    colgroup: HTMLTableColProperties,
    data: HTMLDataProperties,
    datalist: HTMLDataListProperties,
    dd: HTMLElementProperties,
    del: HTMLModProperties,
    details: HTMLDetailsProperties,
    dfn: HTMLElementProperties,
    dialog: HTMLDialogProperties,
    div: HTMLDivProperties,
    dl: HTMLDListProperties,
    dt: HTMLElementProperties,
    em: HTMLElementProperties,
    embed: HTMLEmbedProperties,
    fieldset: HTMLFieldSetProperties,
    figcaption: HTMLElementProperties,
    figure: HTMLElementProperties,
    footer: HTMLElementProperties,
    form: HTMLFormProperties,
    h1: HTMLHeadingProperties,
    h2: HTMLHeadingProperties,
    h3: HTMLHeadingProperties,
    h4: HTMLHeadingProperties,
    h5: HTMLHeadingProperties,
    h6: HTMLHeadingProperties,
    head: HTMLHeadProperties,
    header: HTMLElementProperties,
    hgroup: HTMLElementProperties,
    hr: HTMLHRProperties,
    html: HTMLHtmlProperties,
    i: HTMLElementProperties,
    iframe: HTMLIFrameProperties,
    img: HTMLImageProperties,
    input: HTMLInputProperties,
    ins: HTMLModProperties,
    kbd: HTMLElementProperties,
    label: HTMLLabelProperties,
    legend: HTMLLegendProperties,
    li: HTMLLIProperties,
    link: HTMLLinkProperties,
    main: HTMLElementProperties,
    map: HTMLMapProperties,
    mark: HTMLElementProperties,
    menu: HTMLMenuProperties,
    meta: HTMLMetaProperties,
    meter: HTMLMeterProperties,
    nav: HTMLElementProperties,
    noscript: HTMLElementProperties,
    object: HTMLObjectProperties,
    ol: HTMLOListProperties,
    optgroup: HTMLOptGroupProperties,
    option: HTMLOptionProperties,
    output: HTMLOutputProperties,
    p: HTMLParagraphProperties,
    picture: HTMLPictureProperties,
    pre: HTMLPreProperties,
    progress: HTMLProgressProperties,
    q: HTMLQuoteProperties,
    rp: HTMLElementProperties,
    rt: HTMLElementProperties,
    ruby: HTMLElementProperties,
    s: HTMLElementProperties,
    samp: HTMLElementProperties,
    script: HTMLScriptProperties,
    search: HTMLElementProperties,
    section: HTMLElementProperties,
    select: HTMLSelectProperties,
    slot: HTMLSlotProperties,
    small: HTMLElementProperties,
    source: HTMLSourceProperties,
    span: HTMLSpanProperties,
    strong: HTMLElementProperties,
    style: HTMLStyleProperties,
    sub: HTMLElementProperties,
    summary: HTMLElementProperties,
    sup: HTMLElementProperties,
    table: HTMLTableProperties,
    tbody: HTMLTableSectionProperties,
    td: HTMLTableCellProperties,
    template: HTMLTemplateProperties,
    textarea: HTMLTextAreaProperties,
    tfoot: HTMLTableSectionProperties,
    th: HTMLTableCellProperties,
    thead: HTMLTableSectionProperties,
    time: HTMLTimeProperties,
    title: HTMLTitleProperties,
    tr: HTMLTableRowProperties,
    track: HTMLTrackProperties,
    u: HTMLElementProperties,
    ul: HTMLUListProperties,
    var: HTMLElementProperties,
    video: HTMLVideoProperties,
    wbr: HTMLElementProperties,
}

export const htmlElementToType = {
    a: HTMLAnchorElement,
    abbr: HTMLElement,
    address: HTMLElement,
    area: HTMLAreaElement,
    article: HTMLElement,
    aside: HTMLElement,
    audio: HTMLAudioElement,
    b: HTMLElement,
    base: HTMLBaseElement,
    bdi: HTMLElement,
    bdo: HTMLElement,
    blockquote: HTMLQuoteElement,
    body: HTMLBodyElement,
    br: HTMLBRElement,
    button: HTMLButtonElement,
    canvas: HTMLCanvasElement,
    caption: HTMLTableCaptionElement,
    cite: HTMLElement,
    code: HTMLElement,
    col: HTMLTableColElement,
    colgroup: HTMLTableColElement,
    data: HTMLDataElement,
    datalist: HTMLDataListElement,
    dd: HTMLElement,
    del: HTMLModElement,
    details: HTMLDetailsElement,
    dfn: HTMLElement,
    dialog: HTMLDialogElement,
    div: HTMLDivElement,
    dl: HTMLDListElement,
    dt: HTMLElement,
    em: HTMLElement,
    embed: HTMLEmbedElement,
    fieldset: HTMLFieldSetElement,
    figcaption: HTMLElement,
    figure: HTMLElement,
    footer: HTMLElement,
    form: HTMLFormElement,
    h1: HTMLHeadingElement,
    h2: HTMLHeadingElement,
    h3: HTMLHeadingElement,
    h4: HTMLHeadingElement,
    h5: HTMLHeadingElement,
    h6: HTMLHeadingElement,
    head: HTMLHeadElement,
    header: HTMLElement,
    hgroup: HTMLElement,
    hr: HTMLHRElement,
    html: HTMLHtmlElement,
    i: HTMLElement,
    iframe: HTMLIFrameElement,
    img: HTMLImageElement,
    input: HTMLInputElement,
    ins: HTMLModElement,
    kbd: HTMLElement,
    label: HTMLLabelElement,
    legend: HTMLLegendElement,
    li: HTMLLIElement,
    link: HTMLLinkElement,
    main: HTMLElement,
    map: HTMLMapElement,
    mark: HTMLElement,
    menu: HTMLMenuElement,
    meta: HTMLMetaElement,
    meter: HTMLMeterElement,
    nav: HTMLElement,
    noscript: HTMLElement,
    object: HTMLObjectElement,
    ol: HTMLOListElement,
    optgroup: HTMLOptGroupElement,
    option: HTMLOptionElement,
    output: HTMLOutputElement,
    p: HTMLParagraphElement,
    picture: HTMLPictureElement,
    pre: HTMLPreElement,
    progress: HTMLProgressElement,
    q: HTMLQuoteElement,
    rp: HTMLElement,
    rt: HTMLElement,
    ruby: HTMLElement,
    s: HTMLElement,
    samp: HTMLElement,
    script: HTMLScriptElement,
    search: HTMLElement,
    section: HTMLElement,
    select: HTMLSelectElement,
    slot: HTMLSlotElement,
    small: HTMLElement,
    source: HTMLSourceElement,
    span: HTMLSpanElement,
    strong: HTMLElement,
    style: HTMLStyleElement,
    sub: HTMLElement,
    summary: HTMLElement,
    sup: HTMLElement,
    table: HTMLTableElement,
    tbody: HTMLTableSectionElement,
    td: HTMLTableCellElement,
    template: HTMLTemplateElement,
    textarea: HTMLTextAreaElement,
    tfoot: HTMLTableSectionElement,
    th: HTMLTableCellElement,
    thead: HTMLTableSectionElement,
    time: HTMLTimeElement,
    title: HTMLTitleElement,
    tr: HTMLTableRowElement,
    track: HTMLTrackElement,
    u: HTMLElement,
    ul: HTMLUListElement,
    var: HTMLElement,
    video: HTMLVideoElement,
    wbr: HTMLElement,
} as const satisfies { [K in keyof HTMLElementTagNameMap]?: Constructor<HTMLElementTagNameMap[K]> };
