// Spiritual gifts
export const giftQuestionMap = {
  A: "Administration",
  B: "Apostleship",
  C: "Craftsmanship",
  D: "Discernment",
  E: "Evangelism",
  F: "Exhortation",
  G: "Faith",
  H: "Giving",
  I: "Healing",
  J: "Helps",
  K: "Hospitality",
  L: "Intercession",
  M: "Knowledge",
  N: "Leadership",
  O: "Mercy",
  P: "Miracles",
  Q: "Missionary",
  R: "Music/Worship",
  S: "Pastor/Shepherd",
  T: "Prophecy",
  U: "Service",
  V: "Teaching",
  W: "Tongues and Interpretation",
  X: "Wisdom",
};

// Major Ministy Groups Tasks
export const ministryGroupsTasksMap = {
  0: "See Director",
  1: "See Director",
  2: "See Director",
  3: "Sound Tech Leader/Assistant; Computer Tech Lead/Assistant; Lighting Tech Lead/Assistant; Video Tech/Assistant; Photography Tech/Assistant; Graphic Design Lead/Assistant; Worship Leader; Drummer; Bass Player; Lead Guitar; Keyboard Player; Vocalists",
  4: "Weekly Group Meeting Assistance",
  5: "Hospital Care (Mighty Warriors); Visit and Pray for Covenant Members",
  6: "His Hands (Mighty Warriors); Help those in need with construction items and general maintenance.",
  7: "Video Testimony Team (Mighty Warriors); Develop short Videos of men wanting to post their testimonies.",
  8: "See Director",
  9: "See Director",
  10: "See Director",
  11: "See Director",
  12: "Host Home; Facilitator-(teacher); Food; Child Support; Monthly Contact; Hospital Visits; Prayer Ministry; Out Reach Events; Music and Worship",
  13: "Administration; Data Entry; Host; Food; Set Up/Tear Down/Clean Up; Media Tech; Advertisement; Follow Up Connection Team",
  14: "Set Up Trough; Fill with water; Set Out Mats; Heat Water; Drain Trough; Store Items in Storage"
};

// Major Ministy Groups
export const ministryGroupsMap = {
  0: "Guest Services",
  1: "101 Kids",
  2: "101 Students",
  3: "Creative Arts & Worship",
  4: "Mighty Warriors (Men's Ministry)",
  5: "Mighty Warriors (Men's Ministry)",
  6: "Mighty Warriors (Men's Ministry)",
  7: "Mighty Warriors (Men's Ministry)",
  8: "Ladies Ministry/Rooted/Grace Keepers",
  9: "Security Team",
  10: "Sports Ministry Outreach Team",
  11: "Young Adults",
  12: "Life Groups",
  13: "Growth Track Team",
  14: "Baptism Set Up Team",
  15: "New Believers Class",
  16: "Facilities/Campus Team",
  17: "Information Technologies Team. (IT)",
  18: "Weekly Events Distribution Team",
  19: "Food Distribution Team",
  20: "Prayer Team",
  21: "Guest Follow Up Team",
  22: "First Aid Team"
};

// Lookup from Gift → Ministries
export const giftToMinistryMap = {
  A: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],  // Administration
  B: [4, 7, 10, 11, 12], // Apostleship
  C: [1, 2, 3, 6, 7, 14], // Craftsmanship
  D: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Discernment
  E: [0, 1, 2, 4, 6, 7, 8, 10, 11, 12, 13], // Evangelism
  F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13], // Exhortation
  G: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Faith
  H: [6, 12], // Giving
  I: [5, 6, 8, 12], // Healing
  J: [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14], // Helps
  K: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14], // Hospitality
  L: [1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14], // Intercession
  M: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Knowledge
  N: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Leadership
  O: [0, 1, 4, 5, 6, 8, 9, 10, 11, 12, 14], // Mercy
  P: [1, 2, 3, 4, 5, 8, 10, 11, 12], // Miracles
  Q: [2, 4, 6, 7, 8, 10, 11, 12, 13], // Missionary
  R: [1, 2, 3, 4, 8, 11, 12], // Music/Worship
  S: [1, 2, 4, 6, 7, 8, 10, 12], // Pastor/Shepherd
  T: [3, 4, 8, 10, 12], // Prophecy
  U: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Service
  V: [1, 2, 4, 7, 8, 10, 11, 12, 13], // Teaching
  W: [], // Tongues & Interpretation
  X: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Wisdom
};
