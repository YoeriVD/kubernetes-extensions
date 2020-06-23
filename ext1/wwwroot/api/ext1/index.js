class MainMenuItemComponent extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback() {
        this.initializeComponent();
    }
    initializeComponent(container = this) {
        // Create spans
        const header = document.createElement('h2');
        header.textContent = 'B';

        const style = document.createElement('style');

        style.textContent = `
	h2{
	line-height: 1.5;
	box-sizing: inherit;
	font-size: 30px;
	font-family: "Segoe UI",Arial,sans-serif;
	font-weight: 400;
	margin: 10px 0;
	}
    `;

        container.appendChild(style);
        container.appendChild(header);
        const button = document.createElement('button');
        button.classList.add('mat-button');
        button.innerHTML = 'the button inside the component';
        container.appendChild(button);
    }
}

window.customElements.define('main-menu-item', MainMenuItemComponent);