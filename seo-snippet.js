// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.udsshop.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.udsshop.com/","title_tag":"Unique Drafting Services Surrey & CAD Design Surrey | UDS","meta_description":"Computer aided drafting, custom design, space planning and large format printing in Surrey. Expert building design and tenant improvements for commercial, industrial and residential."},{"page_url":"https://www.udsshop.com/about","title_tag":"Unique Drafting Services Surrey & Building Design | UDS","meta_description":"Since 1988, Unique Drafting Services Surrey has delivered expert CAD design, architectural drafting and building design support for engineers, contractors and developers across the Lower Mainland."},{"page_url":"https://www.udsshop.com/blank","title_tag":"Building & Structural Drafting Surrey Tenant Improvements | UDS","meta_description":"Building design, structural drafting and tenant improvements in Surrey. Commercial, industrial, residential and agricultural CAD drawings, space planning and custom design solutions."},{"page_url":"https://www.udsshop.com/additional-services","title_tag":"Structural Drafting & Construction Management Surrey | UDS","meta_description":"Electrical, mechanical, patent and technical drafting in Surrey. Support your construction management and custom design projects with precise CAD documentation and space planning."},{"page_url":"https://www.udsshop.com/large-format","title_tag":"Large Format Printing Surrey & CAD Plan Scanning | UDS","meta_description":"Large format printing Surrey for blueprints, CAD drawings and colour graphics. High quality copying, scanning and archiving of architectural and construction documents up to 60” wide."},{"page_url":"https://www.udsshop.com/contact","title_tag":"Unique Drafting Services Surrey Contact | CAD Design UDS","meta_description":"Contact Unique Drafting Services Surrey for CAD design, architectural drafting, tenant improvements and large format printing. Call or email our Surrey office to discuss your project today."}],"keywords":["unique drafting services surrey","cad design surrey","construction management surrey","large format printing surrey","architectural drafting surrey","building design surrey","custom design surrey","space planning surrey","tenant improvements surrey","structural drafting surrey"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.udsshop.com/#organization",
  "name": "Unique Drafting Services Ltd.",
  "url": "https://www.udsshop.com/",
  "description": "Unique Drafting Services Ltd. provides computer aided drafting and design (CADD), building planning, tenant improvement design, large format printing, graphics, signage, scanning and archiving services for commercial, industrial, residential, agricultural, civil and structural projects in Surrey, British Columbia.",
  "logo": "https://static.wixstatic.com/media/41d000_273d87e05f3236a242711250078dfd6d.png/v1/fill/w_144,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/41d000_273d87e05f3236a242711250078dfd6d.png",
  "image": [
    "https://static.wixstatic.com/media/84770f_ed887e2615a3470ba7315d4832149185.jpg/v1/fill/w_430,h_444,al_c,lg_1,q_80,enc_avif,quality_auto/84770f_ed887e2615a3470ba7315d4832149185.jpg",
    "https://static.wixstatic.com/media/53fb29_4e2a105a843f4a1babde8290a851de72.jpg/v1/fill/w_304,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/53fb29_4e2a105a843f4a1babde8290a851de72.jpg",
    "https://static.wixstatic.com/media/53fb29_b1a4f89eb02e4044ab8ec436ed20ebe2.jpg/v1/fill/w_304,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/53fb29_b1a4f89eb02e4044ab8ec436ed20ebe2.jpg",
    "https://static.wixstatic.com/media/53fb29_a222be1f8f3e4bdf861bb5aa750dfe7e.jpg/v1/fill/w_304,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/53fb29_a222be1f8f3e4bdf861bb5aa750dfe7e.jpg"
  ],
  "telephone": "+1-604-535-9000",
  "email": "info@uniquedrafting.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 2 - 19102 - 27 Avenue",
    "addressLocality": "Surrey",
    "addressRegion": "BC",
    "postalCode": "V3Z 5T1",
    "addressCountry": "CA"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Surrey, British Columbia"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lower Mainland, British Columbia"
    }
  ],
  "sameAs": [],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-604-535-9000",
      "contactType": "customer service",
      "areaServed": "CA"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-877-837-9112",
      "contactType": "customer service",
      "areaServed": "CA"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Unique Drafting Services Ltd. Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "CAD Design & Drafting",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Computer Aided Drafting & Design",
            "description": "Computer aided drafting and design services for engineers, design professionals, contractors, steel fabricators and developers, including 3D steel detailing, conceptual space design and full design drawings."
          },
          {
            "@type": "Service",
            "name": "Building Planning & Designing",
            "description": "Planning and design of commercial, industrial and retail tenant improvements from conceptual space planning to building permit drawings."
          },
          {
            "@type": "Service",
            "name": "Tenant Improvement Design",
            "description": "Commercial and industrial tenant improvement design for office, retail, warehouse mezzanines, restaurants, entertainment establishments and more."
          },
          {
            "@type": "Service",
            "name": "Custom Home Design and Renovations",
            "description": "Custom home design for domestic and export markets, including home renovations, additions, interior design and space planning."
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Electrical, Mechanical & Technical",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Electrical Drafting",
            "description": "Commercial, industrial and institutional lighting, power and data drawings, parking lot and site lighting, hydro power distribution and traffic signal systems."
          },
          {
            "@type": "Service",
            "name": "Mechanical Drafting",
            "description": "Plumbing, HVAC, as-built record drawings, machine shop drawings and full-size burning templates."
          },
          {
            "@type": "Service",
            "name": "Patent & Technical Drawings",
            "description": "Patent and technical drawings for the construction industry, product catalogues, instruction manuals and concept drawings for investors or manufacturers."
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Large Format Printing & Graphics",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Large Format Printing & Copying",
            "description": "Large format printing and copying of blueprints, drawing sets and documents up to 36 inches wide by any length, with enlargement up to 60 inches wide on a wide variety of media."
          },
          {
            "@type": "Service",
            "name": "Large Format Colour Graphics",
            "description": "Full-colour large format graphics printing for marketing and business expansion on multiple media types, including murals of virtually any size."
          },
          {
            "@type": "Service",
            "name": "Scanning & Archiving",
            "description": "Scanning and archiving of old blueprints and original drawings up to 36 inches wide by any length to create electronic files for space-saving document management."
          },
          {
            "@type": "Service",
            "name": "Graphics & Signage",
            "description": "Large format, full-colour prints and graphics, including signage and marketing materials for diverse industries."
          }
        ]
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
