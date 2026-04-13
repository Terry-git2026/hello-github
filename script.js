function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function setupCopyEmail() {
  const email = "459023622@qq.com";
  const hint = document.getElementById("copyHint");
  const btn1 = document.getElementById("copyEmailBtn");
  const btn2 = document.getElementById("copyEmailBtn2");

  async function onCopy() {
    const ok = await copyText(email);
    setText(hint, ok ? "已复制到剪贴板。" : "复制失败了，手动复制也可以。");
    window.setTimeout(() => setText(hint, ""), 2200);
  }

  btn1?.addEventListener("click", onCopy);
  btn2?.addEventListener("click", onCopy);
}

function setupReveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (items.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("isVisible");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12 }
  );

  for (const el of items) io.observe(el);
}

function setupYear() {
  setText(document.getElementById("year"), String(new Date().getFullYear()));
}

setupCopyEmail();
setupReveal();
setupYear();
