import {
    LitElement,
    html
} from '@polymer/lit-element';

class TestComponent extends LitElement {

    static get properties() {
        return {
            mood: String
        }
    }

    _render({
        mood
    }) {
        return html `<style> .mood { color: green; } </style>
        Web Components are <span class="mood">${mood}</span>!`;
    }

}

customElements.define('test-component', TestComponent);