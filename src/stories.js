// 人物对白与说书人串词为原创情境化表达，并非史料中的人物原话。
// quote: true 的句子与 src/figures.js 中的作品原句一致；史实介绍以 figures.js 所列资料为边界。
export const stories = {
  'qu-yuan': {
    chapters: [
      {
        title: '朝堂上的逆风', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '战国的楚国，朝堂上每天都有大事。屈原关心的，是这个国家往哪里走。' },
          { speaker: 'person', text: '把理想写在奏议里，当然希望有人认真读完。' },
          { speaker: 'narrator', text: '可他的主张没有一直被采纳，人与理想都被推到了朝堂边缘。' },
          { speaker: 'person', text: '位置可以被挪走，心里那把尺却不能随手折了。' },
          { speaker: 'narrator', text: '现实给他出了一道难题：想做的事做不成，要不要连想法也一起放下？' },
        ],
      },
      {
        title: '把心事写成远行', label: '代表作品',
        lines: [
          { speaker: 'person', text: '纸上倒还有路。香草、美人、神话里的远方，都可以陪我继续找答案。' },
          { speaker: 'narrator', text: '于是，《离骚》把个人失意写成一场想象力十足的天地之行。诗人像在赶路，问题却一直在心里。' },
          { speaker: 'narrator', text: '路曼曼其修远兮，吾将上下而求索。', quote: true },
          { speaker: 'person', text: '这条路确实不短。要是有导航，大概也只会显示：继续求索。' },
        ],
      },
      {
        title: '求索还在继续', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '后来的读者记住的，不只是一个遭遇失意的人，也是一种不肯轻易停下的姿态。' },
          { type: 'choice', prompt: '走到这里，你想对他说什么？', options: [
            { label: '路还长，继续走。', reply: '那就同行一程。未知的路，总得有人先迈步。' },
            { label: '先歇一下也可以。', reply: '好。看清来路，再决定下一步往哪里去。' },
          ] },
          { speaker: 'person', text: '诗不替人解开所有难题；它至少能把心里的问题，清清楚楚地说出来。' },
          { speaker: 'narrator', text: '读《离骚》，不妨先跟着那些奇异意象走一段，再回头看诗里始终不变的坚持。' },
          { speaker: 'narrator', text: '“求索”这两个字，隔了很多年，依旧像一盏没有熄的灯。' },
        ],
      },
    ],
    summary: '政治理想未能一直被采纳，屈原却把坚持与失意写进《离骚》。奇丽想象的背后，是一条仍在延伸的求索之路。',
  },

  'sima-qian': {
    chapters: [
      {
        title: '接过父亲的笔', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '西汉，司马迁继承父亲的史官事业。摆在眼前的不是一本薄册子，而是一整段需要梳理的历史。' },
          { speaker: 'person', text: '名字那么多，事情那么杂；要是只记年份，人物怕是要从纸上打瞌睡。' },
          { speaker: 'narrator', text: '后来，他的人生遭遇重大屈辱。继续写，成了一件格外艰难的事。' },
          { speaker: 'person', text: '笔有时重得像石头。但写到一半的故事，不能就这样没了下文。' },
          { speaker: 'narrator', text: '他最终选择把书完成。这个决定，和书里的许多人物一样，值得慢慢读。' },
        ],
      },
      {
        title: '《史记》中的人', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《史记》用本纪、表、书、世家、列传等体例整理历史。它讲大势，也让一个个具体的人站出来。' },
          { speaker: 'person', text: '帝王也会判断失误，普通人的选择也能牵动局面。历史不是只有一个主角。' },
          { speaker: 'narrator', text: '人固有一死，或重于泰山，或轻于鸿毛。', quote: true },
          { speaker: 'narrator', text: '这句出自《报任少卿书》。它讲的是司马迁怎样看待生命的价值，并非《史记》的开场白。' },
        ],
      },
      {
        title: '读历史，也读人', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '翻开《史记》，你会遇到不肯按“好人”“坏人”两格整齐排队的人物。' },
          { type: 'choice', prompt: '如果你也要写一页历史，会先记下什么？', options: [
            { label: '改变局势的大事。', reply: '大事要记。也别忘了问：是谁做了那个决定？' },
            { label: '人物当时的选择。', reply: '好。选择背后有处境，处境背后又有时代。' },
          ] },
          { speaker: 'person', text: '写人，不能只写结局。路口在哪里，他们又为什么往那边走？' },
          { speaker: 'narrator', text: '这也是《史记》至今动人的地方：它给历史留下结构，也给人物留下复杂性。' },
          { speaker: 'narrator', text: '读一篇列传，再问一句“如果身在其中，我会怎样”，纸上的年代便近了一些。' },
        ],
      },
    ],
    summary: '司马迁承接史官事业，在人生重创后完成《史记》。他用宏大的结构容纳具体的人，让历史既能被梳理，也能被体会。',
  },

  'tao-yuanming': {
    chapters: [
      {
        title: '从官场到田园', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '陶渊明做过官，后来归隐田园。换个生活场景，远不只是换一张背景图。' },
          { speaker: 'person', text: '这里没有替我整理好的日子。田要种，生活也要自己过。' },
          { speaker: 'narrator', text: '田园有清贫与劳作，并非永远微风正好、酒杯自动斟满。' },
          { speaker: 'person', text: '慢一些，不等于什么都不做；只是把脚步放回自己认得的路上。' },
          { speaker: 'narrator', text: '这个选择的难处，藏在他的平静里。' },
        ],
      },
      {
        title: '东篱边的一抬头', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《饮酒》是一组诗。第五首里，他从喧闹与心境谈起，写到东篱和南山。' },
          { speaker: 'narrator', text: '采菊东篱下，悠然见南山。', quote: true },
          { speaker: 'person', text: '我原在采菊，山却自己来到眼前。倒也省了专程去寻风景。' },
          { speaker: 'narrator', text: '妙就妙在“见”：并非安排好的一次观景，而是日常里忽然出现的开阔。' },
        ],
      },
      {
        title: '把日子写成诗', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '后来许多人向往他的田园，也许真正被打动的，是他对生活节奏的选择。' },
          { type: 'choice', prompt: '若有一个清闲下午，你会怎么过？', options: [
            { label: '去看一眼真正的山。', reply: '好。若路远，窗外一片云也值得抬头看看。' },
            { label: '先把手边的事做好。', reply: '这也很好。日常的工夫，原本就不是诗的反面。' },
          ] },
          { speaker: 'person', text: '不必把田园想得完美。能认真过眼前的日子，就已经有了几分诗意。' },
          { speaker: 'narrator', text: '田园诗在这里既有风景，也有选择的重量。' },
          { speaker: 'narrator', text: '下一次读到“见南山”，不妨停一秒：你今天偶然看见了什么？' },
        ],
      },
    ],
    summary: '陶渊明离开官场，选择有劳作也有清贫的田园。《饮酒·其五》把自然与心境放在同一幅画中，让日常成为诗。',
  },

  'li-bai': {
    chapters: [
      {
        title: '盛唐的开阔想象', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '盛唐诗坛，李白一出场，山水、月亮和酒杯都像被调亮了几分。' },
          { speaker: 'person', text: '山还是那座山。只是看它时，心里不妨给它多留一点空间。' },
          { speaker: 'narrator', text: '他的诗有飞扬的自信，也有理想不易实现时的感慨。响亮与惆怅，经常坐在同一桌。' },
          { speaker: 'person', text: '人有不顺意的时候，总不能连想象也跟着缩小吧？' },
          { speaker: 'narrator', text: '于是，眼前景物成了诗歌的起点，接下来走到哪里，常常让读者猜不到。' },
        ],
      },
      {
        title: '《将进酒》的两种声音', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '读《将进酒》，先听见奔放的节奏；再听一会儿，会发现对人生短暂的感触也在其中。' },
          { speaker: 'narrator', text: '天生我材必有用，千金散尽还复来。', quote: true },
          { speaker: 'person', text: '把声音放大，并不代表心里没有难题。只是先请难题别挡住整片天空。' },
          { speaker: 'narrator', text: '这份豪迈不是单一表情。诗的张力，恰恰来自自信与忧思并存。' },
        ],
      },
      {
        title: '给世界多一层光', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '李白教人从熟悉的景物里看见意想不到的尺度。瀑布是水，也能在诗里像银河。' },
          { type: 'choice', prompt: '此刻要为风景写一句，你想先抓住什么？', options: [
            { label: '眼前最真实的细节。', reply: '很好。看准细节，想象才有落脚的地方。' },
            { label: '脑海里最大胆的比喻。', reply: '也好。先让它飞起来，回头再问它从哪里出发。' },
          ] },
          { speaker: 'person', text: '若一句诗能让人重新抬头看月亮，便不算白写。' },
          { speaker: 'narrator', text: '读他的豪放，别忘了在喧闹处听见那些细微的迟疑。' },
          { speaker: 'narrator', text: '诗的气势可以很大，落脚处仍是一个人在面对自己的人生。' },
        ],
      },
    ],
    summary: '李白以跳跃开阔的想象写山水、月与人生。《将进酒》的豪迈里也有忧思；两种声音一起，才是这首诗的力量。',
  },

  'du-fu': {
    chapters: [
      {
        title: '乱世里看见人', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '安史之乱改变了许多人的生活。杜甫也在战乱中辗转，所见不再只是纸上的“大时代”。' },
          { speaker: 'person', text: '说到战乱，若只写一个年份，许多人就从字里消失了。' },
          { speaker: 'narrator', text: '家书、饥饿、屋漏、孩子——那些具体的难处，被他认真放进诗里。' },
          { speaker: 'person', text: '我想记住的不只是乱世有多重，还有身在其中的人怎样挨过一天。' },
          { speaker: 'narrator', text: '他的诗常令人心沉下来，因为它没有轻易替现实加上一层柔光。' },
        ],
      },
      {
        title: '《春望》的静与痛', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《春望》把国家与家庭的忧思放在一起。春天本该热闹，眼前却是另一番景象。' },
          { speaker: 'narrator', text: '国破山河在，城春草木深。', quote: true },
          { speaker: 'person', text: '山河还在，城里的草木也照常生长。偏偏这“照常”，让失去的东西更清楚。' },
          { speaker: 'narrator', text: '短短十个字没有急着喊出悲伤，反差却让人停在原地。' },
        ],
      },
      {
        title: '诗替时代留声', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '杜甫让宏大的历史有了人的温度，也让个人处境走进时代的记录。' },
          { type: 'choice', prompt: '读到沉重的诗，你会怎样继续？', options: [
            { label: '慢一些，先读懂眼前的人。', reply: '慢读很好。诗里每个小细节，都有人在生活。' },
            { label: '先记下那句最震动我的。', reply: '也好。一句诗有时就是重新走近整段故事的门。' },
          ] },
          { speaker: 'person', text: '若读者肯在字间稍停片刻，那些人的遭遇便不会轻易被略过去。' },
          { speaker: 'narrator', text: '他的诗能流传，不只是因为它记下苦难，也因为它始终认真看着人。' },
          { speaker: 'narrator', text: '读完后，试着问一句：这首诗里除了诗人，还有谁？' },
        ],
      },
    ],
    summary: '杜甫经历战乱，诗中既有时代动荡，也有普通人的具体生活。《春望》的静景之下，是家国难分的忧思。',
  },

  'wang-anshi': {
    chapters: [
      {
        title: '两种难题', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '北宋的王安石推动变法。朝堂上的问题规模很大，常常不是一两句就能说清。' },
          { speaker: 'person', text: '若有些事确实需要改变，总要有人把难题摊开来谈。' },
          { speaker: 'narrator', text: '而离开朝堂，他也写诗。制度与心情，在同一个人的笔下并不冲突。' },
          { speaker: 'person', text: '白天想的是如何做事，夜里看见明月，也会想起家。' },
          { speaker: 'narrator', text: '从历史书中的改革者，走到诗句里的旅人，这个转身很近，也很真实。' },
        ],
      },
      {
        title: '一首诗，四幅景', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《泊船瓜洲》只有四句，江水、山峦、春风、明月依次入画。' },
          { speaker: 'person', text: '景色都到齐了，心里却还留着一个问题。' },
          { speaker: 'narrator', text: '明月何时照我还。', quote: true },
          { speaker: 'narrator', text: '结句不是宏大的政论，而是“什么时候回家”。诗一下有了可以靠近的温度。' },
        ],
      },
      {
        title: '变化与归处', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '他留给后人的形象不只一面：有人从史书看变法，也有人从诗里读到乡思。' },
          { type: 'choice', prompt: '你想从哪一面继续认识王安石？', options: [
            { label: '先看他如何面对改变。', reply: '那便从问题本身看起。改变二字，落到事情上总要细想。' },
            { label: '先读他眼中的春风明月。', reply: '好。诗里没有朝堂的长篇争论，却也藏着我的牵挂。' },
          ] },
          { speaker: 'person', text: '人可以一边想着远方的大事，一边惦念一处熟悉的灯火。' },
          { speaker: 'narrator', text: '读他的诗，再去了解他的政治实践，人物会比课本上的单个称号立体得多。' },
          { speaker: 'narrator', text: '那轮明月，先照见的并非改革者的名号，而是一个想归去的人。' },
        ],
      },
    ],
    summary: '王安石主持北宋变法，也留下有生活温度的诗。《泊船瓜洲》用四句风景，把改革者的思乡之情带到眼前。',
  },

  'su-shi': {
    chapters: [
      {
        title: '人生难免转弯', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '苏轼的仕途并不平顺。被贬、迁居，人生路线像被人反复改了目的地。' },
          { speaker: 'person', text: '原来规划好的路走不通，总还得先看看脚下这条能不能走。' },
          { speaker: 'narrator', text: '诗、词、文章、书法，他留下的创作并没有因为这些转折而停下来。' },
          { speaker: 'person', text: '烦恼不会因为写了几个字就消失，但写着写着，眼前或许能开一扇窗。' },
          { speaker: 'narrator', text: '他的豁达不是永远没有难过，而是在难过里继续寻找能安放自己的话。' },
        ],
      },
      {
        title: '中秋的一轮明月', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '丙辰中秋，苏轼想念弟弟苏辙。《水调歌头》先问月亮，又慢慢转向人间离合。' },
          { speaker: 'person', text: '月亮倒是好好挂在那里。难的是想见的人，并不能说来就来。' },
          { speaker: 'narrator', text: '但愿人长久，千里共婵娟。', quote: true },
          { speaker: 'narrator', text: '这句没有让距离消失；它把无法同处一地的人，放在同一轮月光下。' },
        ],
      },
      {
        title: '给离别一个回声', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '许多人在相聚或分离时想起这首词，因为它先承认遗憾，再送出祝愿。' },
          { type: 'choice', prompt: '如果要把月光寄给远方的人，你会带哪句话？', options: [
            { label: '愿你平安。', reply: '这句够好。短短几个字，往往装得下最深的牵挂。' },
            { label: '下次见面再慢慢聊。', reply: '也好。把下一次相见留在心里，眼前的路就多了一点亮光。' },
          ] },
          { speaker: 'person', text: '同看一轮月亮，虽然仍有距离，心里却不必只剩距离。' },
          { speaker: 'narrator', text: '这首词把个人思念写成了许多人都能借用的语言。' },
          { speaker: 'narrator', text: '再读结句时，也许先想到的不是苏轼，而是你想问候的那个人。' },
        ],
      },
    ],
    summary: '苏轼经历仕途起伏，仍不断创作。《水调歌头》从中秋思弟写到人间共通的离别，把遗憾与祝愿放在同一轮月下。',
  },

  'li-qingzhao': {
    chapters: [
      {
        title: '生活的声调变了', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '李清照以词闻名。经历南渡与生活变故后，漂泊、怀旧与失落走进她的笔下。' },
          { speaker: 'person', text: '有些心事很难从头讲起。既然如此，不妨让声音先开口。' },
          { speaker: 'narrator', text: '她没有把情绪简单贴上“难过”的标签，而是让节奏、景物一点点把感觉带出来。' },
          { speaker: 'person', text: '字要落得准。轻一点、重一点，读到的人感受便不同。' },
          { speaker: 'narrator', text: '人在经历变化后，听见同一场秋风，也可能听出不一样的声音。' },
        ],
      },
      {
        title: '十四个字的开场', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《声声慢》开头连用叠字，还没说清发生了什么，心境就已经抵达。' },
          { speaker: 'narrator', text: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。', quote: true },
          { speaker: 'person', text: '念出来试试。寻找、冷清、悲伤，一层比一层更近。' },
          { speaker: 'narrator', text: '再往下，淡酒、秋风、黄花、细雨接续出现。景物像一笔笔淡墨，把情绪慢慢铺满。' },
        ],
      },
      {
        title: '让情绪有形有声', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '李清照的词提醒我们，表达不必总是大声；字词的排列，本身就可以成为力量。' },
          { type: 'choice', prompt: '读《声声慢》，你先被什么留住？', options: [
            { label: '开头一连串叠字。', reply: '声音确实会先一步走到心里。再读时，留意它怎样往下沉。' },
            { label: '秋风细雨的画面。', reply: '好。景物不是摆设，它们替说不尽的心事留了位置。' },
          ] },
          { speaker: 'person', text: '情绪并非一块平平的墨迹；轻重浓淡，都值得分辨。' },
          { speaker: 'narrator', text: '读她的词，既可以看写了什么，也可以听它怎样一步步说出来。' },
          { speaker: 'narrator', text: '那些叠字绝非凑数。它们让一个人的心绪，有了可听见的层次。' },
        ],
      },
    ],
    summary: '李清照在《声声慢》中以叠字、节奏和秋日景物铺开失落之情。她让细微情绪拥有了清晰而难忘的声音。',
  },

  'xin-qiji': {
    chapters: [
      {
        title: '心里有广阔的事', label: '人生转折',
        lines: [
          { speaker: 'narrator', text: '辛弃疾年轻时参加抗金事业。南归后，他仍盼恢复中原。' },
          { speaker: 'person', text: '大事放在心上，并不代表眼前的小景就看不见了。' },
          { speaker: 'narrator', text: '他的词可以气势纵横，也能写得细腻。若只给它贴上“豪放”二字，反倒少看了一半。' },
          { speaker: 'person', text: '灯火再多，也得看清哪一盏真正牵住了心。' },
          { speaker: 'narrator', text: '从家国到一人，从辽阔到幽微，他的词能自在切换焦距。' },
        ],
      },
      {
        title: '元夕的灯火', label: '代表作品',
        lines: [
          { speaker: 'narrator', text: '《青玉案·元夕》先让节日热闹起来：灯火、人群、光影，仿佛整条街都在发亮。' },
          { speaker: 'person', text: '越是热闹，越容易错过那个安静站着的人。' },
          { speaker: 'narrator', text: '蓦然回首，那人却在，灯火阑珊处。', quote: true },
          { speaker: 'narrator', text: '前面铺满光，结尾偏把目光落在灯火稀疏处。画面一收，余味反而更长。' },
        ],
      },
      {
        title: '留一处开放的解读', label: '文化影响',
        lines: [
          { speaker: 'narrator', text: '词里的“那人”究竟指谁，历来有不同解读。好的作品，未必把答案写在页边。' },
          { type: 'choice', prompt: '你更愿意怎样读结尾的“那人”？', options: [
            { label: '先把他当作故事里的人。', reply: '很好。先看见一个人，再体会那次回首的惊喜。' },
            { label: '把他看作一种追寻。', reply: '也说得通。词把门留得很宽，读者可以带着自己的问题进来。' },
          ] },
          { speaker: 'person', text: '若一句词能让人愿意回头多看一眼，它便已经有了下一段生命。' },
          { speaker: 'narrator', text: '这正是词的妙处：热闹场景可以写得开阔，最后一点心事却落得极轻。' },
          { speaker: 'narrator', text: '再读一次结尾，试试看：你的目光会先停在灯火，还是停在那个人？' },
        ],
      },
    ],
    summary: '辛弃疾的词既有家国之志，也有细腻的目光。《青玉案·元夕》从满城灯火写到一处幽微的回首，给读者留下开放的余味。',
  },
}
