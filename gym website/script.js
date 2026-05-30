document.addEventListener("DOMContentLoaded", () => {

    // ── Preloader ──
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => preloader.classList.add("loaded"), 600);
        });
        // Fallback: hide preloader after 3s even if images haven't loaded
        setTimeout(() => preloader.classList.add("loaded"), 3000);
    }

    // ── Mobile Navigation ──
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }

    // ── Navbar Scroll Effect ──
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle("scrolled", window.scrollY > 60);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    // ── Scroll Reveal ──
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add stagger delay based on index within parent grid
                    const parent = entry.target.parentElement;
                    if (parent) {
                        const siblings = [...parent.children].filter(c => c.hasAttribute('data-reveal'));
                        const idx = siblings.indexOf(entry.target);
                        if (idx > 0) {
                            entry.target.style.transitionDelay = `${idx * 100}ms`;
                        }
                    }
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -60px 0px"
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // ── Counter Animation for Stats ──
    const statNumbers = document.querySelectorAll(".stat-item h3");

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => counterObserver.observe(el));
    }

    function animateCounter(el) {
        const text = el.textContent.trim();
        const match = text.match(/^(\d+)/);
        if (!match) return;

        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    // ── BMI Calculator ──
    const calculateBtn = document.getElementById("calculate-bmi");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const weight = parseFloat(document.getElementById("weight").value);
            const heightCm = parseFloat(document.getElementById("height").value);
            const resultDiv = document.getElementById("bmi-result");

            if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
                resultDiv.textContent = "Please enter valid weight and height.";
                resultDiv.style.color = "#E63946";
                resultDiv.classList.add("show");
                return;
            }

            const heightM = heightCm / 100;
            const bmi = (weight / (heightM * heightM)).toFixed(1);

            let category = "";
            let emoji = "";
            if (bmi < 18.5) { category = "Underweight"; emoji = "⚡"; }
            else if (bmi < 24.9) { category = "Normal Weight"; emoji = "💪"; }
            else if (bmi < 29.9) { category = "Overweight"; emoji = "🔥"; }
            else { category = "Obese"; emoji = "⚠️"; }

            resultDiv.innerHTML = `${emoji} Your BMI: <strong>${bmi}</strong> — ${category}`;
            resultDiv.style.color = "#fff";
            resultDiv.classList.add("show");
        });
    }

    // ── Smooth anchor scroll for buttons ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

});
