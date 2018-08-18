import {
    LitElement,
    html
} from '@polymer/lit-element';

class ComponentAPI extends LitElement {

    /**
     * Setup your component properties whose values are passed into the
     * component via it's respective attributes.  For example:
     * <my-clock format="12"></my-clock>
     */
    static get properties() {
        return {
            format: String
        }
    }

    /**
     * By using a constructor (which is optional), you must call super
     * before anything else.
     */
    constructor() {
        super();
    }

    /**
     * Implement to customize where the element's template is rendered by returning 
     * an element into which to render. By default this creates a shadowRoot for 
     * the element. To render into the element's childNodes, return this.
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
     */
    _createRoot() {
        //Example: the default behavior is to create a shadowRoot in open mode
        //If this is your use case, you can simply not implement _createRoot
        return this.attachShadow({
            mode: 'open'
        });

        //Example: to render without creating a shadowRoot, return this instead
        // return this;

        //Example: to render the component into a specific DOM element
        // return document.getElementById('my-clock-root');
    }

    _render({
        format
    }) {
        return html `
            <style> .format { color: #ff3333; } </style>
            <h1>JS Clock in <span class="format">${format} Hour</span> Format!</h1>
        `;
    }

}

customElements.define('my-clock', ComponentAPI);