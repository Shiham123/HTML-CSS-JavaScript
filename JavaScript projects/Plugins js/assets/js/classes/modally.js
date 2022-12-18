class Modally {
  constructor(config) {
    this.animations = ['fade-up', 'fade-down'];
    this.triggerDataAttLabel = 'data-modally-trigger';
    this.closerDataAttLabel = 'data-modally-close';
    this.modalDataAttLabel = 'data-modally-id';
    this.showModalCSS = 'show-modal';
    this.options = {
      blur: true,
      centered: true,
      animation: this.animations[0],
    };
    this.currentModal = '';

    if (typeof config === 'object') {
      this.options = { ...this.options, ...this.config };
    }

    this.init();
  }

  init() {
    this.setupTriggers();
    this.setupClosers();
    this.setupModalClasses();
  }

  setupTriggers() {
    const triggers = document.querySelectorAll(`[${this.triggerDataAttLabel}]`);

    if (triggers.length > 0) {
      triggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
          event.preventDefault();
          this.openModal({
            modalId: event.target.getAttribute(`${this.triggerDataAttLabel}`),
          });
        });
      });
    }
  }

  setupClosers() {
    const modals = document.querySelectorAll(`[${this.modalDataAttLabel}]`);
    const closeBtns = document.querySelectorAll(`[${this.closerDataAttLabel}]`);

    if (modals.length > 0) {
      modals.forEach((modal) => {
        modal
          .querySelector('.modally-backdrop')
          .addEventListener('click', (event) => {
            this.closeModal({
              modalId: event.target.parentElement.getAttribute(
                `${this.modalDataAttLabel}`
              ),
            });
          });
      });
    }

    if (closeBtns.length > 0) {
      closeBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          this.closeModal({
            modalId: event.target.getAttribute(`${this.closerDataAttLabel}`),
          });
        });
      });
    }
  }

  setupModalClasses() {
    const modals = document.querySelectorAll(`[${this.modalDataAttLabel}]`);
    if (modals.length > 0) {
      modals.forEach((modal) => {
        modal.classList.add(...this.calculateModalClasses());
      });
    }
  }

  calculateModalClasses() {
    const cssClasses = [];
    if (this.options.centered) {
      cssClasses.push('modal-centered');
    }
    if (this.options.blur) {
      cssClasses.push('modal-blur');
    }
    if (this.isValidAnimation(this.options.animation)) {
      cssClasses.push(this.options.animation);
    } else {
      cssClasses.push(this.animations[0]);
    }
    return cssClasses;
  }

  isValidAnimation(animation) {
    return this.animations.includes(animation);
  }

  // open modal
  openModal({ modalId }) {
    const modal = document.querySelector(
      `[${this.modalDataAttLabel}=${modalId}]`
    );
    if (this.currentModal.length > 0) {
      this.closeModal({ modalId: this.currentModal });
    }
    this.handleCustomEvent({ type: 'before_open', modal });
    modal.classList.add(this.showModalCSS);
    this.currentModal = modalId;
    this.handleCustomEvent({ type: 'after_open', modal });
  }

  // close modal
  closeModal({ modalId }) {
    const modal = document.querySelector(
      `[${this.modalDataAttLabel}=${modalId}]`
    );
    this.handleCustomEvent({ type: 'before_close', modal });
    modal.classList.remove(this.showModalCSS);
    this.currentModal = '';
    this.handleCustomEvent({ type: 'after_close', modal });
  }

  // handle our custom events
  handleCustomEvent({ type, modal }) {
    const event = new CustomEvent(type, { bubbles: true, detail: modal });
    modal.dispatchEvent(event);
  }
}
