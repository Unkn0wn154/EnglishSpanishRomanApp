// Grammar lessons. body = HTML in French (🇫🇷 tips, 🇷🇺🇺🇦 comparison boxes); .s = tap to hear. quiz = [{q, opts, a (index), why}]
D.lessons.push(
{
  title: 'Prononciation & accents', sub: 'L’alphabet, les sons, l’accent écrit',
  body: `
<p>L’espagnol se lit <b>comme il s’écrit</b> : une fois les règles connues, tu peux lire n’importe quel mot. Toutes les lettres se prononcent (sauf le <b>h</b>), et le <b>e</b> n’est jamais muet.</p>
<h3>Les sons qui changent du français</h3>
<table><tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
<tr><td>u</td><td>« ou »</td><td><span class="s">luna</span></td></tr>
<tr><td>e</td><td>« é » (jamais muet)</td><td><span class="s">tarde</span></td></tr>
<tr><td>j, g (+e, i)</td><td>jota : comme <b>х</b> russe / ukrainien</td><td><span class="s">jamón</span>, <span class="s">gente</span></td></tr>
<tr><td>ñ</td><td>« gn » (≈ нь)</td><td><span class="s">España</span></td></tr>
<tr><td>ll, y</td><td>« y » (≈ й)</td><td><span class="s">llave</span>, <span class="s">yo</span></td></tr>
<tr><td>ch</td><td>« tch » (= ч)</td><td><span class="s">noche</span></td></tr>
<tr><td>c (+e, i), z</td><td>Espagne : « th » anglais ; Amérique : « s »</td><td><span class="s">cero</span>, <span class="s">zapato</span></td></tr>
<tr><td>r / rr</td><td>r roulé (1 battement) / roulé fort (début de mot, rr)</td><td><span class="s">pero</span> ≠ <span class="s">perro</span></td></tr>
<tr><td>b = v</td><td>même son, entre b et v</td><td><span class="s">vino</span>, <span class="s">bien</span></td></tr>
<tr><td>h</td><td>muet</td><td><span class="s">hola</span>, <span class="s">hotel</span></td></tr>
<tr><td>qu, gu (+e, i)</td><td>« k », « g » (le u ne se dit pas)</td><td><span class="s">queso</span>, <span class="s">guerra</span></td></tr></table>
<h3>Où tombe l’accent tonique ?</h3>
<p>Trois règles suffisent :</p>
<p>1. Mot terminé par une <b>voyelle, n ou s</b> → avant-dernière syllabe : <span class="s">casa</span>, <span class="s">hablan</span>.<br>
2. Terminé par une autre <b>consonne</b> → dernière syllabe : <span class="s">hablar</span>, <span class="s">ciudad</span>.<br>
3. Sinon, on <b>écrit l’accent</b> (tilde) : <span class="s">café</span>, <span class="s">árbol</span>, <span class="s">música</span>.</p>
<p>La tilde distingue aussi des mots courts : <b>tú</b> (toi) / tu (ton), <b>él</b> (il) / el (le), <b>sí</b> (oui) / si (si), <b>qué</b> (quoi ?) / que (que).</p>
<div class="fr-box">🇫🇷 En français l’accent tonique est toujours à la fin. En espagnol il bouge et change le sens : <span class="s">papa</span> (pomme de terre, Amérique) / <span class="s">papá</span> (papa). L’accent écrit n’indique jamais un timbre (é/è) comme en français : il montre seulement la syllabe forte.</div>
<div class="ru-box">🇷🇺🇺🇦 Bonne nouvelle : comme en russe et en ukrainien, l’accent tonique est libre. Mauvaise nouvelle pour un russophone : en espagnol, les voyelles non accentuées ne se réduisent <b>jamais</b> (pas d’« akanie » : <span class="s">bonito</span> se dit « bo-ni-to », pas « ba-ni-ta »). Prononce chaque voyelle nettement.</div>`,
  quiz: [
    Q('Comment se prononce le <b>j</b> de « jamón » ?', ['comme le j français', 'comme х russe / ukrainien', 'comme y', 'il est muet'], 1, 'La jota = х : « khamón ».'),
    Q('Quelle lettre est toujours muette ?', ['h', 'j', 'v', 'ñ'], 0, 'Hola se dit « ola ».'),
    Q('Où est l’accent tonique de « ciudad » ?', ['ciu-', '-dad', 'il n’y en a pas', 'sur le u'], 1, 'Mot terminé par une consonne (sauf n, s) → dernière syllabe.'),
    Q('« Perro » et « pero » :', ['se prononcent pareil', 'perro = r roulé fort ; pero = r simple', 'pero a un r muet', 'perro a deux syllabes de plus'], 1, 'rr = roulé fort ; perro = chien, pero = mais.'),
    Q('Pourquoi « café » a-t-il un accent écrit ?', ['pour faire un son « è »', 'parce que l’accent tonique ne suit pas la règle', 'parce que c’est un mot français', 'il est facultatif'], 1, 'Terminé par une voyelle → normalement avant-dernière syllabe (CA-fe). L’accent écrit signale CA-FÉ.'),
    Q('Que veut dire « tú » avec accent ?', ['ton', 'toi / tu', 'tout', 'trop'], 1, 'tú = toi, tu (pronom) ; tu = ton (possessif).'),
  ],
},
{
  title: 'Noms : genre, pluriel, articles', sub: 'el / la, un / una, el agua, -ma',
  body: `
<p>Deux genres seulement (pas de neutre comme en russe). En général : <b>-o → masculin</b>, <b>-a → féminin</b>.</p>
<table><tr><th></th><th>Masc.</th><th>Fém.</th></tr>
<tr><td>Défini</td><td>el / los</td><td>la / las</td></tr>
<tr><td>Indéfini</td><td>un / unos</td><td>una / unas</td></tr></table>
<h3>Les pièges</h3>
<p>• Masculins en -a (mots grecs) : <b>el problema, el sistema, el tema, el idioma, el mapa, el día, el planeta</b>.<br>
• Féminins en -o : <b>la mano, la foto, la moto, la radio</b>.<br>
• Toujours féminins : <b>-dad, -tad, -ción, -sión, -umbre</b> : la ciudad, la canción.<br>
• <b>el agua, el arma, el alma, el hambre</b> : féminins, mais « el » devant un a tonique (pour éviter « la agua »). Au pluriel : las aguas.</p>
<h3>Le pluriel</h3>
<p>Voyelle → <b>+s</b> : casa → casas. Consonne → <b>+es</b> : ciudad → ciudades, flor → flores. -z → -ces : luz → luces. L’accent écrit peut apparaître ou disparaître : joven → jóvenes, canción → canciones.</p>
<h3>« Lo » neutre</h3>
<p><b>lo</b> + adjectif = « ce qui est… » : <span class="s">lo bueno</span> (ce qui est bien), <span class="s">lo importante es…</span> (l’important, c’est…).</p>
<div class="fr-box">🇫🇷 Beaucoup de genres diffèrent du français : <b>el coche</b> (la voiture), <b>la leche</b> (le lait), <b>la sal</b>, <b>la sangre</b>, <b>el color</b>, <b>el dolor</b>, <b>el error</b>, <b>la nariz</b>. Apprends toujours le mot avec son article.</div>
<div class="ru-box">🇷🇺🇺🇦 L’article est la grande nouveauté : le russe et l’ukrainien n’en ont pas. Règle de base : <b>el/la</b> = ce dont on a déjà parlé ou ce qui est unique (≈ этот / цей léger) ; <b>un/una</b> = un objet nouveau dans la conversation (≈ какой-то / один). Avec les noms en général et les goûts, l’espagnol met l’article défini : <span class="s">me gusta el café</span> (≈ я люблю кофе).</div>`,
  quiz: [
    Q('___ problema', ['el', 'la', 'lo', 'los'], 0, 'Problema est masculin (mot grec en -ma).'),
    Q('___ mano', ['el', 'la', 'un', 'lo'], 1, 'Mano est féminin malgré le -o.'),
    Q('___ agua está fría.', ['La', 'El', 'Lo', 'Un'], 1, 'Féminin, mais « el » devant un a tonique : el agua fría.'),
    Q('Le pluriel de « ciudad » :', ['ciudads', 'ciudades', 'ciudaces', 'ciudad'], 1, 'Consonne → +es.'),
    Q('Le pluriel de « luz » :', ['luzs', 'luzes', 'luces', 'luz'], 2, '-z → -ces.'),
    Q('« Lo importante » veut dire :', ['l’important', 'il est important', 'le plus important de tous', 'un important'], 0, 'Lo + adjectif = ce qui est…'),
  ],
},
{
  title: 'Ser, estar et hay', sub: 'Les deux « être » et « il y a »',
  body: `
<p>L’espagnol a deux verbes « être ». La question à se poser : <b>qu’est-ce que c’est ?</b> (ser) ou <b>comment / où est-ce ?</b> (estar).</p>
<table><tr><th></th><th>ser</th><th>estar</th></tr>
<tr><td>yo</td><td><span class="s">soy</span></td><td><span class="s">estoy</span></td></tr>
<tr><td>tú</td><td>eres</td><td>estás</td></tr><tr><td>él / ella / usted</td><td>es</td><td>está</td></tr>
<tr><td>nosotros</td><td>somos</td><td>estamos</td></tr><tr><td>vosotros</td><td>sois</td><td>estáis</td></tr><tr><td>ellos / ustedes</td><td>son</td><td>están</td></tr></table>
<h3>SER — l’identité</h3>
<p>Nom, origine, métier, nationalité, caractère, matière, heure, date, prix total, où a lieu un événement :<br>
<span class="s">Soy Iván.</span> <span class="s">Es de Kiev.</span> <span class="s">Es médico.</span> <span class="s">Son las tres.</span> <span class="s">La fiesta es en mi casa.</span></p>
<h3>ESTAR — l’état et le lieu</h3>
<p>Où se trouve une chose ou une personne, état passager, humeur, résultat : <span class="s">Estoy en Madrid.</span> <span class="s">Está cansado.</span> <span class="s">La sopa está fría.</span> Et <b>estar + gérondif</b> : <span class="s">estoy comiendo</span> (je suis en train de manger).</p>
<h3>Changement de sens</h3>
<table><tr><td>ser listo = être malin</td><td>estar listo = être prêt</td></tr>
<tr><td>ser aburrido = être ennuyeux</td><td>estar aburrido = s’ennuyer</td></tr>
<tr><td>ser rico = être riche</td><td>estar rico = être délicieux</td></tr>
<tr><td>ser malo = être méchant</td><td>estar malo = être malade</td></tr></table>
<h3>HAY — il y a</h3>
<p><b>Hay</b> (invariable) présente quelque chose de nouveau : <span class="s">Hay un bar aquí.</span> <span class="s">Hay dos bancos.</span> Pour situer une chose connue → estar : <span class="s">El bar está aquí.</span></p>
<div class="ru-box">🇷🇺🇺🇦 Au présent, le russe et l’ukrainien omettent « être » (Я врач / Я лікар). En espagnol, le verbe est <b>obligatoire</b> : <span class="s">Soy médico.</span> <b>Hay</b> correspond exactement à <b>есть / є</b> : У меня есть время ≈ <span class="s">Tengo tiempo</span>, В городе есть парк ≈ <span class="s">Hay un parque en la ciudad</span>. Et comme в / у, « estar » répond à где? / де?</div>
<div class="fr-box">🇫🇷 Astuce : si tu peux dire « se trouver » ou « se sentir » en français, c’est presque toujours <b>estar</b>.</div>`,
  quiz: [
    Q('Mi hermano ___ médico.', ['es', 'está', 'hay', 'tiene'], 0, 'Métier → ser.'),
    Q('Madrid ___ en el centro de España.', ['es', 'está', 'hay', 'son'], 1, 'Situer un lieu → estar.'),
    Q('Hoy ___ muy cansada.', ['soy', 'estoy', 'hay', 'tengo'], 1, 'État passager → estar.'),
    Q('En mi calle ___ dos farmacias.', ['son', 'están', 'hay', 'es'], 2, 'Présenter quelque chose de nouveau → hay (invariable).'),
    Q('La sopa ___ muy rica. (délicieuse)', ['es', 'está', 'hay', 'tiene'], 1, 'estar rico = être délicieux ; ser rico = être riche.'),
    Q('¿Qué hora ___? — ___ las cinco.', ['está / Están', 'es / Son', 'hay / Hay', 'es / Están'], 1, 'L’heure → ser : es la una, son las cinco.'),
  ],
},
{
  title: 'Le présent des verbes réguliers', sub: '-ar, -er, -ir · tú, usted, vosotros',
  body: `
<p>Trois groupes, reconnus à l’infinitif. On enlève -ar / -er / -ir et on ajoute :</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>habl<b>o</b></td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
<tr><td>tú</td><td>habl<b>as</b></td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
<tr><td>él / ella / usted</td><td>habl<b>a</b></td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>áis</b></td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
<tr><td>ellos / ustedes</td><td>habl<b>an</b></td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table>
<h3>On omet le pronom</h3>
<p>La terminaison suffit : <span class="s">Hablo español</span> = je parle espagnol. On garde le pronom pour insister ou contraster : <span class="s">Yo trabajo y tú descansas.</span></p>
<h3>Tu, vous, vous…</h3>
<p><b>tú</b> = tu · <b>usted</b> = vous (poli, 1 personne, verbe à la 3e pers.) · <b>vosotros</b> = vous (plusieurs amis, Espagne) · <b>ustedes</b> = vous (plusieurs, poli ; en Amérique : pour tous).</p>
<div class="ru-box">🇷🇺🇺🇦 Comme en russe/ukrainien, la terminaison porte la personne et on peut omettre le pronom (Говорю по-испански / Розмовляю іспанською). Le système tú / usted ≈ ты / Вы, mais en Espagne on tutoie beaucoup plus tôt — même un serveur ou un collègue plus âgé. Usted se conjugue comme « он/она » : <span class="s">¿Usted habla inglés?</span></div>
<div class="fr-box">🇫🇷 Le présent espagnol sert aussi pour le futur proche (<span class="s">mañana te llamo</span> = je t’appelle demain) et pour « être en train de » quand il n’y a pas d’ambiguïté.</div>`,
  quiz: [
    Q('Nosotros ___ (vivir) en Valencia.', ['vivemos', 'vivimos', 'vivamos', 'viven'], 1, '-ir → nosotros -imos.'),
    Q('¿Tú ___ (hablar) francés?', ['hablas', 'hablás', 'habla', 'hables'], 0, 'tú → -as.'),
    Q('Usted ___ (comer) mucho.', ['comes', 'come', 'comen', 'comé'], 1, 'usted → 3e personne du singulier.'),
    Q('Vosotros ___ (beber) vino.', ['bebéis', 'bebís', 'beben', 'bebáis'], 0, '-er → vosotros -éis.'),
    Q('Pour parler poliment à deux personnes âgées en Espagne :', ['tú', 'vosotros', 'usted', 'ustedes'], 3, 'Ustedes = vous (pluriel, poli).'),
    Q('« Mañana te llamo » signifie :', ['je t’appelais demain', 'je t’appelle demain', 'je t’ai appelé', 'appelle-moi demain'], 1, 'Le présent sert aussi au futur proche.'),
  ],
},
{
  title: 'Le présent irrégulier', sub: 'e→ie, o→ue, e→i · tengo, hago · ir',
  body: `
<p>Beaucoup de verbes très courants changent leur voyelle <b>quand elle est accentuée</b> : toutes les personnes sauf nosotros et vosotros (la « botte »).</p>
<table><tr><th></th><th>e → ie</th><th>o → ue</th><th>e → i</th></tr>
<tr><td></td><td>querer</td><td>poder</td><td>pedir</td></tr>
<tr><td>yo</td><td>qu<b>ie</b>ro</td><td>p<b>ue</b>do</td><td>p<b>i</b>do</td></tr>
<tr><td>tú</td><td>qu<b>ie</b>res</td><td>p<b>ue</b>des</td><td>p<b>i</b>des</td></tr>
<tr><td>él</td><td>qu<b>ie</b>re</td><td>p<b>ue</b>de</td><td>p<b>i</b>de</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>pedimos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>pedís</td></tr>
<tr><td>ellos</td><td>qu<b>ie</b>ren</td><td>p<b>ue</b>den</td><td>p<b>i</b>den</td></tr></table>
<p>Aussi : pensar, empezar, cerrar, entender, preferir, sentir (ie) · volver, dormir, contar, encontrar, costar (ue) · repetir, seguir, servir (i) · <b>jugar</b> : juego (u → ue).</p>
<h3>« Yo » irrégulier</h3>
<p><span class="s">tengo</span> (tener), <span class="s">hago</span> (hacer), <span class="s">pongo</span> (poner), <span class="s">salgo</span> (salir), <span class="s">vengo</span> (venir), <span class="s">digo</span> (decir), <span class="s">traigo</span> (traer), <span class="s">conozco</span> (conocer), <span class="s">sé</span> (saber), <span class="s">doy</span> (dar), <span class="s">veo</span> (ver).</p>
<h3>Totalement irréguliers</h3>
<p><b>ir</b> : voy, vas, va, vamos, vais, van · <b>ser</b> : soy, eres, es, somos, sois, son.<br><b>ir a + infinitif</b> = futur proche : <span class="s">Voy a estudiar.</span></p>
<div class="fr-box">🇫🇷 Le français a le même phénomène, caché : je <b>veu</b>x / nous voulons, je <b>peu</b>x / nous pouvons, je <b>viens</b> / nous venons. L’espagnol est simplement plus régulier dans son irrégularité.</div>
<div class="ru-box">🇷🇺🇺🇦 Pense aux alternances russes/ukrainiennes : писать → пишу, могу → можешь, ходити → ходжу. L’astuce est la même : apprendre <b>yo</b> et <b>nosotros</b>, le reste suit.</div>`,
  quiz: [
    Q('Yo ___ (querer) un café.', ['quero', 'quiero', 'queiro', 'quiere'], 1, 'e → ie : quiero.'),
    Q('Nosotros ___ (poder) venir.', ['puedemos', 'podemos', 'pudemos', 'pueden'], 1, 'Pas de changement à nosotros.'),
    Q('¿A qué hora ___ (volver) tú?', ['volves', 'vuelves', 'vuelvas', 'volvés'], 1, 'o → ue : vuelves.'),
    Q('Yo ___ (hacer) los deberes.', ['hazo', 'haco', 'hago', 'hace'], 2, 'Yo irrégulier : hago.'),
    Q('Ellos ___ (pedir) la cuenta.', ['peden', 'piden', 'pidan', 'pedimos'], 1, 'e → i : piden.'),
    Q('« Voy a llamar » veut dire :', ['j’appelais', 'je vais appeler', 'j’ai appelé', 'va appeler !'], 1, 'ir a + infinitif = futur proche.'),
  ],
},
{
  title: 'Gustar et ses cousins', sub: 'me gusta, me encanta, me duele, me falta',
  body: `
<p>« J’aime le café » se dit <span class="s">Me gusta el café</span> : littéralement « le café me plaît ». La chose aimée est le <b>sujet</b> ; la personne est au datif (me, te, le…).</p>
<table><tr><th>à qui ?</th><th>singulier</th><th>pluriel</th></tr>
<tr><td>(a mí) me</td><td rowspan="6">gusta el cine<br>gusta bailar</td><td rowspan="6">gustan los gatos</td></tr>
<tr><td>(a ti) te</td></tr><tr><td>(a él / ella / usted) le</td></tr><tr><td>(a nosotros) nos</td></tr><tr><td>(a vosotros) os</td></tr><tr><td>(a ellos / ustedes) les</td></tr></table>
<p>Le verbe s’accorde avec la <b>chose</b> : <span class="s">me gustan los perros</span> (pluriel). Avec un infinitif : toujours singulier : <span class="s">nos gusta viajar</span>.</p>
<p>« A mí », « a ti » ajoutent l’insistance ou le contraste : <span class="s">A mí me gusta, pero a ti no.</span> Réponses : <b>a mí también</b> (moi aussi), <b>a mí tampoco</b> (moi non plus).</p>
<h3>Même construction</h3>
<p><b>encantar</b> (adorer) : <span class="s">me encanta</span> · <b>doler</b> (faire mal) : <span class="s">me duele la cabeza</span> · <b>importar</b> : <span class="s">no me importa</span> · <b>interesar</b> · <b>faltar</b> (manquer) : <span class="s">me faltan dos euros</span> · <b>quedar</b> (rester) : <span class="s">me quedan cinco minutos</span> · <b>parecer</b> : <span class="s">¿qué te parece?</span></p>
<div class="ru-box">🇷🇺🇺🇦 C’est <b>exactement</b> мне нравится / мені подобається : Мне нравятся кошки = <span class="s">Me gustan los gatos</span> (accord avec la chose, au pluriel). Et у меня болит голова / у мене болить голова = <span class="s">me duele la cabeza</span>. Tu as déjà la logique — il suffit de remplacer мне par me.</div>
<div class="fr-box">🇫🇷 Le piège pour un francophone est de dire « yo gusto ». En espagnol cela veut dire « je plais » ! Pense au français « ça me plaît ».</div>`,
  quiz: [
    Q('___ gusta el chocolate.', ['Yo', 'Me', 'Mi', 'Mí'], 1, 'Me gusta = ça me plaît.'),
    Q('Me ___ los perros.', ['gusta', 'gustan', 'gusto', 'gustas'], 1, 'Accord avec la chose aimée (pluriel).'),
    Q('A mi hermano ___ gusta bailar.', ['me', 'le', 'lo', 'se'], 1, 'À lui → le.'),
    Q('—Me encanta la playa. —¿A ti? A mí ___. (moi aussi)', ['también', 'tampoco', 'sí', 'mismo'], 0, 'Phrase positive → también.'),
    Q('J’ai mal aux pieds :', ['Me duele los pies', 'Me duelen los pies', 'Tengo dolor los pies', 'Yo duelo los pies'], 1, 'Doler s’accorde avec la partie du corps.'),
    Q('Il me manque cinq euros :', ['Me falta cinco euros', 'Me faltan cinco euros', 'Yo falto cinco euros', 'Falto cinco euros'], 1, 'Faltar s’accorde avec ce qui manque.'),
  ],
},
{
  title: 'Les pronoms compléments', sub: 'lo, la, le, se lo · la « a » personnelle',
  body: `
<table><tr><th></th><th>COD (direct)</th><th>COI (à qqn)</th></tr>
<tr><td>yo</td><td>me</td><td>me</td></tr><tr><td>tú</td><td>te</td><td>te</td></tr>
<tr><td>él / ella / usted</td><td><b>lo / la</b></td><td><b>le</b></td></tr>
<tr><td>nosotros</td><td>nos</td><td>nos</td></tr><tr><td>vosotros</td><td>os</td><td>os</td></tr>
<tr><td>ellos / ustedes</td><td><b>los / las</b></td><td><b>les</b></td></tr></table>
<h3>Place</h3>
<p>Avant le verbe conjugué : <span class="s">Lo compro.</span> <span class="s">Te quiero.</span><br>
<b>Collé à la fin</b> d’un infinitif, d’un gérondif ou d’un impératif affirmatif : <span class="s">Voy a comprarlo</span> (= Lo voy a comprar), <span class="s">¡Dímelo!</span></p>
<h3>Deux pronoms : COI avant COD, et le → se</h3>
<p><span class="s">Te lo doy.</span> (je te le donne). Mais <b>le/les + lo/la</b> devient <b>se lo</b> : <span class="s">Se lo doy</span> (je le lui donne), jamais « le lo ».</p>
<h3>La « a » personnelle</h3>
<p>Devant un COD qui est une <b>personne</b> (ou un animal aimé), on met <b>a</b> : <span class="s">Veo a María.</span> <span class="s">Busco a mi hermano.</span> Mais : <span class="s">Veo la casa.</span></p>
<div class="ru-box">🇷🇺🇺🇦 Le/lo = ему / его ; la distinction COD / COI ressemble au datif / accusatif (его / ему, її / їй). La « a personnelle » marque un accusatif animé — un peu comme l’accusatif animé russe (вижу брата) qui prend la forme du génitif : l’espagnol aussi traite à part les êtres vivants.</div>
<div class="fr-box">🇫🇷 Même ordre qu’en français pour te lo / me lo (« je te le donne »), mais attention : « je le lui donne » = <b>se lo doy</b>.</div>`,
  quiz: [
    Q('¿El libro? Sí, ___ tengo.', ['le', 'lo', 'la', 'se'], 1, 'COD masculin → lo.'),
    Q('Escribo a mi madre → ___ escribo.', ['La', 'Lo', 'Le', 'Se'], 2, 'À qqn (COI) → le.'),
    Q('Je le lui donne :', ['Le lo doy', 'Se lo doy', 'Lo le doy', 'Lo se doy'], 1, 'le + lo → se lo.'),
    Q('Voy a ___ (comprar + lo).', ['lo comprar', 'comprarlo', 'comprar lo', 'comprarle'], 1, 'Collé à l’infinitif.'),
    Q('Veo ___ mi amigo.', ['—', 'a', 'de', 'en'], 1, '« a » personnelle devant une personne COD.'),
    Q('¡Dime ___! (dis-le-moi)', ['lo', 'le', 'la', 'se'], 0, 'Impératif affirmatif : dímelo.'),
  ],
},
{
  title: 'Le passé 1 : perfecto ou indefinido ?', sub: 'he comido / comí',
  body: `
<p>L’espagnol (d’Espagne) a deux passés « finis » :</p>
<h3>Pretérito perfecto — haber + participe</h3>
<p>he, has, ha, hemos, habéis, han + <b>-ado / -ido</b> : <span class="s">He comido.</span> <span class="s">¿Has visto la película?</span><br>
Pour une période <b>pas encore terminée</b> : hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.</p>
<h3>Pretérito indefinido — passé simple « vivant »</h3>
<table><tr><th></th><th>hablar</th><th>comer / vivir</th></tr>
<tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td></tr><tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td></tr>
<tr><td>él</td><td>habl<b>ó</b></td><td>com<b>ió</b></td></tr><tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>asteis</b></td><td>com<b>isteis</b></td></tr><tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td></tr></table>
<p>Pour une période <b>terminée</b> : ayer, anoche, el lunes pasado, en 2010, hace dos años.<br>
Irréguliers fréquents : <span class="s">fui</span> (ser et ir !), <span class="s">tuve</span>, <span class="s">hice</span>, <span class="s">dije</span>, <span class="s">estuve</span>, <span class="s">pude</span>, <span class="s">puse</span>, <span class="s">vine</span>, <span class="s">quise</span>, <span class="s">supe</span>.</p>
<p>Participes irréguliers : hecho, dicho, visto, puesto, escrito, abierto, vuelto, muerto, roto.</p>
<div class="fr-box">🇫🇷 Le passé simple français est mort à l’oral ; l’indefinido espagnol est <b>bien vivant</b> : <span class="s">Ayer fui al cine</span> = « hier je suis allé au cinéma ». Le perfecto ne s’utilise que si la période inclut le moment présent. En Amérique latine, on emploie presque toujours l’indefinido.</div>
<div class="ru-box">🇷🇺🇺🇦 Ce n’est pas l’aspect ! Les deux temps correspondent souvent à un perfectif (прочитал / прочитав). Ce qui décide, c’est la <b>période</b> : <span class="s">Hoy he leído</span> (aujourd’hui, période en cours) / <span class="s">Ayer leí</span> (hier, période close).</div>`,
  quiz: [
    Q('Ayer ___ (yo, comer) paella.', ['he comido', 'comí', 'comía', 'como'], 1, 'Ayer = période terminée → indefinido.'),
    Q('Hoy ___ (yo, trabajar) mucho.', ['trabajé', 'he trabajado', 'trabajaba', 'trabajaré'], 1, 'Hoy = période en cours → perfecto.'),
    Q('¿___ (tú, estar) alguna vez en México?', ['Estuviste', 'Has estado', 'Estabas', 'Estás'], 1, 'Alguna vez (déjà, dans ta vie) → perfecto.'),
    Q('El año pasado ___ (nosotros, ir) a Italia.', ['hemos ido', 'fuimos', 'íbamos', 'vamos'], 1, 'Indefinido de ir : fuimos.'),
    Q('Le participe de « hacer » :', ['hacido', 'hecho', 'haciendo', 'hizo'], 1, 'Irrégulier : hecho.'),
    Q('« Fue » peut venir de :', ['ser seulement', 'ir seulement', 'ser et ir', 'hacer'], 2, 'Ser et ir ont le même indefinido.'),
  ],
},
{
  title: 'Le passé 2 : imperfecto ou indefinido ?', sub: 'el décor et l’action · hablaba / hablé',
  body: `
<h3>Imperfecto (≈ imparfait)</h3>
<table><tr><th></th><th>hablar</th><th>comer / vivir</th></tr>
<tr><td>yo</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr><tr><td>tú</td><td>habl<b>abas</b></td><td>com<b>ías</b></td></tr>
<tr><td>él</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr><tr><td>nosotros</td><td>habl<b>ábamos</b></td><td>com<b>íamos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>abais</b></td><td>com<b>íais</b></td></tr><tr><td>ellos</td><td>habl<b>aban</b></td><td>com<b>ían</b></td></tr></table>
<p>Seulement 3 irréguliers : <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía).</p>
<h3>Qui fait quoi</h3>
<p><b>Imperfecto</b> = le décor, la description, l’habitude, l’action en cours : <span class="s">Cuando era niño, vivía en el campo.</span> <span class="s">Hacía sol.</span><br>
<b>Indefinido</b> = l’événement, ce qui arrive et fait avancer l’histoire : <span class="s">De repente, sonó el teléfono.</span></p>
<p>Ensemble : <span class="s">Leía cuando sonó el teléfono.</span> (je lisais quand le téléphone a sonné)</p>
<div class="fr-box">🇫🇷 C’est presque exactement la logique imparfait / passé composé du français. Si tu dirais « je lisais » → imperfecto ; « j’ai lu / je lus » → indefinido.</div>
<div class="ru-box">🇷🇺🇺🇦 Ici, l’aspect aide beaucoup : imperfecto ≈ <b>imperfectif</b> passé (читал, жил / читав, жив : processus, habitude) ; indefinido ≈ <b>perfectif</b> passé (прочитал, позвонил / прочитав, подзвонив : action accomplie). « Я читал, когда позвонил телефон » se traduit mot à mot : <span class="s">Leía cuando sonó el teléfono.</span> Exception : une durée délimitée prend l’indefinido même si le russe utilise l’imperfectif : <span class="s">Viví en Kiev diez años</span> (Я жил в Киеве десять лет).</div>`,
  quiz: [
    Q('Cuando ___ (yo, ser) pequeño, jugaba mucho.', ['fui', 'era', 'he sido', 'sería'], 1, 'Description / enfance → imperfecto.'),
    Q('Leía cuando ___ (llegar) mi hermano.', ['llegaba', 'llegó', 'ha llegado', 'llega'], 1, 'Événement qui interrompt → indefinido.'),
    Q('Todos los veranos ___ (nosotros, ir) a la playa.', ['fuimos', 'íbamos', 'hemos ido', 'vamos'], 1, 'Habitude → imperfecto.'),
    Q('Ayer ___ (hacer) mucho calor y fuimos a la piscina.', ['hizo', 'hacía', 'ha hecho', 'hará'], 1, 'Décor (météo) → imperfecto (hizo est possible si on résume la journée, mais le décor = hacía).'),
    Q('Viví en Kiev diez años. Pourquoi l’indefinido ?', ['c’est une habitude', 'durée délimitée et terminée', 'c’est une description', 'c’est une erreur'], 1, 'Durée fermée → indefinido, même si le russe dit « жил ».'),
    Q('L’imperfecto de « ver » (yo) :', ['vía', 'veía', 'vi', 'veo'], 1, 'Ver garde le e : veía.'),
  ],
},
{
  title: 'Futur, conditionnel, ir a', sub: 'hablaré, hablaría, voy a hablar',
  body: `
<p>Le futur et le conditionnel se forment sur l’<b>infinitif entier</b>, avec les mêmes terminaisons pour les trois groupes :</p>
<table><tr><th></th><th>Futur</th><th>Conditionnel</th></tr>
<tr><td>yo</td><td>hablar<b>é</b></td><td>hablar<b>ía</b></td></tr><tr><td>tú</td><td>hablar<b>ás</b></td><td>hablar<b>ías</b></td></tr>
<tr><td>él</td><td>hablar<b>á</b></td><td>hablar<b>ía</b></td></tr><tr><td>nosotros</td><td>hablar<b>emos</b></td><td>hablar<b>íamos</b></td></tr>
<tr><td>vosotros</td><td>hablar<b>éis</b></td><td>hablar<b>íais</b></td></tr><tr><td>ellos</td><td>hablar<b>án</b></td><td>hablar<b>ían</b></td></tr></table>
<p>Radicaux irréguliers (les mêmes pour les deux temps) : tendr-, pondr-, saldr-, vendr-, podr-, sabr-, habr-, querr-, har-, dir-.</p>
<h3>Lequel choisir ?</h3>
<p>• <b>ir a + inf.</b> : plans et futur proche, le plus courant à l’oral : <span class="s">Esta noche voy a cenar fuera.</span><br>
• <b>Futur simple</b> : prévisions, promesses, et <b>suppositions</b> sur le présent : <span class="s">¿Dónde está Ana? — Estará en casa.</span> (elle doit être chez elle)<br>
• <b>Conditionnel</b> : politesse et hypothèses : <span class="s">¿Podría ayudarme?</span> <span class="s">Yo no lo haría.</span></p>
<div class="fr-box">🇫🇷 Même formation qu’en français (parler-ai, parler-ais), avec les mêmes irréguliers ou presque : tendré ≈ tiendrai, haré ≈ ferai, podré ≈ pourrai.</div>
<div class="ru-box">🇷🇺🇺🇦 L’espagnol ne distingue pas буду читать / прочитаю : <span class="s">leeré</span> couvre les deux. Le conditionnel remplace бы / б : я бы пошёл / я б пішов = <span class="s">yo iría</span>. Et « наверное, она дома » = <span class="s">estará en casa</span> : le futur de supposition n’a pas d’équivalent direct, mais il est très fréquent.</div>`,
  quiz: [
    Q('Mañana ___ (yo, tener) tiempo.', ['teneré', 'tendré', 'tenré', 'tendría'], 1, 'Radical irrégulier : tendr-.'),
    Q('¿___ (usted, poder) cerrar la ventana? (poli)', ['Puede', 'Podrá', 'Podría', 'Pudo'], 2, 'Politesse → conditionnel.'),
    Q('—¿Qué hora es? —No sé, ___ las diez. (je suppose)', ['son', 'serán', 'eran', 'fueron'], 1, 'Futur de supposition.'),
    Q('Esta tarde ___ a jugar al fútbol. (on va)', ['vamos', 'iremos a', 'íbamos', 'fuimos'], 0, 'ir a + inf. = plan proche.'),
    Q('Le futur de « hacer » (yo) :', ['haceré', 'haré', 'haría', 'hice'], 1, 'Radical : har-.'),
    Q('Yo que tú, no lo ___ (hacer).', ['hago', 'haré', 'haría', 'hice'], 2, 'Hypothèse / conseil → conditionnel.'),
  ],
},
{
  title: 'Le subjonctif présent', sub: 'quiero que vengas · ojalá · cuando llegues',
  body: `
<p>On prend le <b>yo du présent</b>, on enlève -o, et on « échange » la voyelle : -ar → <b>-e</b>, -er/-ir → <b>-a</b>.</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>tener (tengo)</th></tr>
<tr><td>yo</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>teng<b>a</b></td></tr><tr><td>tú</td><td>habl<b>es</b></td><td>com<b>as</b></td><td>teng<b>as</b></td></tr>
<tr><td>él</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>teng<b>a</b></td></tr><tr><td>nosotros</td><td>habl<b>emos</b></td><td>com<b>amos</b></td><td>teng<b>amos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>éis</b></td><td>com<b>áis</b></td><td>teng<b>áis</b></td></tr><tr><td>ellos</td><td>habl<b>en</b></td><td>com<b>an</b></td><td>teng<b>an</b></td></tr></table>
<p>Irréguliers : sea (ser), esté (estar), vaya (ir), haya (haber), sepa (saber), dé (dar).</p>
<h3>Quand ?</h3>
<p>• <b>Volonté, souhait, demande</b> sur quelqu’un d’autre : <span class="s">Quiero que vengas.</span> <span class="s">Te pido que me ayudes.</span><br>
• <b>Sentiments</b> : <span class="s">Me alegro de que estés aquí.</span><br>
• <b>Ojalá</b> : <span class="s">¡Ojalá llueva!</span><br>
• <b>Doute, négation d’opinion</b> : <span class="s">No creo que sea verdad.</span><br>
• <b>Futur après cuando</b> (et en cuanto, hasta que) : <span class="s">Cuando llegues, llámame.</span><br>
• <b>But</b> : <span class="s">para que lo entiendas</span>.</p>
<div class="fr-box">🇫🇷 Beaucoup comme en français (je veux que tu viennes), mais deux pièges : <b>cuando + subjonctif</b> pour le futur (« quand tu arriveras » = <span class="s">cuando llegues</span>), et <b>creo que + indicatif</b> / <b>no creo que + subjonctif</b>.</div>
<div class="ru-box">🇷🇺🇺🇦 Pense à <b>чтобы / щоб</b> : Я хочу, чтобы ты пришёл / Я хочу, щоб ти прийшов = <span class="s">Quiero que vengas</span>. Partout où le russe/ukrainien met чтобы/щоб + passé, l’espagnol met que + subjonctif. Pour « когда придёшь, позвони » / « коли прийдеш, подзвони », le futur russe devient un subjonctif : <span class="s">cuando vengas, llama</span>.</div>`,
  quiz: [
    Q('Quiero que tú ___ (venir).', ['vienes', 'vengas', 'vendrás', 'venir'], 1, 'Volonté sur autrui → subjonctif (yo vengo → venga).'),
    Q('Cuando ___ (tú, llegar), llámame.', ['llegas', 'llegarás', 'llegues', 'llegaste'], 2, 'Cuando + futur → subjonctif.'),
    Q('Creo que ___ (ser) verdad.', ['sea', 'es', 'será', 'fuera'], 1, 'Creo que → indicatif.'),
    Q('No creo que ___ (ser) verdad.', ['es', 'sea', 'será', 'era'], 1, 'No creo que → subjonctif.'),
    Q('¡Ojalá ___ (hacer) buen tiempo!', ['hace', 'haga', 'hará', 'hizo'], 1, 'Ojalá + subjonctif.'),
    Q('Te lo explico para que lo ___ (entender).', ['entiendes', 'entiendas', 'entender', 'entenderás'], 1, 'Para que (afin que) + subjonctif.'),
  ],
},
{
  title: 'L’impératif', sub: '¡habla! ¡no hables! ¡dímelo!',
  body: `
<table><tr><th></th><th>affirmatif</th><th>négatif</th></tr>
<tr><td>tú</td><td>= 3e pers. du présent : <span class="s">¡habla!</span> <span class="s">¡come!</span></td><td>no + subjonctif : <span class="s">¡no hables!</span></td></tr>
<tr><td>vosotros</td><td>infinitif -r → -d : <span class="s">¡hablad!</span></td><td><span class="s">¡no habléis!</span></td></tr>
<tr><td>usted</td><td>subjonctif : <span class="s">¡hable!</span></td><td><span class="s">¡no hable!</span></td></tr>
<tr><td>ustedes</td><td>subjonctif : <span class="s">¡hablen!</span></td><td><span class="s">¡no hablen!</span></td></tr></table>
<h3>Huit tú irréguliers</h3>
<p><span class="s">ten</span> (tener), <span class="s">ven</span> (venir), <span class="s">pon</span> (poner), <span class="s">sal</span> (salir), <span class="s">haz</span> (hacer), <span class="s">di</span> (decir), <span class="s">ve</span> (ir), <span class="s">sé</span> (ser).</p>
<h3>Pronoms</h3>
<p>Affirmatif : collés à la fin (avec accent écrit si besoin) : <span class="s">¡Dímelo!</span> <span class="s">¡Siéntate!</span> <span class="s">¡Cómpralo!</span><br>
Négatif : devant le verbe : <span class="s">¡No me lo digas!</span> <span class="s">¡No te sientes!</span></p>
<div class="fr-box">🇫🇷 Comme en français : « dis-le-moi » / « ne me le dis pas ». Mais le négatif change de forme (subjonctif) : ¡habla! → ¡no hables!</div>
<div class="ru-box">🇷🇺🇺🇦 En russe/ukrainien, on choisit souvent l’aspect à l’impératif (позвони / не звони ; подзвони / не дзвони). L’espagnol ne change pas l’aspect mais la forme : <span class="s">¡llama!</span> / <span class="s">¡no llames!</span>. Pour adoucir, on ajoute <b>por favor</b> ou on utilise une question : <span class="s">¿Me pasas la sal?</span> (≈ передай, пожалуйста / передай, будь ласка).</div>`,
  quiz: [
    Q('(tú) ¡___ aquí! (venir)', ['Viene', 'Ven', 'Venga', 'Vienes'], 1, 'Impératif irrégulier : ven.'),
    Q('(tú) ¡No ___ eso! (hacer)', ['haz', 'hagas', 'haces', 'hace'], 1, 'Négatif → subjonctif : no hagas.'),
    Q('(usted) ¡___ la puerta, por favor! (cerrar)', ['Cierra', 'Cierre', 'Cerrad', 'Cierras'], 1, 'Usted → subjonctif : cierre.'),
    Q('Dis-le-moi :', ['¡Me lo di!', '¡Dímelo!', '¡Dilo me!', '¡Lo dime!'], 1, 'Pronoms collés, accent écrit sur dí-.'),
    Q('(vosotros) ¡___ la cena! (preparar)', ['Preparad', 'Preparen', 'Preparáis', 'Preparar'], 0, 'Vosotros : infinitif -r → -d.'),
    Q('(tú) Ne t’assieds pas :', ['¡No siéntate!', '¡No te sientes!', '¡No te sienta!', '¡Siéntate no!'], 1, 'Négatif : pronom devant + subjonctif.'),
  ],
},
{
  title: 'Por ou para ?', sub: 'La cause ou le but',
  body: `
<p>Les deux se traduisent souvent par « pour ». La clé : <b>por</b> regarde <b>en arrière</b> (la cause, le chemin, l’échange) ; <b>para</b> regarde <b>en avant</b> (le but, la destination, l’échéance).</p>
<table><tr><th>PARA →</th><th>POR ←</th></tr>
<tr><td>but : <span class="s">Estudio para aprender.</span></td><td>cause : <span class="s">Lo hago por ti.</span> (à cause de / pour toi)</td></tr>
<tr><td>destinataire : <span class="s">Es para ti.</span></td><td>échange, prix : <span class="s">Gracias por todo. Lo compré por 10 euros.</span></td></tr>
<tr><td>destination : <span class="s">Salgo para Madrid.</span></td><td>chemin, passage : <span class="s">Paseo por el parque.</span> <span class="s">Paso por tu casa.</span></td></tr>
<tr><td>échéance : <span class="s">Es para el lunes.</span></td><td>durée, moment vague : <span class="s">por la mañana</span>, <span class="s">por dos días</span></td></tr>
<tr><td>opinion : <span class="s">Para mí, es fácil.</span></td><td>moyen : <span class="s">por teléfono</span>, <span class="s">por email</span></td></tr>
<tr><td></td><td>agent du passif : <span class="s">escrito por Cervantes</span></td></tr></table>
<p>Expressions avec por : por favor, por fin, por eso (c’est pourquoi), por ejemplo, por supuesto (bien sûr), por cierto (au fait), ¿por qué?</p>
<div class="ru-box">🇷🇺🇺🇦 <b>para</b> ≈ для / чтобы (для тебя, чтобы учиться ; для тебе, щоб вчитися) ; <b>por</b> ≈ из-за / за / по / через (из-за тебя, спасибо за всё, гулять по парку ; через тебе, дякую за все, гуляти парком). Si tu penses « за » (спасибо за, заплатил за) → <b>por</b>.</div>`,
  quiz: [
    Q('Gracias ___ tu ayuda.', ['para', 'por', 'de', 'a'], 1, 'Remerciement = échange → por (спасибо за).'),
    Q('Este regalo es ___ ti.', ['para', 'por', 'a', 'de'], 0, 'Destinataire → para.'),
    Q('Estudio español ___ viajar a México.', ['por', 'para', 'a', 'de'], 1, 'But (pour + infinitif) → para.'),
    Q('Caminamos ___ la playa.', ['para', 'por', 'en', 'a'], 1, 'Le chemin, à travers → por.'),
    Q('Los deberes son ___ el lunes.', ['para', 'por', 'en', 'a'], 0, 'Échéance → para.'),
    Q('Te llamo ___ teléfono.', ['para', 'por', 'con', 'en'], 1, 'Moyen → por.'),
  ],
},
{
  title: 'Questions, négation, ordre des mots', sub: '¿…? · no… nada · double négation',
  body: `
<h3>Les questions</h3>
<p>On ouvre avec <b>¿</b> et on ferme avec <b>?</b> (pareil pour <b>¡ !</b>). Pas d’inversion obligatoire ni de « est-ce que » : l’intonation suffit : <span class="s">¿Tienes hambre?</span></p>
<p>Mots interrogatifs, toujours avec accent : qué, quién, cuál, cómo, dónde, adónde, cuándo, cuánto, por qué.</p>
<h3>La négation</h3>
<p><b>no</b> se place devant le verbe (et devant les pronoms) : <span class="s">No lo sé.</span><br>
<b>Double négation obligatoire</b> si le mot négatif vient après le verbe : <span class="s">No veo nada.</span> <span class="s">No viene nadie.</span> <span class="s">No voy nunca.</span><br>
Si le mot négatif vient avant, pas de « no » : <span class="s">Nadie viene.</span> <span class="s">Nunca voy.</span></p>
<p>Paires : algo / nada · alguien / nadie · algún / ningún · siempre / nunca · también / tampoco.</p>
<h3>Ordre des mots</h3>
<p>Assez libre ; on met souvent l’information nouvelle à la fin : <span class="s">Me lo dijo Pedro.</span> (c’est Pedro qui me l’a dit).</p>
<div class="ru-box">🇷🇺🇺🇦 Excellente nouvelle : c’est exactement le système russe/ukrainien ! Я ничего не вижу / Я нічого не бачу = <span class="s">No veo nada</span>. Никто не пришёл / Ніхто не прийшов = <span class="s">No vino nadie</span>. La liberté d’ordre des mots et l’information nouvelle à la fin fonctionnent aussi comme chez toi.</div>
<div class="fr-box">🇫🇷 Pas de « pas » : « je ne vois rien » = <span class="s">no veo nada</span> (pas « no veo no nada »). Et « personne ne vient » peut se dire de deux façons.</div>`,
  quiz: [
    Q('Je ne vois rien :', ['Veo nada', 'No veo nada', 'No veo algo', 'Nada no veo'], 1, 'Double négation : no… nada.'),
    Q('Nadie ___ la verdad.', ['no sabe', 'sabe', 'no sé', 'sé'], 1, 'Mot négatif avant le verbe → pas de « no ».'),
    Q('—No me gusta el café. —A mí ___.', ['también', 'tampoco', 'no también', 'nunca'], 1, 'Accord avec une phrase négative → tampoco.'),
    Q('Quel mot porte l’accent dans une question ?', ['donde', 'dónde', 'les deux', 'aucun'], 1, 'Interrogatif → dónde.'),
    Q('No tengo ___ problema.', ['algún', 'ningún', 'ninguno', 'nada'], 1, 'Devant un nom masculin : ningún.'),
    Q('Comment marque-t-on une question oui/non à l’oral ?', ['par l’inversion', 'par « est-ce que »', 'par l’intonation', 'par « qué »'], 2, 'L’intonation suffit : ¿Vienes?'),
  ],
},
{
  title: 'Suffixes & préfixes', sub: '-ito, -ón, -mente, -dad, -ción, -ería, des-, re-',
  body: `
<p>Comme en russe et en ukrainien, l’espagnol fabrique énormément de mots avec des suffixes. Les reconnaître multiplie ton vocabulaire.</p>
<h3>Diminutifs et augmentatifs</h3>
<p><b>-ito / -ita</b> (petit, affectueux) : casa → <span class="s">casita</span>, café → <span class="s">cafecito</span>, ahora → <span class="s">ahorita</span> (Mexique : « tout de suite »). Variante -illo : <span class="s">bocadillo</span>.<br>
<b>-ón / -ona</b> (gros) : casa → <span class="s">casona</span>, hombre → <span class="s">hombretón</span>. <b>-azo</b> (grand ou coup) : <span class="s">golpazo</span>, <span class="s">cochazo</span>.</p>
<h3>Suffixes « de sens »</h3>
<table><tr><th>Suffixe</th><th>Sens</th><th>Exemples</th></tr>
<tr><td>-mente</td><td>-ment (adverbe)</td><td>rápidamente, realmente</td></tr>
<tr><td>-dad / -tad</td><td>-té (fém.)</td><td>ciudad, libertad, verdad</td></tr>
<tr><td>-ción / -sión</td><td>-tion (fém.)</td><td>canción, información</td></tr>
<tr><td>-ero / -era</td><td>métier, contenant</td><td>camarero, panadero, cartera</td></tr>
<tr><td>-ería</td><td>magasin</td><td>panadería, frutería, librería</td></tr>
<tr><td>-dor / -dora</td><td>qui fait ; machine</td><td>trabajador, lavadora, ordenador</td></tr>
<tr><td>-oso</td><td>-eux</td><td>peligroso, famoso, delicioso</td></tr>
<tr><td>-able / -ible</td><td>-able</td><td>amable, posible</td></tr></table>
<h3>Préfixes</h3>
<p><b>des-</b> (dé-) : hacer → <span class="s">deshacer</span>, conocido → <span class="s">desconocido</span> · <b>re-</b> : <span class="s">rehacer</span> · <b>in- / im-</b> : <span class="s">imposible</span>, <span class="s">inútil</span> · <b>pre-</b> : <span class="s">prever</span> · <b>sobre-</b> (sur-) : <span class="s">sobrevivir</span>.</p>
<div class="ru-box">🇷🇺🇺🇦 <b>-ito</b> joue le rôle de -ик / -чик / -очка / -очок : домик / будиночок ≈ <span class="s">casita</span>, кофеёк ≈ <span class="s">cafecito</span>. Et comme chez toi, on le met partout pour adoucir : <span class="s">un momentito</span> (минуточку / хвилиночку). <b>-ería</b> ressemble à la logique de -ная (булочная).</div>
<div class="fr-box">🇫🇷 Correspondances quasi automatiques : -tion → -ción, -té → -dad, -ment → -mente, -eux → -oso. Mais méfie-toi des faux amis (voir la leçon suivante).</div>`,
  quiz: [
    Q('« Perrito » veut dire :', ['grand chien', 'petit chien', 'chienne', 'chenil'], 1, '-ito = petit / affectueux.'),
    Q('Une « frutería » est :', ['un fruit', 'une marchande de fruits', 'un magasin de fruits', 'une salade de fruits'], 2, '-ería = magasin.'),
    Q('L’adverbe de « fácil » :', ['facilidad', 'fácilmente', 'facilito', 'facilón'], 1, '-mente = -ment.'),
    Q('« Libertad » est :', ['masculin', 'féminin', 'neutre', 'ça dépend'], 1, '-dad / -tad = toujours féminin.'),
    Q('« Desconocido » veut dire :', ['très connu', 'inconnu', 'reconnu', 'connaissance'], 1, 'des- = dé- / in-.'),
    Q('« Lavadora » est :', ['une laverie', 'un lave-linge', 'une laveuse de vaisselle seulement', 'un lavabo'], 1, '-dora = machine qui fait l’action.'),
  ],
},
{
  title: 'Faux amis français–espagnol', sub: 'embarazada, éxito, largo, constipado…',
  body: `
<p>Le français t’aide énormément pour l’espagnol… et te piège parfois. Les plus fréquents :</p>
<table><tr><th>Espagnol</th><th>veut dire</th><th>et pas</th></tr>
<tr><td>embarazada</td><td>enceinte</td><td>embarrassée (= avergonzada)</td></tr>
<tr><td>éxito</td><td>succès</td><td>sortie (= salida)</td></tr>
<tr><td>largo</td><td>long</td><td>large (= ancho)</td></tr>
<tr><td>constipado</td><td>enrhumé</td><td>constipé (= estreñido)</td></tr>
<tr><td>salir</td><td>sortir</td><td>salir (= ensuciar)</td></tr>
<tr><td>molestar</td><td>déranger</td><td>molester</td></tr>
<tr><td>discutir</td><td>se disputer</td><td>discuter (= hablar, charlar)</td></tr>
<tr><td>suspender</td><td>rater (un examen)</td><td>suspendre seulement</td></tr>
<tr><td>gracioso</td><td>drôle</td><td>gracieux</td></tr>
<tr><td>propina</td><td>pourboire</td><td>—</td></tr>
<tr><td>firma</td><td>signature</td><td>entreprise (= empresa)</td></tr>
<tr><td>librería</td><td>librairie</td><td>bibliothèque (= biblioteca)</td></tr>
<tr><td>carta</td><td>lettre ; menu</td><td>carte bancaire (= tarjeta)</td></tr>
<tr><td>vaso</td><td>verre (à boire)</td><td>vase (= jarrón)</td></tr>
<tr><td>polvo</td><td>poussière</td><td>poulpe (= pulpo)</td></tr>
<tr><td>rato</td><td>moment</td><td>raté / rat (= rata)</td></tr>
<tr><td>en absoluto</td><td>pas du tout</td><td>absolument (= absolutamente)</td></tr></table>
<div class="fr-box">🇫🇷 Règle de prudence : si un mot espagnol ressemble trop au français dans un contexte bizarre (« je suis embarazada »), vérifie-le. Les vrais amis restent largement majoritaires.</div>
<div class="ru-box">🇷🇺🇺🇦 Quelques pièges aussi pour les russophones : <b>carta</b> = lettre, pas карта (= mapa) ; <b>familia</b> = семья, pas фамилия (= apellido) ; <b>magazine</b> = revista, et магазин = <b>tienda</b> ; <b>simpático</b> = sympathique (caractère), pas симпатичный (joli = guapo).</div>`,
  quiz: [
    Q('« Estoy embarazada » veut dire :', ['je suis gênée', 'je suis enceinte', 'je suis fatiguée', 'je suis mariée'], 1, 'Gênée = avergonzada.'),
    Q('« La película fue un éxito » :', ['le film était une sortie', 'le film a été un succès', 'le film était un échec', 'le film est sorti'], 1, 'Éxito = succès.'),
    Q('« Una calle larga » est :', ['une rue large', 'une rue longue', 'une rue étroite', 'une grande rue'], 1, 'Largo = long ; large = ancho.'),
    Q('« Estoy constipado » :', ['je suis constipé', 'je suis enrhumé', 'je suis fatigué', 'je suis bloqué'], 1, 'Constipado = enrhumé.'),
    Q('Comment dit-on « magasin » ?', ['almacén seulement', 'tienda', 'magazine', 'revista'], 1, 'Tienda (≠ магазин qui ressemble à magazine/revista).'),
    Q('« Mi apellido » =', ['ma famille', 'mon nom de famille', 'mon appel', 'mon prénom'], 1, 'Apellido = фамилия ; familia = семья.'),
  ],
},
);
