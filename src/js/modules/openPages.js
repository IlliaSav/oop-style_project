export default class OpenPages {
    constructor(triggers, url) {
        this.btns = document.querySelectorAll(triggers);
        this.page = url;
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // window.location.href = 'modules.html';
                window.open(this.page, '_blank').focus();
            })
        })
    }
}