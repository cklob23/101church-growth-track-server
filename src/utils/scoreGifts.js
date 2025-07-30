import { giftQuestionMap } from "./mappings.js";
// Array of the gift codes in order (1st row = A, 2nd = B, etc.)
const giftLetters = Object.keys(giftQuestionMap);

// Main scoring function
export function scoreGifts(answers) {
  const results = [];

  // We assume answers is an array of at least 72 elements (3 x 24)
  for (let i = 0; i < 24; i++) {
    const val1 = parseInt(answers[20 + i], 10); // column 1 (Q1–24)
    const val2 = parseInt(answers[44 + i], 10); // column 2 (Q25–48)
    const val3 = parseInt(answers[68 + i], 10); // column 3 (Q49–72)

    const total =
      (isNaN(val1) ? 0 : val1) +
      (isNaN(val2) ? 0 : val2) +
      (isNaN(val3) ? 0 : val3);

    const code = giftLetters[i];
    const giftName = giftQuestionMap[code] || `Gift ${code}`;
    const descriptions = {
      Administration: `The gift of administration is the divine strength or ability to organize
  multiple tasks and groups of people to accomplish these tasks. Luke 14:28-30;
  Acts 6:1-7; 1 Corinthians 12:28`,
      Apostleship: `The gift of apostleship is the divine strength or ability to pioneer new
  churches and ministries through planting, overseeing, and training. Acts
  15:22-35; 1 Corinthians 12:28; 2 Corinthians 12:12; Galatians 2:7-10;
  Ephesians 4:11-14`,
      Craftmanship: `The gift of craftsmanship is the divine strength or ability to plan, build,
  and work with your hands in construction environments to accomplish multiple
  ministry applications. Exodus 30:22, 31:3-11; 2 Chronicles 34:9-13; Acts
  18:2-3`,
      Discernment: `The gift of discernment is the divine strength or ability to spiritually
  identify falsehood and to distinguish between right and wrong motives and
  situations. Matthew 16:21-23; Acts 5:1-11, 16:16-18; 1 Corinthians 12:10; 1
  John 4:1-6`,
      Evangelism: `The gift of evangelism is the divine strength or ability to help
  non-Christians take the necessary steps to becoming Christ followers. Acts
  8:5-6, 26-40, 14:21; 21:8; Ephesians 4:11-14`,
      Exhortation: `The gift of exhortation is the divine strength or ability to encourage others
  through the written or spoken word and biblical truth. Acts 14:22; Romans
  12:8; 1 Timothy 4:13; Hebrews 10:24-25`,
      Faith: `The gift of faith is the divine strength or ability to believe in God for
  unseen supernatural results in every arena of life. Acts 11:22-24; Romans
  4:18-21; 1 Corinthians 12:9; Hebrews 11`,
      Giving: `The gift of giving is the divine strength or ability to produce wealth and to
  give by tithes and offerings for the purpose of advancing the Kingdom of God
  on earth. Mark 12:41-44; Romans 12:8; 2 Corinthians 8:1-7, 9:2-7`,
      Healing: `The gift of healing is the divine strength or ability to act as an
  intermediary in faith, prayer, and by the laying-on of hands for the healing
  of physical and mental illnesses. Acts 3:1-10, 9:32-35, 28:7-10; 1 Corinthians
  12:9, 28`,
      Helps: `The gift of helps is the divine strength or ability to work in a supportive
  role for the accomplishment of tasks in Christian ministry. Mark 15:40-41;
  Acts 9:36; Romans 16:1-2; 1 Corinthians 12:28`,
      Hospitality: `The gift of hospitality is the divine strength or ability to create warm,
  welcoming environments for others in places such as your home, office, or
  church. Acts 16:14-15; Romans 12:13, 16:23; Hebrews 13:1-2; 1 Peter 4:9`,
      Intercession: `The gift of intercession is the divine strength or ability to stand in the gap
  in prayer for someone, something, or somewhere believing for profound results.
  Hebrews 7:25; Colossians 1:9-12, 4:12-13; James 5:14-16`,
      Knowledge: `The gift of knowledge is the divine strength or ability to understand and
  bring clarity to situations and circumstances, often accompanied by a word
  from God. Acts 5:1-11; 1 Corinthians 12:8; Colossians 2:2-3`,
      Leadership: `The gift of leadership is the divine strength or ability to influence people
  at their level while directing and focusing them on the big picture, vision,
  or idea. Romans 12:8; 1 Timothy 3:1-13, 5:17; Hebrews 13:17`,
      Mercy: `The gift of mercy is the divine strength or ability to feel empathy and to
  care for those who are hurting in any way. Matthew 9:35-36; Mark 9:41; Romans
  12:8; 1 Thessalonians 5:14`,
      Miracles: `The gift of miracles is the divine strength or ability to alter the natural
  outcomes of life in a supernatural way through prayer, faith, and divine
  direction. Acts 9:36-42, 19:11-12, 20:7-12; Romans 15:18-19; 1 Corinthians
  12:10, 28`,
      Missionary: `The missionary gift is the divine strength or ability to reach others outside
  of your culture and nationality, while in most cases living in that culture or
  nation. Acts 8:4, 13:2-3, 22:21; Romans 10:15`,
      "Music/Worship": `Music/Worship The gift of music/worship is the divine strength or ability to
  sing, dance, or play an instrument primarily for the purpose of helping others
  worship God. Deuteronomy 31:22; 1 Samuel 16:16; 1 Chronicles 16:41-42; 2
  Chronicles 5:12-13, 34:12; Psalm 150`,
      "Pastor/Shepherd": `The gift of pastor/shepherd is the divine strength or ability to care for the
  personal needs of others by nurturing and mending life issues. John 10:1-18;
  Ephesians 4:11-14; 1 Timothy 3:1-7; 1 Peter 5:1-3`,
      Prophecy: `The gift of prophecy is the divine strength or ability to boldly speak and
  bring clarity to scriptural and doctrinal truth, in some cases foretelling
  God's plan. Acts 2:37-40, 7:51-53, 26:24-29; 1 Corinthians 14:1-4; 1
  Thessalonians 1:5`,
      Service: `The gift of serving is the divine strength or ability to do small or great
  tasks in working for the overall good of the body of Christ. Acts 6:1-7;
  Romans 12:7; Galatians 6:10; 1 Timothy 1:16-18; Titus 3:14`,
      Teaching: `The gift of teaching is the divine strength or ability to study and learn from
  the Scriptures primarily to bring understanding and growth to other
  Christians. Acts 18:24-28, 20:20-21; 1 Corinthians 12:28; Ephesians 4:11-14`,
      "Tongues & Interpretation": `The gift of tongues is the divine strength or ability to pray in a heavenly
  language to encourage your spirit and to commune with God. The gift of tongues
  is often accompanied by interpretation and should be used appropriately. Acts
  2:1-13; 1 Corinthians 12:10, 14:1-14`,
      Wisdom: `The gift of wisdom is the divine strength or ability to apply the truths of
  Scripture in a practical way, producing a fruitful outcome and the character
  of Jesus Christ. Acts 6:3, 10; 1 Corinthians 2:6-13, 12:8`,
    };
    results.push({
      code,
      gift: giftName,
      description: descriptions[giftName],
      score: total,
    });
  }

  // Sort results descending by score
  results.sort((a, b) => b.score - a.score);

  // Return top 5 gifts
  return results.slice(0, 5);
}
