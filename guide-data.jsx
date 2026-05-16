// Foundations — 9-Week Journey Data
// Content drawn directly from the Foundations booklet
// "A 9-Week Journey into the Life Jesus Offers"

const WEEKS_DATA = [
  {
    id: 1,
    title: "The Best News in the World",
    subtitle: "Understanding the Gospel and Receiving a New Identity",
    stage: "gospel",
    opening: "Imagine a man who has been in a dark room his entire life. He has never seen sunlight, never felt warmth on his face. Then one day, someone opens the door. Light floods in. Everything changes — not because the man did anything, but because someone came for him. That is a picture of the gospel.",
    coreScriptures: [
      { ref: "Ephesians 2:8–9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." },
      { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come." },
      { ref: "John 1:12", text: "But to all who did receive him, who believed in his name, he gave the right to become children of God." },
      { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." }
    ],
    teaching: [
      { heading: "The Problem: Sin", body: "The Bible teaches that every human being has sinned — we have all thought, spoken, and acted in ways that violate God's perfect standard (Romans 3:23). Sin is not just doing bad things. It is a condition of the human heart. We were born into it. It separates us from God, and the consequence of sin is death — both physical and spiritual (Romans 6:23)." },
      { heading: "The Solution: Jesus Christ", body: "God did not leave us in our sin. Out of love, He sent His Son, Jesus Christ, to live the perfect life we could not live and to die the death we deserved. On the cross, Jesus took the full penalty for sin upon Himself. Three days later, He rose from the dead, proving that sin and death had been defeated (1 Corinthians 15:3–4)." },
      { heading: "The Response: Faith and Repentance", body: "Faith means trusting in Jesus — not just believing facts about Him, but depending on Him fully for your salvation. Repentance means turning away from sin and turning toward God. It is a change of mind that leads to a change of life." }
    ],
    identityTruths: [
      { label: "You are forgiven.", text: "Every sin — past, present, and future — has been paid for by the blood of Christ.", ref: "Colossians 1:13–14" },
      { label: "You are a new creation.", text: "God has not improved the old you. He has made you new from the inside out.", ref: "2 Corinthians 5:17" },
      { label: "You are a child of God.", text: "You have been adopted into God's family.", ref: "John 1:12; Romans 8:15–16" },
      { label: "You are free from condemnation.", text: "There is no guilt hanging over you. Christ has removed it.", ref: "Romans 8:1" }
    ],
    reflectionQuestions: [
      "In your own words, what is the gospel? Try to explain it as simply as you can.",
      "Look at the Religion vs. Gospel chart. Which 'religion' statement sounds most like how you have been thinking?",
      "Which identity truth (forgiven, new creation, child of God, free from condemnation) stands out most to you?",
      "If someone asked, 'What makes Christianity different from every other religion?' what would you say?"
    ],
    tool: {
      title: "Write Out the Gospel",
      steps: [
        "The Problem: What is sin, and why does it matter?",
        "The Solution: What did Jesus do about it?",
        "The Response: What does a person do with this news?",
        "The Result: What changes when someone believes?"
      ],
      note: "Keep this summary. You will use it again in Week 9."
    }
  },
  {
    id: 2,
    title: "Hearing God's Voice",
    subtitle: "How to Read, Understand, and Live the Bible",
    stage: "word",
    opening: "Imagine receiving a handwritten letter from the most important person in the world — written specifically with you in mind. You would not skim it. You would read it carefully, slowly, and probably more than once. The Bible is the living Word of the God who made you, saved you, and is transforming you.",
    coreScriptures: [
      { ref: "2 Timothy 3:16–17", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." },
      { ref: "Hebrews 4:12", text: "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart." },
      { ref: "Psalm 1:1–2", text: "Blessed is the man who walks not in the counsel of the wicked… but his delight is in the law of the LORD, and on his law he meditates day and night." }
    ],
    teaching: [
      { heading: "What is the Bible?", body: "The Bible is God's written revelation of Himself. It is sixty-six books, written over approximately 1,500 years by more than forty authors under the inspiration of the Holy Spirit. Despite this diversity, the Bible tells one unified story: God's plan to redeem a people for Himself through Jesus Christ." },
      { heading: "Old & New Testament", body: "The Old Testament (39 books) tells the story of creation, the fall, and God's covenant with Israel. It points forward to a coming Savior. The New Testament (27 books) records Jesus' life, death, and resurrection, the birth of the church, and instructions for believers until Christ returns." },
      { heading: "The Spiritual Discipline of Bible Reading", body: "Regular Bible reading is not optional. It is one of the primary spiritual disciplines — a practice through which God shapes you into the image of Christ. When you open Scripture, the Holy Spirit works through it to speak to your heart, expose sin, comfort pain, and direct your steps." },
      { heading: "Where to Start", body: "Start with the Gospel of John. It was written so that you 'may believe that Jesus is the Christ, the Son of God' (John 20:31). Read one chapter per day. Use HEAR as you go. Five minutes with a HEAR journal will shape you more than thirty minutes of unfocused reading." }
    ],
    reflectionQuestions: [
      "Have you tried reading the Bible before? What was your experience?",
      "Which part of HEAR — Highlight, Explain, Apply, or Respond — seems most challenging? Why?",
      "What makes it difficult for you to read the Bible consistently? What would help?",
      "Read Psalm 119:105. What does it look like to let God's Word be a 'lamp to your feet'?"
    ],
    tool: {
      title: "Begin the HEAR Journal — 7 Days in John",
      steps: [
        "Day 1: John 1",
        "Day 2: John 2",
        "Day 3: John 3",
        "Day 4: John 4",
        "Day 5: John 5",
        "Day 6: John 6",
        "Day 7: John 7"
      ],
      note: "For each day, write: H — the verse that stood out. E — what it means. A — how it applies. R — a prayer in response."
    }
  },
  {
    id: 3,
    title: "Learning to Talk with God",
    subtitle: "Prayer, the Holy Spirit, and the Disciplines That Shape You",
    stage: "prayer",
    opening: "Think about the closest relationship in your life. What makes it close? Regular, honest communication. When you became a Christian — or as you explore what that might mean — you entered a relationship with the living God. He has given you extraordinary gifts to sustain that relationship: prayer, the Holy Spirit, and the spiritual disciplines.",
    coreScriptures: [
      { ref: "Philippians 4:6–7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
      { ref: "Romans 8:26", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words." },
      { ref: "John 14:26", text: "But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you." }
    ],
    teaching: [
      { heading: "What is Prayer?", body: "Prayer is talking with God. It is not a ritual or a performance. It is a conversation between a child and a Father who loves to hear from you. God wants your honesty, not your eloquence." },
      { heading: "Praying the Bible", body: "One of the most transformative practices you can develop is learning to pray the Bible itself. Open a passage (the Psalms are best). Read slowly, one verse at a time. After each verse, pause and talk to God about what it says. When a verse does not prompt anything, move to the next." },
      { heading: "Who is the Holy Spirit?", body: "The Holy Spirit is not an impersonal force. He is the third Person of the Trinity — fully God. When you believed in Jesus, the Holy Spirit came to live inside you (Ephesians 1:13–14). He teaches you, convicts you, empowers you, intercedes for you, and produces fruit in you — love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control." }
    ],
    reflectionQuestions: [
      "Which part of the 4x4 Pattern — Reverence, Response, Requests, Readiness — comes most naturally? Which feels most unfamiliar?",
      "Have you ever tried praying the Bible? What sounds most helpful about this approach?",
      "Where are you relying on your own strength instead of the Spirit's power?",
      "Which spiritual discipline are you most drawn to explore? Why?"
    ],
    tool: {
      title: "Pray the Bible Daily — 7 Days in the Psalms",
      steps: [
        "Day 1: Psalm 23",
        "Day 2: Psalm 27",
        "Day 3: Psalm 34",
        "Day 4: Psalm 63",
        "Day 5: Psalm 103",
        "Day 6: Psalm 139",
        "Day 7: Psalm 145"
      ],
      note: "Each day, read the assigned psalm, HEAR it, then pray through it using the 4x4 Pattern."
    }
  },
  {
    id: 4,
    title: "You Were Made for Family",
    subtitle: "The Church, Biblical Community, and the Ordinances",
    stage: "community",
    opening: "A coal pulled from a fire will quickly grow cold. But surrounded by other coals, it stays hot. God did not design the Christian life to be lived in isolation. You were saved into a family.",
    coreScriptures: [
      { ref: "Acts 2:42", text: "And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers." },
      { ref: "Hebrews 10:24–25", text: "And let us consider how to stir one another up to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another." },
      { ref: "1 Corinthians 12:12", text: "For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ." }
    ],
    teaching: [
      { heading: "Why the Church Matters", body: "The church is not a building or a weekend service. It is the people of God — saved by Jesus and gathered to worship, grow, and serve. The Bible calls the church the 'body of Christ,' the 'household of God,' and the 'bride of Christ.' Belonging to a local church is not optional. It is part of following Him." },
      { heading: "What Biblical Community Looks Like", body: "Honesty — sharing what is really going on (James 5:16). Encouragement — speaking truth and hope into others' lives. Accountability — giving others permission to challenge you toward obedience (Proverbs 27:17). Sacrificial love — serving at cost to yourself (1 John 3:16–18)." },
      { heading: "Baptism: Your Public Declaration", body: "Baptism does not save you — faith in Christ does. But baptism is your public declaration that you have died with Christ and been raised to new life (Romans 6:3–4). When you go under the water, it symbolizes your old life buried with Jesus. When you come up, it symbolizes new life." },
      { heading: "Communion: Remembering What He Did", body: "On the night before He was crucified, Jesus took bread and said, 'This is my body, given for you. Do this in remembrance of me.' Communion is remembering His sacrifice, proclaiming the gospel, and examining your heart (1 Corinthians 11:26–28)." }
    ],
    reflectionQuestions: [
      "Are you connected to a local church? If not, what has held you back?",
      "What does biblical community look like in your life? What would you like it to look like?",
      "Have you been baptized since coming to faith? If not, what is keeping you?",
      "How does understanding communion's purpose change the way you approach it?"
    ],
    tool: {
      title: "Take One Step Toward Community",
      steps: [
        "If you are not part of a church, attend one this week and introduce yourself.",
        "If you attend a church, join a small group or invite someone to coffee.",
        "If you haven't been baptized, reach out to a pastor about taking that step."
      ],
      note: "Community starts with one decision to stop being invisible."
    }
  },
  {
    id: 5,
    title: "The God Who Walks with You Through Fire",
    subtitle: "Suffering, Trials, and the Faithfulness of God",
    stage: "suffering",
    opening: "Following Jesus does not mean your life will get easier. In some ways it may get harder. You may face misunderstanding, loss, or confusion. This is normal. It is not a sign that something has gone wrong. Suffering is part of the Christian life. And remarkably, God uses it.",
    coreScriptures: [
      { ref: "James 1:2–3", text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness." },
      { ref: "Romans 5:3–4", text: "Suffering produces endurance, and endurance produces character, and character produces hope." },
      { ref: "John 16:33", text: "In the world you will have tribulation. But take heart; I have overcome the world." },
      { ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." }
    ],
    teaching: [
      { heading: "Why Suffering Exists", body: "Suffering entered through sin. When Adam and Eve rejected God, the created order fractured (Genesis 3). But God entered this broken world. Jesus experienced hunger, rejection, betrayal, and death. He does not look at your suffering from a distance (Hebrews 4:15)." },
      { heading: "What God Does Through Suffering", body: "Suffering refines your faith. Suffering produces character — endurance, character, hope. Suffering draws you closer to God — in pain, you cling to God in ways you never would otherwise. Suffering equips you to comfort others — your pain becomes a resource for ministry." },
      { heading: "How to Endure", body: "Bring your pain to God honestly (the Psalms give permission to cry out). Stay anchored in the Word — when emotions are loud, let Scripture be louder. Lean into community — let others carry you when you cannot carry yourself. Fix your eyes on eternity." }
    ],
    reflectionQuestions: [
      "What has been the most difficult season of your life? Can you see any way God was at work?",
      "Which purpose of suffering speaks most to where you are right now?",
      "How does knowing Jesus suffered change the way you think about your own pain?",
      "What Scripture promise can you hold onto when life gets hard?"
    ],
    tool: {
      title: "A Psalm for Hard Days",
      steps: [
        "Day 1: Psalm 13",
        "Day 2: Psalm 23",
        "Day 3: Psalm 34",
        "Day 4: Psalm 42",
        "Day 5: Psalm 46",
        "Day 6: Psalm 91",
        "Day 7: Psalm 121"
      ],
      note: "Read one psalm per day. These were written in seasons of pain. HEAR them, then pray through them."
    }
  },
  {
    id: 6,
    title: "The War You're Already In",
    subtitle: "Sin, Temptation, and Spiritual Warfare",
    stage: "battle",
    opening: "Now that you belong to Christ, you may have noticed the fight has intensified. Old habits pull at you. You are in a war. Not because something is wrong with you, but because something is right. Greater is He who is in you than he who is in the world (1 John 4:4). You are fighting from a victory already won.",
    coreScriptures: [
      { ref: "1 Corinthians 10:13", text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape." },
      { ref: "Ephesians 6:12", text: "For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness." },
      { ref: "James 4:7", text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you." },
      { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." }
    ],
    teaching: [
      { heading: "The World", body: "The system of values operating apart from God. It pressures you to chase comfort, status, and pleasure (Romans 12:2; 1 John 2:15–17). The antidote is a renewed mind through Scripture." },
      { heading: "The Flesh", body: "Sinful desires that remain within you after salvation. You are new in Christ but not yet perfect (Galatians 5:17). You overcome by walking in the Spirit, confessing quickly, and replacing sinful habits with godly ones (Ephesians 4:22–24)." },
      { heading: "The Devil", body: "A real fallen angel whose primary weapon is deception (1 Peter 5:8). He lies about God, about you, and about sin. You resist by knowing and speaking Scripture — exactly as Jesus did in the wilderness (Matthew 4:1–11; James 4:7)." },
      { heading: "How to Fight", body: "Stay in the Word — it is your sword. Pray constantly. Confess quickly — sin grows in secrecy and dies in the light. Flee temptation — leave the room, delete the app, avoid the situation. Put on the armor of God — truth, righteousness, gospel, faith, salvation, the Word, and prayer (Ephesians 6:10–18)." },
      { heading: "When You Fall", body: "You will sin. When you do, you do not lose your salvation. First John 1:9 promises that confession restores fellowship immediately. Repentance is not a one-time event. It is a lifestyle. Every time you turn back to God, He is waiting — not with anger, but with grace." }
    ],
    reflectionQuestions: [
      "Which enemy — the world, the flesh, or the devil — do you most struggle with?",
      "Is there a specific sin you have been fighting? What has that battle looked like?",
      "Do you have someone you can confess sin to honestly? If not, who could that be?",
      "Read Ephesians 6:10–18. Which piece of armor do you most need this week?"
    ],
    tool: {
      title: "The Accountability Habit",
      steps: [
        "Where did you see God at work this week?",
        "Where did you struggle or sin this week?",
        "How can I pray for you?"
      ],
      note: "Ask one trusted believer to meet weekly for a brief check-in using these questions. Sin loses its power when it is brought into the light."
    }
  },
  {
    id: 7,
    title: "Open Hands",
    subtitle: "Generosity, Stewardship, and Living for What Lasts",
    stage: "stewardship",
    opening: "A child who has always been hungry hoards food when it appears. But when placed in a home where the table is always full, something shifts. The grip loosens. Generosity is not about having enough to give. It is about trusting the One who has given you everything.",
    coreScriptures: [
      { ref: "Psalm 24:1", text: "The earth is the LORD's and the fullness thereof, the world and those who dwell therein." },
      { ref: "Proverbs 3:9", text: "Honor the LORD with your wealth and with the firstfruits of all your produce." },
      { ref: "2 Corinthians 9:7", text: "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver." },
      { ref: "Matthew 6:21", text: "For where your treasure is, there your heart will be also." }
    ],
    teaching: [
      { heading: "Everything is God's", body: "You do not own anything. Psalm 24:1 declares everything belongs to God. You are a steward — someone who manages what belongs to another. The question becomes: 'How does God want me to use what He has entrusted to me?'" },
      { heading: "Principles of Generous Living", body: "Give first, not last — honor God with the firstfruits. Give cheerfully — generosity flows from gratitude, not obligation. Give sacrificially — generosity that costs nothing reveals little about your heart. Give to the church and those in need — support ministry and care for the poor. When you give, you are worshiping." }
    ],
    reflectionQuestions: [
      "How does the idea of stewardship change how you think about your possessions?",
      "Is your giving firstfruits or leftovers?",
      "Where do you notice anxiety about money? What does it reveal?",
      "Read Matthew 6:19–21. What earthly treasures are you tempted to cling to?"
    ],
    tool: {
      title: "A First Step in Giving",
      steps: [
        "Decide on an amount. Start with what requires trust.",
        "Give it first — before bills, before extras.",
        "Pray over it. Ask God to use it and grow your trust."
      ],
      note: "The goal is not a number — it is a heart that holds everything with open hands."
    }
  },
  {
    id: 8,
    title: "Built to Serve",
    subtitle: "Discovering and Using Your Spiritual Gifts",
    stage: "gifts",
    opening: "When a baby is born, every part exists to serve the whole body. When you were born again, God gave you gifts — Spirit-empowered abilities — not for your personal benefit alone, but for the building up of the body of Christ. You are not a spectator. You are equipped for a role no one else can fill.",
    coreScriptures: [
      { ref: "1 Peter 4:10", text: "As each has received a gift, use it to serve one another, as good stewards of God's varied grace." },
      { ref: "Romans 12:6", text: "Having gifts that differ according to the grace given to us, let us use them." },
      { ref: "1 Corinthians 12:18", text: "God arranged the members in the body, each one of them, as he chose." }
    ],
    teaching: [
      { heading: "What Are Spiritual Gifts?", body: "Abilities given by the Holy Spirit for serving others and building up the church. The NT lists include teaching, serving, encouraging, giving, leading, mercy, hospitality, wisdom, faith, administration, evangelism, and shepherding (Romans 12:6–8; 1 Corinthians 12:4–11; Ephesians 4:11–13). Every gift matters. No gift is more important than another." },
      { heading: "How to Discover Your Gifts", body: "Serve in various ways — pay attention to where you feel energized, effective, and fruitful. Listen to the body — others often recognize your gifts before you do. Pray and ask God — the Spirit wants you to discover and use them." },
      { heading: "Gifts Without Character", body: "Paul's chapter on love (1 Corinthians 13) sits right in the middle of his teaching on gifts. Love is the context. Gifting without character produces chaos. Character without gifting produces passivity. God wants both." }
    ],
    reflectionQuestions: [
      "Has anyone ever told you that you are gifted at something? What was it?",
      "Where do you think your gifts might lie? What clues have you noticed?",
      "Is there an area of service you have been avoiding? What would it look like to step in?",
      "Read 1 Corinthians 13:1–3. Why is love more important than gifting?"
    ],
    tool: {
      title: "Serve Somewhere New",
      steps: [
        "Volunteer for a task at church you have never tried.",
        "Reach out to someone who needs encouragement.",
        "Ask a leader: 'Where is there a need I could help with?'"
      ],
      note: "After serving, ask: Did this energize me? Did God work through it? Did others affirm it?"
    }
  },
  {
    id: 9,
    title: "Now Go",
    subtitle: "Making Disciples and the Life That Lies Ahead",
    stage: "mission",
    opening: "For eight weeks, the question has been, 'How do I grow?' That question never stops. But a new question now joins it: 'Who else can I help grow?' Jesus did not save you to be a consumer. He saved you to participate in His mission: make disciples.",
    coreScriptures: [
      { ref: "Matthew 28:18–20", text: "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age." },
      { ref: "2 Timothy 2:2", text: "And what you have heard from me in the presence of many witnesses, entrust to faithful people who will be able to teach others also." },
      { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." }
    ],
    teaching: [
      { heading: "What is a Disciple?", body: "A follower and learner of Jesus who is being transformed by Him and helping others do the same. Discipleship is not complete until it is reproduced. A disciple who never helps someone else follow Jesus is like a river with no outlet." },
      { heading: "The Great Commission", body: "It is backed by authority — 'All authority in heaven and on earth has been given to me.' It is clear in method — 'Make disciples' is the command. Baptizing and teaching are the means. It comes with a promise — 'I am with you always.' He goes with you." },
      { heading: "You Are Ready", body: "You already have everything you need: Your testimony — no one can argue with your story. Your gospel summary — the framework you wrote in Week 1. This guide — everything you have learned is something you can walk someone else through." },
      { heading: "How to Start", body: "Pray for opportunities. Share your story. Invite someone to walk with you — offer to go through this guide with a new believer or seeker. Keep growing yourself. The best disciplemakers are still being discipled." }
    ],
    reflectionQuestions: [
      "Who in your life does not yet know Jesus? Write their names and begin praying.",
      "What would you say if someone asked, 'Why did you become a Christian?'",
      "Is there someone you could walk through this guide with? Who?",
      "Looking back, what is the most significant thing God has shown you?"
    ],
    tool: {
      title: "Share What You've Received",
      steps: [
        "Share your testimony with one person who does not yet follow Jesus.",
        "Offer to walk through this guide with a new believer or seeker.",
        "Write a prayer committing yourself to a lifestyle of making disciples."
      ],
      note: "This is not the end. This is the beginning."
    }
  },
  {
    id: 10,
    title: "Sharing the Gospel Faithfully",
    subtitle: "Four Practical Approaches for Every Conversation",
    stage: "evangelism",
    opening: "Most Christians genuinely want to tell others about Jesus. What stops them is not a lack of love — it is a lack of language. They don't know how to start, what to say, or how to explain it clearly. This week is about solving that problem. The gospel never changes. But your approach should wisely adapt to the person in front of you.",
    coreScriptures: [
      { ref: "Romans 1:16", text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek." },
      { ref: "Colossians 4:5–6", text: "Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person." },
      { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." },
      { ref: "1 Corinthians 3:6–7", text: "I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth." }
    ],
    teaching: [
      { heading: "Why Gospel Tools Matter", body: "Most Christians struggle with evangelism not because they don't care, but because they fear rejection, feel unprepared, or can't explain the gospel clearly. A gospel tool is not a sales pitch or a memorized script — it is simply a framework that helps you explain the gospel faithfully. We don't trust methods to save people. We trust the Holy Spirit working through the gospel (Romans 1:16)." },
      { heading: "The Core Never Changes", body: "Before learning any approach, know the non-negotiables. Every faithful gospel presentation must include: God is holy and worthy of worship. Humanity has sinned and stands guilty. Jesus lived perfectly, died for sin, and rose again. People must repent and place their faith in Him. The approach may change. The message cannot." },
      { heading: "Different People Need Different Starting Points", body: "Jesus and the apostles adjusted their approach without changing the gospel. In Acts 13, Paul starts with Israel's history. In Acts 17, he starts with creation and worldview. Same gospel — different entry point. A religious person may need to start with self-righteousness. A hurting person may need to start with brokenness and hope. A skeptic may need worldview questions. A biblically illiterate person needs the whole story." },
      { heading: "Wisdom for Real Conversations", body: "Ask questions before launching in — Jesus asked questions first. Listen carefully to discern worldview, pain, and spiritual openness. Avoid Christian jargon; explain words like grace, sin, and repentance. Keep Jesus central — don't reduce Christianity to morality or self-help. Always move toward an invitation: 'Would you like to trust Christ?' Remember: you are not responsible for saving anyone. The Holy Spirit convicts. God gives the growth." }
    ],
    reflectionQuestions: [
      "Which of the four tools feels most natural to you — and why?",
      "Think of someone in your life who doesn't know Jesus. Which tool fits them best?",
      "What has been the hardest part of gospel conversations for you — starting, explaining, or asking for a response?",
      "Read Colossians 4:5–6. What does it mean for your speech to be 'seasoned with salt'?"
    ],
    tool: {
      title: "Practice the Four Tools",
      steps: [
        "Romans Road — for someone with church background or who respects Scripture.",
        "Three Circles — for casual, conversational settings. Draw it on a napkin.",
        "Personal Testimony — when trust is built. Always point back to Jesus.",
        "Creation to Christ — for someone with no biblical background at all."
      ],
      note: "This week: pick one person and one tool. Have the conversation. You are not responsible for saving them — you are responsible for being faithful."
    }
  }
];

const QUICK_TOOLS = {
  gospel: {
    title: "The Gospel Framework",
    subtitle: "Problem → Solution → Response → Result",
    icon: "cross",
    content: [
      { label: "THE PROBLEM", text: "Every human being has sinned — rebelled against God. The consequence is death — spiritual separation from God.", scripture: "Romans 3:23; Romans 6:23" },
      { label: "THE SOLUTION", text: "God sent Jesus. He lived the perfect life we couldn't, died the death we deserved, and rose again. Sin and death were defeated.", scripture: "1 Corinthians 15:3–4" },
      { label: "THE RESPONSE", text: "Repent and believe. Turn from running your own life. Trust — put your full weight on Jesus and what He did.", scripture: "Acts 3:19; Ephesians 2:8–9" },
      { label: "THE RESULT", text: "Forgiven. New creation. Child of God. Free from condemnation.", scripture: "Colossians 1:13–14; 2 Cor 5:17; John 1:12; Romans 8:1" }
    ]
  },
  hear: {
    title: "HEAR Journaling Method",
    subtitle: "Bible Reading Tool (Week 2)",
    icon: "book",
    content: [
      { label: "H — HIGHLIGHT", text: "After reading a passage, identify one or two verses that stand out. Write them down. This is the verse the Holy Spirit is drawing your attention to." },
      { label: "E — EXPLAIN", text: "In your own words, explain what this verse means in context. Who is writing? Who is the audience? What does this say about God, about people, or about the gospel?" },
      { label: "A — APPLY", text: "How does this truth apply to your life right now? Is there something to believe, obey, repent of, or thank God for? Be specific." },
      { label: "R — RESPOND", text: "Write a short prayer to God in response. Thank Him, confess to Him, ask for help, or surrender an area of your life." }
    ]
  },
  prayer: {
    title: "The 4x4 Prayer Pattern",
    subtitle: "Four Directions of Prayer (Week 3)",
    icon: "pray",
    content: [
      { label: "1. REVERENCE (Upward)", text: "Praise God for who He is and what He has done. This is where prayer begins — not with your needs, but with His nature. Let Scripture fuel your praise.", scripture: "Psalm 145:3; Psalm 100:4–5" },
      { label: "2. RESPONSE (Downward)", text: "Respond to who God is in repentance, obedience, and reliance on the Holy Spirit. After praising God, let His character expose where your life does not align. Confess sin. Surrender control.", scripture: "1 John 1:9; Galatians 5:16" },
      { label: "3. REQUESTS (Inward)", text: "Ask God for the relationships and resources you need. Bring your needs, desires, fears, and struggles before Him — not because He doesn't know, but because He wants you to depend on Him.", scripture: "Philippians 4:6–7; Matthew 7:7–8" },
      { label: "4. READINESS (Outward)", text: "Ask God to empower and equip you for discipleship and mission to reach every man, woman, and child. Pray for the lost by name. Pray for your church, the nations, and for boldness.", scripture: "Acts 1:8; Colossians 4:2–4" }
    ]
  },
  religionVsGospel: {
    title: "Religion vs. The Gospel",
    subtitle: "From Week 1",
    icon: "contrast",
    content: [
      { religion: "I obey, therefore I am accepted.", gospel: "I am accepted, therefore I obey." },
      { religion: "Motivation is based on fear and insecurity.", gospel: "Motivation is based on grateful joy." },
      { religion: "I obey God to get things from God.", gospel: "I obey God to get God — to delight in and resemble Him." },
      { religion: "When circumstances go wrong, I am angry at God or myself.", gospel: "When circumstances go wrong, I grieve but trust God's good purposes." },
      { religion: "When I am criticized, I am furious or devastated.", gospel: "When I am criticized, I examine myself but rest in God's approval." },
      { religion: "My self-worth is based on my performance.", gospel: "My self-worth is based on Christ's work for me." },
      { religion: "My identity is built on what I do.", gospel: "My identity is built on what Christ has done." },
      { religion: "Sin is breaking the rules.", gospel: "Sin is failing to love God and love others." },
      { religion: "Prayer is a duty.", gospel: "Prayer is a privilege." },
      { religion: "When I sin, I hide from God in shame.", gospel: "When I sin, I run to God for grace." },
      { religion: "I look down on those who do not measure up.", gospel: "I am humbled, because I am saved by grace alone." }
    ]
  },
  mature: {
    title: "M.A.T.U.R.E. Framework",
    subtitle: "Marks of a Maturing Believer",
    icon: "framework",
    content: [
      { letter: "M", label: "Makes Disciples", text: "A growing believer helps others know and follow Jesus.", scripture: "Matthew 28:19–20" },
      { letter: "A", label: "Abides in the Word", text: "A growing believer reads, understands, and obeys God's Word.", scripture: "Psalm 1:1–3; John 15:7" },
      { letter: "T", label: "Treasures Community", text: "A growing believer is committed to the local church.", scripture: "Hebrews 10:24–25; Acts 2:42–47" },
      { letter: "U", label: "Uses Their Gifts", text: "A growing believer serves others with Spirit-given abilities.", scripture: "1 Peter 4:10; Romans 12:4–8" },
      { letter: "R", label: "Relies on the Holy Spirit", text: "A growing believer depends on the Spirit for power and transformation.", scripture: "Galatians 5:16–25" },
      { letter: "E", label: "Embraces Accountability", text: "A growing believer invites correction and lives transparently.", scripture: "Proverbs 27:17; James 5:16" }
    ]
  },
  disciplines: {
    title: "Spiritual Disciplines",
    subtitle: "Practices the Spirit Uses (Week 3)",
    icon: "sparkle",
    content: [
      { label: "BIBLE READING & MEDITATION", text: "Slow, prayerful reading of Scripture — letting it shape your mind and heart.", scripture: "Psalm 1:2; Joshua 1:8" },
      { label: "PRAYER", text: "Adoration, confession, supplication, intercession — conversation with God.", scripture: "Philippians 4:6–7" },
      { label: "FASTING", text: "Voluntarily going without food to focus on God.", scripture: "Matthew 6:16–18" },
      { label: "FELLOWSHIP", text: "Gathering with believers for worship and accountability.", scripture: "Hebrews 10:24–25" },
      { label: "GIVING", text: "Stewarding resources generously as worship.", scripture: "2 Corinthians 9:7" },
      { label: "SOLITUDE & SILENCE", text: "Withdrawing from noise to be alone with God.", scripture: "Mark 1:35; Luke 5:16" },
      { label: "WORSHIP", text: "Declaring God's worth through song, obedience, and a surrendered life.", scripture: "Romans 12:1–2" }
    ]
  },
  accountability: {
    title: "Accountability Check-In",
    subtitle: "Three Weekly Questions (Week 6)",
    icon: "users",
    content: [
      { label: "1. WHERE DID YOU SEE GOD AT WORK?", text: "Look for the places — big or small — where God showed up this week. Train your eyes to notice His hand." },
      { label: "2. WHERE DID YOU STRUGGLE OR SIN?", text: "Be honest. Bring it into the light. Sin grows in secrecy and dies in the light." },
      { label: "3. HOW CAN I PRAY FOR YOU?", text: "Don't just listen — carry each other's burdens to God this week." }
    ]
  },
  romansRoad: {
    title: "Romans Road",
    subtitle: "Scripture-centered gospel clarity",
    icon: "scripture",
    kind: "gospel-tool",
    bestFor: "Someone with church background or who respects the Bible. Anchors the conversation directly in Scripture.",
    emphasis: "Sin, grace, substitution, salvation by faith",
    flow: ["All have sinned", "Sin's wage is death", "Christ died for us", "Confess & believe", "Call on His name"],
    verses: [
      { ref: "Romans 3:23", text: "For all have sinned and fall short of the glory of God." },
      { ref: "Romans 6:23", text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord." },
      { ref: "Romans 5:8", text: "But God shows his love for us in that while we were still sinners, Christ died for us." },
      { ref: "Romans 10:9–10", text: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved." },
      { ref: "Romans 10:13", text: "For everyone who calls on the name of the Lord will be saved." }
    ],
    transitionQuestions: [
      "Do you think people are basically good?",
      "What do you think separates people from God?"
    ],
    summary: "The Bible says all of us have sinned against God, but Jesus died in our place so we could be forgiven and reconciled to God through faith in Him.",
    strengths: ["Scripture-centered", "Easy to memorize", "Strong theological clarity", "Great discipleship tool"],
    watchFor: ["Can feel mechanical if recited without warmth", "Assumes some biblical familiarity"],
    content: []
  },
  threeCircles: {
    title: "Three Circles",
    subtitle: "Conversational & visual gospel sharing",
    icon: "target",
    kind: "gospel-tool",
    bestFor: "Post-Christian or secular conversations. Draw it on a napkin — works anywhere.",
    emphasis: "Human brokenness and restoration in Christ",
    flow: ["God's Plan", "Brokenness enters", "The Gospel", "Repent & Believe", "Recovery & Pursuit"],
    flowDetails: [
      "God created everything good. Humanity was made for relationship with Him — to live fully in His design.",
      "Sin pulled us away from God's design. The result is brokenness — in us, in our relationships, in the world.",
      "Jesus lived perfectly, died for our sin, and rose again. He is the only way back to the life we were made for.",
      "Turn from sin and self. Trust in Jesus as Lord and Savior. This is how we receive what He did.",
      "Life restored to God's design. We follow Jesus, pursue His plan, and help others find their way back too."
    ],
    transitionQuestions: [
      "Do you think the world is the way it's supposed to be?",
      "Where do you think all this brokenness comes from?"
    ],
    summary: "God designed life for flourishing. Sin broke everything — in the world and in us. Jesus is the only way back to the life we were made for.",
    strengths: ["Visual and interactive", "Easy conversation starter", "Connects with everyday struggles", "Natural in secular settings"],
    watchFor: ["Can become shallow if disconnected from Scripture", "Always explain the cross — don't just describe the circles"],
    content: []
  },
  testimony: {
    title: "Personal Testimony",
    subtitle: "Authentic, relational gospel witness",
    icon: "quote",
    kind: "gospel-tool",
    bestFor: "Relational evangelism — when trust has been built over time. A story opens doors that arguments can't.",
    emphasis: "The gospel's power made visible in a real life",
    flow: ["Life before Christ", "Encountering Christ", "Life after Christ"],
    flowDetails: [
      "Who were you before? What was your life like without Christ — what was empty, broken, or missing? Keep it honest and real, not dramatic.",
      "How did God get your attention? What did you hear or see? What moved your heart and changed your mind about Jesus?",
      "What is different now? What has Jesus changed in you? What hope do you have today that you didn't have before?"
    ],
    transitionQuestions: [
      "Can I tell you what changed for me?",
      "Has anyone ever explained to you what the gospel actually is?"
    ],
    summary: "A testimony opens the door — but the gospel must still be explained. Your story is evidence. Christ is the message.",
    strengths: ["Relational and authentic", "Hard to argue with", "Builds trust", "Personal and specific"],
    watchFor: ["Don't make it self-centered — point to Jesus constantly", "A testimony alone is not the gospel — always explain what Christ did"],
    content: []
  },
  creationToChrist: {
    title: "Creation to Christ",
    subtitle: "The whole story for the whole person",
    icon: "sparkle",
    kind: "gospel-tool",
    bestFor: "People with little or no biblical background who need context before the cross can make sense.",
    emphasis: "The gospel as the true story of the world",
    flow: ["Creation", "The Fall", "Sin & Brokenness", "God's Promise", "Jesus", "Cross & Resurrection", "Repentance & Faith", "Restoration"],
    flowDetails: [
      "God made everything good. Humanity was made in His image, for relationship with Him and life in His world.",
      "Adam and Eve chose their own way over God's. Sin entered and broke everything — the world, relationships, us.",
      "Every person since has sinned and fallen short. The world is not the way it's supposed to be. We all feel this.",
      "God didn't abandon us. He promised a Rescuer — a seed who would crush evil and restore what sin had broken.",
      "God kept His promise. Jesus came — fully God, fully human — to do what no one else could do.",
      "Jesus died on the cross for our sin. Three days later He rose, defeating death and proving His victory.",
      "God's call to every person: turn from sin and self, and place your complete trust in Jesus.",
      "In Christ, we are being restored now — and will be fully restored when He returns to make all things new."
    ],
    transitionQuestions: [
      "What do you think humanity was created for?",
      "Why do you think evil and suffering exist?"
    ],
    summary: "People cannot understand the good news unless they understand the story it belongs to. Start at the beginning — and let the whole story lead to Jesus.",
    strengths: ["Gives biblical context", "Great for secular culture", "Explains why Jesus matters", "Addresses suffering and brokenness naturally"],
    watchFor: ["Requires more time — plan for a longer conversation", "Don't get lost in the story; always arrive at the cross"],
    content: []
  },
  shifts: {
    title: "The 3 Shifts",
    subtitle: "Opening doors for the gospel",
    icon: "change",
    kind: "shifts-tool",
    intro: "Trust the Spirit. Conversations move through stages as He opens doors. Each shift is a moment to discern whether He is inviting you to go deeper.",
    stages: [
      {
        letter: "S",
        title: "Surface",
        headline: "Where conversations begin",
        body: "Most conversations start here — family, jobs, hobbies, education, what people enjoy. Listen well. Learn their world.",
        examples: ["Family & relationships", "Work & school", "Hobbies & interests"]
      },
      {
        letter: "S",
        title: "Serious",
        headline: "When life cracks open",
        body: "A conversation turns serious when someone shares a struggle, sickness, challenge, or hurt. Anything that highlights the brokenness of life is an open door.",
        examples: ["A struggle they're facing", "Sickness or grief", "Doubt or disillusionment"],
        shiftLabel: "Listen for brokenness"
      },
      {
        letter: "S",
        title: "Spiritual",
        headline: "Beliefs & values surface",
        body: "Spiritual conversations explore what people actually believe and the values they live by. This is usually an open door to share the gospel.",
        examples: ["What they believe about God", "Where they place their hope", "How they understand purpose"],
        shiftLabel: "Ask about belief"
      },
      {
        letter: "S",
        title: "Share Gospel",
        headline: "Connect their story to His",
        body: "Once you discern an open door, connect their story to the Gospel. Walk them through the bad news, good news, and the response God invites.",
        examples: ["Use the 3 Circles", "Share your testimony", "Speak the bad news / good news / response"],
        shiftLabel: "Connect to Christ",
        final: true
      }
    ],
    closing: {
      ref: "Acts 17:27",
      text: "He did this so that they might seek God, and perhaps they might reach out and find him, though he is not far from each one of us."
    },
    content: []
  },
  signals: {
    title: "The 3 Signals",
    subtitle: "Discerning their response",
    icon: "target",
    kind: "signals-tool",
    intro: "After you share the gospel, the Spirit gives signals. Read where the person is, and take the next faithful step.",
    signals: [
      {
        key: "ready",
        color: "#4CAF50",
        soft: "rgba(76, 175, 80, 0.10)",
        label: "Ready",
        headline: "Ready to receive",
        body: "The person is ready to receive the gift of salvation. Walk them through repentance, belief, and confession. Pray with them. Begin discipleship immediately.",
        actions: [
          "Lead them in prayer",
          "Plan their next step (baptism, study, community)",
          "Begin the Foundations Guide together"
        ]
      },
      {
        key: "open",
        color: "#F2B53D",
        soft: "rgba(242, 181, 61, 0.12)",
        label: "Open",
        headline: "Not yet — but open",
        body: "The person is NOT ready to receive the gift of salvation, but IS open to continuing the conversation and even reading the Bible with you. Keep showing up.",
        actions: [
          "Schedule the next conversation",
          "Offer to read a Gospel together",
          "Invite them into your life & community"
        ]
      },
      {
        key: "rejected",
        color: "#D55757",
        soft: "rgba(213, 87, 87, 0.10)",
        label: "Rejected",
        headline: "Rejected the gift",
        body: "The person has rejected the gift of salvation. Bless them, dust your feet off, and find another stranger of God. Keep praying for them — God can still move.",
        actions: [
          "Bless them, don't argue",
          "Pray for them long after",
          "Be available if they return"
        ]
      }
    ],
    content: []
  }
};

// Make available globally
Object.assign(window, { WEEKS_DATA, QUICK_TOOLS });
