const DISC_TYPES = {
  D: "Dominance",
  I: "Influence",
  S: "Steadiness",
  C: "Conscientiousness",
};

export function scoreDISC(answers) {
  // Defensive guard: only use first 20 answers
  const discAnswers = answers.slice(0, 19);

  const traitScores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  // Index mapping: 0-4 = D, 5-9 = I, 10-14 = S, 15-19 = C
  for (let i = 0; i < 20; i++) {
    const val = parseInt(discAnswers[i], 10);
    const score = isNaN(val) ? 0 : val;

    if (i < 5) traitScores.D += score;
    else if (i < 10) traitScores.I += score;
    else if (i < 15) traitScores.S += score;
    else traitScores.C += score;
  }

  // Turn the scores into a sortable array
  const sortedTraits = Object.entries(traitScores).sort(
    ([, a], [, b]) => b - a
  ); // descending by score

  const topTwo = sortedTraits.slice(0, 2);
  const code = topTwo.map(([letter]) => letter).join("/");
  const profile = {
    D: {
      description: `You are Dominant, Direct, Task oriented, Decisive, Organized, Outgoing, Outspoken`,
      summary: `We are direct and decisive. We are risk takers and problem solvers. We are
  more concerned with completing tasks and winning than we are with gaining
  approval from people. Though the internal drive tends to make us insensitive
  to those around us, "D"'s are not afraid to challenge the status quo, and we
  thrive when it comes to developing new things. We need discipline to excel and
  respond to direct confrontation. Our greatest fear is to be taken advantage
  of, and even despite our possible weaknesses which include an aversion to
  routine, a tendency to overstep authority, an argumentative nature, and a
  habit of taking on too much we place a high value on time and use our
  innovative thinking to accomplish difficult tasks and conquer challenges.`,
      biblicalExamples: ``,
      betterYourself: `A. Strive to listen to other people more attentively. B. Try to be less
  controlling and domineering. C. Develop a greater appreciation for the
  opinions, feelings and desires of others. D. Put more energy into personal
  relationships. E. Show your support for the other team members.`,
    },
    "D/I": {
      description: `You are Dominant, Direct, Task oriented, Decisive, Organized, Outgoing,
  Outspoken`,
      summary: `We are curious concluders who place emphasis on the bottom line and work hard
  to reach our goals. We are more determined than we are inspirational, yet our
  high expectations and standards for ourselves and those around us typically
  cause us to make quite an impact, motivating others to follow us. We have an
  array of interests and can become distracted by taking on too many projects.
  We often need to focus, prioritize, and simply slow down. Because we thrive on
  activity and forward motion, we like to accomplish tasks through a large
  number of people.`,
      biblicalExamples: `Joshua (Joshua 1), Noah (Genesis 6-9), Sarah (Genesis 16, 1
  Peter 3:6)`,
      betterYourself: `A. Strive to listen to other people more attentively. B. Try to be less
  controlling and domineering. C. Develop a greater appreciation for the
  opinions, feelings and desires of others. D. Put more energy into personal
  relationships. E. Show your support for the other team members.`,
    },
    "D/S": {
      description: `You are Dominant, Direct, Task oriented, Decisive, Organized, Outgoing,
  Outspoken`,
      summary: `We are achievers with an ability to persevere. We are more active than
  passive, but possess a kind of calm sensitivity and steadiness that makes us
  good leaders. We seem to be people-oriented but can easily be dominant and
  decisive when it comes to tasks and project planning. We strive to accomplish
  goals with fierce determination that comes from a strong internal drive, but
  we could benefit from contemplative and conservative thinking as well as
  spending more time focusing on relationships.`,
      biblicalExamples: `Daniel (Daniel 1-6), Job (Job
  1:5, James 5:11), Martha (Luke 10:38-42)`,
      betterYourself: `A. Strive to listen to other people more attentively. B. Try to be less
  controlling and domineering. C. Develop a greater appreciation for the
  opinions, feelings and desires of others. D. Put more energy into personal
  relationships. E. Show your support for the other team members.`,
    },
    "D/C": {
      description: `You are Dominant, Direct, Task oriented, Decisive, Organized, Outgoing,
  Outspoken`,
      summary: `We are challengers that can either be determined students or defiant critics.
  Being in charge is important to us, yet we care little about what others think
  as long as we get the job done. We have a great deal of foresight and examine
  every avenue to find the best solution. We prefer to work alone. Though we
  fear failure and the lack of influence, we are motivated by challenges and can
  often be excellent administrators. We could benefit from learning to relax and
  paying more attention to people.`,
      biblicalExamples: `Malachi (Malachi 4), Nathan (2 Samuel
  12:1-13), Nahum (Nahum 1-3)`,
      betterYourself: `A. Strive to listen to other people more attentively. B. Try to be less
  controlling and domineering. C. Develop a greater appreciation for the
  opinions, feelings and desires of others. D. Put more energy into personal
  relationships. E. Show your support for the other team members.`,
    },
    I: {
      description: `You are Influential, Interested in people, Witty, Easygoing, Outgoing, People
  oriented`,
      summary: `We are inspiring and impressive. Enthusiastic, optimistic, impulsive, and
  emotional we tend to be creative problem solvers and excellent encouragers. We
  often have a large number of friends, but we can become more concerned with
  approval and popularity than with getting results. Our greatest fear is
  rejection, but we thrive when it comes to motivating others. Our positive
  sense of humor helps us negotiate conflicts. Though we can be inattentive to
  details and poor listeners, we can be great peacemakers and effective
  teammates when we control our feelings and minimize our urge to entertain and
  be the center of attention. We value lots of human touch and connection.`,
      biblicalExamples: ``,
      betterYourself: `A. Weigh the pros and cons before making a decision; be less impulsive. B.
  Remember to help with tasks more. C. Exercise control over your actions, words
  and emotions. D. Focus more on details and facts. E. Remember to slow down
  your pace for other people. F. Talk less; listen more.`,
    },

    "I/D": {
      description: `You are Influential, Interested in people, Witty, Easygoing, Outgoing, People
  oriented`,
      summary: `We are persuaders who are outgoing and energetic. We enjoy large groups and
  use our power of influence to attain respect and convince people to follow our
  lead. Sometimes we can be viewed as fidgety and nervous, but it comes from our
  need to be a part of challenges that have variety, freedom, and mobility. We
  could benefit from learning to look before we leap and spending more time
  being studious and still. We make inspiring leaders and know how to get
  results from and through people.`,
      biblicalExamples: `John the Baptist (Luke 3), Peter (Matthew 16,
  26; Acts 3), Rebekah (Genesis 24)`,
      betterYourself: `A. Weigh the pros and cons before making a decision; be less impulsive. B.
  Remember to help with tasks more. C. Exercise control over your actions, words
  and emotions. D. Focus more on details and facts. E. Remember to slow down
  your pace for other people. F. Talk less; listen more.`,
    },
    "I/S": {
      description: `You are Influential, Interested in people, Witty, Easygoing, Outgoing, People oriented`,
      summary: `We are influential counselors who love people, and its no surprise that people
  love us. We live to please and serve, and tend to be good listeners. Looking
  good and encouraging others is important to us, as is following through and
  being obedient. We often lack in the area of organization and can be more
  concerned with the people involved than we are with the task at hand. However,
  we can be center stage or behind the scenes with equal effectiveness, and we
  shine when it comes to influencing and helping others.`,
      biblicalExamples: `Barnabas (Acts 4, 9, 11-15), Elisha (1 Kings 19; 2 Kings 2-3), Nicodemus (John 3, 7, 19)`,
      betterYourself: `A. Weigh the pros and cons before making a decision; be less impulsive. B.
  Remember to help with tasks more. C. Exercise control over your actions, words
  and emotions. D. Focus more on details and facts. E. Remember to slow down
  your pace for other people. F. Talk less; listen more.`,
    },
    "I/C": {
      description: `You are Influential, Interested in people, Witty, Easygoing, Outgoing, People oriented`,
      summary: `We are inspiring yet cautious assessors who are excellent communicators
  through the combination of concerned awareness and appreciation of people. We
  excel in determining ways to improve production. We tend to be impatient,
  critical, and can also be overly persuasive—too consumed by the desire to win.
  We like to work inside the box, and we could benefit from trying new things
  and caring less about what others think. This personality type often possesses
  a gift for teaching; we are generally dependable when it comes to paying
  attention to details and getting the job done.`,
      biblicalExamples: `Miriam (Exodus 15-21), Ezra (Ezra 7-8), Shunammite Woman (2 Kings 4:8-37)`,
      betterYourself: `A. Weigh the pros and cons before making a decision; be less impulsive. B.
  Remember to help with tasks more. C. Exercise control over your actions, words
  and emotions. D. Focus more on details and facts. E. Remember to slow down
  your pace for other people. F. Talk less; listen more.`,
    },
    S: {
      description: `You are Steady, Stability, Analytical, People oriented, Introverted`,
      summary: `We are steady and more reserved. We do not like change and thrive in secure,
  non-threatening environments. We are often friendly and understanding as well
  as good listeners and loyal workers who are happy doing the same job
  consistently. With an incredible ability to forgive, reliable and dependable.
  S's tend to make the best friends. Our greatest fear, however, is loss of
  security, and our possible weaknesses naturally include not only resistance to
  change, but also difficulty adjusting to it. We can also be too sensitive to
  criticism and unable to establish priorities. In order to avoid being taken
  advantage of, we need to be stronger and learn how to say no. We also like to
  avoid the limelight, but when given an opportunity to genuinely help others,
  we will gladly rise to the occasion. We feel most valued when we have truly
  helped someone.`,
      biblicalExamples: ``,
      betterYourself: `A. Consider how change is healthy. Try to change more willingly. B. Be more
  direct in your interactions. C. Focus on overall goals of your family or group
  rather than specific procedures. D. Deal with confrontation constructively. E.
  Develop more flexibility. F. Try to show more initiative.`,
    },
    "S/D": {
      description: `You are Steady, Stability, Analytical, People oriented, Introverted`,
      summary: `We are quiet leaders who can be counted on to get the job done. We perform
  better in small groups and do not enjoy speaking in front of crowds. Though we
  can be soft- and hard-hearted at the same time, we enjoy close relationships
  with people, being careful not to dominate them. Challenges motivate us,
  especially ones that allow us to take a systematic approach. We tend to be
  determined, persevering through time and struggles. We benefit from
  encouragement and positive relationships.`,
      biblicalExamples: `Martha (Luke 10:38-42), Job (Job 1:5; James 5:11)`,
      betterYourself: `A. Consider how change is healthy. Try to change more willingly. B. Be more
  direct in your interactions. C. Focus on overall goals of your family or group
  rather than specific procedures. D. Deal with confrontation constructively. E.
  Develop more flexibility. F. Try to show more initiative.`,
    },
    "S/I": {
      description: `You are Steady, Stability, Analytical, People oriented, Introverted`,
      summary: `We are inspirational counselors who exhibit warmth and sensitivity. Tolerant
  and forgiving, we have many friends because we accept and represent others
  well. Our social nature and desire to be likable and flexible make us inclined
  to be overly tolerant and non-confrontational. We could benefit from being
  more task-oriented and paying more attention to detail. Kind and considerate,
  we include others and inspire people to follow us. Words of affirmation go a
  long way with us, and with the right motivation, we can be excellent team
  players.`,
      biblicalExamples: `Mary Magdalene (Luke 7:36-47), Barnabas (Acts 4, 9, 11-15), Elisha (1 Kings 19; 2 Kings 2-13)`,
      betterYourself: `A. Consider how change is healthy. Try to change more willingly. B. Be more
  direct in your interactions. C. Focus on overall goals of your family or group
  rather than specific procedures. D. Deal with confrontation constructively. E.
  Develop more flexibility. F. Try to show more initiative.`,
    },
    "S/C": {
      description: `You are Steady, Stability, Analytical, People oriented, Introverted`,
      summary: `We are diplomatic and steady, as well as detail-oriented. Stable and
  contemplative, we like to weigh the evidence and discover the facts to come to
  a logical conclusion. More deliberate, we prefer to take our time, especially
  when the decision involves others. Possible challenges include being highly
  sensitive especially when faced with criticism, and we should be aware of how
  we interact with others. Operating best in precise and cause-worthy projects,
  we can be a peacemaker; this makes us a loyal team member and friend.`,
      biblicalExamples: `Moses (Exodus 3, 4, 20, 32), John (John 19:26-27), Eliezer (Genesis 24)`,
      betterYourself: `A. Consider how change is healthy. Try to change more willingly. B. Be more
  direct in your interactions. C. Focus on overall goals of your family or group
  rather than specific procedures. D. Deal with confrontation constructively. E.
  Develop more flexibility. F. Try to show more initiative.`,
    },
    C: {
      description: `You are Compliant, Competent, Task oriented, Goal oriented, Introverted`,
      summary: `We are compliant and analytical. Careful and logical lines of thinking drive
  us forward, and accuracy is a top priority. We hold high standards and value
  systematic approaches to problem-solving. Though we thrive when given
  opportunities to find solutions, we tend to ignore the feelings of others and
  can often be critical and downright crabby. Verbalizing feelings is difficult
  for us, but when we are not bogged down in details and have clear-cut
  boundaries, we can be big assets to the team by providing calculated reality
  checks. Our biggest fear is criticism, and our need for perfection is often a
  weakness, as is our tendency to give in when in the midst of an argument.
  However, we are thorough in all activities and can bring a conscientious,
  even-tempered element to the team that will provide solid grounding. We value
  being correct.`,
      biblicalExamples: ``,
      betterYourself: `A. Concentrate on doing the right things not just doing things right. B. Be
  less critical of others ideas and methods. C. Respond more quickly to
  accomplish others goals. D. Strive to build relationships with other people
  and family members. E. Be more decisive. F. Focus less on facts and more on
  people.`,
    },
    "C/I": {
      description: `You are Compliant, Competent, Task oriented, Goal oriented, Introverted`,
      summary: `We are attentive to the details. We tend to impress others by doing things
  right and stabilizing situations. Not considered aggressive or pushy, we enjoy
  both large and small crowds. Though we work well with people, we are sometimes
  too sensitive to what others think about us and our work. We could benefit
  from being more assertive and self-motivated. Often excellent judges of
  character, we easily trust those who meet our standards. We are motivated by
  genuine and enthusiastic approval as well as concise and logical explanations.`,
      biblicalExamples: `Miriam (Exodus 15-21; Numbers 12:1-15), Ezra (Ezra 7, 8)`,
      betterYourself: `A. Concentrate on doing the right things not just doing things right. B. Be
  less critical of others ideas and methods. C. Respond more quickly to
  accomplish others goals. D. Strive to build relationships with other people
  and family members. E. Be more decisive. F. Focus less on facts and more on
  people.`,
    },
    "C/S": {
      description: `You are Compliant, Competent, Task oriented, Goal oriented, Introverted`,
      summary: `We are systematic and stable. We tend to do one thing at a time and do it
  right. Reserved and cautious, we would rather work behind the scenes to stay
  on track. We seldom take risks or try new things and naturally dislike sudden
  changes in our environments. Precisionists to the letter, we painstakingly
  require accuracy and fear criticism, which we equate to failure. Diligent
  workers, our motivation comes from serving others.`,
      biblicalExamples: `Esther (Esther 4), Zechariah (Luke 1), Joseph (Matthew 1:1-23)`,
      betterYourself: `A. Concentrate on doing the right things not just doing things right. B. Be
  less critical of others ideas and methods. C. Respond more quickly to
  accomplish others goals. D. Strive to build relationships with other people
  and family members. E. Be more decisive. F. Focus less on facts and more on
  people.`,
    },
    "C/D": {
      description: `You are Compliant, Competent, Task oriented, Goal oriented, Introverted`,
      summary: `We are cautious and determined designers who are consistently task-oriented
  and very aware of problems. Sometimes viewed as insensitive, we do care about
  individual people but have a difficult time showing it. We often feel we are
  the only ones who can do the job the way it needs to be done, but because of
  our administrative skills, we are able to bring plans for change and
  improvements to fruition. We have a tendency to be serious and could benefit
  from being more optimistic and enthusiastic. Despite our natural drive to
  achieve, we should concentrate on developing healthy relationships and simply
  loving people.`,
      biblicalExamples: `Bezalel (Exodus 35:30-35, 36:8, 37:1-9), Jochebed (Exodus 1:22-2:4), Jethro (Exodus 2, 18)`,
      betterYourself: `A. Concentrate on doing the right things not just doing things right. B. Be
  less critical of others ideas and methods. C. Respond more quickly to
  accomplish others goals. D. Strive to build relationships with other people
  and family members. E. Be more decisive. F. Focus less on facts and more on
  people.`,
    },
  };

  return {
    code,
    ...(profile[code] || {}),
    breakdown: topTwo.map(([letter, score]) => ({
      letter,
      type: DISC_TYPES[letter],
      score,
    })),
    all: sortedTraits.map(([letter, score]) => ({
      letter,
      type: DISC_TYPES[letter],
      score,
    })),
  };
}
