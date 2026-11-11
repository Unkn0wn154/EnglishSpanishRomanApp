// Spanish verbs for the conjugator. Line: inf|fr|ru|uk|flags|overrides|note — see app.js (Spanish conjugation) for the codes.
D.verbs.push(`
# --- the big irregulars ---
ser|être (essence, identité)|быть (сущность)|бути (сутність)||P=soy,eres,es,somos,sois,son;R=fui,fuiste,fue,fuimos,fuisteis,fueron;I=era,eras,era,éramos,erais,eran;S=sea,seas,sea,seamos,seáis,sean;imp=sé|Ce que l’on EST : identité, origine, métier, matière, heure. Fui = « je fus » ET « j’allai » (même passé que ir).
estar|être (état, lieu)|быть, находиться (состояние)|бути, перебувати (стан)||P=estoy,estás,está,estamos,estáis,están;pret=estuv;S=esté,estés,esté,estemos,estéis,estén;imp=está|Où l’on est et comment l’on va : estoy en casa, estoy cansado. Estar + gérondif = être en train de.
ir|aller|идти, ехать|йти, їхати||P=voy,vas,va,vamos,vais,van;R=fui,fuiste,fue,fuimos,fuisteis,fueron;I=iba,ibas,iba,íbamos,ibais,iban;S=vaya,vayas,vaya,vayamos,vayáis,vayan;imp=ve;ger=yendo|Ir a + infinitif = futur proche (voy a comer = je vais manger), comme en français.
haber|avoir (auxiliaire); il y a (hay)|иметь (вспомогательный); есть (hay)|мати (допоміжне); є (hay)||P=he,has,ha,hemos,habéis,han;pret=hub;fut=habr;S=haya,hayas,haya,hayamos,hayáis,hayan|Seulement auxiliaire (he comido) ; « posséder » = tener. Hay = il y a (≈ есть / є).
tener|avoir, posséder|иметь, у меня есть|мати, у мене є|ie|yo=tengo;pret=tuv;fut=tendr;imp=ten|Tener que + inf. = devoir. Tengo frío/hambre/20 años = j’ai froid/faim/20 ans.
hacer|faire|делать|робити||yo=hago;pret=hic;fut=har;imp=haz;pp=hecho|Météo : hace frío/calor (il fait froid). Durée : hace dos años = il y a deux ans.
decir|dire|говорить, сказать|казати, сказати|i|yo=digo;pret=dij;fut=dir;imp=di;pp=dicho|
poder|pouvoir|мочь|могти|ue|pret=pud;fut=podr;ger=pudiendo|
querer|vouloir; aimer (qqn)|хотеть; любить|хотіти; кохати|ie|pret=quis;fut=querr|Te quiero = je t’aime (affectueux, courant). Querer + inf. = vouloir faire.
saber|savoir|знать|знати||yo=sé;s=sep;pret=sup;fut=sabr|Savoir un fait / savoir faire (sé nadar). Connaître une personne/un lieu = conocer (≈ знать vs знать: le russe ne distingue pas, l’espagnol si).
poner|mettre, poser|класть, ставить|класти, ставити||yo=pongo;pret=pus;fut=pondr;imp=pon;pp=puesto|Ponerse = devenir (se puso rojo) ou mettre un vêtement.
venir|venir|приходить|приходити|ie|yo=vengo;pret=vin;fut=vendr;imp=ven|
dar|donner|давать|давати||P=doy,das,da,damos,dais,dan;R=di,diste,dio,dimos,disteis,dieron;S=dé,des,dé,demos,deis,den|Dar las gracias = remercier. Me da igual = ça m’est égal.
ver|voir; regarder (TV)|видеть; смотреть|бачити; дивитися||P=veo,ves,ve,vemos,veis,ven;R=vi,viste,vio,vimos,visteis,vieron;I=veía,veías,veía,veíamos,veíais,veían;pp=visto|
salir|sortir, partir|выходить|виходити||yo=salgo;fut=saldr;imp=sal|Salir de = sortir de. Salir bien/mal = bien/mal se passer.
traer|apporter|приносить|приносити||yo=traigo;pret=traj|Traer = vers ici (apporter) ; llevar = vers là-bas (emporter).
caer|tomber|падать|падати||yo=caigo|Me cae bien = je le trouve sympa.
oír|entendre|слышать|чути||P=oigo,oyes,oye,oímos,oís,oyen|Oír = entendre (perception) ; escuchar = écouter (attention).
valer|valoir|стоить|коштувати||yo=valgo;fut=valdr|¡Vale! = d’accord ! (Espagne, très courant).
oler|sentir (odeur)|пахнуть; нюхать|пахнути; нюхати||P=huelo,hueles,huele,olemos,oléis,huelen;S=huela,huelas,huela,olamos,oláis,huelan|Huele bien = ça sent bon. Le h- est ajouté devant ue-.
reír|rire|смеяться|сміятися||P=río,ríes,ríe,reímos,reís,ríen;R=reí,reíste,rio,reímos,reísteis,rieron;S=ría,rías,ría,riamos,riáis,rían;ger=riendo;pp=reído|Surtout pronominal : reírse de = se moquer de.
# --- stem-changing e → ie ---
pensar|penser|думать|думати|ie||Pensar en = penser à. Pienso que… = je pense que…
empezar|commencer|начинать|починати|ie||Empezar a + inf. Synonyme : comenzar.
comenzar|commencer|начинать|починати|ie||
cerrar|fermer|закрывать|закривати|ie||
despertar|réveiller|будить|будити|ie||Despertarse = se réveiller.
entender|comprendre|понимать|розуміти|ie||No entiendo = je ne comprends pas (phrase de survie !).
perder|perdre; rater (bus)|терять; опаздывать на|губити; спізнюватися на|ie||
preferir|préférer|предпочитать|віддавати перевагу|ie||
sentir|sentir, ressentir; regretter|чувствовать; сожалеть|відчувати; шкодувати|ie||Lo siento = je suis désolé (litt. « je le ressens »).
mentir|mentir|лгать|брехати|ie||
divertir|amuser|развлекать|розважати|ie||Divertirse = s’amuser.
encender|allumer|включать, зажигать|вмикати, запалювати|ie||
defender|défendre|защищать|захищати|ie||
# --- stem-changing o → ue / u → ue ---
volver|revenir, retourner; refaire|возвращаться; снова (volver a)|повертатися; знову (volver a)|ue|pp=vuelto|Volver a + inf. = refaire : volví a llamar = j’ai rappelé.
devolver|rendre (un objet)|возвращать (вещь)|повертати (річ)|ue|pp=devuelto|
resolver|résoudre|решать|розв’язувати|ue|pp=resuelto|
contar|compter; raconter|считать; рассказывать|рахувати; розповідати|ue||Comme en français, deux sens : compter et conter.
encontrar|trouver; rencontrer|находить; встречать|знаходити; зустрічати|ue||
recordar|se souvenir de; rappeler|помнить; напоминать|пам’ятати; нагадувати|ue||Recordar algo (sans « de »), mais acordarse de algo.
mostrar|montrer|показывать|показувати|ue||
costar|coûter|стоить|коштувати|ue||¿Cuánto cuesta? = combien ça coûte ?
mover|bouger, déplacer|двигать|рухати|ue||
soñar|rêver|мечтать; видеть сон|мріяти; бачити сон|ue||Soñar con = rêver de (avec « con » !).
probar|goûter; essayer|пробовать|куштувати; пробувати|ue||Probarse = essayer (un vêtement).
dormir|dormir|спать|спати|ue||Dormirse = s’endormir.
morir|mourir|умирать|помирати|ue|pp=muerto|
llover|pleuvoir|идти (о дожде)|іти (про дощ)|ue||Impersonnel : llueve = il pleut.
jugar|jouer (jeu, sport)|играть (в игру)|грати (у гру)|u||Seul verbe u → ue. Jugar al fútbol ; jouer d’un instrument = tocar.
# --- stem-changing e → i ---
pedir|demander (qqch), commander|просить; заказывать|просити; замовляти|i||Pedir = demander à obtenir ; preguntar = poser une question (≈ просить vs спрашивать).
repetir|répéter|повторять|повторювати|i||
servir|servir|служить; подавать|служити; подавати|i||¿Para qué sirve? = ça sert à quoi ?
seguir|suivre; continuer|следовать; продолжать|слідувати; продовжувати|i||Seguir + gérondif = continuer à : sigo trabajando.
conseguir|obtenir, réussir à|добиваться, получать|досягати, отримувати|i||
elegir|choisir|выбирать|обирати|i||yo elijo : g → j devant o/a.
vestir|habiller|одевать|одягати|i||Vestirse = s’habiller.
# --- -zc- (conozco) and -uir (construyo) ---
conocer|connaître (personne, lieu)|знать (кого-то), быть знакомым|знати (когось), бути знайомим|zc||Conocer a alguien = connaître qqn (et aussi « faire la connaissance »).
parecer|sembler, paraître|казаться|здаватися|zc||¿Qué te parece? = qu’en penses-tu ? Parecerse a = ressembler à.
crecer|grandir, croître|расти|рости|zc||
nacer|naître|рождаться|народжуватися|zc||
ofrecer|offrir, proposer|предлагать|пропонувати|zc||Offrir un cadeau = regalar.
agradecer|remercier, être reconnaissant de|благодарить за|дякувати за|zc||
conducir|conduire|водить (машину)|водити (машину)|zc|pret=conduj|En Amérique latine : manejar.
traducir|traduire|переводить|перекладати|zc|pret=traduj|
producir|produire|производить|виробляти|zc|pret=produj|
construir|construire|строить|будувати|y||
destruir|détruire|разрушать|руйнувати|y||
incluir|inclure|включать|включати|y||
huir|fuir|убегать|тікати|y||
# --- spelling changes only (regular in sound) ---
buscar|chercher|искать|шукати|||yo busqué : c → qu devant e.
sacar|sortir (qqch), retirer|вынимать, доставать|виймати, діставати|||Sacar una foto = prendre une photo.
tocar|toucher; jouer (instrument)|трогать; играть (на)|торкатися; грати (на)|||Te toca = c’est ton tour.
explicar|expliquer|объяснять|пояснювати|||
llegar|arriver|приходить, приезжать|приходити, приїжджати|||yo llegué : g → gu devant e.
pagar|payer|платить|платити|||
coger|prendre, attraper|брать, ловить|брати, ловити|||En Espagne : neutre (coger el autobús). En Amérique latine : vulgaire, dites tomar.
leer|lire|читать|читати|||leyó, leyeron, leyendo : i → y entre voyelles.
creer|croire|верить; полагать|вірити; вважати|||Creo que sí = je crois que oui.
# --- regular -ar ---
hablar|parler|говорить|говорити|||Modèle des verbes en -ar.
trabajar|travailler|работать|працювати|||
llamar|appeler|звать; звонить|кликати; дзвонити|||Me llamo Ana = je m’appelle Ana.
llevar|porter; emmener; mettre (vêtement)|носить; нести; везти|носити; нести; везти|||Llevar dos años aquí = être ici depuis deux ans.
dejar|laisser; quitter; prêter|оставлять; позволять|залишати; дозволяти|||Dejar de + inf. = arrêter de : dejar de fumar.
pasar|passer; se passer|проходить; случаться|проходити; траплятися|||¿Qué pasa? = qu’est-ce qui se passe ?
quedar|rester; avoir rendez-vous|оставаться; договариваться|залишатися; домовлятися|||Quedar con alguien = avoir rendez-vous avec qqn. ¿Quedamos? = on se voit ?
tomar|prendre; boire|брать; пить|брати; пити|||Tomar un café = prendre un café.
tratar|traiter; essayer (de)|обращаться; пытаться|поводитися; намагатися|||Tratar de + inf. = essayer de.
mirar|regarder|смотреть|дивитися|||Mirar = regarder ; ver = voir.
esperar|attendre; espérer|ждать; надеяться|чекати; сподіватися|||Un seul verbe pour « attendre » et « espérer » !
entrar|entrer|входить|входити|||Entrar en (Espagne) / entrar a (Amérique).
ayudar|aider|помогать|допомагати|||Ayudar a alguien.
cambiar|changer|менять|змінювати|||
escuchar|écouter|слушать|слухати|||
necesitar|avoir besoin de|нуждаться, нужно|потребувати, треба|||Necesito ayuda = j’ai besoin d’aide (sans « de »).
gustar|plaire|нравиться|подобатися|||Me gusta = ça me plaît, exactement comme мне нравится / мені подобається.
amar|aimer (fort, littéraire)|любить|кохати|||Plus fort et plus rare que querer.
comprar|acheter|покупать|купувати|||
ganar|gagner|выигрывать; зарабатывать|вигравати; заробляти|||Gagner un match ET gagner de l’argent.
terminar|terminer|заканчивать|закінчувати|||
usar|utiliser|использовать|використовувати|||
olvidar|oublier|забывать|забувати|||Olvidarse de = oublier (pronominal, courant).
preguntar|demander (question)|спрашивать|питати|||
cuidar|prendre soin de|заботиться|піклуватися|||
viajar|voyager|путешествовать|подорожувати|||
bailar|danser|танцевать|танцювати|||
cantar|chanter|петь|співати|||
estudiar|étudier|учиться, изучать|навчатися, вивчати|||
cocinar|cuisiner|готовить|готувати|||
caminar|marcher|ходить пешком|ходити пішки|||
nadar|nager|плавать|плавати|||
preparar|préparer|готовить|готувати|||
cenar|dîner|ужинать|вечеряти|||
desayunar|prendre le petit-déjeuner|завтракать|снідати|||
levantar|lever|поднимать|піднімати|||Levantarse = se lever.
acabar|finir|кончать|закінчувати|||Acabar de + inf. = venir de : acabo de llegar.
quitar|enlever|снимать, убирать|знімати, прибирати|||
echar|jeter; verser|бросать|кидати|||Echar de menos = regretter, ressentir le manque (Espagne).
bajar|descendre; baisser|спускаться; опускать|спускатися; опускати|||
lavar|laver|мыть|мити|||
enseñar|enseigner; montrer|учить; показывать|навчати; показувати|||
visitar|visiter, rendre visite|посещать|відвідувати|||
descansar|se reposer|отдыхать|відпочивати|||
enviar|envoyer|отправлять|надсилати|acc||yo envío : accent sur le i.
continuar|continuer|продолжать|продовжувати|acc||yo continúo : accent sur le u.
confiar|faire confiance|доверять|довіряти|acc||Confiar en alguien.
# --- regular -er ---
comer|manger|есть|їсти|||Modèle des verbes en -er.
beber|boire|пить|пити|||
aprender|apprendre|учить, учиться|вчити, вчитися|||Aprender a + inf.
comprender|comprendre|понимать|розуміти|||
deber|devoir|быть должным|бути винним, мусити|||Debe de ser… = ce doit être… (supposition).
correr|courir|бегать|бігати|||
vender|vendre|продавать|продавати|||
responder|répondre|отвечать|відповідати|||
romper|casser, rompre|ломать|ламати||pp=roto|
temer|craindre|бояться|боятися|||
meter|mettre (dedans)|класть внутрь|класти всередину|||
prometer|promettre|обещать|обіцяти|||
# --- regular -ir ---
vivir|vivre, habiter|жить|жити|||Modèle des verbes en -ir.
escribir|écrire|писать|писати||pp=escrito|
abrir|ouvrir|открывать|відкривати||pp=abierto|
recibir|recevoir|получать|отримувати|||
decidir|décider|решать|вирішувати|||
subir|monter|подниматься|підніматися|||
compartir|partager|делиться|ділитися|||
existir|exister|существовать|існувати|||
permitir|permettre|позволять|дозволяти|||
sufrir|souffrir|страдать|страждати|||
cubrir|couvrir|покрывать|покривати||pp=cubierto|
descubrir|découvrir|открывать (обнаруживать)|відкривати (виявляти)||pp=descubierto|
`);
