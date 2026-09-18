/**
 * JS de cliente: menú móvil del header.
 * El acordeón de FAQ usa <details> nativo y no necesita JS.
 */

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

function setMenu(open: boolean): void {
  if (!menuBtn || !mobileMenu || !iconOpen || !iconClose) return;
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute(
    "aria-label",
    open
      ? (menuBtn.dataset.labelClose ?? "Cerrar menú")
      : (menuBtn.dataset.labelOpen ?? "Abrir menú"),
  );
  mobileMenu.classList.toggle("hidden", !open);
  iconOpen.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
}

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Cierra el menú al pulsar un enlace o con la tecla Escape.
mobileMenu?.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});
