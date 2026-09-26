document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const handleNav = () => { if(nav) nav.classList.toggle("scrolled", window.scrollY > 30); };
  window.addEventListener("scroll", handleNav); handleNav();
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const topBtn = document.getElementById("backTop");
  const onScroll = () => { if(topBtn) topBtn.style.display = window.scrollY > 500 ? "grid" : "none"; };
  window.addEventListener("scroll", onScroll); onScroll();
  if(topBtn) topBtn.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

  document.querySelectorAll(".contact-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const rtl = document.documentElement.getAttribute("dir") === "rtl";
      if(form.dataset.whatsapp === "true") {
        const name=data.get("name")||""; const phone=data.get("phone")||""; const email=data.get("email")||""; const service=data.get("service")||""; const message=data.get("message")||"";
        const text = rtl ? `استفسار جديد من موقع كولوف للستائر%0A%0Aالاسم الكامل: ${name}%0Aالهاتف / واتساب: ${phone}%0Aالبريد الإلكتروني: ${email}%0Aالخدمة: ${service}%0Aتفاصيل المشروع: ${message}` : `New enquiry from Coloff Curtains LLC website%0A%0AFull Name: ${name}%0APhone / WhatsApp: ${phone}%0AEmail: ${email}%0AService: ${service}%0AProject Details: ${message}`;
        window.open(`https://wa.me/971551413302?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        const status=form.querySelector(".form-status"); if(status){status.textContent=rtl?"سيتم فتح واتساب لإرسال استفسارك.":"WhatsApp is opening with your enquiry ready to send.";status.classList.remove("d-none");}
        form.reset();
      } else {
        const status=form.querySelector(".form-status"); if(status){status.textContent=rtl?"شكراً لك. تم استلام استفسارك وسنتواصل معك قريباً.":"Thank you. Your enquiry has been received. We will contact you shortly.";status.classList.remove("d-none");} form.reset();
      }
    });
  });

  document.querySelectorAll('.services-dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => { if(window.innerWidth >= 992) drop.classList.add('show'); });
    drop.addEventListener('mouseleave', () => { if(window.innerWidth >= 992) drop.classList.remove('show'); });
  });
});