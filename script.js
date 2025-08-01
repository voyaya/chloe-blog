/*
 * script.js
 *
 * Provides language switching and glitch effects for Chloe's idol blog.
 * A simple translation dictionary stores the textual content in
 * English, Japanese and Chinese. Selecting the "???" option
 * triggers a glitch mode where text is replaced by random
 * characters and the site palette inverts to an eerie neon theme.
 */

// Translation definitions. Each key corresponds to a data‑i18n
// attribute present on an element within the HTML. When the
// current language changes, the script looks up the key in this
// dictionary and replaces the element's text content. Dates and
// other time‑sensitive strings are written out in full to
// respect the user's requirement of absolute dates.
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_blog: 'Blog',
    // Home page
    home_title: 'Welcome to my little corner of the internet!',
    home_subtitle: 'Check out my latest diary entries!',
    // About page
    about_title: 'About Me',
    about_content: 'Hi! I\'m Chloe, your everyday idol. I love singing, dancing and exploring cute cafés. On rainy days I enjoy reading mysterious books and collecting rare trinkets. I\'m always here to brighten your day!',
    // Blog listing
    blog_title: 'Diary Entries',
    blog_intro: 'Here are my latest adventures. Click to read more!',
    post1_excerpt: 'Today I visited a cute café filled with pastel desserts. The cakes were so fluffy! I spent some time doodling in my journal and listening to soft music. At one corner, a shadow seemed to move on its own... maybe my imagination? Anyway, I had fun!',
    post2_excerpt: 'The rain today sounded like whispers from another world. I curled up with a blanket and read an old story about a hidden library. They say if you listen carefully, you can hear voices from the books. I\'m excited to share more soon!',
    // Individual posts
    post1_title: 'A Day at the Café',
    post1_date: 'July 20, 2025',
    post1_content: 'Today I visited a cute café filled with pastel desserts. The cakes were so fluffy! I spent some time doodling in my journal and listening to soft music. At one corner, a shadow seemed to move on its own... maybe my imagination? Anyway, I had fun!',
    post2_title: 'Rainy Day Memories',
    post2_date: 'July 10, 2025',
    post2_content: 'The rain today sounded like whispers from another world. I curled up with a blanket and read an old story about a hidden library. They say if you listen carefully, you can hear voices from the books. I\'m excited to share more soon!',
    // Third post
    post3_title: 'Evening Walk Under Lanterns',
    post3_date: 'July 15, 2025',
    post3_content: 'This evening I took a stroll through the park. The lanterns glowed softly along the path, casting long shadows. As I hummed a tune, I thought I heard footsteps behind me, but no one was there. The fireflies danced in sync, almost like they were trying to tell me something...',
    post3_excerpt: 'This evening I took a stroll through the park. The lanterns glowed softly along the path, casting long shadows. As I hummed a tune, I thought I heard footsteps behind me, but no one was there...',
    // Fourth post
    post4_title: 'Midnight Market Dream',
    post4_date: 'July 5, 2025',
    post4_content: 'Last night I wandered through a midnight market. Stalls shimmered with trinkets and the air was filled with strange perfumes. A vendor gave me a charm and whispered, "Don\'t look back." I heard laughter echoing from somewhere I couldn\'t see. Did I ever make it home? Well, I woke up with the charm in my pocket.',
    post4_excerpt: 'Last night I wandered through a midnight market. Stalls shimmered with trinkets and the air was filled with strange perfumes. A vendor gave me a charm and whispered, "Don\'t look back." I heard laughter echoing from somewhere I couldn\'t see...',
    // Comments heading
    comments_title: 'Comments',
    footer_text: '© 2025 Chloe\'s Diary'
    ,
    about_subtitle: 'Get to know the girl behind the diary!'
  },
  zh: {
    nav_home: '主页',
    nav_about: '关于',
    nav_blog: '日记',
    home_title: '欢迎来到我的小角落！',
    home_subtitle: '快来看看我的最新日记吧！',
    about_title: '关于我',
    about_content: '嗨！我是克罗艾，你的日常偶像。我喜欢唱歌、跳舞和探索可爱的咖啡店。下雨天，我喜欢读一些神秘的书和收集稀有的小玩意。我总是想照亮你的一天！',
    blog_title: '日记列表',
    blog_intro: '这里是我的最新冒险，点击标题阅读全文！',
    post1_excerpt: '今天我去了一家充满粉色甜点的可爱咖啡馆。蛋糕好松软！我花了一些时间在日记本上涂鸦，听着柔和的音乐。在角落里，似乎有一个影子自己动了……也许是我的想象？不管怎样，我玩得很开心！',
    post2_excerpt: '今天的雨听起来像来自另一个世界的低语。我裹着毛毯，读了一本关于隐藏图书馆的旧故事。他们说如果你仔细听，就能听到书中的声音。我期待着很快与你分享更多！',
    post1_title: '在咖啡馆的一天',
    post1_date: '2025年7月20日',
    post1_content: '今天我去了一家充满粉色甜点的可爱咖啡馆。蛋糕好松软！我花了一些时间在日记本上涂鸦，听着柔和的音乐。在角落里，似乎有一个影子自己动了……也许是我的想象？不管怎样，我玩得很开心！',
    post2_title: '雨天的回忆',
    post2_date: '2025年7月10日',
    post2_content: '今天的雨听起来像来自另一个世界的低语。我裹着毛毯，读了一本关于隐藏图书馆的旧故事。他们说如果你仔细听，就能听到书中的声音。我期待着很快与你分享更多！',
    // 第三篇博文
    post3_title: '灯笼下的夜晚散步',
    post3_date: '2025年7月15日',
    post3_content: '傍晚我在公园散步，路边的灯笼柔柔地亮着，投下长长的影子。我哼着小曲，似乎听到身后有脚步声，却没有人。萤火虫一起跳舞，仿佛在向我传达什么……',
    post3_excerpt: '傍晚我在公园散步，路边的灯笼柔柔地亮着，投下长长的影子。我哼着小曲，似乎听到身后有脚步声，却没有人……',
    // 第四篇博文
    post4_title: '午夜集市之梦',
    post4_date: '2025年7月5日',
    post4_content: '昨晚我在午夜集市闲逛，摊位闪着光，空气里弥漫着奇异的香气。一个摊主给了我一个护身符，低声说：“不要回头。”我听到某个看不见的地方传来笑声。我真的回到家了吗？好吧，我醒来时口袋里有那个护身符。',
    post4_excerpt: '昨晚我在午夜集市闲逛，摊位闪着光，空气里弥漫着奇异的香气。一个摊主给了我一个护身符，低声说：“不要回头。”我听到某个看不见的地方传来笑声……',
    // 评论标题
    comments_title: '评论',
    footer_text: '© 2025 克罗艾的日记'
    ,
    about_subtitle: '来了解这位写日记的女孩！'
  },
  ja: {
    nav_home: 'ホーム',
    nav_about: 'プロフィール',
    nav_blog: '日記',
    home_title: '私の小さなインターネットの角へようこそ！',
    home_subtitle: '最新の日記はこちら！',
    about_title: 'わたしについて',
    about_content: 'こんにちは！私はクロエ、あなたの日常アイドルです。歌うこと、踊ること、かわいいカフェを探すことが大好きです。雨の日には、ミステリアスな本を読み、珍しい小物を集めるのが好きです。いつもあなたの一日を明るくしたいと思っています！',
    blog_title: '日記一覧',
    blog_intro: 'ここには最近の冒険があります。タイトルをクリックして全文を読んでね！',
    post1_excerpt: '今日はパステルカラーのデザートでいっぱいのかわいいカフェに行きました。ケーキはふわふわでした！ノートに落書きしたり、柔らかい音楽を聴いたりして過ごしました。角の方で、影がひとりでに動いたような気がしました……気のせいかな？とにかく楽しい時間を過ごしました！',
    post2_excerpt: '今日の雨は別の世界からのささやきのように聞こえました。ブランケットにくるまって、隠された図書館についての古い物語を読みました。静かに耳を澄ませば、本から声が聞こえると言われています。すぐにもっと共有できるのが楽しみです！',
    post1_title: 'カフェでの一日',
    post1_date: '2025年7月20日',
    post1_content: '今日はパステルカラーのデザートでいっぱいのかわいいカフェに行きました。ケーキはふわふわでした！ノートに落書きしたり、柔らかい音楽を聴いたりして過ごしました。角の方で、影がひとりでに動いたような気がしました……気のせいかな？とにかく楽しい時間を過ごしました！',
    post2_title: '雨の日の思い出',
    post2_date: '2025年7月10日',
    post2_content: '今日の雨は別の世界からのささやきのように聞こえました。ブランケットにくるまって、隠された図書館についての古い物語を読みました。静かに耳を澄ませば、本から声が聞こえると言われています。すぐにもっと共有できるのが楽しみです！',
    // 第三回
    post3_title: '灯籠の下の夕方散歩',
    post3_date: '2025年7月15日',
    post3_content: '夕方、公園を散歩しました。小道の灯籠は柔らかく光り、長い影を落としていました。鼻歌を歌っていると、後ろから足音が聞こえた気がしたのに、誰もいませんでした。蛍が揃って踊り、まるで何かを伝えようとしているみたい…',
    post3_excerpt: '夕方、公園を散歩しました。小道の灯籠は柔らかく光り、長い影を落としていました。鼻歌を歌っていると、後ろから足音が聞こえた気がしたのに、誰もいませんでした…',
    // 第四回
    post4_title: '真夜中の市場の夢',
    post4_date: '2025年7月5日',
    post4_content: '昨夜、真夜中の市場をさまよいました。屋台はきらめき、不思議な香りが漂っていました。屋台の人が御守りを手渡し、「振り返らないで」とささやきました。見えないどこかから笑い声が響きました。私は本当に家に帰れたのかな？でも、目が覚めると御守りがポケットにありました。',
    post4_excerpt: '昨夜、真夜中の市場をさまよいました。屋台はきらめき、不思議な香りが漂っていました。屋台の人が御守りを手渡し、「振り返らないで」とささやきました。見えないどこかから笑い声が響きました…',
    // コメントタイトル
    comments_title: 'コメント',
    footer_text: '© 2025 クロエの日記'
    ,
    about_subtitle: '日記の裏側にいる女の子を知ってね！'
  }
};

// Available language codes
const supportedLangs = ['en', 'zh', 'ja', 'glitch'];

// Default language
let currentLang = 'en';

/**
 * Generate a corrupted/glitched version of a string. Randomly
 * replaces letters and numbers with assorted Unicode symbols to
 * evoke an unsettling feeling. Spaces and punctuation are left
 * unchanged to preserve readability.
 *
 * @param {string} str The original text
 * @returns {string} The glitched text
 */
function glitchString(str) {
  const glitchChars = 'ｧｨｩｪｫｬｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ々≠≈≡∷∞∆ΨΩ∑Φ⊗≁';
  let out = '';
  for (const ch of str) {
    if (/[A-Za-z0-9]/.test(ch)) {
      const randIndex = Math.floor(Math.random() * glitchChars.length);
      out += glitchChars.charAt(randIndex);
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Update text contents of all elements with a data‑i18n attribute.
 * If currentLang is set to 'glitch', the English text is
 * intentionally corrupted before being displayed. Otherwise the
 * matching translation is looked up and inserted.
 */
function updateTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    let text;
    if (currentLang === 'glitch') {
      // Use English base text as the source for corruption
      const base = translations.en[key] || '';
      text = glitchString(base);
    } else {
      const langPack = translations[currentLang];
      text = langPack && langPack[key] ? langPack[key] : translations.en[key] || '';
    }
    el.textContent = text;
  });
  // Set body glitch class for dark mode
  if (currentLang === 'glitch') {
    document.body.classList.add('glitch');
  } else {
    document.body.classList.remove('glitch');
  }
}

/**
 * Handle changes on the language selector drop‑down. When a
 * supported language is chosen the page content updates.
 */
function setupLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (!selector) return;
  // Load saved language preference from localStorage if present
  const stored = localStorage.getItem('chloe-lang');
  if (stored && supportedLangs.includes(stored)) {
    currentLang = stored;
    selector.value = stored;
  }
  selector.addEventListener('change', () => {
    const lang = selector.value;
    if (supportedLangs.includes(lang)) {
      currentLang = lang;
      localStorage.setItem('chloe-lang', lang);
      updateTranslations();
    }
  });
}

// Initialise translations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSelector();
  updateTranslations();
});