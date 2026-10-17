let currentLang = "fa";

const langData = {
  fa: {
    navAbout: "درباره من",
    navAuto: "تست خودکار",
    navExp: "سوابق کاری",
    navSkills: "مهارت‌ها",
    navContact: "ارتباط",
    langBtn: "EN | English",
    heroBadge: "🎯 مهندس تست خودکار و تضمین کیفیت نرم‌افزار",
    heroTitle: "فاطمه محمدیان نسب",
    heroRole: "کارشناس ارشد ریاضیات کاربردی و مهندس QA Automation",
    heroBio:
      "ترکیب «دقت تحلیلی ریاضیات» با «مهندسی کیفیت نرم‌افزار». متمرکز بر تضمین پایداری سیستم از طریق پیاده‌سازی آزمون‌های خودکار End-to-End با <strong>Playwright</strong> و <strong>Selenium</strong>، اعتبارسنجی سرویس‌های API و بهینه‌سازی چرخه‌های انتشار سریع چابک.",
    btnResume: '<i class="fa-solid fa-file-arrow-down"></i> دریافت فایل رسمی رزومه (PDF)',
    btnExplore: "مشاهده فریم‌ورک‌های تست",
    mYears: "سال سابقه در QA و تحلیل سیستم",
    mAuto: "تست خودکار مدرن (Playwright & Selenium)",
    mBpmn: "طراحی سناریو و تحلیل فرآیند (BPMN)",
    mEdu: "ارشد ریاضی کاربردی (دانشگاه خواجه نصیر)",
    autoSectionTitle: "فریم‌ورک‌ها و استراتژی آزمون خودکار",
    autoSectionDesc: "رویکرد من به تست، حذف خطای انسانی و اتوماسیون تست‌های رگرسیون تکراری است.",
    playwrightDesc:
      "طراحی تست‌های خودکار مدرن، چندمرورگره و موازی با <strong>Playwright</strong>؛ بهره‌گیری از Auto-waiting، رهگیری درخواست‌های شبکه، تست سناریوهای پیچیده UI و اجرای سریع رگرسیون با حداقل تست‌های کاذب (Flaky Tests).",
    seleniumDesc:
      "پیاده‌سازی معماری تمیز با الگوی <strong>Page Object Model (POM)</strong> در سلنیوم، پیاده‌سازی تست‌های داده‌محور برای صحه‌گذاری فرآیندهای مالی و بیمه‌ای، و یکپارچه‌سازی با تست سناریوهای E2E.",
    apiDesc:
      "تست لایه زیرین نرم‌افزار قبل از UI با <strong>Postman</strong>؛ طراحی کالکشن‌های تست، اعتبارسنجی Schema، تست پارامتریک مقادیر مرزی و اعتبارسنجی یکپارچگی کدهای پاسخ.",
    expSectionTitle: "سوابق شغلی و تجارب اجرایی",
    job1Title: "کارشناس تست و ارزیابی کیفیت نرم‌افزار (QA)",
    job1Desc:
      "طراحی سناریوهای آزمون و فریم‌ورک‌های خودکار. اجرای آزمون‌های رگرسیون بر روی سیستم‌های پیچیده سازمانی، صحه‌گذاری و تست API با Postman، مدیریت عیوب در Jira، و ترسیم فرایندهای سیستمی مطابق BPMN.",
    job2Title: "کارشناس سیستم‌ها و تحلیل برنامه‌ریزی",
    job2Desc:
      "تحلیل ساختار شکست محصول (BOM)، انطباق محاسبات مصرف مواد و کنترل مغایرت‌ها. مستندسازی روش‌های اجرایی سازمان با ابزارهای Visio و Visual Paradigm.",
    job3Title: "کارشناس تست و آزمون پذیرش نرم‌افزار",
    job3Desc:
      "اجرای آزمون‌های عملکردی و پذیرش کاربر (UAT)، ثبت و ریشه‌یابی خطاهای کاربری، و تهیه گزارش‌های سنجش کیفیت محصول.",
    skillSectionTitle: "مهارت‌های فنی و شایستگی‌ها",
    contactTitle: "مشتاق همکاری و خلق نرم‌افزارهای پایدار و بدون خطام",
    contactDesc: "برای مصاحبه، همکاری پروژه‌ای یا بررسی کیفیت محصولات، با من در تماس باشید."
  },
  en: {
    navAbout: "About",
    navAuto: "Automation",
    navExp: "Experience",
    navSkills: "Skills",
    navContact: "Contact",
    langBtn: "فا | فارسی",
    heroBadge: "🎯 Software QA Automation Engineer",
    heroTitle: "Fatemeh Mohammadian Nesab",
    heroRole: "M.Sc. in Applied Mathematics | Software QA Automation Engineer",
    heroBio:
      "Blending mathematical analytical precision with modern Software Quality Engineering. Focused on system reliability via End-to-End automation with <strong>Playwright</strong> and <strong>Selenium</strong>, API validations, and streamlined Agile delivery.",
    btnResume: '<i class="fa-solid fa-file-arrow-down"></i> Download Official Resume (PDF)',
    btnExplore: "Explore Test Frameworks",
    mYears: "Years in QA & Systems Analysis",
    mAuto: "Modern Test Automation (Playwright & Selenium)",
    mBpmn: "Scenario Design & Process (BPMN)",
    mEdu: "M.Sc. in Applied Math (K.N. Toosi Univ.)",
    autoSectionTitle: "Test Automation Frameworks & Strategy",
    autoSectionDesc: "Replacing repetitive manual regression with reliable, fast, and automated test scripts.",
    playwrightDesc:
      "Designing cross-browser, parallel automated suites using <strong>Playwright</strong>; utilizing Auto-waiting, network mocking, and Trace Viewer for fast, reliable, non-flaky end-to-end regression runs.",
    seleniumDesc:
      "Implementing scalable test automation architectures with the <strong>Page Object Model (POM)</strong> in Selenium, data-driven test suites for enterprise systems, and dynamic element synchronization.",
    apiDesc:
      "Backend and API validation using <strong>Postman</strong> before UI integration; creating automated test collections, schema contract validation, and edge-case boundary testing.",
    expSectionTitle: "Career Journey & Professional Experience",
    job1Title: "Software QA Automation Specialist",
    job1Desc:
      "Test scenario architecture and automated framework implementation. Executing comprehensive regression on enterprise systems, API validation with Postman, Jira defect tracking, and BPMN modeling.",
    job2Title: "Systems & Production Planning Specialist",
    job2Desc:
      "Bill of Materials (BOM) decomposition, inventory variance reconciliation, and enterprise process modeling with Visio and Visual Paradigm.",
    job3Title: "QA & User Acceptance Testing (UAT) Specialist",
    job3Desc:
      "Functional system testing, user acceptance scenarios verification, defect logging, and release quality readiness sign-offs.",
    skillSectionTitle: "Technical Competencies & Toolkit",
    contactTitle: "Open to High-Impact QA & Automation Roles",
    contactDesc: "Let's connect to discuss how robust testing practices can scale your product's reliability."
  }
};

function toggleLanguage() {
  currentLang = currentLang === "fa" ? "en" : "fa";
  const htmlTag = document.getElementById("htmlTag");
  const dict = langData[currentLang];

  if (currentLang === "en") {
    htmlTag.setAttribute("dir", "ltr");
    htmlTag.setAttribute("lang", "en");
  } else {
    htmlTag.setAttribute("dir", "rtl");
    htmlTag.setAttribute("lang", "fa");
  }

  // به‌روزرسانی تک‌تک متن‌ها
  document.getElementById("navAbout").innerText = dict.navAbout;
  document.getElementById("navAuto").innerText = dict.navAuto;
  document.getElementById("navExp").innerText = dict.navExp;
  document.getElementById("navSkills").innerText = dict.navSkills;
  document.getElementById("navContact").innerText = dict.navContact;
  document.getElementById("langBtn").innerText = dict.langBtn;

  document.getElementById("heroBadge").innerText = dict.heroBadge;
  document.getElementById("heroTitle").innerText = dict.heroTitle;
  document.getElementById("heroRole").innerText = dict.heroRole;
  document.getElementById("heroBio").innerHTML = dict.heroBio;
  document.getElementById("btnResume").innerHTML = dict.btnResume;
  document.getElementById("btnExplore").innerText = dict.btnExplore;

  document.getElementById("mYears").innerText = dict.mYears;
  document.getElementById("mAuto").innerText = dict.mAuto;
  document.getElementById("mBpmn").innerText = dict.mBpmn;
  document.getElementById("mEdu").innerText = dict.mEdu;

  document.getElementById("autoSectionTitle").innerText = dict.autoSectionTitle;
  document.getElementById("autoSectionDesc").innerText = dict.autoSectionDesc;
  document.getElementById("playwrightDesc").innerHTML = dict.playwrightDesc;
  document.getElementById("seleniumDesc").innerHTML = dict.seleniumDesc;
  document.getElementById("apiDesc").innerHTML = dict.apiDesc;

  document.getElementById("expSectionTitle").innerText = dict.expSectionTitle;
  document.getElementById("job1Title").innerText = dict.job1Title;
  document.getElementById("job1Desc").innerText = dict.job1Desc;
  document.getElementById("job2Title").innerText = dict.job2Title;
  document.getElementById("job2Desc").innerText = dict.job2Desc;
  document.getElementById("job3Title").innerText = dict.job3Title;
  document.getElementById("job3Desc").innerText = dict.job3Desc;

  document.getElementById("skillSectionTitle").innerText = dict.skillSectionTitle;
  document.getElementById("contactTitle").innerText = dict.contactTitle;
  document.getElementById("contactDesc").innerText = dict.contactDesc;
}
