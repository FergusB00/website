import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    window.addEventListener("scroll", this.toggleButton.bind(this));
  }

  toggleButton() {
    if (window.scrollY > 300) {
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
