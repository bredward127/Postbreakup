// The full text of The No-Contact Journal. Used to generate the PDF
// (scripts/build-journal.mjs) and to show the free Day 1 preview on the site.

export const phases = [
  {
    days: "Days 1–7",
    name: "Stop the bleeding",
    blurb: "Get through the first week without reaching out. Small wins, every day.",
  },
  {
    days: "Days 8–14",
    name: "Tell the truth",
    blurb: "Look at the relationship as it actually was, not the highlight reel.",
  },
  {
    days: "Days 15–21",
    name: "Take your time back",
    blurb: "Fill the hours they used to take up with things that are yours.",
  },
  {
    days: "Days 22–30",
    name: "Build what's next",
    blurb: "Decide who you want to be on the other side of this, and start.",
  },
];

export const days = [
  // Phase 1 — Stop the bleeding
  {
    title: "Just today",
    note: "You don't have to decide how you feel about them. You don't have to decide if it's over forever. You only have to not reach out today.",
    prompts: [
      "What happened? Write it plainly, like you're telling a stranger.",
      "What do you most want to say to them right now? Say it here, all of it.",
      "Name one thing you'll do in the next hour that's just for you.",
    ],
  },
  {
    title: "The phone problem",
    note: "Most urges to reach out are really urges to do something with the feeling. Give the feeling somewhere else to go.",
    prompts: [
      "When did you reach for your phone today, and what were you feeling right before?",
      "What are three changes that would make contact harder? (Mute, archive, move the app, hand the phone to a friend.)",
      "Which one will you do today?",
    ],
  },
  {
    title: "Body first",
    note: "Heartbreak lives in the body: bad sleep, no appetite, a tight chest. Look after the body and the mind has something to stand on.",
    prompts: [
      "How did you sleep, eat and move in the last 24 hours?",
      "Where in your body do you feel this most?",
      "One small physical thing you'll do today (a walk, a shower, a real meal):",
    ],
  },
  {
    title: "Your people",
    note: "Breakups shrink your world. Today, widen it by one person.",
    prompts: [
      "Who could you talk to this week who isn't connected to them?",
      "What would you want that person to know about how you're doing?",
      "Send them a message today. Write down what you sent.",
    ],
  },
  {
    title: "The unsent letter",
    note: "Write the message you want to send. Then don't send it. This page is where it lives now.",
    prompts: [
      "Dear ____, ",
      "Read it back. What were you really asking for?",
      "Is there any way to give that to yourself this week?",
    ],
  },
  {
    title: "Triggers",
    note: "Songs, places, a smell, a time of night. Knowing your triggers turns an ambush into something you saw coming.",
    prompts: [
      "List everything this week that pulled you straight back to them.",
      "Which of these can you avoid for now, and which do you just need to ride out?",
      "What's your plan for the hardest time of day?",
    ],
  },
  {
    title: "One week",
    note: "Seven days. Whether you held no contact perfectly or not, you're still here and still writing. That counts.",
    prompts: [
      "What was the hardest moment of this week, and how did you get through it?",
      "What's one thing that felt even slightly better than day one?",
      "Write yourself one sentence of credit.",
    ],
  },

  // Phase 2 — Tell the truth
  {
    title: "The highlight reel",
    note: "After a breakup, the mind replays the best moments on a loop. Today you write the whole film.",
    prompts: [
      "List the moments you keep replaying.",
      "Now list the moments you keep skipping over.",
      "Which list is closer to what daily life with them actually felt like?",
    ],
  },
  {
    title: "What you gave up",
    note: "Every relationship asks for compromises. Some were worth it, some weren't. Look at them honestly.",
    prompts: [
      "What did you stop doing, saying or wanting while you were together?",
      "Which of those do you want back?",
      "What's one you could start again this week?",
    ],
  },
  {
    title: "Their side",
    note: "This isn't about excusing anything. It's about seeing them as a whole person, which makes it easier to let them go.",
    prompts: [
      "What do you think they were struggling with?",
      "What did they want that you couldn't give, or didn't want to?",
      "What's true about the relationship that neither of you caused?",
    ],
  },
  {
    title: "Your part",
    note: "Owning your part isn't blame. It's the part you can actually learn from.",
    prompts: [
      "What would you do differently, knowing what you know now?",
      "What pattern of yours showed up in this relationship that has shown up before?",
      "What would you say to a friend who told you they did the same things?",
    ],
  },
  {
    title: "Anger is allowed",
    note: "If you've been skipping the anger to stay 'the bigger person', let it out here. Nobody reads this page but you.",
    prompts: [
      "What are you angry about? Don't be fair. Don't be polite.",
      "What boundary got crossed?",
      "What does the anger want you to protect next time?",
    ],
  },
  {
    title: "The real reasons",
    note: "Relationships usually end for more than one reason. Name them all, so you stop arguing with just one.",
    prompts: [
      "List every reason it ended, big and small.",
      "Which reasons are about compatibility, and which are about timing or circumstances?",
      "Which reason is the hardest to accept, and why?",
    ],
  },
  {
    title: "Two weeks",
    note: "Halfway through the hardest part. The story in your head is probably different from the one you started with.",
    prompts: [
      "How has the way you tell this story changed since Day 1?",
      "How many times did you want to reach out this week, compared with last?",
      "What do you understand now that you didn't before?",
    ],
  },

  // Phase 3 — Take your time back
  {
    title: "The empty hours",
    note: "The worst part is often the time: evenings, weekends, the gap where their messages used to be.",
    prompts: [
      "When in your week do you feel their absence most?",
      "What did you used to do with that time before them?",
      "Plan one of those hours for this week. What, when, where?",
    ],
  },
  {
    title: "Your space",
    note: "The places you live in hold memories. You're allowed to change them.",
    prompts: [
      "What in your space still belongs to the relationship?",
      "What will you box up, give back, or throw away?",
      "Change one thing about your room today. What did you change?",
    ],
  },
  {
    title: "The feed",
    note: "Checking their profile feels like information. It's actually reopening the wound on purpose.",
    prompts: [
      "How often have you looked at their profile or photos this week?",
      "How did you feel afterwards, honestly?",
      "What are you willing to mute, unfollow or archive, even for 30 days?",
    ],
  },
  {
    title: "Something new",
    note: "New experiences make new memories that don't have them in them.",
    prompts: [
      "List five things you've wanted to try but never got around to.",
      "Which one could you do in the next seven days?",
      "What's the first step? Do it today.",
    ],
  },
  {
    title: "Money and logistics",
    note: "Shared subscriptions, borrowed things, joint plans. Loose ends keep the door open.",
    prompts: [
      "What practical ties are still connecting you?",
      "Which ones can you close without contact, or with one short message?",
      "Write the shortest, calmest version of any message you truly have to send.",
    ],
  },
  {
    title: "A good day",
    note: "You've had at least one moment lately where you forgot to be sad. Catch it.",
    prompts: [
      "Describe a recent moment that felt normal, or even good.",
      "What were you doing, and who were you with?",
      "How can you get more of that into next week?",
    ],
  },
  {
    title: "Three weeks",
    note: "Three weeks is long enough for a new habit. Look at the ones you've built.",
    prompts: [
      "What new routines have you started since the breakup?",
      "Which ones do you want to keep after these 30 days?",
      "What are you proud of this week?",
    ],
  },

  // Phase 4 — Build what's next
  {
    title: "Who you were before",
    note: "Before them there was a version of you with their own opinions, plans and taste.",
    prompts: [
      "What did you care about before this relationship?",
      "Which of those things do you still care about?",
      "What's one of them you can bring back this month?",
    ],
  },
  {
    title: "What you learned",
    note: "Pain that teaches you something isn't wasted.",
    prompts: [
      "What did this relationship teach you about what you need?",
      "What did it teach you about what you won't accept?",
      "What did it teach you about yourself?",
    ],
  },
  {
    title: "Your non-negotiables",
    note: "Write the list now, while the lesson is fresh, so you remember it when someone new is charming.",
    prompts: [
      "List five things you need from a future partner.",
      "List three things that are dealbreakers from now on.",
      "Which of these did you let slide last time, and why?",
    ],
  },
  {
    title: "Forgiveness (optional)",
    note: "Forgiveness isn't saying it was okay. It's deciding to stop carrying it. You don't have to do it today.",
    prompts: [
      "Is there anything you're ready to stop carrying?",
      "Is there anything you need to forgive yourself for?",
      "What isn't ready yet? That's allowed too.",
    ],
  },
  {
    title: "If they reach out",
    note: "Decide now, calmly, what you'll do if they contact you. It's much harder to decide in the moment.",
    prompts: [
      "If they messaged you tomorrow, what would you want to do?",
      "What would you need to be true before you'd reply at all?",
      "Write your plan in one or two sentences.",
    ],
  },
  {
    title: "The future",
    note: "Picture a normal Tuesday a year from now. Not a fantasy, just a good, ordinary day.",
    prompts: [
      "Describe that day, from morning to night.",
      "What's different about your life in it?",
      "What's one thing you can do this month to move toward it?",
    ],
  },
  {
    title: "A letter to Day 1",
    note: "Go back and read your Day 1 page. Then write to the person who wrote it.",
    prompts: [
      "Dear me, on Day 1,",
      "What do you know now that they didn't?",
      "What do you want to tell them about the next few weeks?",
    ],
  },
  {
    title: "What stays",
    note: "Not everything from the relationship has to go. Some of it made you better.",
    prompts: [
      "What good things did this relationship give you that you'll keep?",
      "What are you grateful for, even now?",
      "What are you finally ready to let go of?",
    ],
  },
  {
    title: "Day 30",
    note: "Thirty days of choosing yourself. However it went, you did the work. Keep this journal; you'll want to read it one day.",
    prompts: [
      "How are you, really, compared to Day 1?",
      "What will you keep doing after today?",
      "Write one sentence for the person who reads this a year from now.",
    ],
  },
];

export const beforeYouText = {
  title: "Before you text them",
  intro: "Turn to this page whenever you're about to reach out. Answer every question before you pick up your phone.",
  prompts: [
    "What am I feeling right now? (Name it: lonely, angry, bored, scared, hopeful…)",
    "What do I want to happen when they read my message?",
    "How likely is that, honestly, based on how things have gone?",
    "How will I feel in one hour if they reply? If they don't?",
    "Who else could I talk to right now instead?",
    "Wait 20 minutes. Write here what you did while you waited.",
  ],
};
