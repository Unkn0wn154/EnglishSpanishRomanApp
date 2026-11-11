// Grammar lessons B1 → C1. body = HTML in French (🇫🇷 tips, 🇷🇺🇺🇦 comparison boxes); .s = tap to hear. quiz = [{q, opts, a, why}]
D.lessons.push(
{
  title: 'Présent simple ou continu ?', sub: 'I work / I’m working · les verbes d’état',
  body: `
<p>L’anglais a deux présents. Le choix dépend de la question : <b>habitude / vérité générale</b> ou <b>action en cours / temporaire</b> ?</p>
<table><tr><th>Present simple</th><th>Present continuous (be + -ing)</th></tr>
<tr><td>habitudes, faits : <span class="s">I work in a bank.</span></td><td>maintenant : <span class="s">I’m working right now.</span></td></tr>
<tr><td>vérités : <span class="s">Water boils at 100 degrees.</span></td><td>situation temporaire : <span class="s">I’m living with my parents this month.</span></td></tr>
<tr><td>horaires : <span class="s">The train leaves at six.</span></td><td>projets fixés : <span class="s">I’m meeting Tom tonight.</span></td></tr>
<tr><td>always, usually, often, never</td><td>now, at the moment, this week, currently</td></tr></table>
<p>⚠️ 3e personne : <b>-s</b> ! He work<b>s</b>, she go<b>es</b>, it do<b>es</b>n’t.</p>
<h3>Les verbes d’état</h3>
<p>Certains verbes ne prennent presque jamais -ing : <b>know, understand, believe, like, love, hate, want, need, prefer, belong, own, seem, mean</b>. <span class="s">I know</span> (pas « I’m knowing »). Mais : <span class="s">I’m thinking about it</span> (réfléchir = action) / <span class="s">I think so</span> (opinion = état).</p>
<div class="fr-box">🇫🇷 Le français n’a qu’un présent : « je travaille » = I work ou I’m working. Le réflexe : si tu peux dire « en ce moment / en train de », c’est le continu.</div>
<div class="ru-box">🇷🇺🇺🇦 Ce n’est pas l’aspect russe ! Les deux temps correspondent à l’imperfectif présent (работаю / працюю). Le continu insiste sur le <b>moment</b> ou le caractère <b>temporaire</b>. Note aussi : l’anglais n’omet jamais le sujet ni le verbe être : <span class="s">I am a doctor</span> (Я врач / Я лікар).</div>`,
  quiz: [
    Q('She ___ in Paris. (habitude)', ['live', 'lives', 'is living', 'living'], 1, 'Habitude + 3e personne → lives.'),
    Q('Shh! The baby ___.', ['sleeps', 'is sleeping', 'sleep', 'slept'], 1, 'En ce moment → continu.'),
    Q('I ___ what you mean.', ['understand', 'am understanding', 'understanding', 'am understand'], 0, 'Verbe d’état → simple.'),
    Q('The film ___ at 8 pm.', ['starts', 'is starting', 'start', 'starting'], 0, 'Horaire officiel → simple.'),
    Q('This week I ___ from home.', ['work', 'am working', 'works', 'worked'], 1, 'Situation temporaire → continu.'),
    Q('He ___ coffee. (jamais)', ['doesn’t drink never', 'never drinks', 'never drink', 'is never drinking'], 1, 'Never + simple, avec -s. Une seule négation !'),
  ],
},
{
  title: 'Prétérit ou present perfect ?', sub: 'I saw / I have seen — le piège n°1',
  body: `
<p>C’est la règle qui pose le plus de problèmes aux francophones et aux russophones.</p>
<h3>Past simple (prétérit) — c’est fini, c’est daté</h3>
<p>Action terminée à un moment <b>précis</b> du passé, ou dans une période <b>terminée</b> : yesterday, last week, in 2019, ago, when I was a child.<br>
<span class="s">I saw him yesterday.</span> <span class="s">She moved to London three years ago.</span></p>
<h3>Present perfect (have + participe) — un lien avec maintenant</h3>
<p>• Expérience de vie, sans date : <span class="s">I’ve been to Japan.</span> (je suis déjà allé au Japon)<br>
• Résultat visible maintenant : <span class="s">I’ve lost my keys.</span> (et je ne les ai toujours pas)<br>
• Période pas terminée : today, this week, this year, ever, never, already, yet, just, so far.<br>
• Durée jusqu’à maintenant avec <b>for / since</b> : <span class="s">I’ve lived here for ten years.</span></p>
<p>❌ « I have seen him yesterday » → ✅ <span class="s">I saw him yesterday.</span></p>
<div class="fr-box">🇫🇷 Le passé composé français couvre les deux ! « J’ai vu ce film » = <span class="s">I’ve seen this film</span> (expérience) mais « J’ai vu ce film hier » = <span class="s">I saw this film yesterday</span>. Dès qu’il y a une date ou un moment passé précis → prétérit.</div>
<div class="ru-box">🇷🇺🇺🇦 Le russe et l’ukrainien n’ont qu’un passé (видел / бачив). Le present perfect ne correspond pas au perfectif : c’est un <b>présent</b> qui regarde le passé. Astuce : si tu peux ajouter « уже » / « вже » ou « когда-нибудь » / « коли-небудь » → present perfect. Et attention : « Я живу здесь 10 лет » / « Я живу тут 10 років » (présent en russe/ukrainien !) = <span class="s">I’ve lived here for 10 years</span>.</div>`,
  quiz: [
    Q('I ___ him last week.', ['have met', 'met', 'meet', 'have meet'], 1, 'Last week = période terminée → prétérit.'),
    Q('___ you ever ___ sushi?', ['Did / eat', 'Have / eaten', 'Do / eat', 'Have / ate'], 1, 'Ever = expérience → present perfect.'),
    Q('I live here since 2020. Correct ?', ['Oui', 'Non : I’ve lived here since 2020', 'Non : I lived here since 2020', 'Non : I’m living here since 2020'], 1, 'Durée jusqu’à maintenant → present perfect.'),
    Q('Oh no! I ___ my phone. (je ne le trouve pas)', ['lost', 'have lost', 'lose', 'had lost'], 1, 'Résultat présent → present perfect.'),
    Q('She ___ to Spain in 2015.', ['has gone', 'went', 'has been', 'goes'], 1, 'Date → prétérit.'),
    Q('I haven’t finished ___.', ['already', 'yet', 'still', 'ago'], 1, 'Négation → yet.'),
  ],
},
{
  title: 'For, since, ago… et « depuis »', sub: 'Present perfect continuous · How long…?',
  body: `
<h3>For ou since ?</h3>
<p><b>for</b> + durée : for two hours, for three years, for ages.<br><b>since</b> + point de départ : since Monday, since 2010, since I was a child.<br><b>ago</b> = il y a (+ prétérit) : two years ago.</p>
<h3>Present perfect continuous (have been + -ing)</h3>
<p>Pour une activité qui dure jusqu’à maintenant (ou vient de s’arrêter, avec des traces visibles) :<br>
<span class="s">I’ve been waiting for an hour.</span> (j’attends depuis une heure)<br>
<span class="s">You’re wet! — Yes, I’ve been running.</span></p>
<p>Avec les verbes d’état, on garde le present perfect simple : <span class="s">I’ve known her for years.</span></p>
<h3>How long…?</h3>
<p><span class="s">How long have you been learning English?</span> (depuis combien de temps… ?)<br>
<span class="s">How long ago did you arrive?</span> (il y a combien de temps… ?)</p>
<div class="fr-box">🇫🇷 « Depuis » + présent en français = present perfect en anglais. « J’habite ici depuis 5 ans » = <span class="s">I’ve lived here for 5 years</span>, jamais « I live here since 5 years ».</div>
<div class="ru-box">🇷🇺🇺🇦 Même piège que pour le français : « Я учу английский три года » / « Я вчу англійську три роки » → <span class="s">I’ve been learning English for three years</span>. Le présent russe/ukrainien de durée devient un present perfect (continuous).</div>`,
  quiz: [
    Q('I’ve worked here ___ 2018.', ['for', 'since', 'ago', 'during'], 1, 'Point de départ → since.'),
    Q('She’s been studying ___ three hours.', ['since', 'for', 'ago', 'from'], 1, 'Durée → for.'),
    Q('J’attends depuis 20 minutes :', ['I wait for 20 minutes', 'I’m waiting since 20 minutes', 'I’ve been waiting for 20 minutes', 'I waited 20 minutes ago'], 2, 'Depuis + présent → present perfect continuous.'),
    Q('I met her five years ___.', ['for', 'since', 'ago', 'before'], 2, 'Il y a = ago (+ prétérit).'),
    Q('How long ___ each other?', ['do you know', 'have you known', 'have you been knowing', 'are you knowing'], 1, 'Know = verbe d’état → present perfect simple.'),
    Q('Your eyes are red. ___?', ['Did you cry', 'Have you been crying', 'Are you crying since', 'You cried'], 1, 'Activité récente avec traces visibles → present perfect continuous.'),
  ],
},
{
  title: 'Raconter : temps du récit', sub: 'past continuous, past perfect, used to',
  body: `
<h3>Past continuous (was/were + -ing)</h3>
<p>Le décor, l’action en cours : <span class="s">I was cooking when the phone rang.</span> (je cuisinais quand le téléphone a sonné)</p>
<h3>Past perfect (had + participe)</h3>
<p>Le « passé du passé » : <span class="s">When I arrived, the film had already started.</span> (le film avait déjà commencé)</p>
<h3>Used to / would</h3>
<p>Habitude passée, révolue : <span class="s">I used to smoke.</span> (je fumais avant). <b>Would</b> pour des actions répétées : <span class="s">Every summer we would go to the sea.</span><br>
⚠️ <b>be used to + -ing</b> = être habitué à : <span class="s">I’m used to getting up early.</span></p>
<div class="fr-box">🇫🇷 Correspondance assez proche : imparfait → past continuous (action en cours) ou used to (habitude), passé composé → past simple, plus-que-parfait → past perfect.</div>
<div class="ru-box">🇷🇺🇺🇦 L’imperfectif russe/ukrainien (готовил / готував) se traduit selon le sens : action en cours → <span class="s">was cooking</span> ; habitude → <span class="s">used to cook</span>. Le past perfect n’existe pas en russe : « Когда я пришёл, фильм уже начался » → <span class="s">the film had already started</span>.</div>`,
  quiz: [
    Q('I ___ TV when the lights went out.', ['watched', 'was watching', 'had watched', 'used to watch'], 1, 'Action en cours interrompue → past continuous.'),
    Q('When we arrived, the train ___.', ['already left', 'had already left', 'has already left', 'was already leaving'], 1, 'Antériorité dans le passé → past perfect.'),
    Q('I ___ play tennis, but I stopped.', ['use to', 'used to', 'was used to', 'am used to'], 1, 'Habitude révolue → used to.'),
    Q('I’m used to ___ in English.', ['work', 'working', 'worked', 'to work'], 1, 'Be used to + -ing.'),
    Q('She ___ while I was cooking.', ['was reading', 'had read', 'reads', 'has read'], 0, 'Deux actions simultanées en cours → past continuous.'),
    Q('Didn’t you ___ live in Kyiv?', ['used to', 'use to', 'using to', 'used'], 1, 'Après did : use to (sans d).'),
  ],
},
{
  title: 'Exprimer le futur', sub: 'will, going to, present continuous, future perfect',
  body: `
<table><tr><th>Forme</th><th>Emploi</th><th>Exemple</th></tr>
<tr><td>will</td><td>décision sur le moment, promesse, prévision personnelle</td><td><span class="s">I’ll help you.</span> <span class="s">I think it’ll rain.</span></td></tr>
<tr><td>be going to</td><td>intention déjà prise ; prévision évidente</td><td><span class="s">I’m going to study medicine.</span> <span class="s">Look at the clouds — it’s going to rain.</span></td></tr>
<tr><td>present continuous</td><td>rendez-vous, plan organisé</td><td><span class="s">I’m flying to Rome on Friday.</span></td></tr>
<tr><td>present simple</td><td>horaires</td><td><span class="s">The plane leaves at 7.</span></td></tr>
<tr><td>future continuous</td><td>en train de, à un moment futur</td><td><span class="s">This time tomorrow I’ll be lying on the beach.</span></td></tr>
<tr><td>future perfect</td><td>accompli avant un moment futur</td><td><span class="s">I’ll have finished by six.</span></td></tr></table>
<p>⚠️ Après <b>when, as soon as, if, until, before</b> : présent, pas will ! <span class="s">Call me when you arrive.</span></p>
<div class="fr-box">🇫🇷 « Quand tu arriveras » = <span class="s">when you arrive</span> (présent !). Le français met un futur, l’anglais non.</div>
<div class="ru-box">🇷🇺🇺🇦 Même logique qu’en russe pour « когда » ? Non : en russe on dit « когда приедешь » (futur), en anglais <span class="s">when you arrive</span> (présent). Et le future perfect correspond souvent à un perfectif futur avec « к… » : « Я закончу к шести » = <span class="s">I’ll have finished by six</span>.</div>`,
  quiz: [
    Q('The phone is ringing. — I ___ it!', ['’m going to get', '’ll get', 'get', '’m getting'], 1, 'Décision sur le moment → will.'),
    Q('Look at that car! It ___ crash!', ['will', 'is going to', 'crashes', 'will be'], 1, 'Prévision évidente → going to.'),
    Q('I ___ my dentist at 4 tomorrow. (rdv)', ['will see', 'am seeing', 'see', 'will have seen'], 1, 'Rendez-vous fixé → present continuous.'),
    Q('Call me when you ___.', ['will arrive', 'arrive', 'are arriving', 'arrived'], 1, 'Après when → présent.'),
    Q('By 2030, I ___ my degree.', ['will finish', 'will have finished', 'finish', 'am finishing'], 1, 'Accompli avant un moment futur → future perfect.'),
    Q('This time next week, we ___ on the beach.', ['will lie', 'will be lying', 'lie', 'are lying'], 1, 'En cours à un moment futur → future continuous.'),
  ],
},
{
  title: 'Les articles : a, the, ou rien ?', sub: 'Le cauchemar des russophones',
  body: `
<h3>a / an</h3>
<p>Une chose <b>parmi d’autres</b>, mentionnée pour la première fois, ou un métier : <span class="s">I saw a dog.</span> <span class="s">She’s a teacher.</span> (an devant un son voyelle : an hour, an apple, mais a university).</p>
<h3>the</h3>
<p>Une chose <b>précise</b>, connue des deux, unique : <span class="s">The dog was huge.</span> <span class="s">Close the door.</span> <span class="s">the sun, the internet, the government</span>.</p>
<h3>Ø (rien)</h3>
<p>Généralités au pluriel ou indénombrables : <span class="s">I love dogs.</span> <span class="s">Water is essential.</span> <span class="s">Life is short.</span><br>
Noms propres, pays (sauf the USA, the UK), repas, langues, sports : <span class="s">I have breakfast at 8.</span> <span class="s">She speaks French.</span><br>
Lieux dans leur fonction : <b>go to school / to bed / to work / to hospital</b> (UK).</p>
<div class="fr-box">🇫🇷 Piège n°1 du francophone : les généralités. « J’aime <b>les</b> chats » = <span class="s">I love cats</span> (sans the). « <b>La</b> vie est belle » = <span class="s">Life is beautiful</span>. Et pour les métiers, l’article est obligatoire : « elle est médecin » = <span class="s">she’s a doctor</span>.</div>
<div class="ru-box">🇷🇺🇺🇦 L’article n’existe pas en russe/ukrainien, mais la logique existe : <b>a</b> ≈ « один, какой-то / якийсь » (une chose nouvelle) ; <b>the</b> ≈ « этот, тот самый / цей, той самий » (déjà connu). Ne l’omets jamais devant un nom singulier dénombrable : ❌ « I have car » → ✅ <span class="s">I have a car</span>.</div>`,
  quiz: [
    Q('She’s ___ engineer.', ['a', 'an', 'the', '—'], 1, 'Métier → article ; son voyelle → an.'),
    Q('I love ___ music.', ['a', 'the', '—', 'an'], 2, 'Généralité, indénombrable → pas d’article.'),
    Q('Can you close ___ window, please?', ['a', 'the', '—', 'an'], 1, 'Une fenêtre précise → the.'),
    Q('___ life is too short.', ['A', 'The', '—', 'An'], 2, 'Généralité → pas d’article.'),
    Q('I live in ___ United Kingdom.', ['a', 'the', '—', 'an'], 1, 'Pays « union / royaume » → the.'),
    Q('It takes ___ hour.', ['a', 'an', 'the', '—'], 1, 'H muet → an hour.'),
  ],
},
{
  title: 'Dénombrable ou indénombrable ?', sub: 'much, many, few, little, some, any',
  body: `
<p>Les noms <b>indénombrables</b> n’ont pas de pluriel et pas de a/an : <b>advice, information, news, furniture, luggage, equipment, money, bread, water, work, homework, research, evidence, progress, knowledge, traffic, weather</b>.<br>
❌ an advice, informations → ✅ <span class="s">some advice</span>, <span class="s">a piece of information</span>.</p>
<table><tr><th></th><th>Dénombrable</th><th>Indénombrable</th></tr>
<tr><td>beaucoup</td><td>many (a lot of)</td><td>much (a lot of)</td></tr>
<tr><td>peu (négatif)</td><td>few</td><td>little</td></tr>
<tr><td>quelques / un peu (positif)</td><td>a few</td><td>a little</td></tr>
<tr><td>moins</td><td>fewer</td><td>less</td></tr>
<tr><td>combien ?</td><td>how many?</td><td>how much?</td></tr></table>
<p><b>some</b> en phrase affirmative et offres (<span class="s">Would you like some tea?</span>), <b>any</b> en négation et questions (<span class="s">Do you have any questions?</span>).</p>
<div class="fr-box">🇫🇷 Plusieurs mots dénombrables en français sont indénombrables en anglais : un conseil, des informations, des meubles, des bagages, des progrès, des devoirs.</div>
<div class="ru-box">🇷🇺🇺🇦 Piège inverse du tien : деньги / гроші sont pluriels, mais <span class="s">money is</span> singulier ; новости / новини pluriel, mais <span class="s">the news is good</span>. Et <b>advice</b> (совет / порада) est indénombrable : pas de « an advice ».</div>`,
  quiz: [
    Q('Can I give you ___ advice?', ['an', 'some', 'many', 'a few'], 1, 'Advice est indénombrable → some.'),
    Q('How ___ money do you need?', ['many', 'much', 'few', 'lot'], 1, 'Money indénombrable → much.'),
    Q('There are ___ people here. (peu, c’est dommage)', ['little', 'a little', 'few', 'a few'], 2, 'Dénombrable + sens négatif → few.'),
    Q('The news ___ good.', ['are', 'is', 'were', 'have'], 1, 'News = singulier.'),
    Q('I have ___ friends in London. (quelques)', ['a few', 'a little', 'few', 'much'], 0, 'Dénombrable + sens positif → a few.'),
    Q('Do you have ___ luggage?', ['many', 'a', 'any', 'few'], 2, 'Question + indénombrable → any.'),
  ],
},
{
  title: 'Modaux : obligation, conseil, permission', sub: 'must, have to, should, can, may',
  body: `
<table><tr><th>Sens</th><th>Modal</th><th>Exemple</th></tr>
<tr><td>obligation (personnelle / règle)</td><td>must / have to</td><td><span class="s">I must call my mum.</span> <span class="s">I have to wear a uniform.</span></td></tr>
<tr><td>interdiction</td><td>mustn’t</td><td><span class="s">You mustn’t smoke here.</span></td></tr>
<tr><td>absence d’obligation</td><td>don’t have to / needn’t</td><td><span class="s">You don’t have to come.</span> (tu n’es pas obligé)</td></tr>
<tr><td>conseil</td><td>should / ought to</td><td><span class="s">You should see a doctor.</span></td></tr>
<tr><td>conseil fort</td><td>had better</td><td><span class="s">You’d better hurry.</span></td></tr>
<tr><td>capacité / permission</td><td>can / could / may</td><td><span class="s">Can I sit here?</span> <span class="s">May I come in?</span></td></tr></table>
<p>Les modaux n’ont pas de -s, pas de « to » après (sauf have to, ought to), pas de passé propre : au passé, <b>had to</b>, <b>could</b>.</p>
<div class="fr-box">🇫🇷 Piège énorme : <b>mustn’t</b> = « il ne faut pas » (interdit) ; <b>don’t have to</b> = « ce n’est pas la peine ». « Tu ne dois pas venir » peut vouloir dire les deux en français !</div>
<div class="ru-box">🇷🇺🇺🇦 must ≈ должен / мусиш ; mustn’t ≈ нельзя / не можна ; don’t have to ≈ не обязательно / не обов’язково ; should ≈ следует, стоит / варто, слід. Can ≈ мочь / могти et уметь / вміти à la fois.</div>`,
  quiz: [
    Q('You ___ touch that — it’s dangerous!', ['don’t have to', 'mustn’t', 'needn’t', 'shouldn’t to'], 1, 'Interdiction → mustn’t.'),
    Q('Tomorrow is Sunday, so I ___ get up early.', ['mustn’t', 'don’t have to', 'can’t', 'shouldn’t'], 1, 'Pas d’obligation → don’t have to.'),
    Q('You look tired. You ___ go to bed.', ['should', 'must to', 'have', 'can'], 0, 'Conseil → should.'),
    Q('Yesterday I ___ work late.', ['must', 'had to', 'have to', 'musted'], 1, 'Obligation au passé → had to.'),
    Q('She ___ speak four languages.', ['cans', 'can', 'can to', 'is can'], 1, 'Pas de -s, pas de to.'),
    Q('You ___ take an umbrella — it might rain.', ['had better', 'had better to', 'better to', 'have better'], 0, 'Had better + base verbale.'),
  ],
},
{
  title: 'Modaux de déduction', sub: 'must be, can’t be, might have, should have',
  body: `
<h3>Au présent</h3>
<p><b>must</b> = je suis presque sûr que oui : <span class="s">He must be tired.</span> (il doit être fatigué)<br>
<b>can’t</b> = je suis presque sûr que non : <span class="s">That can’t be true.</span><br>
<b>might / may / could</b> = peut-être : <span class="s">She might be at home.</span></p>
<h3>Au passé : modal + have + participe</h3>
<p><span class="s">He must have forgotten.</span> (il a dû oublier)<br>
<span class="s">She can’t have seen us.</span> (elle n’a pas pu nous voir)<br>
<span class="s">They might have missed the bus.</span> (ils ont peut-être raté le bus)</p>
<h3>Regret et reproche</h3>
<p><b>should have</b> = j’aurais dû : <span class="s">I should have studied more.</span><br>
<b>shouldn’t have</b> = je n’aurais pas dû. <b>could have</b> = j’aurais pu.</p>
<div class="fr-box">🇫🇷 « Il a dû oublier » = <span class="s">he must have forgotten</span> (déduction), pas « he had to forget » (obligation !). Et « tu aurais dû me le dire » = <span class="s">you should have told me</span>.</div>
<div class="ru-box">🇷🇺🇺🇦 must have done ≈ наверное / мабуть + passé : « Он, наверное, забыл ». should have done ≈ надо было / треба було : « Надо было мне сказать » = <span class="s">You should have told me</span>. could have ≈ мог бы / міг би.</div>`,
  quiz: [
    Q('He’s been working all day. He ___ be exhausted.', ['can’t', 'must', 'should', 'mustn’t'], 1, 'Déduction positive → must.'),
    Q('That ___ be Tom — he’s in Spain!', ['must', 'can’t', 'might', 'should'], 1, 'Impossible → can’t.'),
    Q('Il a dû oublier :', ['He had to forget', 'He must have forgotten', 'He must forget', 'He should forget'], 1, 'Déduction au passé → must have + participe.'),
    Q('I failed. I ___ studied harder.', ['must have', 'should have', 'can have', 'would'], 1, 'Regret → should have.'),
    Q('She ___ the message — she hasn’t replied.', ['might not have read', 'mustn’t read', 'can’t read', 'shouldn’t read'], 0, 'Possibilité au passé → might (not) have + participe.'),
    Q('You ___ called me! I was worried.', ['could have', 'must have', 'can have', 'might'], 0, 'Reproche : tu aurais pu → could have.'),
  ],
},
{
  title: 'Les conditionnelles', sub: 'If I had… I would… · wish · mixed',
  body: `
<table><tr><th>Type</th><th>Forme</th><th>Exemple</th></tr>
<tr><td>0 — vérité</td><td>if + présent, présent</td><td><span class="s">If you heat ice, it melts.</span></td></tr>
<tr><td>1 — réel futur</td><td>if + présent, will</td><td><span class="s">If it rains, I’ll stay home.</span></td></tr>
<tr><td>2 — irréel présent</td><td>if + prétérit, would</td><td><span class="s">If I had money, I would travel.</span></td></tr>
<tr><td>3 — irréel passé</td><td>if + past perfect, would have</td><td><span class="s">If I had known, I would have come.</span></td></tr>
<tr><td>mixte</td><td>if + past perfect, would (présent)</td><td><span class="s">If I had studied medicine, I would be a doctor now.</span></td></tr></table>
<p>Jamais <b>would</b> après <b>if</b> ! <span class="s">If I were you…</span> (were pour toutes les personnes, style soigné).</p>
<h3>Wish / if only</h3>
<p><span class="s">I wish I had more time.</span> (présent → prétérit) · <span class="s">I wish I had listened.</span> (passé → past perfect) · <span class="s">I wish you would stop!</span> (agacement)</p>
<div class="fr-box">🇫🇷 Exactement la règle française « si + imparfait → conditionnel » : si j’avais → <span class="s">if I had</span>, je voyagerais → <span class="s">I would travel</span>. Pas de conditionnel après « si », pas de would après « if ».</div>
<div class="ru-box">🇷🇺🇺🇦 Le russe/ukrainien utilise « бы / б » des deux côtés (Если бы у меня были деньги, я бы путешествовал). L’anglais distingue : prétérit après if, would dans l’autre partie. Et le russe ne distingue pas présent / passé irréel : le contexte décide ; en anglais il faut choisir le type 2 ou 3.</div>`,
  quiz: [
    Q('If it ___ tomorrow, we’ll stay in.', ['will rain', 'rains', 'rained', 'would rain'], 1, 'Type 1 : if + présent.'),
    Q('If I ___ rich, I would buy a boat.', ['am', 'were', 'will be', 'would be'], 1, 'Type 2 : if + prétérit (were).'),
    Q('If she had left earlier, she ___ the train.', ['would catch', 'would have caught', 'will catch', 'caught'], 1, 'Type 3 : would have + participe.'),
    Q('I wish I ___ speak Chinese.', ['can', 'could', 'will', 'would'], 1, 'Wish + passé pour un souhait présent.'),
    Q('If I had taken that job, I ___ in London now.', ['would live', 'would have lived', 'will live', 'lived'], 0, 'Mixte : passé irréel → conséquence présente.'),
    Q('Si j’étais toi, j’accepterais :', ['If I was you, I will accept', 'If I were you, I would accept', 'If I would be you, I would accept', 'If I am you, I accept'], 1, 'Type 2 avec were.'),
  ],
},
{
  title: 'Le passif et le causatif', sub: 'It was built… · I had my hair cut',
  body: `
<h3>Le passif : be (au bon temps) + participe passé</h3>
<p><span class="s">English is spoken here.</span> · <span class="s">The bridge was built in 1890.</span> · <span class="s">The room is being cleaned.</span> · <span class="s">It has been sold.</span> · <span class="s">It will be finished tomorrow.</span><br>
L’agent avec <b>by</b> seulement s’il est important : <span class="s">painted by Picasso</span>.</p>
<h3>Passif « on dit que »</h3>
<p><span class="s">He is said to be rich.</span> (on dit qu’il est riche) · <span class="s">It is believed that…</span></p>
<h3>Le causatif : have / get something done</h3>
<p>Faire faire quelque chose par quelqu’un d’autre : <span class="s">I had my hair cut.</span> (je me suis fait couper les cheveux) · <span class="s">I need to get my car repaired.</span></p>
<div class="fr-box">🇫🇷 L’anglais utilise beaucoup plus le passif que le français, souvent là où le français dit « on » : « on parle anglais ici » = <span class="s">English is spoken here</span>. Et « je me suis fait couper les cheveux » n’est jamais « I cut my hair » (= je me les suis coupés moi-même).</div>
<div class="ru-box">🇷🇺🇺🇦 Les tournures impersonnelles russes/ukrainiennes (Здесь говорят по-английски, Мост построили в 1890 году / Міст збудували) deviennent souvent un passif anglais. « Я подстригся » (chez le coiffeur) = <span class="s">I had my hair cut</span>.</div>`,
  quiz: [
    Q('This house ___ in 1920.', ['built', 'was built', 'has built', 'is building'], 1, 'Passif prétérit : was + participe.'),
    Q('Your order ___ right now.', ['is prepared', 'is being prepared', 'prepares', 'has prepared'], 1, 'Passif continu : is being + participe.'),
    Q('Je me suis fait couper les cheveux :', ['I cut my hair', 'I had my hair cut', 'I had cut my hair', 'I was cut my hair'], 1, 'Causatif : have + objet + participe.'),
    Q('On dit qu’il est très riche :', ['He says to be rich', 'He is said to be rich', 'It says he is rich', 'He was saying rich'], 1, 'Passif de rapport : be said to.'),
    Q('The letters ___ yet.', ['haven’t been sent', 'haven’t sent', 'didn’t send', 'aren’t sent yet'], 0, 'Present perfect passif.'),
    Q('The Mona Lisa was painted ___ Leonardo.', ['from', 'with', 'by', 'of'], 2, 'Agent → by.'),
  ],
},
{
  title: 'Le discours indirect', sub: 'He said that he was tired',
  body: `
<p>Quand on rapporte des paroles après un verbe au passé (said, told), on <b>recule</b> souvent d’un temps :</p>
<table><tr><th>Direct</th><th>Indirect</th></tr>
<tr><td>“I <b>am</b> tired.”</td><td>He said he <b>was</b> tired.</td></tr>
<tr><td>“I <b>have finished</b>.”</td><td>She said she <b>had finished</b>.</td></tr>
<tr><td>“I <b>will</b> call.”</td><td>He said he <b>would</b> call.</td></tr>
<tr><td>“I <b>can</b> swim.”</td><td>She said she <b>could</b> swim.</td></tr></table>
<p>Les repères changent aussi : today → that day, tomorrow → the next day, here → there.</p>
<h3>say ou tell ?</h3>
<p><b>say</b> (something) / <b>tell</b> + personne : <span class="s">She said that…</span> / <span class="s">She told me that…</span></p>
<h3>Questions et ordres</h3>
<p>Questions : ordre affirmatif ! <span class="s">She asked where I lived.</span> (pas « where did I live »). Oui/non : <b>if / whether</b> : <span class="s">He asked if I was OK.</span><br>
Ordres : <b>tell / ask + to</b> : <span class="s">He told me to sit down.</span></p>
<div class="fr-box">🇫🇷 Concordance des temps comme en français soigné : « il a dit qu’il était fatigué ». Le piège est l’ordre des mots dans les questions indirectes : <span class="s">I don’t know where he is</span> (pas « where is he »).</div>
<div class="ru-box">🇷🇺🇺🇦 Grande différence : le russe/ukrainien <b>garde le temps</b> d’origine (Он сказал, что устал / Він сказав, що втомився ; Она сказала, что придёт). L’anglais recule : <span class="s">She said she would come</span>. Et « спросил, придёт ли он » / « спитав, чи прийде він » = <span class="s">asked if he would come</span>.</div>`,
  quiz: [
    Q('“I’m hungry.” → He said he ___ hungry.', ['is', 'was', 'has been', 'will be'], 1, 'Recul : am → was.'),
    Q('She ___ me that she was leaving.', ['said', 'told', 'spoke', 'talked'], 1, 'Tell + personne.'),
    Q('“Where do you live?” → She asked where I ___.', ['live', 'lived', 'did live', 'do live'], 1, 'Ordre affirmatif + recul.'),
    Q('“Can you help me?” → He asked ___ I could help him.', ['that', 'if', 'what', 'do'], 1, 'Question oui/non → if / whether.'),
    Q('“Close the door.” → She told me ___ the door.', ['close', 'to close', 'closing', 'that I close'], 1, 'Ordre → told + to.'),
    Q('“I will call you.” → He said he ___ call me.', ['will', 'would', 'shall', 'is going'], 1, 'will → would.'),
  ],
},
{
  title: 'Les relatives', sub: 'who, which, that, whose, where',
  body: `
<table><tr><th>Pronom</th><th>Pour</th><th>Exemple</th></tr>
<tr><td>who</td><td>personnes</td><td><span class="s">The man who lives next door…</span></td></tr>
<tr><td>which</td><td>choses</td><td><span class="s">The book which I bought…</span></td></tr>
<tr><td>that</td><td>personnes ou choses (relatives essentielles)</td><td><span class="s">The film that we saw…</span></td></tr>
<tr><td>whose</td><td>possession (dont le/la)</td><td><span class="s">The girl whose dog is lost…</span></td></tr>
<tr><td>where / when</td><td>lieu / temps</td><td><span class="s">The town where I grew up…</span></td></tr></table>
<h3>Essentielle ou explicative ?</h3>
<p><b>Essentielle</b> (pas de virgules) : identifie la chose ; that possible ; le pronom complément peut disparaître : <span class="s">The book (that) I’m reading is great.</span><br>
<b>Explicative</b> (entre virgules) : information en plus ; jamais that : <span class="s">My sister, who lives in Kyiv, is a doctor.</span></p>
<p>Préposition finale à l’oral : <span class="s">The person I spoke to…</span> (formel : to whom I spoke).</p>
<div class="fr-box">🇫🇷 « Dont » = <b>whose</b> (possession) ou une préposition finale : « le film dont je parle » = <span class="s">the film I’m talking about</span>. « Ce que » = <b>what</b> : <span class="s">What I need is sleep.</span></div>
<div class="ru-box">🇷🇺🇺🇦 Le russe/ukrainien utilise « который / який » décliné ; l’anglais n’a pas de déclinaison, mais l’omission du pronom (<span class="s">the book I read</span>) n’existe pas chez toi — elle est pourtant très fréquente en anglais oral. « Чей / чий » = <b>whose</b>.</div>`,
  quiz: [
    Q('The woman ___ called you is my boss.', ['which', 'who', 'whose', 'where'], 1, 'Personne → who.'),
    Q('That’s the hotel ___ we stayed.', ['which', 'where', 'who', 'whose'], 1, 'Lieu → where.'),
    Q('My brother, ___ lives in Rome, is a chef.', ['that', 'who', 'which', '—'], 1, 'Explicative (virgules) : pas de that.'),
    Q('The man ___ car was stolen called the police.', ['who', 'whose', 'which', 'that'], 1, 'Possession → whose.'),
    Q('Le film dont je parle :', ['The film whose I talk', 'The film I’m talking about', 'The film of which I talk about', 'The film what I talk'], 1, 'Préposition finale, pronom omis.'),
    Q('___ I need is a holiday.', ['That', 'Which', 'What', 'Who'], 2, 'Ce que = what.'),
  ],
},
{
  title: 'Gérondif ou infinitif ?', sub: 'enjoy doing, want to do, stop doing / to do',
  body: `
<p><b>Verbe + -ing</b> : enjoy, mind, avoid, finish, suggest, keep, consider, admit, deny, can’t stand, look forward to, be used to.<br>
<span class="s">I enjoy reading.</span> <span class="s">I look forward to seeing you.</span></p>
<p><b>Verbe + to</b> : want, decide, hope, plan, promise, refuse, afford, manage, learn, seem, would like.<br>
<span class="s">I decided to leave.</span> <span class="s">I can’t afford to go.</span></p>
<p>Après une <b>préposition</b> : toujours -ing : <span class="s">thank you for coming</span>, <span class="s">good at swimming</span>, <span class="s">before leaving</span>.</p>
<h3>Changement de sens</h3>
<table><tr><td>stop doing = arrêter de faire</td><td>stop to do = s’arrêter pour faire</td></tr>
<tr><td>remember doing = se souvenir d’avoir fait</td><td>remember to do = penser à faire</td></tr>
<tr><td>try doing = essayer (pour voir)</td><td>try to do = s’efforcer de</td></tr>
<tr><td>regret doing = regretter d’avoir fait</td><td>regret to say = avoir le regret de dire</td></tr></table>
<div class="fr-box">🇫🇷 Le français met un infinitif partout (« merci d’être venu », « avant de partir »). L’anglais met -ing après les prépositions : <span class="s">before leaving</span>, jamais « before to leave ».</div>
<div class="ru-box">🇷🇺🇺🇦 Le gérondif anglais remplace souvent un nom verbal ou « то, что… » : « Я люблю читать » = <span class="s">I like reading</span> ; « спасибо, что пришёл » / « дякую, що прийшов » = <span class="s">thanks for coming</span>.</div>`,
  quiz: [
    Q('I enjoy ___ in the rain.', ['walk', 'to walk', 'walking', 'walked'], 2, 'Enjoy + -ing.'),
    Q('We decided ___ a taxi.', ['take', 'to take', 'taking', 'took'], 1, 'Decide + to.'),
    Q('I stopped ___ two years ago. (j’ai arrêté de fumer)', ['to smoke', 'smoking', 'smoke', 'smoked'], 1, 'Stop + -ing = arrêter de.'),
    Q('Remember ___ the door when you leave!', ['locking', 'to lock', 'lock', 'locked'], 1, 'Remember to = penser à faire.'),
    Q('Thank you for ___ me.', ['help', 'to help', 'helping', 'helped'], 2, 'Après préposition → -ing.'),
    Q('I’m looking forward ___ you.', ['to see', 'to seeing', 'seeing', 'see'], 1, 'Look forward TO + -ing (to est une préposition).'),
  ],
},
{
  title: 'Les verbes à particule', sub: 'La logique de up, out, off, on…',
  body: `
<p>Un <b>phrasal verb</b> = verbe + particule, avec souvent un sens nouveau. Les particules ont une logique, comme les préfixes russes/ukrainiens :</p>
<table><tr><th>Particule</th><th>Idée</th><th>Exemples</th></tr>
<tr><td>up</td><td>vers le haut, jusqu’au bout, compléter</td><td>give up, eat up, fill up, grow up, set up</td></tr>
<tr><td>down</td><td>vers le bas, réduire, mettre par écrit</td><td>slow down, calm down, write down, turn down</td></tr>
<tr><td>out</td><td>dehors, disparition, découvrir, jusqu’au bout</td><td>find out, run out, sort out, work out</td></tr>
<tr><td>off</td><td>départ, séparation, arrêt</td><td>take off, set off, turn off, call off</td></tr>
<tr><td>on</td><td>continuation, contact, activation</td><td>go on, carry on, turn on, put on</td></tr>
<tr><td>back</td><td>retour</td><td>come back, call back, give back</td></tr></table>
<h3>Séparable ou non ?</h3>
<p>Beaucoup sont séparables : <span class="s">Turn off the light</span> / <span class="s">Turn the light off</span>. Avec un <b>pronom</b>, séparation obligatoire : <span class="s">Turn it off</span> (jamais « turn off it »).<br>
Certains sont inséparables : look after, get over, come across : <span class="s">I’ll look after him.</span></p>
<div class="ru-box">🇷🇺🇺🇦 Pense aux préfixes de mouvement : вы-/ви- ≈ <b>out</b> (выйти = go out), за- ≈ <b>in</b>, у- ≈ <b>away / off</b> (уйти = go away), под-/під- ≈ <b>up to</b> (подойти = come up to), пере- ≈ <b>over</b>. Tu as déjà l’intuition : la particule anglaise est un préfixe placé après le verbe !</div>
<div class="fr-box">🇫🇷 Le français utilise un verbe différent (éteindre, abandonner, découvrir) là où l’anglais combine un verbe simple + particule. Apprends-les en contexte, avec une phrase.</div>`,
  quiz: [
    Q('Éteins-la (la lumière) :', ['Turn off it', 'Turn it off', 'Turn off', 'Off turn it'], 1, 'Pronom → séparation obligatoire.'),
    Q('We ran ___ of milk.', ['off', 'out', 'up', 'down'], 1, 'Run out of = manquer de.'),
    Q('Don’t give ___! You can do it.', ['out', 'up', 'off', 'on'], 1, 'Give up = abandonner.'),
    Q('The plane took ___ on time.', ['up', 'off', 'out', 'on'], 1, 'Take off = décoller.'),
    Q('I’ll look ___ your cat while you’re away.', ['for', 'after', 'up', 'into'], 1, 'Look after = s’occuper de.'),
    Q('Quel préfixe russe/ukrainien ressemble le plus à « out » ?', ['за-', 'вы- / ви-', 'под- / під-', 'при-'], 1, 'Выйти / вийти = go out.'),
  ],
},
{
  title: 'Prépositions de temps et de lieu', sub: 'in, on, at · dépendances',
  body: `
<table><tr><th></th><th>AT (point)</th><th>ON (surface, jour)</th><th>IN (intérieur, période)</th></tr>
<tr><td>Temps</td><td>at 6 pm, at night, at the weekend (UK), at Christmas</td><td>on Monday, on 5 May, on my birthday</td><td>in May, in 2020, in summer, in the morning</td></tr>
<tr><td>Lieu</td><td>at the station, at home, at work, at the door</td><td>on the table, on the wall, on the bus, on the 2nd floor</td><td>in London, in the car, in bed, in the kitchen</td></tr></table>
<p>Pas de préposition avant : this, next, last, every, tomorrow, yesterday : <span class="s">See you next Monday.</span></p>
<h3>Prépositions qui dépendent du mot</h3>
<p>depend <b>on</b>, interested <b>in</b>, good <b>at</b>, afraid <b>of</b>, married <b>to</b>, listen <b>to</b>, wait <b>for</b>, look <b>at</b>, arrive <b>in/at</b> (jamais to), angry <b>with</b> (a person), different <b>from</b>, responsible <b>for</b>.</p>
<div class="fr-box">🇫🇷 Pièges : « dépendre de » = depend <b>on</b> ; « marié avec » = married <b>to</b> ; « arriver à Londres » = arrive <b>in</b> London ; « dans le bus » = <b>on</b> the bus ; « le week-end » = <b>at</b> (UK) / <b>on</b> (US) the weekend.</div>
<div class="ru-box">🇷🇺🇺🇦 в / у ≈ <b>in</b>, на ≈ <b>on</b>, mais : на работе / на роботі = <b>at</b> work, на вокзале = <b>at</b> the station, в понедельник / у понеділок = <b>on</b> Monday, в 6 часов / о 6-й = <b>at</b> 6. Ждать кого-то (accusatif) = wait <b>for</b> someone.</div>`,
  quiz: [
    Q('See you ___ Friday.', ['in', 'on', 'at', '—'], 1, 'Jour → on.'),
    Q('I was born ___ 1995.', ['on', 'at', 'in', '—'], 2, 'Année → in.'),
    Q('She’s ___ work right now.', ['in', 'on', 'at', 'to'], 2, 'At work.'),
    Q('It depends ___ the weather.', ['of', 'on', 'from', 'at'], 1, 'Depend on.'),
    Q('We arrived ___ Paris at noon.', ['to', 'in', 'at', 'on'], 1, 'Arrive in + ville.'),
    Q('I’ll call you ___ next week.', ['in', 'on', 'at', '—'], 3, 'Next → pas de préposition.'),
  ],
},
{
  title: 'Formation des mots', sub: 'Préfixes et suffixes anglais',
  body: `
<p>L’anglais est un mélange de germanique et de français (latin). Les suffixes te permettent de deviner beaucoup de mots.</p>
<h3>Préfixes négatifs</h3>
<p><b>un-</b> : unhappy, unknown · <b>in- / im- / il- / ir-</b> : impossible, illegal, irregular · <b>dis-</b> : disagree, dislike · <b>mis-</b> (mal) : misunderstand, mislead · <b>non-</b> : non-smoker.</p>
<h3>Autres préfixes</h3>
<p><b>re-</b> (re-) : rewrite · <b>over-</b> (trop) : oversleep, overpriced · <b>under-</b> (pas assez) : underpaid, underestimate · <b>pre-</b> / <b>post-</b> · <b>co-</b> : co-worker · <b>ex-</b> : ex-wife · <b>self-</b> : self-confident.</p>
<h3>Suffixes</h3>
<table><tr><th>Suffixe</th><th>Fait</th><th>Exemples</th></tr>
<tr><td>-ness</td><td>nom (qualité)</td><td>happiness, kindness</td></tr>
<tr><td>-ment / -tion</td><td>nom (action)</td><td>agreement, information</td></tr>
<tr><td>-er / -or / -ist</td><td>personne</td><td>teacher, actor, scientist</td></tr>
<tr><td>-ful / -less</td><td>avec / sans</td><td>useful / useless, careful / careless</td></tr>
<tr><td>-able / -ible</td><td>qu’on peut</td><td>washable, readable</td></tr>
<tr><td>-ish</td><td>un peu, vers</td><td>reddish, sevenish (vers 7 h)</td></tr>
<tr><td>-ly</td><td>adverbe</td><td>quickly, happily</td></tr>
<tr><td>-en</td><td>verbe (rendre)</td><td>widen, shorten, strengthen</td></tr></table>
<div class="fr-box">🇫🇷 Environ 30 % du vocabulaire anglais vient du français : -tion, -ment, -able sont des cadeaux. Mais le sens a souvent glissé (voir la leçon des faux amis).</div>
<div class="ru-box">🇷🇺🇺🇦 -less ≈ без- / без- (useless ≈ бесполезный / безкорисний), un- ≈ не- (unhappy ≈ несчастный / нещасний), re- ≈ пере- (rewrite ≈ переписать / переписати), over- ≈ пере- au sens de « trop » (oversleep ≈ проспать / проспати).</div>`,
  quiz: [
    Q('Le contraire de « legal » :', ['unlegal', 'illegal', 'dislegal', 'nonlegal'], 1, 'il- devant l.'),
    Q('« Careless » veut dire :', ['prudent', 'négligent', 'sans voiture', 'soigneux'], 1, '-less = sans (soin).'),
    Q('Nom de « kind » (gentil) :', ['kindment', 'kindness', 'kindtion', 'kindity'], 1, '-ness = qualité.'),
    Q('« I overslept » :', ['j’ai mal dormi', 'j’ai dormi trop longtemps', 'j’ai dormi dehors', 'je n’ai pas dormi'], 1, 'over- = trop.'),
    Q('« Let’s meet at sevenish » :', ['à 7 h pile', 'vers 7 h', 'avant 7 h', 'après 7 h'], 1, '-ish = environ.'),
    Q('Rendre plus large :', ['to widen', 'to widely', 'to wideness', 'to unwide'], 0, '-en = rendre.'),
  ],
},
{
  title: 'Faux amis français–anglais', sub: 'actually, eventually, sensible, library…',
  body: `
<table><tr><th>Anglais</th><th>veut dire</th><th>et pas</th></tr>
<tr><td>actually</td><td>en fait</td><td>actuellement (= currently)</td></tr>
<tr><td>eventually</td><td>finalement</td><td>éventuellement (= possibly)</td></tr>
<tr><td>sensible</td><td>raisonnable</td><td>sensible (= sensitive)</td></tr>
<tr><td>library</td><td>bibliothèque</td><td>librairie (= bookshop)</td></tr>
<tr><td>attend</td><td>assister à</td><td>attendre (= wait)</td></tr>
<tr><td>pretend</td><td>faire semblant</td><td>prétendre (= claim)</td></tr>
<tr><td>deception</td><td>tromperie</td><td>déception (= disappointment)</td></tr>
<tr><td>evidence</td><td>preuve(s)</td><td>évidence (= obviousness)</td></tr>
<tr><td>journey</td><td>trajet</td><td>journée (= day)</td></tr>
<tr><td>delay</td><td>retard</td><td>délai (= deadline)</td></tr>
<tr><td>chance</td><td>possibilité</td><td>chance (= luck)</td></tr>
<tr><td>to realise</td><td>se rendre compte</td><td>réaliser (= achieve)</td></tr>
<tr><td>stage</td><td>étape ; scène</td><td>stage (= internship)</td></tr>
<tr><td>comprehensive</td><td>complet</td><td>compréhensif (= understanding)</td></tr>
<tr><td>resume / résumé (US)</td><td>reprendre / CV</td><td>résumé (= summary)</td></tr>
<tr><td>preservative</td><td>conservateur</td><td>préservatif (= condom)</td></tr></table>
<div class="ru-box">🇷🇺🇺🇦 Pièges pour russophones : <b>magazine</b> = журнал / журнал (магазин = <span class="s">shop</span>) ; <b>accurate</b> = точный / точний (аккуратный = <span class="s">neat, tidy</span>) ; <b>fabric</b> = ткань / тканина (фабрика = <span class="s">factory</span>) ; <b>sympathetic</b> = сочувствующий / співчутливий (симпатичный = <span class="s">nice-looking</span>) ; <b>artist</b> = художник (артист = <span class="s">performer</span>) ; <b>decade</b> = десятилетие / десятиліття (декада = 10 jours).</div>`,
  quiz: [
    Q('« Actually, I’m Ukrainian » :', ['Actuellement, je suis ukrainien', 'En fait, je suis ukrainien', 'Bientôt je serai ukrainien', 'Je suis vraiment ukrainien'], 1, 'Actually = en fait.'),
    Q('Comment dit-on « actuellement » ?', ['actually', 'currently', 'eventually', 'actively'], 1, 'Currently.'),
    Q('« She’s very sensible » :', ['elle est très sensible', 'elle est très raisonnable', 'elle est sensuelle', 'elle est susceptible'], 1, 'Sensible = raisonnable.'),
    Q('« I attended the meeting » :', ['j’ai attendu la réunion', 'j’ai assisté à la réunion', 'j’ai organisé la réunion', 'j’ai raté la réunion'], 1, 'Attend = assister à.'),
    Q('« Магазин » se dit :', ['magazine', 'shop', 'market', 'mall only'], 1, 'Magazine = журнал / журнал.'),
    Q('« Аккуратный » (soigné, rangé) se dit :', ['accurate', 'neat / tidy', 'careful only', 'exact'], 1, 'Accurate = précis.'),
  ],
},
{
  title: 'Style C1 : inversion et mise en relief', sub: 'Never have I… · What I need is… · connecteurs',
  body: `
<h3>Inversion après une expression négative (écrit soutenu)</h3>
<p><span class="s">Never have I seen such a mess.</span> (jamais je n’ai vu…)<br>
<span class="s">Not only did he lie, but he also stole.</span><br>
<span class="s">Hardly had we arrived when it started to rain.</span><br>
<span class="s">Under no circumstances should you open this door.</span><br>
<span class="s">Only then did I understand.</span></p>
<h3>Conditionnelles inversées</h3>
<p><span class="s">Had I known, I would have come.</span> (= If I had known) · <span class="s">Should you need help, call me.</span> (= If you should need) · <span class="s">Were I you, I’d accept.</span></p>
<h3>Phrases clivées (mise en relief)</h3>
<p><span class="s">What I need is a holiday.</span> · <span class="s">It was Anna who called.</span> · <span class="s">All I want is peace.</span> · <span class="s">The thing is, …</span></p>
<h3>Connecteurs par registre</h3>
<table><tr><th>Informel</th><th>Neutre</th><th>Formel</th></tr>
<tr><td>but / still</td><td>however</td><td>nevertheless, nonetheless</td></tr>
<tr><td>so</td><td>therefore</td><td>thus, hence</td></tr>
<tr><td>also / plus</td><td>in addition</td><td>moreover, furthermore</td></tr>
<tr><td>even though</td><td>although</td><td>albeit, notwithstanding</td></tr></table>
<div class="fr-box">🇫🇷 L’inversion existe aussi en français soutenu (« Jamais n’ai-je vu… », « Aussi pensons-nous… »), mais elle est beaucoup plus vivante en anglais écrit et dans les discours. Les clivées correspondent à « Ce dont j’ai besoin, c’est… », « C’est Anna qui… ».</div>
<div class="ru-box">🇷🇺🇺🇦 Le russe/ukrainien met en relief par l’ordre des mots et l’intonation (Никогда я не видел… / Ніколи я не бачив…). L’anglais, à l’ordre fixe, a besoin de ces structures. « Именно Анна позвонила » / « Саме Анна подзвонила » = <span class="s">It was Anna who called</span>.</div>`,
  quiz: [
    Q('Never ___ such a beautiful view.', ['I have seen', 'have I seen', 'I saw', 'did I saw'], 1, 'Inversion : auxiliaire + sujet.'),
    Q('Not only ___ late, but he also forgot the keys.', ['he was', 'was he', 'he is', 'did he was'], 1, 'Not only + inversion.'),
    Q('___ I known, I would have helped.', ['If', 'Had', 'Have', 'Should'], 1, 'Had I known = If I had known.'),
    Q('___ I need is a good night’s sleep.', ['That', 'Which', 'What', 'It'], 2, 'Clivée : What I need is…'),
    Q('Équivalent formel de « so » :', ['plus', 'therefore', 'still', 'anyway'], 1, 'Therefore / thus.'),
    Q('Under no circumstances ___ the door.', ['you should open', 'should you open', 'you open', 'open you'], 1, 'Expression négative en tête → inversion.'),
  ],
},
);
