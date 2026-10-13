/* KRONOCLOS website settings.
 * Fill in real information here. Anything left empty ('' or []) stays hidden on the site,
 * so no placeholder ever reaches a client. Edit text inside quotes only.
 */
window.KSITE = {
  /* ---------- 1. Contact (Energy Scan + footer) ----------
   * formEndpoint: a form service URL that accepts JSON POST (e.g. Formspree, Getform, your own API).
   *               When set, the Energy Scan form sends the request there.
   * email:        when there is no formEndpoint, the form opens the visitor's email app addressed here.
   * If both are empty, the form falls back to downloading a planning brief (current behaviour).
   */
  formEndpoint: '',
  email: 'info@kronosus.com',
  phone: '092 390 5464',
  lineUrl: '',        // no LINE OA yet, e.g. 'https://line.me/R/ti/p/@kronosus'
  bookingUrl: '',     // e.g. a Calendly / Google Calendar booking link

  /* ---------- 2. Company (About section + footer) ---------- */
  company: {
    legalName: 'ORIONS CREATIVE CO., LTD.',
    address: '41/175 Soi Nawamin 111, Yaek 3, Nawamin, Bueng Kum, Bangkok 10240, Thailand',
    about: { en: '', th: '' },   // 2–3 sentences: who you are, what you focus on
    facts: []         // up to 4 real facts, e.g. [{ value:'2024', label:{ en:'Founded', th:'ก่อตั้ง' } }]
  },

  /* ---------- 3. Who it is for (shown under the hero headline) ---------- */
  audience: {
    en: 'Built first for hotels, campuses and multi-site retail.',
    th: 'เริ่มต้นสำหรับโรงแรม สถานศึกษา และร้านค้าหลายสาขา'
  },

  /* ---------- 4. Mobile apps (links appear next to "Available on Android & iOS") ---------- */
  appStoreUrl: '',
  playStoreUrl: '',

  /* ---------- 5. Case study (only real, approved results) ----------
   * Leave null until you have a result the customer has approved for publication.
   * Example:
   * caseStudy: { name:{en:'Office tower, Bangkok',th:'อาคารสำนักงาน กรุงเทพฯ'},
   *              result:{en:'18% lower HVAC energy over 6 months',th:'พลังงานระบบปรับอากาศลดลง 18% ใน 6 เดือน'},
   *              detail:{en:'Measured against a 12-month baseline.',th:'วัดเทียบกับ baseline 12 เดือน'} }
   */
  caseStudy: null,

  /* ---------- 6. FAQ answers specific to your service ----------
   * Leave an answer empty ('') to hide that question.
   */
  faq: {
    /* DRAFT answers written for the website. Each one describes how the service works,
     * so please confirm with the engineering team before showing it to clients. */
    hvacTypes: {
      en: 'We work with the systems already in your building, such as split-type, VRF and central chilled-water plants, and with an existing BMS where one is installed. The site assessment confirms, system by system, what can be monitored and what can be controlled.',
      th: 'เราทำงานร่วมกับระบบที่มีอยู่แล้วในอาคาร เช่น แอร์แยกส่วน (Split type), VRF และระบบน้ำเย็นส่วนกลาง (Chiller) รวมถึงระบบ BMS เดิมถ้ามี การสำรวจหน้างานจะยืนยันทีละระบบว่าส่วนไหนติดตามได้ และส่วนไหนควบคุมได้'
    },
    offline: {
      en: 'Your equipment keeps running on its existing local controls and schedules. KRONOCLOS only sends approved changes, so if the connection drops, no new commands are sent and your team can operate the equipment directly as usual.',
      th: 'อุปกรณ์ยังทำงานต่อตามระบบควบคุมและตารางเวลาเดิมของอาคาร KRONOCLOS ส่งเฉพาะคำสั่งที่อนุมัติแล้วเท่านั้น หากการเชื่อมต่อขาดหาย จะไม่มีคำสั่งใหม่ถูกส่งออกไป และทีมของคุณยังควบคุมอุปกรณ์ได้ตามปกติ'
    },
    security: {
      en: 'Building data is used only to operate and report on your site, and is handled in line with Thailand’s PDPA. Access is limited by role, connections between your site and the platform are encrypted, and every command is recorded in Decision Replay.',
      th: 'ข้อมูลอาคารใช้เพื่อการควบคุมและรายงานผลของอาคารคุณเท่านั้น และดูแลตามกฎหมาย PDPA การเข้าถึงจำกัดตามบทบาทผู้ใช้ การเชื่อมต่อระหว่างอาคารกับแพลตฟอร์มมีการเข้ารหัส และทุกคำสั่งถูกบันทึกไว้ใน Decision Replay'
    },
    support: {
      en: 'KRONOCLOS is your single point of contact for everything: software, devices, installation and support, under one agreement. The devices come from our close hardware partner, and we coordinate the work with them for you. After go-live we support you with baseline reviews and policy tuning.',
      th: 'KRONOCLOS เป็นผู้ติดต่อเพียงรายเดียวในทุกเรื่อง ทั้งซอฟต์แวร์ อุปกรณ์ การติดตั้ง และการดูแลหลังการขาย ภายใต้สัญญาเดียว อุปกรณ์มาจากพาร์ทเนอร์ด้านฮาร์ดแวร์ที่ทำงานใกล้ชิดกับเรา และเราประสานงานทั้งหมดแทนคุณ หลังเริ่มใช้งานเราดูแลต่อ ทั้งการทบทวน baseline และการปรับนโยบายให้เหมาะสม'
    }
  }
};
