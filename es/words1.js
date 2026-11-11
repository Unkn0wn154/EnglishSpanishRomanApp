// id|word|pos|gender|fr|ru|uk|theme|emoji|note|example (es = fr). Order: Wiktionary Spanish frequency list (subtitles), lemmas.
D.words.push(`
1|que|conj||que; qui|что; который|що; який|core||Sans accent = « que / qui ». Avec accent (qué) = « quoi / quel ».|Creo que sí. = Je crois que oui.
2|de|prep||de|из; (родительный падеж)|з; (родовий відмінок)|core||Comme en français : la casa de Ana = la maison d’Ana. Le russe utiliserait le génitif : дом Анны.|Soy de Madrid. = Je suis de Madrid.
3|no|adv||non; ne… pas|нет; не|ні; не|core|🚫|Un seul mot pour « non » et « ne… pas », placé avant le verbe, exactement comme не / не.|No entiendo. = Je ne comprends pas.
4|a|prep||à; vers|в, на; к|в, на; до|core||Devant une personne COD, « a » est obligatoire : veo a María (« a personnelle »), sans équivalent en français.|Voy a Barcelona. = Je vais à Barcelone.
5|el, la|det||le, la|(определённый артикль)|(означений артикль)|core||Pluriel : los, las. Le russe et l’ukrainien n’ont pas d’article : c’est l’un des premiers réflexes à prendre.|La casa es grande. = La maison est grande.
6|ser|v||être (identité, essence)|быть (сущность)|бути (сутність)|core||Pour ce que l’on est : origine, métier, caractère, heure. L’état passager se dit avec estar.|Soy francés. = Je suis français.
7|y|conj||et|и|і, й|core|➕|Devient « e » devant un mot qui commence par le son i : padre e hijo.|Tú y yo. = Toi et moi.
8|en|prep||dans, en, à; sur|в, на|в, на|core||Lieu sans mouvement : estoy en casa. Le mouvement prend « a » : voy a casa.|Vivo en España. = J’habite en Espagne.
9|lo|pron||le (COD); ce qui (lo que)|его; то, что (lo que)|його; те, що (lo que)|core||Lo que = ce que. Lo + adjectif = ce qui est… : lo bueno = ce qui est bien.|No lo sé. = Je ne le sais pas.
10|un, una|det||un, une|(неопределённый артикль); один|(неозначений артикль); один|core||Pluriel unos, unas = « quelques ».|Tengo un perro. = J’ai un chien.
11|por|prep||par; pour (cause); à travers|через; из-за; по|через; через (причина); по|core||Por = la cause, le chemin, l’échange : gracias por todo. Para = le but. Voir la leçon por/para.|Gracias por todo. = Merci pour tout.
12|qué|pron||quoi ? quel ? que ?|что? какой?|що? який?|core|❓|Toujours avec accent dans une question ou une exclamation : ¡Qué bonito! = Que c’est beau !|¿Qué es esto? = Qu’est-ce que c’est ?
13|me|pron||me, moi|меня; мне|мене; мені|core||COD et COI : me ve (il me voit), me da (il me donne).|Me llamo Pablo. = Je m’appelle Pablo.
14|te|pron||te, toi|тебя; тебе|тебе|core||Te quiero = je t’aime.|Te llamo mañana. = Je t’appelle demain.
15|se|pron||se; on (impersonnel)|себя; -ся|себе; -ся|core||Se habla español = on parle espagnol. Comme le russe -ся : lavarse ≈ мыться.|Aquí se habla español. = Ici on parle espagnol.
16|con|prep||avec|с|з|core|🤝|Conmigo = avec moi, contigo = avec toi (formes spéciales).|Café con leche. = Café au lait.
17|para|prep||pour; afin de|для; чтобы|для; щоб|core|🎯|Le but, le destinataire, l’échéance : para ti, para mañana.|Esto es para ti. = C’est pour toi.
18|mi|det||mon, ma|мой, моя|мій, моя|core||Pluriel mis. Sans accent ! (mí avec accent = moi après préposition).|Mi casa. = Ma maison.
19|estar|v||être (état, lieu)|быть, находиться|бути, перебувати|core||Estar = comment et où : estoy bien, estoy en casa. Le russe omet « être » au présent, l’espagnol jamais.|Estoy cansado. = Je suis fatigué.
20|si|conj||si|если; ли|якщо; чи|core||Sans accent = « si » (condition). Avec accent (sí) = « oui ».|Si quieres, vamos. = Si tu veux, on y va.
21|bien|adv||bien|хорошо|добре|qual|👍|Estoy bien = je vais bien. Más bien = plutôt.|Todo está bien. = Tout va bien.
22|pero|conj||mais|но|але|core||Après une négation qui corrige, on dit « sino » : no es rojo sino azul.|Es caro, pero bueno. = C’est cher, mais bon.
23|yo|pron||je, moi|я|я|core|🙋|Souvent omis : le verbe montre déjà la personne (hablo = je parle), comme en ukrainien familier.|Yo soy Ana. = Moi, je suis Ana.
24|eso|pron||cela, ça|это, то|це, те|core||Eso = ça (ce dont on parle). Esto = ceci (près de moi). Aquello = cela là-bas.|Eso es verdad. = C’est vrai.
25|sí|adv||oui; soi|да; себя|так; себе|core|✅|Avec accent ! Sin = si (condition).|Sí, claro. = Oui, bien sûr.
26|su|det||son, sa, leur; votre (usted)|его, её, их; ваш|його, її, їхній; ваш|core||Ambigu : su casa = sa / leur / votre maison. Le contexte décide, comme свой en russe.|Su coche es rojo. = Sa voiture est rouge.
27|tu|det||ton, ta|твой, твоя|твій, твоя|core||Sans accent = ton/ta ; tú avec accent = toi.|¿Es tu hermano? = C’est ton frère ?
28|aquí|adv||ici|здесь, тут|тут|place|📍|Aquí (ici, où je suis), ahí (là, près de toi), allí (là-bas).|Ven aquí. = Viens ici.
29|al, del|det||au, du (a + el, de + el)|(слитные формы)|(злиті форми)|core||Seules contractions de l’espagnol : a + el = al, de + el = del. Jamais avec la : a la casa.|Voy al cine. = Je vais au cinéma.
30|como|conj||comme; puisque|как; так как|як; оскільки|core||Sans accent : comme. Avec accent (cómo) : comment ?|Es como su padre. = Il est comme son père.
31|le|pron||lui (COI)|ему, ей|йому, їй|core||Le = à lui / à elle / à vous (usted). Devant lo/la, le devient se : se lo doy.|Le escribo una carta. = Je lui écris une lettre.
32|más|adv||plus; davantage|больше; ещё|більше; ще|num|➕|Más que = plus que. ¿Algo más? = Autre chose ?|Quiero más agua. = Je veux plus d’eau.
33|este, esta, esto|det||ce, cette, ceci|этот, эта, это|цей, ця, це|core|👇|Este libro (ce livre-ci). Esto = ceci (neutre, sans nom).|Esta casa es nueva. = Cette maison est neuve.
34|ya|adv||déjà; maintenant; ça y est|уже; сейчас|вже; зараз|time||¡Ya está! = Ça y est ! Ya no = ne… plus. Ya voy = j’arrive.|Ya lo sé. = Je le sais déjà.
35|todo|pron||tout|всё; весь|усе; весь|num||Todo el día = toute la journée. Todos = tous / tout le monde.|Todo está listo. = Tout est prêt.
36|ir|v||aller|идти, ехать|йти, їхати|move|🚶|Un seul verbe pour « aller » à pied ou en véhicule (идти/ехать). Ir a + inf. = futur proche.|Voy a casa. = Je rentre à la maison.
37|muy|adv||très|очень|дуже|qual||Devant adjectif ou adverbe. « Beaucoup » = mucho.|Es muy bonito. = C’est très beau.
38|haber|v||avoir (auxiliaire); il y a (hay)|иметь (вспом.); есть (hay)|мати (допоміжне); є (hay)|core||Hay = il y a, invariable : hay un libro, hay dos libros.|Hay mucha gente. = Il y a beaucoup de monde.
39|ahora|adv||maintenant|сейчас|зараз|time|⏰|Ahora mismo = tout de suite.|Ahora no puedo. = Je ne peux pas maintenant.
40|algo|pron||quelque chose|что-то, что-нибудь|щось|core||¿Algo más? = Autre chose ? Algo + adj. = un peu : algo cansado.|¿Quieres algo? = Tu veux quelque chose ?
41|tener|v||avoir, posséder|иметь|мати|core||« J’ai » = tengo (pas he !). Comme у меня есть / у мене є. Tener que = devoir.|Tengo dos hermanos. = J’ai deux frères.
42|nos|pron||nous (COD/COI)|нас; нам|нас; нам|core||Nos vemos = on se voit (au revoir familier).|Nos vemos mañana. = À demain.
43|tú|pron||tu, toi|ты|ти|core||En Espagne, on tutoie très vite, même des inconnus de son âge.|¿Tú qué piensas? = Et toi, tu en penses quoi ?
44|nada|pron||rien|ничего|нічого|core|🫙|Double négation obligatoire, comme ничего не / нічого не : no veo nada.|No pasa nada. = Ce n’est rien / pas de souci.
45|cuando|conj||quand, lorsque|когда|коли|time||Avec accent (cuándo) dans les questions. Cuando + futur → subjonctif : cuando llegues.|Cuando llueve, me quedo en casa. = Quand il pleut, je reste à la maison.
46|saber|v||savoir|знать; уметь|знати; вміти|feel|🧠|Sé nadar = je sais nager (≈ уметь / вміти). Connaître qqn = conocer.|No sé. = Je ne sais pas.
47|así|adv||ainsi, comme ça|так|так|core||Así que = donc. Así así = comme ci comme ça.|Hazlo así. = Fais-le comme ça.
48|poder|v||pouvoir|мочь|могти|core|💪|¿Se puede? = On peut entrer ?|¿Puedo ayudarte? = Je peux t’aider ?
49|cómo|adv||comment ?|как?|як?|core|❓|¿Cómo estás? = Comment vas-tu ? ¿Cómo te llamas? = Comment t’appelles-tu ?|¿Cómo se dice esto? = Comment on dit ça ?
50|querer|v||vouloir; aimer (qqn)|хотеть; любить|хотіти; любити|feel|❤️|Te quiero : « je t’aime » courant, plus doux que te amo.|Quiero un café. = Je veux un café.
51|solo|adv||seulement; seul|только; один|лише; сам, один|core||Adverbe (seulement) ou adjectif (seul). L’ancienne graphie « sólo » se rencontre encore.|Solo quiero dormir. = Je veux seulement dormir.
52|gracias|int||merci|спасибо|дякую|talk|🙏|Muchas gracias = merci beaucoup. Réponse : de nada.|Gracias por venir. = Merci d’être venu.
53|o|conj||ou|или|або, чи|core||Devient « u » devant un son o : siete u ocho.|¿Té o café? = Thé ou café ?
54|él|pron||il, lui|он|він|core||Avec accent = il/lui. Sans accent (el) = l’article « le ».|Él es mi amigo. = C’est mon ami.
55|bueno|adj||bon; bien (interj.)|хороший, добрый|добрий, хороший|qual|👍|Devient buen devant un nom masculin : buen día. « Bueno… » = bon… / bref…|Es un buen libro. = C’est un bon livre.
56|hacer|v||faire|делать|робити|act|🛠️|Hace frío = il fait froid. Hace dos años = il y a deux ans.|¿Qué haces? = Qu’est-ce que tu fais ?
57|vez|n|f|fois|раз|раз|time|🔁|Pluriel veces. A veces = parfois. Otra vez = encore une fois.|Una vez más. = Une fois de plus.
58|creer|v||croire|верить; считать|вірити; вважати|feel|🤔|Creo que sí / no = je crois que oui / non.|No te creo. = Je ne te crois pas.
59|ella|pron||elle|она|вона|core|👩|Pluriel ellas.|Ella es médica. = Elle est médecin.
60|ese, esa|det||ce…-là, cette…-là|тот, та|той, та|core|👉|Ese libro = ce livre-là (près de toi). Aquel = celui-là, plus loin.|Esa chica es mi hermana. = Cette fille-là est ma sœur.
61|hola|int||salut, bonjour|привет; здравствуйте|привіт; добрий день|talk|👋|Marche à toute heure, avec tout le monde. Le h ne se prononce jamais.|¡Hola! ¿Qué tal? = Salut ! Ça va ?
62|porque|conj||parce que|потому что|тому що, бо|core||En un mot sans accent = parce que. ¿Por qué? (deux mots, accent) = pourquoi ?|Como porque tengo hambre. = Je mange parce que j’ai faim.
63|dios|n|m|dieu|бог|бог|culture|🙏|¡Dios mío! = Mon Dieu ! Avec majuscule pour le Dieu unique.|¡Gracias a Dios! = Dieu merci !
64|quién|pron||qui ?|кто?|хто?|core|❓|Pluriel quiénes. ¿De quién es? = C’est à qui ?|¿Quién es? = Qui est-ce ?
65|nunca|adv||jamais|никогда|ніколи|time||Avant le verbe, pas besoin de « no » : nunca bebo. Après : no bebo nunca.|Nunca es tarde. = Il n’est jamais trop tard.
66|dónde|adv||où ?|где?|де?|place|❓|¿Adónde? = où (direction) ? ¿De dónde? = d’où ?|¿Dónde está el baño? = Où sont les toilettes ?
67|casa|n|f|maison; chez soi|дом|дім, хата|home|🏠|En casa = à la maison (sans mouvement), a casa = vers la maison.|Estoy en casa. = Je suis à la maison.
68|favor|n|m|faveur, service|одолжение, услуга|послуга, ласка|talk|🙏|Por favor = s’il te plaît / s’il vous plaît.|¿Me haces un favor? = Tu me rends un service ?
69|dos|num||deux|два|два|num|2️⃣||Tengo dos hijos. = J’ai deux enfants.
70|tanto|adv||tant, autant|столько; так много|стільки; так багато|num||Tanto como = autant que. Por lo tanto = par conséquent.|Te quiero tanto. = Je t’aime tellement.
71|señor|n|m|monsieur, seigneur|господин|пан|people|🎩|Señora = madame, señorita = mademoiselle. El señor García.|Buenos días, señor. = Bonjour, monsieur.
72|tiempo|n|m|temps (durée et météo)|время; погода|час; погода|time|⏳|Deux sens, comme en français : ¿Qué tiempo hace? = Quel temps fait-il ?|No tengo tiempo. = Je n’ai pas le temps.
73|verdad|n|f|vérité; vrai|правда|правда|abstract|✅|¿Verdad? en fin de phrase = n’est-ce pas ?, comme правда? / правда?|Es verdad. = C’est vrai.
74|mejor|adj||meilleur; mieux|лучше; лучший|краще; кращий|qual|🏆|El mejor = le meilleur. A lo mejor = peut-être (familier).|Es mejor así. = C’est mieux comme ça.
75|hombre|n|m|homme|мужчина; человек|чоловік; людина|people|👨|¡Hombre! = Mais enfin ! / Eh bien ! (interjection très courante en Espagne).|Es un hombre bueno. = C’est un homme bon.
76|usted|pron||vous (politesse, singulier)|вы (вежливое)|ви (ввічливе)|core|🤵|Se conjugue à la 3e personne : usted tiene. Pluriel : ustedes. Abrégé Ud.|¿Usted es el médico? = Vous êtes le médecin ?
77|mucho|adj||beaucoup (de)|много; очень|багато; дуже|num||S’accorde comme adjectif : muchas gracias, muchos años.|Mucho gusto. = Enchanté.
78|entonces|adv||alors, donc|тогда; итак|тоді; отже|core||Hasta entonces = d’ici là.|Entonces, ¿vienes o no? = Alors, tu viens ou pas ?
79|sentir|v||sentir, ressentir|чувствовать|відчувати|feel|💗|Lo siento = je suis désolé. Sentirse bien = se sentir bien.|Lo siento mucho. = Je suis vraiment désolé.
80|ahí|adv||là (près de toi)|там (рядом)|там (поруч)|place|👉|Ahí está = le voilà. Por ahí = par là / quelque part.|Déjalo ahí. = Laisse-le là.
81|ti|pron||toi (après préposition)|тебя, тебе (после предлога)|тебе (після прийменника)|core||Para ti, de ti, sin ti. Mais avec « con » : contigo.|Esto es para ti. = C’est pour toi.
82|vida|n|f|vie|жизнь|життя|abstract|🌱|¡Así es la vida! = C’est la vie ! Mi vida = mon cœur (affectueux).|La vida es bella. = La vie est belle.
83|ver|v||voir; regarder (télé)|видеть; смотреть|бачити; дивитися|act|👀|Ver la tele = regarder la télé. ¡A ver! = Voyons !|Te veo mañana. = Je te vois demain.
84|alguien|pron||quelqu’un|кто-то, кто-нибудь|хтось|people|🧑|Contraire : nadie (personne).|¿Hay alguien? = Il y a quelqu’un ?
85|hasta|prep||jusqu’à; même|до; даже|до; навіть|time||Hasta luego / hasta mañana = à plus tard / à demain.|Hasta mañana. = À demain.
86|sin|prep||sans|без|без|core||Sin embargo = cependant.|Café sin azúcar. = Café sans sucre.
87|mí|pron||moi (après préposition)|меня, мне (после предлога)|мене, мені (після прийменника)|core||A mí me gusta = moi, j’aime. Avec con : conmigo.|¿Es para mí? = C’est pour moi ?
88|año|n|m|année, an|год|рік|time|📅|Attention à la tilde : año (an) ≠ ano (anus). ¿Cuántos años tienes? = Quel âge as-tu ?|Tengo veinte años. = J’ai vingt ans.
89|sobre|prep||sur; au sujet de|на; о|на; про|core||Sobre la mesa = sur la table. Sobre todo = surtout. Un sobre = une enveloppe.|Hablamos sobre el libro. = Nous parlons du livre.
90|decir|v||dire|говорить, сказать|казати, говорити|talk|💬|¿Cómo se dice…? = Comment dit-on… ? Es decir = c’est-à-dire.|¿Qué dices? = Qu’est-ce que tu dis ?
91|uno|num||un (chiffre); on|один|один|num|1️⃣|Uno devient un devant un nom masculin : un libro. « Uno » = on : uno nunca sabe.|Uno, dos, tres. = Un, deux, trois.
92|siempre|adv||toujours|всегда|завжди|time|♾️|« Encore » (toujours en cours) = todavía.|Siempre llega tarde. = Il arrive toujours en retard.
93|cosa|n|f|chose|вещь|річ|abstract|📦|Otra cosa = autre chose. Cualquier cosa = n’importe quoi.|Tengo muchas cosas que hacer. = J’ai plein de choses à faire.
94|también|adv||aussi|тоже, также|теж, також|core||Négatif : tampoco (non plus). Yo también = moi aussi.|Yo también. = Moi aussi.
95|antes|adv||avant|раньше; до|раніше; до|time|⏪|Antes de + nom/inf. : antes de comer.|Lávate las manos antes de comer. = Lave-toi les mains avant de manger.
96|ni|conj||ni|ни|ні|core||Ni… ni… = ni… ni… Ni idea = aucune idée.|No tengo ni idea. = Je n’en ai aucune idée.
97|día|n|m|jour|день|день|time|☀️|Masculin malgré le -a : el día. Buenos días = bonjour.|Buenos días. = Bonjour.
98|noche|n|f|nuit; soir|ночь; вечер|ніч; вечір|time|🌙|Buenas noches = bonsoir ET bonne nuit. Esta noche = ce soir.|Buenas noches. = Bonsoir / bonne nuit.
99|nadie|pron||personne (nul)|никто|ніхто|people||No viene nadie = personne ne vient (double négation, comme никто не).|No hay nadie. = Il n’y a personne.
100|otro|adj||autre|другой; ещё один|інший; ще один|core||Jamais « un otro » : otro café = un autre café.|Otro café, por favor. = Un autre café, s’il vous plaît.
`);
