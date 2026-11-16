const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

const CONTACT_EMAIL = "matheusalbano1908@gmail.com";

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!CONTACT_EMAIL.trim()) {
    feedback.textContent = "Não foi possível preparar a mensagem. Tente novamente ou escreva para matheusalbano1908@gmail.com.";
    feedback.classList.add("is-error");
    feedback.classList.remove("is-success");
    return;
  }

  const formData = new FormData(contactForm);
  const subject = `Contato pelo portfólio — ${formData.get("name")}`;
  const body = [
    `Nome: ${formData.get("name")}`,
    `E-mail: ${formData.get("email")}`,
    "",
    formData.get("message"),
  ].join("\n");
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  feedback.textContent = "Sua mensagem foi preparada no aplicativo de e-mail.";
  feedback.classList.add("is-success");
  feedback.classList.remove("is-error");
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
