// Phrasebook. Line: theme|spanish|french|russian|ukrainian
Object.assign(D.phraseThemes, {
  hello: 'Salutations · Привітання', meet: 'Se présenter · Знайомство', polite: 'Politesse · Ввічливість', understand: 'Comprendre · Розуміння',
  cafe: 'Café & restaurant · Кафе й ресторан', shop: 'Achats · Покупки', city: 'S’orienter · Орієнтування', transport: 'Transports · Транспорт',
  travel: 'Hôtel & voyage · Готель і подорож', time: 'L’heure & les dates · Час і дати', health: 'Santé & urgences · Здоров’я',
  feel: 'Sentiments & opinions · Почуття й думки', plans: 'Projets & invitations · Плани й запрошення', talk: 'Petite conversation · Розмова',
});
D.phrases.push(`
hello|¡Hola! ¿Qué tal?|Salut ! Ça va ?|Привет! Как дела?|Привіт! Як справи?
hello|Buenos días.|Bonjour (le matin).|Доброе утро.|Доброго ранку.
hello|Buenas tardes.|Bonjour (l’après-midi).|Добрый день.|Добрий день.
hello|Buenas noches.|Bonsoir / bonne nuit.|Добрый вечер / спокойной ночи.|Добрий вечір / на добраніч.
hello|¿Cómo estás?|Comment vas-tu ?|Как ты?|Як ти?
hello|Muy bien, ¿y tú?|Très bien, et toi ?|Очень хорошо, а ты?|Дуже добре, а ти?
hello|Hasta luego.|À plus tard.|До встречи.|До зустрічі.
hello|Hasta mañana.|À demain.|До завтра.|До завтра.
hello|Nos vemos.|On se voit / à plus.|Увидимся.|Побачимося.
hello|¡Que tengas un buen día!|Bonne journée !|Хорошего дня!|Гарного дня!
hello|Encantado de conocerte.|Ravi de te connaître.|Приятно познакомиться.|Приємно познайомитися.
meet|¿Cómo te llamas?|Comment t’appelles-tu ?|Как тебя зовут?|Як тебе звати?
meet|Me llamo Iván.|Je m’appelle Ivan.|Меня зовут Иван.|Мене звати Іван.
meet|¿De dónde eres?|D’où viens-tu ?|Откуда ты?|Звідки ти?
meet|Soy de Ucrania, pero vivo en Francia.|Je suis d’Ukraine, mais je vis en France.|Я из Украины, но живу во Франции.|Я з України, але живу у Франції.
meet|¿Cuántos años tienes?|Quel âge as-tu ?|Сколько тебе лет?|Скільки тобі років?
meet|Tengo treinta años.|J’ai trente ans.|Мне тридцать лет.|Мені тридцять років.
meet|¿A qué te dedicas?|Qu’est-ce que tu fais dans la vie ?|Чем ты занимаешься?|Чим ти займаєшся?
meet|Trabajo en una empresa de informática.|Je travaille dans une entreprise d’informatique.|Я работаю в IT-компании.|Я працюю в IT-компанії.
meet|Hablo francés, ruso y ucraniano.|Je parle français, russe et ukrainien.|Я говорю по-французски, по-русски и по-украински.|Я розмовляю французькою, російською та українською.
meet|Estoy aprendiendo español.|J’apprends l’espagnol.|Я учу испанский.|Я вчу іспанську.
meet|Te presento a mi amigo.|Je te présente mon ami.|Познакомься, это мой друг.|Знайомся, це мій друг.
polite|Por favor.|S’il te plaît / s’il vous plaît.|Пожалуйста.|Будь ласка.
polite|Muchas gracias.|Merci beaucoup.|Большое спасибо.|Щиро дякую.
polite|De nada.|De rien.|Не за что.|Нема за що.
polite|Perdón.|Pardon.|Извините.|Перепрошую.
polite|Lo siento mucho.|Je suis vraiment désolé.|Мне очень жаль.|Мені дуже шкода.
polite|No pasa nada.|Ce n’est rien / pas de souci.|Ничего страшного.|Нічого страшного.
polite|Con permiso.|Pardon, je peux passer ?|Разрешите пройти.|Дозвольте пройти.
polite|¿Me puede ayudar, por favor?|Vous pouvez m’aider, s’il vous plaît ?|Вы не могли бы мне помочь?|Чи не могли б ви мені допомогти?
polite|¡Que aproveche!|Bon appétit !|Приятного аппетита!|Смачного!
polite|¡Salud!|Santé ! / À tes souhaits !|Будьте здоровы! / За здоровье!|Будь здоровий! / За здоров’я!
understand|No entiendo.|Je ne comprends pas.|Я не понимаю.|Я не розумію.
understand|¿Puede repetir, por favor?|Vous pouvez répéter, s’il vous plaît ?|Повторите, пожалуйста.|Повторіть, будь ласка.
understand|Más despacio, por favor.|Plus lentement, s’il vous plaît.|Помедленнее, пожалуйста.|Повільніше, будь ласка.
understand|¿Qué significa esta palabra?|Que signifie ce mot ?|Что значит это слово?|Що означає це слово?
understand|¿Cómo se dice «merci» en español?|Comment dit-on « merci » en espagnol ?|Как сказать «спасибо» по-испански?|Як сказати «дякую» іспанською?
understand|¿Hablas inglés?|Tu parles anglais ?|Ты говоришь по-английски?|Ти розмовляєш англійською?
understand|Hablo un poco de español.|Je parle un peu espagnol.|Я немного говорю по-испански.|Я трохи розмовляю іспанською.
understand|¿Me lo puedes escribir?|Tu peux me l’écrire ?|Можешь мне это написать?|Можеш мені це написати?
understand|No lo sé.|Je ne sais pas.|Я не знаю.|Я не знаю.
understand|Vale, entendido.|D’accord, compris.|Хорошо, понял.|Добре, зрозумів.
cafe|Una mesa para dos, por favor.|Une table pour deux, s’il vous plaît.|Столик на двоих, пожалуйста.|Столик на двох, будь ласка.
cafe|¿Nos trae la carta, por favor?|Vous nous apportez la carte, s’il vous plaît ?|Принесите, пожалуйста, меню.|Принесіть, будь ласка, меню.
cafe|Para mí, un café con leche.|Pour moi, un café au lait.|Мне кофе с молоком.|Мені каву з молоком.
cafe|¿Qué me recomienda?|Que me conseillez-vous ?|Что вы порекомендуете?|Що ви порадите?
cafe|Soy vegetariano.|Je suis végétarien.|Я вегетарианец.|Я вегетаріанець.
cafe|¿Tiene el menú del día?|Vous avez le menu du jour ?|У вас есть комплексный обед?|У вас є комплексний обід?
cafe|Está buenísimo.|C’est délicieux.|Очень вкусно.|Дуже смачно.
cafe|La cuenta, por favor.|L’addition, s’il vous plaît.|Счёт, пожалуйста.|Рахунок, будь ласка.
cafe|¿Puedo pagar con tarjeta?|Je peux payer par carte ?|Можно оплатить картой?|Можна оплатити карткою?
cafe|Una caña y unas tapas, por favor.|Une petite bière et quelques tapas, s’il vous plaît.|Пиво и закуски, пожалуйста.|Пиво й закуски, будь ласка.
cafe|¿Dónde están los servicios?|Où sont les toilettes ?|Где туалет?|Де туалет?
shop|¿Cuánto cuesta?|Combien ça coûte ?|Сколько стоит?|Скільки коштує?
shop|Es demasiado caro.|C’est trop cher.|Это слишком дорого.|Це занадто дорого.
shop|Solo estoy mirando, gracias.|Je regarde seulement, merci.|Я просто смотрю, спасибо.|Я просто дивлюся, дякую.
shop|¿Tiene esto en otra talla?|Vous avez ça dans une autre taille ?|У вас есть это в другом размере?|У вас є це в іншому розмірі?
shop|¿Puedo probármelo?|Je peux l’essayer ?|Можно примерить?|Можна приміряти?
shop|Me lo llevo.|Je le prends.|Я это возьму.|Я це візьму.
shop|¿Quiere bolsa?|Vous voulez un sac ?|Вам нужен пакет?|Вам потрібен пакет?
shop|¿A qué hora cierran?|À quelle heure fermez-vous ?|Во сколько вы закрываетесь?|О котрій ви зачиняєтеся?
shop|Quería medio kilo de tomates.|Je voudrais un demi-kilo de tomates.|Мне полкило помидоров.|Мені пів кіло помідорів.
shop|¿Me hace un descuento?|Vous me faites une réduction ?|Сделаете скидку?|Зробите знижку?
city|Perdone, ¿dónde está la estación?|Pardon, où est la gare ?|Извините, где вокзал?|Перепрошую, де вокзал?
city|Siga todo recto.|Continuez tout droit.|Идите прямо.|Ідіть прямо.
city|Gire a la derecha.|Tournez à droite.|Поверните направо.|Поверніть праворуч.
city|Gire a la izquierda.|Tournez à gauche.|Поверните налево.|Поверніть ліворуч.
city|Está a cinco minutos a pie.|C’est à cinq minutes à pied.|Это в пяти минутах пешком.|Це за п’ять хвилин пішки.
city|¿Está lejos?|C’est loin ?|Это далеко?|Це далеко?
city|Está al lado del banco.|C’est à côté de la banque.|Это рядом с банком.|Це поруч із банком.
city|Me he perdido.|Je me suis perdu.|Я заблудился.|Я заблукав.
city|¿Hay una farmacia por aquí?|Il y a une pharmacie par ici ?|Здесь есть аптека?|Тут є аптека?
city|En la esquina, a la derecha.|Au coin, à droite.|На углу, справа.|На розі, праворуч.
transport|Un billete para Sevilla, por favor.|Un billet pour Séville, s’il vous plaît.|Один билет до Севильи, пожалуйста.|Один квиток до Севільї, будь ласка.
transport|De ida y vuelta.|Aller-retour.|Туда и обратно.|Туди й назад.
transport|¿A qué hora sale el tren?|À quelle heure part le train ?|Во сколько отправляется поезд?|О котрій відправляється потяг?
transport|¿De qué andén sale?|Il part de quel quai ?|С какой платформы он отправляется?|З якої платформи він відправляється?
transport|¿Este autobús va al centro?|Ce bus va au centre ?|Этот автобус идёт в центр?|Цей автобус їде до центру?
transport|¿Dónde tengo que bajar?|Où dois-je descendre ?|Где мне выходить?|Де мені виходити?
transport|Lléveme a esta dirección, por favor.|Emmenez-moi à cette adresse, s’il vous plaît.|Отвезите меня по этому адресу, пожалуйста.|Відвезіть мене за цією адресою, будь ласка.
transport|El tren lleva retraso.|Le train a du retard.|Поезд опаздывает.|Потяг запізнюється.
transport|He perdido el autobús.|J’ai raté le bus.|Я опоздал на автобус.|Я запізнився на автобус.
transport|¿Cuánto tarda?|Ça prend combien de temps ?|Сколько времени это займёт?|Скільки часу це займе?
travel|Tengo una reserva.|J’ai une réservation.|У меня бронь.|У мене бронювання.
travel|¿Tienen habitaciones libres?|Vous avez des chambres libres ?|У вас есть свободные номера?|У вас є вільні номери?
travel|Una habitación doble para tres noches.|Une chambre double pour trois nuits.|Двухместный номер на три ночи.|Двомісний номер на три ночі.
travel|¿Está incluido el desayuno?|Le petit-déjeuner est compris ?|Завтрак включён?|Сніданок включено?
travel|¿Cuál es la contraseña del wifi?|Quel est le mot de passe du wifi ?|Какой пароль от вайфая?|Який пароль від вайфаю?
travel|El aire acondicionado no funciona.|La climatisation ne marche pas.|Кондиционер не работает.|Кондиціонер не працює.
travel|¿A qué hora hay que dejar la habitación?|À quelle heure faut-il libérer la chambre ?|Во сколько нужно освободить номер?|О котрій треба звільнити номер?
travel|¿Puedo dejar la maleta aquí?|Je peux laisser ma valise ici ?|Можно оставить здесь чемодан?|Можна залишити тут валізу?
travel|Estoy de vacaciones.|Je suis en vacances.|Я в отпуске.|Я у відпустці.
travel|¿Qué se puede visitar aquí?|Qu’est-ce qu’on peut visiter ici ?|Что здесь можно посмотреть?|Що тут можна подивитися?
time|¿Qué hora es?|Quelle heure est-il ?|Который час?|Котра година?
time|Son las tres y cuarto.|Il est trois heures et quart.|Четверть четвёртого.|Чверть на четверту.
time|Es la una y media.|Il est une heure et demie.|Половина второго.|Пів на другу.
time|Son las ocho menos diez.|Il est huit heures moins dix.|Без десяти восемь.|За десять восьма.
time|¿Qué día es hoy?|Quel jour sommes-nous ?|Какой сегодня день?|Який сьогодні день?
time|Hoy es el doce de marzo.|Aujourd’hui, c’est le 12 mars.|Сегодня двенадцатое марта.|Сьогодні дванадцяте березня.
time|¿Cuándo es tu cumpleaños?|C’est quand ton anniversaire ?|Когда у тебя день рождения?|Коли в тебе день народження?
time|Llego dentro de diez minutos.|J’arrive dans dix minutes.|Я буду через десять минут.|Я буду за десять хвилин.
time|Llevo dos años aquí.|Je suis ici depuis deux ans.|Я здесь уже два года.|Я тут уже два роки.
time|Hace tres días.|Il y a trois jours.|Три дня назад.|Три дні тому.
health|No me encuentro bien.|Je ne me sens pas bien.|Мне нехорошо.|Мені погано.
health|Me duele aquí.|J’ai mal ici.|У меня болит здесь.|У мене болить тут.
health|Necesito un médico.|J’ai besoin d’un médecin.|Мне нужен врач.|Мені потрібен лікар.
health|Tengo fiebre.|J’ai de la fièvre.|У меня температура.|У мене температура.
health|Soy alérgico a la penicilina.|Je suis allergique à la pénicilline.|У меня аллергия на пенициллин.|У мене алергія на пеніцилін.
health|¡Llame a una ambulancia!|Appelez une ambulance !|Вызовите скорую!|Викличте швидку!
health|¡Socorro!|Au secours !|Помогите!|Допоможіть!
health|Me han robado la cartera.|On m’a volé mon portefeuille.|У меня украли кошелёк.|У мене вкрали гаманець.
health|¿Dónde está la comisaría?|Où est le commissariat ?|Где полицейский участок?|Де поліцейська дільниця?
health|¡Que te mejores!|Bon rétablissement !|Выздоравливай!|Одужуй!
feel|Estoy muy contento.|Je suis très content.|Я очень рад.|Я дуже радий.
feel|Estoy cansado.|Je suis fatigué.|Я устал.|Я втомився.
feel|¡Qué pena!|Quel dommage !|Как жаль!|Як шкода!
feel|¡Qué bien!|Super ! / Que c’est bien !|Как здорово!|Як чудово!
feel|Me da igual.|Ça m’est égal.|Мне всё равно.|Мені все одно.
feel|Creo que tienes razón.|Je crois que tu as raison.|Думаю, ты прав.|Думаю, ти маєш рацію.
feel|No estoy de acuerdo.|Je ne suis pas d’accord.|Я не согласен.|Я не згоден.
feel|En mi opinión, es una buena idea.|À mon avis, c’est une bonne idée.|По-моему, это хорошая идея.|На мою думку, це гарна ідея.
feel|¡No me digas!|Pas possible ! / Sans blague !|Да ты что!|Та ну!
feel|Tengo ganas de verte.|J’ai envie de te voir.|Мне хочется тебя увидеть.|Мені хочеться тебе побачити.
feel|Te echo de menos.|Tu me manques.|Я по тебе скучаю.|Я сумую за тобою.
plans|¿Qué haces este fin de semana?|Qu’est-ce que tu fais ce week-end ?|Что ты делаешь в выходные?|Що ти робиш на вихідних?
plans|¿Quedamos mañana?|On se voit demain ?|Встретимся завтра?|Зустрінемося завтра?
plans|¿Te apetece tomar algo?|Ça te dit de prendre un verre ?|Хочешь чего-нибудь выпить?|Хочеш чогось випити?
plans|¡Claro, me encantaría!|Bien sûr, avec plaisir !|Конечно, с удовольствием!|Звісно, із задоволенням!
plans|Lo siento, no puedo.|Désolé, je ne peux pas.|Извини, я не могу.|Вибач, я не можу.
plans|¿A qué hora quedamos?|À quelle heure on se retrouve ?|Во сколько встречаемся?|О котрій зустрічаємося?
plans|Te espero en la puerta del cine.|Je t’attends devant le cinéma.|Жду тебя у входа в кинотеатр.|Чекаю на тебе біля входу в кінотеатр.
plans|Hoy invito yo.|Aujourd’hui, c’est moi qui invite.|Сегодня я угощаю.|Сьогодні я пригощаю.
plans|Llego un poco tarde.|J’arrive un peu en retard.|Я немного опоздаю.|Я трохи запізнюся.
plans|¡Vale, hasta luego!|D’accord, à plus tard !|Ладно, до встречи!|Гаразд, до зустрічі!
talk|¿Qué tiempo hace hoy?|Quel temps fait-il aujourd’hui ?|Какая сегодня погода?|Яка сьогодні погода?
talk|Hace mucho calor.|Il fait très chaud.|Очень жарко.|Дуже спекотно.
talk|Está lloviendo.|Il pleut.|Идёт дождь.|Іде дощ.
talk|¿Qué te gusta hacer en tu tiempo libre?|Qu’aimes-tu faire pendant ton temps libre ?|Что ты любишь делать в свободное время?|Що ти любиш робити у вільний час?
talk|Me gusta leer y viajar.|J’aime lire et voyager.|Я люблю читать и путешествовать.|Я люблю читати й подорожувати.
talk|¿Tienes hermanos?|Tu as des frères et sœurs ?|У тебя есть братья или сёстры?|У тебе є брати чи сестри?
talk|¿Has estado alguna vez en España?|Tu es déjà allé en Espagne ?|Ты когда-нибудь был в Испании?|Ти коли-небудь був в Іспанії?
talk|¡Qué interesante!|Comme c’est intéressant !|Как интересно!|Як цікаво!
talk|¿En serio?|Sérieux ? / C’est vrai ?|Серьёзно?|Серйозно?
talk|Bueno, me tengo que ir.|Bon, je dois y aller.|Ну, мне пора.|Ну, мені пора.
`);
