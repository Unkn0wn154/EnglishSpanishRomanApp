// Phrasebook. Line: theme|english|french|russian|ukrainian
Object.assign(D.phraseThemes, {
  small: 'Petite conversation · Світська розмова', polite: 'Demandes polies · Ввічливі прохання', react: 'Réagir · Реакції',
  opinion: 'Donner son avis · Висловити думку', debate: 'Débattre · Дискусія', work: 'Au travail · На роботі',
  meeting: 'Réunions · Наради', phone: 'Téléphone · Телефон', email: 'E-mails · Листи', travel: 'Voyage · Подорож',
  restaurant: 'Restaurant · Ресторан', problems: 'Problèmes & plaintes · Проблеми й скарги', feelings: 'Sentiments · Почуття',
  plans: 'Projets · Плани',
});
D.phrases.push(`
small|How’s it going?|Comment ça va ?|Как дела?|Як справи?
small|Long time no see!|Ça fait longtemps !|Сто лет не виделись!|Сто років не бачилися!
small|What have you been up to?|Qu’est-ce que tu deviens ?|Чем ты занимался в последнее время?|Чим ти займався останнім часом?
small|Not much, just the usual.|Pas grand-chose, la routine.|Ничего особенного, всё как обычно.|Нічого особливого, все як завжди.
small|What do you do for a living?|Qu’est-ce que tu fais dans la vie ?|Кем ты работаешь?|Ким ти працюєш?
small|Where are you from originally?|D’où viens-tu, à l’origine ?|Откуда ты родом?|Звідки ти родом?
small|How long have you been living here?|Depuis combien de temps habites-tu ici ?|Как давно ты здесь живёшь?|Як давно ти тут живеш?
small|Lovely weather today, isn’t it?|Il fait beau aujourd’hui, hein ?|Прекрасная погода сегодня, правда?|Чудова погода сьогодні, правда?
small|Have you got any plans for the weekend?|Tu as des projets pour le week-end ?|У тебя есть планы на выходные?|У тебе є плани на вихідні?
small|It was nice talking to you.|C’était sympa de discuter avec toi.|Было приятно поговорить.|Було приємно поговорити.
small|Say hi to your family for me.|Salue ta famille de ma part.|Передавай привет семье.|Передавай вітання родині.
polite|Could you do me a favour?|Tu pourrais me rendre un service ?|Можешь оказать мне услугу?|Можеш зробити мені послугу?
polite|Would you mind closing the window?|Ça vous dérangerait de fermer la fenêtre ?|Вы не могли бы закрыть окно?|Ви не могли б зачинити вікно?
polite|I was wondering if you could help me.|Je me demandais si vous pourriez m’aider.|Я хотел спросить, не могли бы вы мне помочь.|Я хотів запитати, чи не могли б ви мені допомогти.
polite|Do you happen to know where the station is?|Vous ne sauriez pas où est la gare, par hasard ?|Вы случайно не знаете, где вокзал?|Ви випадково не знаєте, де вокзал?
polite|Sorry to bother you, but…|Désolé de vous déranger, mais…|Извините за беспокойство, но…|Вибачте, що турбую, але…
polite|Could I have a word with you?|Je peux vous dire un mot ?|Можно с вами поговорить?|Можна з вами поговорити?
polite|After you.|Après vous.|Только после вас.|Тільки після вас.
polite|Excuse me, is this seat taken?|Excusez-moi, cette place est prise ?|Извините, это место занято?|Перепрошую, це місце зайняте?
polite|Thanks a lot, I really appreciate it.|Merci beaucoup, c’est très apprécié.|Большое спасибо, я очень ценю это.|Щиро дякую, я дуже це ціную.
polite|No worries.|Pas de souci.|Не за что / Без проблем.|Нема за що / Без проблем.
react|That sounds great!|Ça a l’air génial !|Звучит здорово!|Звучить чудово!
react|You’re kidding!|Tu plaisantes !|Ты шутишь!|Ти жартуєш!
react|No way!|Pas possible ! / Jamais de la vie !|Не может быть! / Ни за что!|Не може бути! / Нізащо!
react|Fair enough.|D’accord, c’est juste.|Справедливо / Ладно.|Справедливо / Гаразд.
react|I see what you mean.|Je vois ce que tu veux dire.|Понимаю, что ты имеешь в виду.|Розумію, що ти маєш на увазі.
react|That makes sense.|Ça se tient.|Это логично.|Це логічно.
react|What a shame!|Quel dommage !|Как жаль!|Як шкода!
react|Good for you!|Tant mieux pour toi ! / Bravo !|Молодец! / Рад за тебя!|Молодець! / Радий за тебе!
react|Never mind.|Laisse tomber / Ce n’est pas grave.|Неважно / Ничего страшного.|Неважливо / Нічого страшного.
react|Fingers crossed!|Croisons les doigts !|Скрестим пальцы!|Тримаймо кулаки!
react|Tell me about it!|À qui le dis-tu !|И не говори!|І не кажи!
react|Same here.|Pareil pour moi.|У меня тоже.|У мене теж.
opinion|In my opinion, it’s too expensive.|À mon avis, c’est trop cher.|По-моему, это слишком дорого.|На мою думку, це занадто дорого.
opinion|As far as I’m concerned, it’s fine.|En ce qui me concerne, ça va.|Что касается меня, всё нормально.|Що стосується мене, все нормально.
opinion|I’d say it’s worth a try.|Je dirais que ça vaut le coup d’essayer.|Я бы сказал, стоит попробовать.|Я б сказав, варто спробувати.
opinion|If you ask me, he’s right.|Si tu veux mon avis, il a raison.|Если хочешь знать моё мнение, он прав.|Якщо хочеш знати мою думку, він має рацію.
opinion|I’m not sure about that.|Je n’en suis pas sûr.|Я в этом не уверен.|Я в цьому не впевнений.
opinion|I couldn’t agree more.|Je suis entièrement d’accord.|Полностью согласен.|Цілком згоден.
opinion|I see your point, but…|Je comprends ton point de vue, mais…|Я понимаю твою точку зрения, но…|Я розумію твою позицію, але…
opinion|To be honest, I don’t really like it.|Pour être honnête, ça ne me plaît pas trop.|Честно говоря, мне это не очень нравится.|Чесно кажучи, мені це не дуже подобається.
opinion|It depends on how you look at it.|Ça dépend de comment on voit les choses.|Зависит от того, как на это посмотреть.|Залежить від того, як на це подивитися.
opinion|I’m in two minds about it.|J’hésite, je suis partagé.|Я в раздумьях, не могу решить.|Я вагаюся, не можу вирішити.
debate|That’s a good point.|C’est un bon argument.|Это хороший аргумент.|Це слушний аргумент.
debate|I’m afraid I disagree.|Je crains de ne pas être d’accord.|Боюсь, я не согласен.|Боюся, я не згоден.
debate|Let me play devil’s advocate.|Je vais jouer l’avocat du diable.|Позволь мне сыграть адвоката дьявола.|Дозволь зіграти адвоката диявола.
debate|On the one hand…, on the other hand…|D’un côté…, de l’autre…|С одной стороны…, с другой стороны…|З одного боку…, з іншого боку…
debate|That’s not what I meant.|Ce n’est pas ce que je voulais dire.|Я не это имел в виду.|Я не це мав на увазі.
debate|Could you be more specific?|Pourrais-tu être plus précis ?|Не мог бы ты уточнить?|Чи не міг би ти уточнити?
debate|Let’s agree to disagree.|Restons-en à nos désaccords.|Останемся каждый при своём мнении.|Залишимося кожен при своїй думці.
debate|The point is that we need more time.|Le fait est qu’il nous faut plus de temps.|Суть в том, что нам нужно больше времени.|Суть у тому, що нам потрібно більше часу.
debate|Having said that, I still think it’s risky.|Cela dit, je pense toujours que c’est risqué.|Тем не менее, я всё равно считаю, что это рискованно.|Утім, я все одно вважаю, що це ризиковано.
debate|Correct me if I’m wrong, but…|Corrige-moi si je me trompe, mais…|Поправь меня, если я ошибаюсь, но…|Виправ мене, якщо я помиляюся, але…
work|I’m snowed under at the moment.|Je suis débordé en ce moment.|Я сейчас завален работой.|Я зараз завалений роботою.
work|Can we touch base tomorrow?|On peut faire le point demain ?|Можем созвониться завтра?|Можемо зв’язатися завтра?
work|I’ll get back to you on that.|Je reviens vers toi là-dessus.|Я вернусь к тебе с ответом.|Я повернуся до тебе з відповіддю.
work|I’m working from home today.|Je suis en télétravail aujourd’hui.|Сегодня я работаю из дома.|Сьогодні я працюю з дому.
work|What’s the deadline?|C’est pour quand ?|Какой срок сдачи?|Який кінцевий термін?
work|I’m afraid I can’t make it.|Je crains de ne pas pouvoir venir.|Боюсь, я не смогу.|Боюся, я не зможу.
work|Let me know if you need anything.|Dis-moi si tu as besoin de quoi que ce soit.|Дай знать, если что-нибудь понадобится.|Дай знати, якщо щось знадобиться.
work|I’ve got a lot on my plate.|J’ai beaucoup de choses sur le feu.|У меня много дел.|У мене багато справ.
work|Could you walk me through it?|Tu pourrais m’expliquer étape par étape ?|Можешь объяснить мне по шагам?|Можеш пояснити мені крок за кроком?
work|I’m taking a day off on Friday.|Je prends un jour de congé vendredi.|В пятницу я беру выходной.|У п’ятницю я беру вихідний.
meeting|Let’s get started, shall we?|Commençons, d’accord ?|Давайте начнём?|Почнімо?
meeting|Shall we move on to the next point?|On passe au point suivant ?|Перейдём к следующему пункту?|Перейдімо до наступного пункту?
meeting|Sorry, could I just come in here?|Pardon, je peux intervenir ?|Извините, можно я вставлю слово?|Перепрошую, можна я додам?
meeting|Let’s keep it brief.|Soyons brefs.|Давайте покороче.|Будьмо стислими.
meeting|We’re running out of time.|Le temps presse.|У нас заканчивается время.|У нас закінчується час.
meeting|Could you send me the slides?|Tu pourrais m’envoyer les diapos ?|Можешь прислать мне слайды?|Можеш надіслати мені слайди?
meeting|To sum up, we agreed on three things.|Pour résumer, nous sommes d’accord sur trois points.|Подводя итог, мы договорились о трёх вещах.|Підсумовуючи, ми домовилися про три речі.
meeting|Any other business?|D’autres questions ?|Есть ещё вопросы?|Є ще питання?
meeting|You’re on mute.|Ton micro est coupé.|У тебя выключен микрофон.|У тебе вимкнений мікрофон.
meeting|Can everyone see my screen?|Tout le monde voit mon écran ?|Всем видно мой экран?|Усім видно мій екран?
phone|Who’s calling, please?|C’est de la part de qui ?|Кто звонит?|Хто телефонує?
phone|Hold on, I’ll put you through.|Ne quittez pas, je vous le passe.|Подождите, я вас соединю.|Зачекайте, я вас з’єдную.
phone|Can I take a message?|Je peux prendre un message ?|Что-нибудь передать?|Щось передати?
phone|Sorry, you’re breaking up.|Désolé, ça coupe.|Извините, вас плохо слышно.|Перепрошую, вас погано чути.
phone|I’ll call you back later.|Je te rappelle plus tard.|Я перезвоню тебе позже.|Я передзвоню тобі пізніше.
phone|I think you’ve got the wrong number.|Je crois que vous vous êtes trompé de numéro.|Кажется, вы ошиблись номером.|Здається, ви помилилися номером.
phone|Could you speak up a bit?|Vous pourriez parler un peu plus fort ?|Не могли бы вы говорить погромче?|Чи не могли б ви говорити голосніше?
phone|Let me check and text you.|Je vérifie et je t’envoie un texto.|Я проверю и напишу тебе.|Я перевірю й напишу тобі.
email|I hope this email finds you well.|J’espère que vous allez bien.|Надеюсь, у вас всё хорошо.|Сподіваюся, у вас усе добре.
email|I’m writing to ask about…|Je vous écris pour me renseigner sur…|Пишу, чтобы узнать о…|Пишу, щоб дізнатися про…
email|Please find attached the report.|Veuillez trouver ci-joint le rapport.|Отчёт во вложении.|Звіт у вкладенні.
email|Thank you for your quick reply.|Merci pour votre réponse rapide.|Спасибо за быстрый ответ.|Дякую за швидку відповідь.
email|Sorry for the late reply.|Désolé pour cette réponse tardive.|Извините за поздний ответ.|Вибачте за пізню відповідь.
email|I look forward to hearing from you.|Dans l’attente de votre réponse.|С нетерпением жду вашего ответа.|З нетерпінням чекаю на вашу відповідь.
email|Just a quick reminder about tomorrow’s meeting.|Petit rappel pour la réunion de demain.|Небольшое напоминание о завтрашней встрече.|Невелике нагадування про завтрашню нараду.
email|Kind regards,|Cordialement,|С уважением,|З повагою,
email|Could you confirm by Friday?|Pourriez-vous confirmer d’ici vendredi ?|Не могли бы вы подтвердить до пятницы?|Чи не могли б ви підтвердити до п’ятниці?
travel|I’d like to check in, please.|Je voudrais m’enregistrer, s’il vous plaît.|Я бы хотел заселиться.|Я хотів би заселитися.
travel|Is breakfast included?|Le petit-déjeuner est compris ?|Завтрак включён?|Сніданок включено?
travel|What time is check-out?|À quelle heure faut-il libérer la chambre ?|Во сколько выезд?|О котрій виселення?
travel|My flight has been cancelled.|Mon vol a été annulé.|Мой рейс отменили.|Мій рейс скасували.
travel|Where can I catch a taxi?|Où est-ce que je peux prendre un taxi ?|Где можно взять такси?|Де можна взяти таксі?
travel|Could you recommend somewhere to eat?|Vous pourriez me conseiller un endroit pour manger ?|Не посоветуете, где можно поесть?|Не порадите, де можна поїсти?
travel|Is it within walking distance?|On peut y aller à pied ?|Туда можно дойти пешком?|Туди можна дійти пішки?
travel|I’m just here for a few days.|Je ne suis là que pour quelques jours.|Я здесь всего на несколько дней.|Я тут лише на кілька днів.
travel|Could you take a photo of us?|Vous pourriez nous prendre en photo ?|Не могли бы вы нас сфотографировать?|Чи не могли б ви нас сфотографувати?
restaurant|Do you have a table for four?|Vous avez une table pour quatre ?|У вас есть столик на четверых?|У вас є столик на чотирьох?
restaurant|Could we see the menu, please?|On pourrait voir la carte, s’il vous plaît ?|Можно меню, пожалуйста?|Можна меню, будь ласка?
restaurant|What would you recommend?|Que nous conseillez-vous ?|Что бы вы порекомендовали?|Що б ви порадили?
restaurant|I’ll have the soup to start.|Je prendrai la soupe en entrée.|Я возьму суп на первое.|Я візьму суп на перше.
restaurant|I’m allergic to nuts.|Je suis allergique aux noix.|У меня аллергия на орехи.|У мене алергія на горіхи.
restaurant|Could we have the bill, please?|L’addition, s’il vous plaît.|Счёт, пожалуйста.|Рахунок, будь ласка.
restaurant|Can we split the bill?|On peut payer séparément ?|Можно разделить счёт?|Можна розділити рахунок?
restaurant|It’s on me.|C’est pour moi (j’invite).|Я угощаю.|Я пригощаю.
restaurant|Keep the change.|Gardez la monnaie.|Сдачи не надо.|Решти не треба.
problems|There seems to be a mistake on the bill.|Il semble y avoir une erreur sur l’addition.|Кажется, в счёте ошибка.|Здається, у рахунку помилка.
problems|This isn’t what I ordered.|Ce n’est pas ce que j’ai commandé.|Это не то, что я заказывал.|Це не те, що я замовляв.
problems|I’d like to make a complaint.|J’aimerais faire une réclamation.|Я хотел бы подать жалобу.|Я хотів би подати скаргу.
problems|Could I speak to the manager?|Je pourrais parler au responsable ?|Можно поговорить с менеджером?|Можна поговорити з менеджером?
problems|It doesn’t work.|Ça ne marche pas.|Это не работает.|Це не працює.
problems|I’ve lost my wallet.|J’ai perdu mon portefeuille.|Я потерял кошелёк.|Я загубив гаманець.
problems|I’d like a refund, please.|Je voudrais être remboursé, s’il vous plaît.|Я хотел бы вернуть деньги.|Я хотів би повернути гроші.
problems|What seems to be the problem?|Quel est le problème ?|В чём проблема?|У чому проблема?
feelings|I’m over the moon!|Je suis aux anges !|Я на седьмом небе!|Я на сьомому небі!
feelings|I’m fed up with this.|J’en ai marre.|Мне это надоело.|Мені це набридло.
feelings|I’m a bit down today.|Je n’ai pas le moral aujourd’hui.|Мне сегодня немного грустно.|Мені сьогодні трохи сумно.
feelings|It’s getting on my nerves.|Ça me tape sur les nerfs.|Это действует мне на нервы.|Це діє мені на нерви.
feelings|I can’t wait!|J’ai trop hâte !|Не могу дождаться!|Не можу дочекатися!
feelings|I’m so relieved.|Je suis tellement soulagé.|У меня камень с души свалился.|У мене камінь з душі впав.
feelings|Don’t worry, it’s not the end of the world.|T’inquiète, ce n’est pas la fin du monde.|Не волнуйся, это не конец света.|Не хвилюйся, це не кінець світу.
feelings|I’m really proud of you.|Je suis vraiment fier de toi.|Я тобой очень горжусь.|Я тобою дуже пишаюся.
plans|Are you free on Saturday?|Tu es libre samedi ?|Ты свободен в субботу?|Ти вільний у суботу?
plans|Do you fancy going for a drink?|Ça te dit d’aller boire un verre ?|Хочешь сходить выпить?|Хочеш піти випити?
plans|I’d love to, but I’m busy.|J’adorerais, mais je suis pris.|С удовольствием бы, но я занят.|Із задоволенням би, але я зайнятий.
plans|Let’s play it by ear.|On verra sur le moment.|Посмотрим по обстоятельствам.|Подивимося за обставинами.
plans|How about Friday instead?|Et vendredi plutôt ?|А как насчёт пятницы?|А як щодо п’ятниці?
plans|Count me in!|Je suis partant !|Я в деле!|Я в ділі!
plans|I’ll let you know.|Je te dirai.|Я дам тебе знать.|Я дам тобі знати.
plans|Something came up, sorry.|J’ai eu un imprévu, désolé.|Извини, кое-что случилось.|Вибач, дещо трапилося.
`);
