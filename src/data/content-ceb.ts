export const ceb = {
  nav: {
    weather: 'Panahon',
    transport: 'Transportasyon',
    services: 'Serbisyo',
    routes: 'Ruta',
    stories: 'Sugilanon',
    science: 'Talabaho',
  },

  weather: {
    kicker: 'Panahon sa Carbon',
    title: 'Carbon Market Weather & 7-Day Forecast',
    subtitle: 'Unsa ang isul-ob ug dad-on sa adlaw sa imong pagbisita',
    placeNote: 'Downtown Cebu City · 10.2914° N, 123.8991° E',
    observedLabel: 'Katapusang update',
    todayLabel: 'Karon sa merkado',
    feelsLabel: 'Gibati',
    humidityLabel: 'Humidity',
    windLabel: 'Hangin',
    rainLabel: 'Tsansa sa ulan',
    rainTodayLabel: 'Ulan karong adlawa',
    uvLabel: 'Peak UV index',
    sunriseLabel: 'Subang sa adlaw',
    sunsetLabel: 'Salop sa adlaw',
    forecastLabel: 'Sunod nga 7 ka adlaw',
    umbrellaLabel: 'Payong karon?',
    umbrellaYes: 'Dad-a ang payong o rain jacket — taas ang tsansa sa ulan.',
    umbrellaMaybe: 'Madala ra og gamay nga payong o kalo; posible ang ulan-ulan.',
    umbrellaNo: 'Dili kinahanglan og payong, apan mapuslanon ang kalo ug tubig.',
    heatNote: 'Init kaayo ang gilauman: hinay-hinay, inom ug tubig, ug pahulay sa landong.',
    rainNote: 'Ang kusog nga ulan puwedeng mobasa ug mobaha sa pipila ka agianan sa merkado.',
    mildNote: 'Maayong kondisyon sa paglakaw; i-adjust lang ang oras base sa kahuot sa tawo.',
    dayNow: 'Karon',
    dayTomorrow: 'Ugma',
    maxLabel: 'Taas',
    minLabel: 'Ubos',
    groupOutfit: 'Unsay isul-ob',
    groupPlan: 'Plano sa suroy',
    groupGear: 'Dalahon',
    groupRisk: 'Paalala sa peligro',
    riskHint: 'Unaha ang kaluwasan: i-adjust ang oras ug ruta kon mahimo, ug sunda ang opisyal nga pahibalo.',
    summaryUv: 'UV index',
    summaryWind: 'Hangin',
    advice: {
      'outfit-rain-likely':
        'Taas ang tsansa sa ulan — isul-ob ang dali mamala nga sapatos ug likayan ang bukas nga sandalyas kay danlog ang semento.',
      'outfit-rain-light':
        'Ulan-ulan lang: danlog ang tile ug semento sa merkado, pilia ang sapatos nga dili madalin-as.',
      'outfit-rain-heavy':
        'Kusog nga ulan: waterproof jacket ug quick-dry nga sinina; likayan ang taas nga palda ug bug-at nga panapton kon basa.',
      'outfit-heat': 'Init (32°C pataas): light-colored, luag ug breathable nga sinina.',
      'outfit-humid': 'Humok ug alisngaw: moisture-wicking nga tela kay dali ka singotan sulod sa merkado.',
      'outfit-sun': 'Tin-aw ang langit: sombrero o cap ug sunglasses kay nipilit ang adlaw sa udto.',
      'outfit-wind': 'Kusog ang hangin: likayan ang luag nga palda ug sombrero nga walay strap.',
      'outfit-diurnal': 'Dako ang kalainan sa init ug bugnaw (8°C pataas): mag-layer og jacket nga sayon huboon.',
      'outfit-cool': 'Bugnaw ang buntag o gabii (18°C paubos): dad-a og nipis nga jacket.',
      'outfit-normal':
        'Komportable nga sinina sa paglakaw ug closed nga sapatos — daghang bahin sa merkado ang basa ug dili patag.',

      'plan-indoor-first':
        'Unaa ang sulod nga bahin (market hall, simbahan, museyo) ug i-postpone ang layo nga outdoor side trip.',
      'plan-market-morning':
        'Suroya ang merkado og sayo (6–9 sa buntag): mas presko ang abot, dyutay ang tawo ug dili pa kaayo init.',
      'plan-urban-heat':
        'Semento ug siksik ang downtown: gamita ang shaded nga agianan ug pahulay matag 30–45 minutos.',
      'plan-humid-feel':
        'Ang "feels like" mas taas sa aktuwal nga temperatura — hinay-hinay ug inom og tubig kanunay.',
      'plan-slippery':
        'Basa ang agianan sa merkado: pag-amping sa hagdanan, drainage ug loading area.',
      'plan-flood':
        'Kusog nga ulan: posibleng baha sa ubos nga kalsada sa downtown — dugangi ang oras sa biyahe ug pangita og alternatibong ruta.',
      'plan-thunder':
        'Thunderstorm: likayi ang open area ug kahoy; ang outdoor tour ug water activity kasagarang gisuspende.',
      'plan-seaside-postpone':
        'Kusog ang hangin o ulan: posibleng delay ang ferry ug island hop; i-postpone ang water activity.',
      'plan-photo-soft':
        'Madag-umon: humok ang suga — maayo para sa litrato sa merkado ug walay gahi nga anino.',
      'plan-clear-outdoor':
        'Tin-aw ang panahon: maayo para sa lakaw sa gawas ug sunset sa pier; likayi lang ang udto.',
      'plan-normal':
        'Walay espesyal nga babag sa panahon — i-base na lang sa oras: sayo para sa preskong abot, hapon para sa dyutay nga tawo.',

      'gear-umbrella': 'Payong o rain jacket',
      'gear-folding-umbrella': 'Gamay nga folding umbrella',
      'gear-raincoat': 'Raincoat — mas praktikal kaysa taas nga payong kon kusog ang hangin',
      'gear-sunscreen': 'Sunscreen (SPF 30+)',
      'gear-hat': 'Sombrero o cap ug sunglasses',
      'gear-water': 'Botelya sa tubig (1 ka litro pataas)',
      'gear-electrolyte': 'Tubig nga may electrolyte para sa grabeng kainit',
      'gear-wipes': 'Wet wipes ug gamay nga plastic bag para sa basa nga payong',
      'gear-jacket': 'Nipis nga jacket para sa bugnaw nga buntag o gabii',
      'gear-mask': 'Mask kon gabon o abog sa kalsada',
      'gear-basic': 'Gamay nga barya para sa public restroom, eco-bag ug hand sanitizer',

      'risk-thunder':
        'May thunderstorm: ayaw pagpasilong sa kahoy o open area — i-postpone ang outdoor ug water activity.',
      'risk-heavy-rain':
        'Kusog nga ulan: likayi ang ubos ug bahaon nga kalsada sa downtown ug hatagi og dugang oras ang biyahe.',
      'risk-flood':
        'Posibleng pagbaha: pilia ang taas nga ruta ug likayi ang underpass ug dapit nga duol sa kanal.',
      'risk-wind': 'Kusog kaayo nga hangin: likayi ang pier, billboard ug temporaryo nga estruktura.',
      'risk-heat':
        'Grabe nga kainit (heat index): inom og tubig kanunay, pahulay sa landong ug likayi ang udto sa gawas.',
      'risk-fog': 'Gabon: gamay ang visibility — pag-amping sa dalan ug i-postpone ang view deck o ferry.',

      'uv-low': 'ubos',
      'uv-moderate': 'kasarangan',
      'uv-strong': 'kusog',
      'uv-very-strong': 'grabe',
      'wind-calm': 'hinay',
      'wind-breeze': 'hinay-hinay',
      'wind-strong': 'kusog (5–6)',
      'wind-gale': 'kusog kaayo (7+)',
    },
    note: 'Ang mga numero gikan sa numerical weather forecast para sa coordinates sa Carbon Market ug awtomatikong gi-refresh matag abli sa panid. Para sa bagyo ug storm signal, sunda ang opisyal nga pahibalo sa PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration).',
    unavailable: 'Wala namo makuha ang pinakabag-o nga datos sa panahon niining higayona. I-reload ang panid o tan-awa ang opisyal nga weather service sa dili pa mobiyahe.',
    unit: '°C',
  },

  weekdays: ['Dominggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],

  services: {
    kicker: 'Serbisyo ug pasilidad',
    title: 'Visitor Services & Facilities Near Carbon Market',
    subtitle: 'Kasilyas, parking, kan-anan, tulu-an, grocery, gasolina ug charging — pinaagi sa klase, dili brand',
    intro: 'Ang Carbon usa ka trabahoang merkado, dili curated attraction. Ang mga pasilidad dinhi gipaambit sa mga mamalitay, tindero ug delivery — busa mas maayo nga moabot nga andam, ug mogamit sa mga serbisyo nga tipo (pananglitan public restroom, food court, supermarket) imbes nga mangita og usa ka piho nga negosyo.',
    items: [
      {
        icon: '◍',
        title: 'Kasilyas ug hugasan sa kamot (WC)',
        body: 'Adunay public restrooms sa sulod o tapad sa market buildings ug sa mga commercial blocks sa downtown. Kasagaran kini pay-per-use nga adunay gamay nga bayad, busa dad-a ang barya, tissue ug hand sanitizer. Dili tanan adunay sabon ug nagahatag og tubig, ug ang kondisyon magkalahi depende sa oras sa adlaw.',
      },
      {
        icon: '▣',
        title: 'Parking ug drop-off',
        body: 'Adunay parking areas sulod sa redeveloped Carbon district ug sa duol nga commercial blocks; ang uban adunay motor ug bicycle zones. Likayi ang roadside parking nga makabara sa delivery lanes kay kasagaran kini gi-tow o gi-clamp. Sunda ang on-site signage ug marshals kay mausab ang entry points tungod sa redevelopment.',
      },
      {
        icon: '◈',
        title: 'Kan-anan ug inomon',
        body: 'Ang pinakasimple nga kapilian mao ang carinderia ug market food stalls (pusô, sinugba, sabaw), dayon ang food hubs/courts nga adunay lingkoranan, ug ang bakeries o convenience stores para sa dali nga snack. Limitado ang vegetarian, halal ug allergen-labeled nga pagkaon — pangutana direkta sa stall ug laktawan ang dili klaro.',
      },
      {
        icon: '◇',
        title: 'Tulu-an ug akomodasyon',
        body: 'Sa downtown adunay budget inns, pension houses ug business hotels; ang mas dagkong hotel clusters anaa sa uptown business districts nga mga 10–20 ka minuto nga biyahe. Pagpili base sa lokasyon, accessibility ug noise tolerance — ang downtown saba ug buhi, labi na sayo sa buntag.',
      },
      {
        icon: '✦',
        title: 'Grocery, supermarket ug botika',
        body: 'Para sa bottled water, toiletries ug tambal nga over-the-counter, adunay convenience stores, supermarket sa mall ug botika (pharmacy) sa mga kalsada sa downtown. Ang preskong prutas, utan ug isda mas barato ug mas presko sa merkado mismo, busa didtoa ang pang-adlaw-adlaw nga palit.',
      },
      {
        icon: '⬡',
        title: 'Gasolina ug charging station',
        body: 'Ang fuel stations anaa sa mga major roads padulong sa downtown ug pantalan, apan ang mga agianan huot sa peak hours. Ang public EV charging limitado pa sa Metro Cebu ug kasagaran anaa sa mga mall o hotel parking — kung mag-EV ka, planoha daan ang charging stop ug kumpirmaha sa imong app sa adlaw mismo.',
      },
      {
        icon: '⌁',
        title: 'ATM, bangko ug paagi sa bayad',
        body: 'Cash gihapon ang pinakapaspas sa merkado, labi na ang gagmay nga bill ug barya. Ang ATM ug bangko anaa sa mga kalsada sa downtown ug sa mall; kasagaran adunay withdrawal fee ug limit. Ang QR/e-wallet ug card nadawat sa pipila ka stall ug food hub, apan dili sa tanan — ayaw isalig ang tibuok adlaw sa usa lang ka paagi sa bayad.',
      },
      {
        icon: '✚',
        title: 'Medical, first aid ug kaluwasan',
        body: 'Adunay pharmacy, clinic ug hospital nga dali ra maabot gikan sa downtown. Ang kasagarang problema sa bisita mao ang heat exhaustion, dehydration ug nadalin-as sa basa nga salog. Dad-a ang imong maintenance nga tambal, mugamit og closed shoes, ug pangayo og tabang sa mga stallholder o security kung kinahanglan.',
      },
      {
        icon: '◐',
        title: 'Koneksyon, wifi ug signal',
        body: 'Ang mobile data kasagarang mogana sa downtown, apan mohinay kon huot kaayo o naa sa ilalom sa metal nga atop. Ang libre nga wifi anaa sa mga mall ug pipila ka food hub; ayaw ibutang ang importanteng meeting sa merkado mismo, ug i-download daan ang imong mapa ug transportasyon.',
      },
    ],
    policyNote: 'Patakaran sa editoryal: kining website usa ka independent, non-profit nga giya sa edukasyon. Gihisgutan lang namo ang mga klase sa serbisyo (public restroom, food court, supermarket, pharmacy) ug wala mi nagrekomenda, nag-rank o nakadawat og bayad gikan sa piho nga negosyo o brand.',
  },

  transport: {
    kicker: 'Detalye sa transportasyon',
    title: 'Getting to Carbon Market: Airport, Public Transport & Taxi',
    subtitle: 'Unsaon pag-abot gikan sa airport, gikan sa uptown, ug gikan sa mga silingang probinsya',
    intro: 'Ang downtown Cebu sikat sa huot nga traffic ug sa nagausab nga ruta tungod sa redevelopment. Mas lig-on ang destination-based nga pagsakay (ingna ang "Carbon, M. C. Briones St") kaysa pag-memorize sa daang route code.',
    modes: [
      {
        tag: '01',
        title: 'Gikan sa Mactan-Cebu International Airport (MCIA)',
        bestFor: 'First-time visitor, naay bagahe, badyet sa oras',
        duration: '30–60 ka minuto depende sa traffic',
        cost: 'Kasagaran ₱250–₱600 (indikasyon lang, mausab matag provider ug oras)',
        steps: [
          'Gamita ang official airport taxi queue o ang imong ride-hailing app; i-type ang "Carbon Market, M. C. Briones St, Cebu City" imbes nga "Cebu" lang.',
          'Ang mas barato nga alternatibo mao ang airport shuttle/bus paingon sa city terminal o mall, dayon jeepney o taxi padulong sa downtown.',
          'Kung gabii ang abot, unaha ang door-to-door nga sakyanan — nihit na ang public transport ug mas lisod mangutana sa dalan.',
        ],
        tip: 'Ayaw pagdawat og "fixed special rate" gikan sa wala rehistrado nga drayber sa arrival hall; gamita ang official queue o app.',
      },
      {
        tag: '02',
        title: 'Jeepney ug modern jeepney (pinakabarato)',
        bestFor: 'Biyahero nga gaan ang dala ug gusto makasinati sa lokal nga transportasyon',
        duration: '20–50 ka minuto gikan sa uptown depende sa stop-and-go',
        cost: 'Pinakabarato nga pampublikong plete (cash, gagmay nga bill)',
        steps: [
          'Pangitaa ang signboard sa atubangan nga nag-ingon "Carbon", "Santo Niño", "Taboan" o "Plaza Sugbo"; ang mga modern jeepney ug minibus adunay usab electronic display.',
          'Saka sa likod, ipasa ang bayad pinaagi sa konduktor o drayber, ug ingna daan ang imong kanaogan.',
          'Kanaog duol sa M. C. Briones St o Plaza Sugbo ug lakaw padsulod sa merkado; pangutan-a ang drayber kung asa pinakaduol karon kay mausab ang agianan.',
        ],
        tip: 'Ang mga ruta mausab tungod sa roadworks ug one-way adjustments. Kumpirmaha sa drayber sa dili pa mosakay ug ayaw i-assume nga parehas gihapon ang ruta sa imong gi-browse online.',
      },
      {
        tag: '03',
        title: 'Tricycle ug mubo nga hop',
        bestFor: 'Mubo nga distansya sulod sa downtown, walay bagahe, ulan',
        duration: '5–15 ka minuto sulod sa downtown',
        cost: 'Barato; kasagaran mas mahal og gamay kada kilometro kaysa jeepney apan door-to-door',
        steps: [
          'Sabot daan sa plete sa dili pa mosakay, labi na kung ulan o gabii.',
          'Ingna ang landmark imbes nga street number: "Carbon, duol sa Pusô Village" o "Plaza Sugbo".',
          'Gamita kini para sa katapusang hop gikan sa main road padulong sa entrance, dili para sa tibuok cross-city nga biyahe.',
        ],
        tip: 'Ang tricycle kasagaran para sa lokal nga short trip; kung layo ang distansya, mas paspas ug mas barato ang taxi o jeepney.',
      },
      {
        tag: '04',
        title: 'Taxi ug app-based ride-hailing',
        bestFor: 'Pamilya, senior, init nga udto ug kung naay bagahe',
        duration: '20–45 ka minuto gikan sa uptown; 30–60 ka minuto gikan sa airport',
        cost: 'Metered taxi o in-app estimate; adunay surge kung peak hours ug ulan',
        steps: [
          'Pilia ang metered taxi ("by meter") o ang in-app fare; kung dili mogana ang meter, sabot daan sa kantidad.',
          'Ibutang ang drop-off nga duol sa entrance nga imong gusto ug i-verify ang pin sa mapa sa dili pa mo-confirm.',
          'Pag-andam og cash nga gagmay kay ang ubang drayber walay dagkong sukli sayo sa buntag.',
        ],
        tip: 'Likayi ang 7–9 sa buntag ug 4–7 sa hapon. Kung ulan, dugangi ang oras — ang surge ug baha makadugang og 20–30 ka minuto.',
      },
      {
        tag: '05',
        title: 'Intercity ug provincial bus',
        bestFor: 'Gikan sa mga probinsya sa habagatan ug amihanan sa Cebu ug mga silingang isla',
        duration: 'Magkalahi kaayo depende sa gigikanan',
        cost: 'Barato; ang bus mao ang backbone sa intercity travel sa Sugbo',
        steps: [
          'Ang mga provincial bus mopaingon sa mga terminal sa siyudad; gikan didto, kuhaa ang taxi, jeepney o tricycle padulong sa downtown.',
          'Kung naa kay dagkong bagahe, mas simple ang taxi gikan sa terminal kaysa magbalhin-balhin og sakyanan.',
          'Kumpirmaha ang last trip kung gabii na ka moabot — dili 24 oras ang tanang linya.',
        ],
        tip: 'Ang bus terminal dili mismo sa merkado. Iapil sa imong plano ang katapusang hop padulong sa Carbon.',
      },
      {
        tag: '06',
        title: 'Kaugalingong sakyanan, parking ug drop-off',
        bestFor: 'Pamilya nga naay gamit sa bata, o daghan og paliton',
        duration: 'Depende sa traffic; mas dugay kaysa gilauman sa peak hours',
        cost: 'Fuel + parking fee + risgo sa clamping kung makabara',
        steps: [
          'Pag-drop-off lang kung mahimo — mas lisod ang parking kaysa paglakaw sa downtown.',
          'Gamita ang opisyal nga parking areas sulod sa Carbon district o sa duol nga commercial blocks, ug tipigi ang ticket/stub.',
          'Ayaw ibilin ang bililhong butang nga makita sa sulod sa sakyanan ug sunda ang marshals sa exit.',
        ],
        tip: 'Kung ang imong hotel adunay shuttle o ang imong grupo mahimong mag-grab, mas dali ang biyahe kaysa magdala og sakyanan sa huot nga downtown.',
      },
    ],
    walkTitle: 'Paglakaw gikan sa duol nga landmark',
    walkNote: 'Ang Carbon labing nindot iapil sa walking loop: gikan sa Basilica Minore del Santo Niño ug Magellan’s Cross mga pipila lang ka minuto; gikan sa Colon Street mga 10–15 ka minuto; gikan sa Fort San Pedro ug Plaza Independencia mga 10–20 ka minuto. Bantayi ang delivery carts ug basa nga salog sa mga agianan.',
    accessTitle: 'Accessibility ug kaluwasan sa dalan',
    accessNote: 'Ang accessibility sa merkado dili pare-pareho: ang ubang entrada hagip-ot, adunay hagdanan ug huot sa peak hours. Ang mas hapsay nga pamaagi mao ang pag-abot og sayo, paggamit sa mas lapad nga outer aisles, ug pagpangutana sa security/marshal kung asa ang pinakamaayong drop-off sa adlaw mismo. Isul-ob ang closed shoes nga dili madalin-as.',
  },

  seasons: {
    kicker: 'Estratehiya matag quarter',
    title: 'Quarterly Visit Strategy for Carbon Market',
    subtitle: 'Klima, suplay sa merkado ug kahuot sa tawo sa tibuok tuig',
    basis: 'Ang summary dinhi base sa long-term monthly climate averages sa Metro Cebu (1991–2020 normals) ug sa kasagarang seasonal pattern sa operasyon sa merkado. Gamita kini sa pagplano sa bulan; para sa adlaw mismo, basihan ang forecast block sa ibabaw.',
    columns: ['Panahon', 'Klima', 'Suplay sa merkado', 'Kahuot sa tawo', 'Rekomendasyon'],
    rows: [
      {
        period: 'Q1 · Enero–Marso',
        climate: 'Init apan uga; kasagaran 24–32 °C, gamay nga ulan',
        supply: 'Daghang preskong prutas ug utan; lig-on ang seafood supply; peak sa holiday goods sa Enero',
        crowd: 'Taas kaayo sa Sinulog semana; kasarangan sa Pebrero–Marso',
        advice: 'Pinakamaayong quarter sa paglakaw. Abot ug sayo sa buntag, ug likayi ang sentro sa siyudad sa mga adlaw sa Sinulog kung dili ka ganahan og dasok nga tawo.',
      },
      {
        period: 'Q2 · Abril–Hunyo',
        climate: 'Pinakainit nga mga bulan; hangtod 33–35 °C sa udto, pagsugod sa habagat ug ulan sa hapon',
        supply: 'Daghang prutas sa ting-init; mohinay ang seafood kung kusog ang hangin ug dagat',
        crowd: 'Kasarangan; nihit ang tawo sa udto tungod sa kainit',
        advice: 'Suroy sa sayong buntag o ulahing hapon. Dad-a ang tubig, kalo ug payong para sa kalit nga ulan sa hapon; likayi ang udto kon dili ka sanay sa humid nga klima.',
      },
      {
        period: 'Q3 · Hulyo–Septiyembre',
        climate: 'Ting-ulanon ug typhoon season; kanunay nga ulan ug baha sa ubos nga lugar',
        supply: 'Mahimong nihit human sa bagyo ug molihok ang presyo; molambo ang dried goods ug root crops',
        crowd: 'Ubos hangtod kasarangan; mohinay ang turista',
        advice: 'Unaha ang kaluwasan: i-check ang weather advisory ug likayi ang pagbisita kung adunay storm signal. Kon moabot, gamita ang waterproof bag ug closed shoes nga dili madalin-as.',
      },
      {
        period: 'Q4 · Oktubre–Disyembre',
        climate: 'Transition: ulan pa sa Oktubre–Nobiyembre, mas bugnaw ug uga sa Disyembre',
        supply: 'Nindot ang supply para sa Pasko; daghang dried fish ug processed goods sa Taboan',
        crowd: 'Motaas pag-usab sa Disyembre (holiday shopping)',
        advice: 'Maayong balanse sa panahon ug suplay. Planoha ang extra time para sa holiday traffic ug pang-shopping kauban ang mga lokal; suroy sa buntag para sa preskong abot.',
      },
    ],
    notes: [
      'Ang kalit nga ulan sa hapon kasagaran sa ting-init ug ting-ulan; ang multi-day forecast mas angay basihan kaysa monthly average.',
      'Ang Sinulog (ikatulong Dominggo sa Enero) nagpasabot og daghang tawo, road closures, mas taas nga presyo sa duol nga serbisyo ug mas estrikto nga security.',
      'Kung adunay tropical cyclone warning, ang downtown ug ang merkado mahimong delikado: baha, nahulog nga kable ug sirado nga agianan. I-postpone ang suroy.',
    ],
    analysisTitle: 'Ngano nga nagkahiusa ang klima, suplay ug presyo',
    analysisNote: 'Ang presyo sa wet market dili fixed sama sa supermarket: kini resulta sa gidaghanon sa abot nga nadala sa buntag, sa kondisyon sa dagat, sa gasolina sa transportasyon ug sa demand sa pista o holiday. Mao nga ang usa ka ulan nga semana makapataas sa presyo sa utan samtang ang peak season sa prutas makapaubos niini.',
  },

  routes: {
    kicker: 'Mga ruta sa pagsuroy',
    title: 'Recommended Itineraries for Carbon Market',
    subtitle: 'Tulo ka ruta base sa klase sa biyahero, plus usa ka tunga sa adlaw ug tibuok adlaw nga plano',
    intro: 'Ang tanang ruta dinhi gisulat isip sugyot, dili isip fixed package. I-adjust base sa imong oras, panahon ug lebel sa kusog — ang merkado mismo ang modiktar sa dagan.',
    audienceTitle: 'Mga ruta base sa klase sa biyahero',
    audiences: [
      {
        title: 'Pamilya nga adunay bata',
        duration: '2–3 ka oras · hinay nga pacing',
        stops: [
          'Sugod sa outer produce aisles sa buntag (mas lapad ug dili pa huot).',
          'Short snack stop: puso, grilled skewers o prutas nga giputol.',
          'Tan-aw sa dry goods ug handicraft aisle para sa barato nga souvenir.',
          'Tapos sa Plaza Sugbo / open space para makalingkod ug makapahulay ang bata.',
        ],
        tips: [
          'Likayi ang udto: kainit, kahuot ug delivery traffic.',
          'Pagbutang og meeting point kon mabulag, ug dad-a ang tubig ug wet wipes.',
          'Ayaw palihug og pagkaon nga wala nimo nailhan ang gigikanan sa tubig o yelo.',
        ],
      },
      {
        title: 'Photography, kultura ug pagkaon',
        duration: '3–4 ka oras · daghang hunong',
        stops: [
          'Overview shot sa gawas sa merkado o gikan sa elevated walkway.',
          'Produce aisles para sa kolor, texture ug mga kamot sa tindero.',
          'Taboan dried-fish section: suga, aso ug baho mao ang istorya.',
          'Golden hour padulong sa Basilica ug Magellan’s Cross alang sa heritage frame.',
        ],
        tips: [
          'Pangayo og permiso sa dili pa mag close-up sa tawo; dili tanan komportable.',
          'Ang salog basa ug huot — panalipdan ang gamit ug gamita ang gamay nga lens.',
          'Ang labing nindot nga suga anaa sa sayong buntag ug ulahing hapon.',
        ],
      },
      {
        title: 'Low-mobility, senior ug wheelchair',
        duration: '1.5–2.5 ka oras · flat ug adunay lingkoranan',
        stops: [
          'Door-to-door drop-off sa entrance nga girekomenda sa marshal sa adlaw mismo.',
          'Mas lapad nga outer aisles ug retail rows imbes sa sulod nga huot nga produce lane.',
          'Lingkoranan sa food hub o carinderia nga adunay lamesa.',
          'Tapos sa Plaza Sugbo / Basilica area nga mas hapsay ang dalan.',
        ],
        tips: [
          'Ang accessibility sa merkado dili pare-pareho; pangutana daan sa security kung asa ang pinakamaayong agianan.',
          'Likayi ang peak hours: sayo kaayo sa buntag ug hapon human sa trabaho.',
          'Ang tricycle o taxi door-to-door makadaginot og daghang lakaw sa huot nga downtown.',
        ],
      },
    ],
    halfDayTitle: 'Tunga sa adlaw (3–4 ka oras)',
    halfDayStops: [
      'Carbon Market — produce, seafood ug dry goods',
      'Taboan section — dried fish ug lokal nga produkto',
      'Magellan’s Cross ug Basilica Minore del Santo Niño',
      'Plaza Independencia',
      'Fort San Pedro (katapusang landmark sa loop)',
    ],
    fullDayTitle: 'Tibuok adlaw (6–8 ka oras)',
    fullDayStops: [
      'Sayo sa buntag — wholesale rhythm ug pinakapreskong abot sa Carbon',
      'Pamahaw sa carinderia o food hub (pusô ug sabaw)',
      'Lakaw sa Colon Street, ang karaang dalan sa siyudad',
      'Casa Gorordo Museum para sa arkitektura ug kinabuhi sa karaang Cebu',
      'Basilica Minore del Santo Niño ug Magellan’s Cross',
      'Plaza Independencia ug Fort San Pedro',
      'Balik sa Carbon sa ulahing hapon para sa food ug city lights',
      'Tapos sa sunset walk sa downtown o sa baybayon area',
    ],
    routeNote: 'Ang aktuwal nga access mahimong mausab tungod sa roadworks, redevelopment ug relihiyosong kalihokan. Kung nagdali ka, unaha ang merkado ug lungsoran sa Basilica; kung adunay oras, idugang ang museyo ug Fort San Pedro.',
  },

  stories: {
    kicker: 'Kasaysayan ug sugilanon',
    title: 'Stories, Origins & Legends of Carbon Market',
    subtitle: 'Ngano nga “Carbon”, unsa ang Parian, ug ngano nga dili matulog ang merkado',
    intro: 'Ang Carbon dili lang lugar nga palitan og utan. Usa kini sa mga labing karaan ug labing gihisgutang public market sa Sugbo, ug ang istorya niini nagsalmot sa pantalan, sa kolonyal nga kasyudaran, sa gubat ug sa adlaw-adlaw nga pagkaon sa mga Sugbuanon.',
    items: [
      {
        title: 'Ngalan nga “Carbon”: uling, pantalan, o sugilanon?',
        body: 'Ang kasagarang pasabot mao nga ang ngalan naggikan sa “carbon” (uling) — usa ka depot o tipiganan sa uling duol sa pantalan sa panahon sa Kastila, diin ang uling gigamit sa mga barko ug sa mga kusina sa siyudad. Adunay usab lokal nga asoy nga ang lugar mao ang hinungdan sa pagdiskarga sa uling gikan sa mga barko. Walay bug-os nga kasabotan sa mga historyador, busa isipa kini nga lokal nga etimolohiya nga gipasa-pasa, dili opisyal nga dokumento.',
      },
      {
        title: 'Parian, pantalan ug ang pagtubo sa usa ka merkado',
        body: 'Sa kolonyal nga Cebu, ang Parian mao ang distrito sa mga Chinese ug mestizo nga negosyante duol sa pantalan ug sa simbahan. Ang pagbayloay sa bugas, asin, isda ug imported nga paninda naghimo niining dapita nga sentro sa komersyo — ug ang Carbon mitubo gikan niining samang pressure: ang pantalan nagdala sa suplay, ug ang merkado nag-apod-apod niini sa tibuok siyudad.',
      },
      {
        title: 'Gubat, pagkaguba ug pagtukod pag-usab',
        body: 'Ang downtown Cebu grabeng naigo sa Ikaduhang Gubat sa Kalibutan; daghang istruktura ang naguba ug ang siyudad kinahanglang tukuron pag-usab. Ang merkado mibalik tungod sa panginahanglan ug nahimong pormal nga public market sa mga dekada human sa gubat. Kining layer sa kasaysayan maoy hinungdan nganong ang palibot sa Carbon sagol sa daan ug bag-ong istruktura.',
      },
      {
        title: 'Pusô: ang kan-on nga gihabol sa dahon',
        body: 'Ang pusô (hanging rice) giluto sulod sa hinabol nga dahon sa lubi ug gibitay sa mga stall. Sa tradisyon, kini maoy pagkaon sa mga biyahero, magpapatigayon ug trabahante — madala, dili mausik ug dili kinahanglan og plato. Hangtod karon, ang puso nagpabiling simbolo sa merkado: barato, praktikal ug gikaon gamit ang kamot.',
      },
      {
        title: 'Taboan ug ang baho sa tuyo',
        body: 'Ang Taboan section (dried fish ug processed seafood) mao ang usa sa labing mailhan nga baho sa Carbon: aso, asin ug uga nga isda. Kini ang labing karaang matang sa preserbasyon sa pagkaon sa dili pa naay refrigeration — pinauga ug pinaasinan aron molahutay sa biyahe ug sa ting-ulan. Alang sa mga Sugbuanon, kini dili lang produkto: kini ang lami sa panimalay.',
      },
      {
        title: 'Ang merkado nga dili matulog',
        body: 'Adunay lokal nga ekspresyon nga ang Carbon hapit dili matulog. Ang wholesale molihok sa lawom nga kaadlawon (mga alas 2 hangtod 5 sa buntag), ang retail mopuno sa buntag hangtod udto, ug ang food ug evening crowd mopuli sa hapon ug gabii. Kining 24-oras nga siklo maoy hinungdan nganong ang oras sa imong pagbisita dakog epekto sa imong makita.',
      },
      {
        title: 'Carbon ug ang Sinulog',
        body: 'Matag Enero, ang siyudad mag-andam alang sa Sinulog, ang debosyon ug pista sa Santo Niño. Ang merkado mahimong mas dasok: kandila, bulak, pagkaon ug mga gamit sa pista mopuno sa mga agianan. Kini ang usa sa pinakadasok apan pinakakolor nga panahon sa pagbisita — ug usa usab sa pinakalisod para sa transportasyon.',
      },
    ],
    factNote: 'Tin-aw nga pagbulag sa kamatuoran ug sugilanon: ang mga petsa ug panghitabo sa gubat ug kolonyal nga panahon adunay mas lig-on nga dokumentasyon, samtang ang etimolohiya sa ngalan ug ang mga asoy sa Parian gipasa-pasa isip lokal nga tradisyon. Wala mi nag-angkon nga usa ra ang tinuod nga bersyon.',
  },

  science: {
    kicker: 'Talabaho ug responsibilidad',
    title: 'How a Wet Market Works & How to Visit Responsibly',
    subtitle: 'Ngano nga importante ang merkado, ug unsay angay buhaton sa bisita',
    intro: 'Ang pulong nga “wet market” wala magpasabot nga hugaw kini. Kini nagtumong sa merkado nga namaligya og preskong pagkaon — karne, isda, prutas ug utan — diin ang salog kanunay gibasahan aron magpabiling limpyo ug bugnaw ang lugar nga walay bug-os nga refrigeration.',
    items: [
      {
        title: 'Ang supply chain sa likod sa usa ka kamatis',
        body: 'Kasagaran ang agianan mao: mag-uuma ug mangingisda → consolidation sa mga trader → wholesale trading sa kaadlawon → stallholder → pumapalit. Tungod niini, ang preskong abot moabot sa merkado sa wala pa ang kaadlawon ug ang presyo molihok sulod sa adlaw base sa supply ug demand. Kung mas mubo ang chain, mas gamay ang transportation emission ug mas daghan ang mabilin sa mga prodyuser.',
      },
      {
        title: 'Ngano nga importante ang presko ug lokal nga pagkaon',
        body: 'Ang pagpalit sa merkado nagsuporta sa mga mag-uuma ug mangingisda sa Cebu ug sa mga silingang isla sama sa Bohol, Negros ug Leyte, ug nagpabilin nga buhi ang lokal nga barayti sa prutas ug utan nga dili makita sa supermarket. Ang seasonal nga pagkaon mas barato, mas lami ug mas gamay ang food miles. Kini usa ka tinuod nga leksyon sa food system nga makita sa usa ra ka lakaw.',
      },
      {
        title: 'Food safety 101 sa merkado',
        body: 'Pagpili og stall nga busy ug paspas ang turnover kay nagpasabot kini og presko nga stock. Likayi ang karne ug isda nga gibiyaan sa init nga walay yelo; ibulag ang hilaw ug luto nga pagkaon; hugasan ang kamot o mogamit og sanitizer sa dili pa mokaon; ug dad-a ang imong kaugalingong bag. Kon dili ka sigurado sa gigikanan sa tubig o yelo, moinom na lang og bottled water.',
      },
      {
        title: 'Basura, plastik ug ang tunob sa bisita',
        body: 'Ang merkado makamugna og daghang organic waste ug single-use plastic gikan sa pagputos. Madala nimo ang reusable bag, tumbler ug gamay nga container para sa prutas; i-refuse ang sobra nga plastic; ug ayaw paglabay og basura sa agianan kay makabara kini sa drainage ug makadugang sa baha. Gamay nga batasan, dako og epekto kon gibuhat sa tanan.',
      },
      {
        title: 'Hulagway ug respeto sa mga tawo',
        body: 'Ang merkado usa ka trabahoan, dili photo studio. Pangayo og permiso sa dili pa mag close-up sa mga tindero ug pumapalit; likayi ang pag-block sa agianan sa delivery; ug ayaw pagkuha og litrato sa presyo o dokumento nga dili para sa publiko. Ang pagpalit gamay gikan sa stall nga imong gikuhaan og litrato usa ka maayong paagi sa pagpakita og respeto.',
      },
      {
        title: 'Presyo, bargaining ug patas nga patigayon',
        body: 'Pangutana sa presyo sa dili pa mopalit ug dad-a ang gagmay nga bill ug barya aron dili maglisod ang tindero sa sukli. Ang bargaining kasagaran ginagmay ra sa preskong produkto; mas maayo ang matinahuron nga pangutana kaysa agresibo nga pagtunga. Ang pagbilin og tip dili gikinahanglan, ug ang pag-round up sa kantidad usa ka boluntaryo nga maayong buhat, dili obligasyon.',
      },
    ],
    pledgeTitle: 'Sa dili pa ka mosulod: saad sa responsableng bisita',
    pledges: [
      'Moabot nga andam: cash nga gagmay, reusable bag ug tubig nga mainom.',
      'Mosul-ob og closed shoes ug modawat nga basa, saba ug huot ang tinuod nga merkado.',
      'Mangayo og permiso sa dili pa magkuha og litrato sa mga tawo.',
      'Mopalit gikan sa stall nga busy ug limpyo, ug morespeto sa presyo ug sa trabaho.',
      'Dili magbilin og basura ug momenos sa single-use plastic.',
      'Mouna sa kaluwasan kung adunay bagyo, baha o storm signal.',
    ],
    editorialNote: 'Kini nga seksyon gisulat para sa edukasyon sa publiko. Wala kini nag-angkon nga opisyal nga food-safety inspection, ug kung adunay sintomas sa sakit gikan sa pagkaon, pangayo og medical help ug i-report kini sa lokal nga health authority.',
  },

  zones: {
    kicker: 'Mga bahin sa merkado',
    title: 'Carbon Market Sections: Flower Market, Interim Building & Food Zone',
    subtitle: 'Asa ang flower market? Asa ang interim building?',
    intro: 'Ang Carbon dili usa ra ka building. Kini usa ka hugpong sa mga zone, numbered units ug temporaryong istruktura, ug ang layout mausab samtang nagpadayon ang redevelopment. Isipa kini nga mapa sa “klase sa pwesto” imbes nga fixed nga address, ug kumpirmahi sa adlaw mismo.',
    findLabel: 'Unsaon pagpangita',
    bestLabel: 'Pinakamaayong oras',
    tipLabel: 'Tip',
    items: [
      {
        icon: '✿',
        name: 'Flower market (bulaklak)',
        find: 'Ang mga tindera og bulak kasagarang nagpundo sa usa ka laray o hugpong sulod sa Carbon district, dili kanunay adunay dako nga signage. Kung dili nimo makit-an dayon, pangutana sa bisan unsang tindero: “Asa dapit ang bulak?”',
        best: 'Sayo sa buntag para sa presko nga cut flowers. Mosaka ang presyo ug huot kaayo ang tawo sa bisperas sa piyesta, Valentine’s Day ug Undás (Nob 1–2).',
        tip: 'Dad-a ang gagmay nga bills ug reusable bag; likayi ang paghawid sa phone sa tunga sa huot nga agianan.',
      },
      {
        icon: '▤',
        name: 'Interim building / temporary market',
        find: 'Samtang gina-redevelop ang Carbon, daghang tindero ang gibalhin sa interim (temporaryo) nga mga building ug stall rows. Pangitaa ang signage nga “interim” o “temporary market” ug sunda ang on-site marshals.',
        best: 'Buntag para sa tinuod nga palit ug wholesale rhythm; hapon para sa mas hinay nga agianan. Magpaabot og kausaban sa entrada matag higayon.',
        tip: 'Kung naa kay gitakdang stall nga tuyo, kumpirmahi sa adlaw mismo — mas paspas mausab ang interim layout kaysa permanenteng building.',
      },
      {
        icon: '◍',
        name: 'Food section / Unit 2 (kan-anan)',
        find: 'Ang linuto nga pagkaon, carinderia ug puso (hanging rice) nagpundo sa food zone sa merkado. Sunda ang aso sa sinugba ug ang stall nga daghang lokal nga naglinya.',
        best: 'Tunga sa buntag hangtod paniudto para sa bag-ong luto; gamay ra ang kapilian sa lawom nga gabii.',
        tip: 'Tudlo lang sa tray, pangutana sa presyo una, ug pilia ang stall nga paspas ang turnover sa pagkaon.',
      },
      {
        icon: '❋',
        name: 'Produce ug seafood (wholesale)',
        find: 'Ang prutas, utan ug isda mao ang kasingkasing sa Carbon: daghang trak, delivery cart ug mando-mando sayo pa kaayo sa buntag.',
        best: 'Mga 5–9 sa buntag para sa presko ug wholesale nga presyo; human niini mas retail na ang dagway ug mas hinay ang lihok.',
        tip: 'Ibutang ang imong bag sa tiil, dili sa agianan. Normal lang ang basa ug danlog nga salog dinhi — closed shoes gyud.',
      },
      {
        icon: '⬡',
        name: 'Dry goods, panapton ug souvenir',
        find: 'Ang dry goods, panapton, gamit sa balay ug gagmay nga souvenir kasagaran anaa sa mga outer rows ug commercial blocks — maayo kini human sa produce loop.',
        best: 'Udto hangtod hapon; dili kini nagsalig sa presko nga abot sama sa produce ug seafood.',
        tip: 'Itandi ang duha o tulo ka stall sa dili pa mopalit, ug mangayo og permiso sa dili pa magkuha og litrato sa mga tawo.',
      },
    ],
    note: 'Mahimong makita nimo sa signage o daang mapa ang mga ngalan sama sa Pusô Village, Puerta Marina ug mga numbered units (pananglitan Unit 2). Dili kini garantiya sa karon nga layout: tungod sa redevelopment, ang pinakasigurado nga “mapa” mao ang pagpangutana sa security, marshal o tindero sa adlaw sa imong pagbisita.',
  },

  extraFaqs: [
    {
      q: 'Asa ang flower market sa Carbon Market?',
      a: 'Ang mga tindera og bulak (flower market) nagpundo sa usa ka laray o hugpong sulod sa Carbon district, kasagaran duol sa mga nag-unang agianan sa merkado. Wala kini kanunay og dako nga signage, busa ang pinakapaspas nga paagi mao ang pagpangutana sa mga tindero: “Asa dapit ang bulak?” Sayo sa buntag ang pinakamaayo para sa presko nga cut flowers; mosaka ang presyo sa bisperas sa piyesta, Valentine’s Day ug Undás. Tungod sa redevelopment, mahimong mobalhin ang eksaktong laray — kumpirmahi sa adlaw mismo.',
    },
    {
      q: 'Unsa ang interim building sa Carbon Market?',
      a: 'Ang interim (temporaryo) nga mga building ug stall rows mao ang gibalhinan sa daghang tindero samtang gina-redevelop ang Carbon. Dinhi kasagaran nagpadayon ang adlaw-adlaw nga palit ug baligya. Magpaabot og mas simple nga istruktura, huot nga agianan ug kausaban sa entrada o pwesto — busa sunda ang on-site signage ug marshals imbes nga daang screenshot sa ruta.',
    },
    {
      q: 'Asa ang food section o Unit 2 sa Carbon?',
      a: 'Ang linuto nga pagkaon, carinderia ug puso (hanging rice) nagpundo sa food zone sa merkado, kasagaran gitawag sa mga lokal base sa unit o block nga ilang nahimutangan. Sunda ang aso sa sinugba ug ang stall nga daghang lokal nga naglinya; pangutana sa mga tindero kung asa ang labing duol nga kan-anan karon tungod sa nagpadayon nga redevelopment.',
    },
    {
      q: 'Aduna bay kasilyas (restroom) sa Carbon Market?',
      a: 'Oo, adunay public restrooms sa sulod o tapad sa market buildings ug sa mga commercial blocks sa downtown. Kasagaran kini pay-per-use nga adunay gamay nga bayad, busa dad-a ang barya, tissue ug hand sanitizer kay dili kanunay kompleto ang sabon ug tubig.',
    },
    {
      q: 'Unsaon pag-adto gikan sa Mactan-Cebu International Airport padulong sa Carbon?',
      a: 'Ang pinakasayon mao ang official airport taxi o app-based ride-hailing padulong sa "Carbon Market, M. C. Briones St, Cebu City" (mga 30–60 ka minuto depende sa traffic). Ang mas barato nga alternatibo mao ang airport shuttle/bus paingon sa siyudad, dayon jeepney o taxi padulong sa downtown.',
    },
    {
      q: 'Unsa ang pinakabarato nga pampublikong transportasyon padulong sa Carbon?',
      a: 'Ang jeepney mao ang pinakabarato. Pangitaa ang signboard nga "Carbon", "Santo Niño", "Taboan" o "Plaza Sugbo", kumpirmaha sa drayber sa dili pa mosakay, ug pag-andam og gagmay nga bill. Ang tricycle mas mahal og gamay apan door-to-door para sa mubo nga distansya.',
    },
    {
      q: 'Unsa ang buhaton kung mag-ulan sa adlaw sa pagbisita?',
      a: 'Dad-a ang payong o rain jacket ug waterproof bag para sa imong gamit. Ang pipila ka agianan sa merkado mahimong basa ug mobaha, busa isul-ob ang closed shoes nga dili madalin-as. Kung adunay storm signal o tropical cyclone warning, i-postpone ang suroy.',
    },
    {
      q: 'Pwede bang magbayad gamit ang card o e-wallet?',
      a: 'Ang cash gihapon ang pinakasaligan sa merkado, labi na ang gagmay nga bill. Ang QR/e-wallet ug card nadawat sa pipila ka stall ug food hub, apan dili sa tanan, busa pag-andam og cash ug ATM kung magdugay ka.',
    },
    {
      q: 'Luwas ba ang pagkaon gikan sa merkado?',
      a: 'Kadaghanan sa mga lokal mopalit adlaw-adlaw sa Carbon, ug ang maayong praktis mao ang pagpili og stall nga busy ug paspas ang turnover, paglikay sa pagkaon nga gibiyaan sa init nga walay yelo, pagluto og tarong ug pag-inom og bottled water. Kung dili ka sigurado sa tubig o yelo, laktawi kini.',
    },
    {
      q: 'Aduna bay wheelchair-access nga agianan o lingkoranan?',
      a: 'Ang accessibility sa merkado dili pare-pareho: ang ubang entrada hagip-ot, adunay hagdanan ug huot sa peak hours. Mas maayo ang pag-abot og sayo, paggamit sa mas lapad nga outer aisles, ug pagpangutana sa security o marshal sa adlaw mismo. Ang mga food hub ug Plaza Sugbo adunay mas daghang kapilian sa lingkoranan.',
    },
    {
      q: 'Asa ang pinakaduol nga parking ug gasolinahan?',
      a: 'Adunay opisyal nga parking areas sulod sa redeveloped Carbon district ug sa duol nga commercial blocks; sunda ang on-site signage ug marshals kay mausab ang entry points. Ang fuel stations anaa sa mga major roads padulong sa downtown ug pantalan; ang public EV charging limitado pa ug kasagaran anaa sa mall o hotel parking.',
    },
  ],
};

export type Content = typeof ceb;
