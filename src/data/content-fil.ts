import type { Content } from './content-ceb';

export const fil: Content = {
  nav: {
    weather: 'Panahon',
    transport: 'Transportasyon',
    services: 'Serbisyo',
    routes: 'Ruta',
    stories: 'Kasaysayan',
    science: 'Agham',
  },

  weather: {
    kicker: 'Panahon sa Carbon',
    title: 'Carbon Market Weather & 7-Day Forecast',
    subtitle: 'Ano ang isusuot at dadalhin sa araw ng iyong pagbisita',
    placeNote: 'Downtown Cebu City · 10.2914° N, 123.8991° E',
    observedLabel: 'Huling update',
    todayLabel: 'Ngayon sa merkado',
    feelsLabel: 'Pakiramdam',
    humidityLabel: 'Humidity',
    windLabel: 'Hangin',
    rainLabel: 'Tsansa ng ulan',
    rainTodayLabel: 'Ulan ngayong araw',
    uvLabel: 'Peak UV index',
    sunriseLabel: 'Pagsikat ng araw',
    sunsetLabel: 'Paglubog ng araw',
    forecastLabel: 'Susunod na 7 araw',
    umbrellaLabel: 'Payong ngayon?',
    umbrellaYes: 'Magdala ng payong o rain jacket — mataas ang tsansa ng ulan.',
    umbrellaMaybe: 'Pwede ang maliit na payong o sombrero; posible ang paminsan-minsang ulan.',
    umbrellaNo: 'Hindi kailangan ng payong, pero magagamit ang sombrero at tubig.',
    heatNote: 'Inaasahang mainit: dahan-dahan, uminom ng tubig, at magpahinga sa lilim.',
    rainNote: 'Ang malakas na ulan ay maaaring magbasa at magbaha sa ilang daanan ng merkado.',
    mildNote: 'Magandang kondisyon sa paglakad; i-adjust lang ang oras base sa dami ng tao.',
    dayNow: 'Ngayon',
    dayTomorrow: 'Bukas',
    maxLabel: 'Mataas',
    minLabel: 'Mababa',
    groupOutfit: 'Isusuot',
    groupPlan: 'Plano ng paglilibot',
    groupGear: 'Dadalhin',
    groupRisk: 'Babala sa peligro',
    riskHint: 'Unahin ang kaligtasan: i-adjust ang oras at ruta kung posible, at sundin ang opisyal na abiso.',
    summaryUv: 'UV index',
    summaryWind: 'Hangin',
    advice: {
      'outfit-rain-likely':
        'Mataas ang tsansa ng ulan — magsuot ng mabilis matuyo na sapatos at iwasan ang bukas na sandalyas dahil madulas ang semento.',
      'outfit-rain-light':
        'Ambon lang: madulas ang tile at semento sa merkado, piliin ang sapatos na hindi madudulas.',
      'outfit-rain-heavy':
        'Malakas na ulan: waterproof jacket at quick-dry na damit; iwasan ang mahabang palda at mabigat na tela kapag basa.',
      'outfit-heat': 'Mainit (32°C pataas): light-colored, maluwag at breathable na damit.',
      'outfit-humid': 'Maalinsangan: moisture-wicking na tela dahil mabilis pawisan sa loob ng merkado.',
      'outfit-sun': 'Maaliwalas: sombrero o cap at sunglasses dahil matindi ang araw sa tanghali.',
      'outfit-wind': 'Malakas ang hangin: iwasan ang maluwag na palda at sombrerong walang strap.',
      'outfit-diurnal': 'Malaki ang agwat ng init at lamig (8°C pataas): mag-layer ng jacket na madaling tanggalin.',
      'outfit-cool': 'Malamig ang umaga o gabi (18°C pababa): magdala ng manipis na jacket.',
      'outfit-normal':
        'Komportableng damit panlakad at closed na sapatos — maraming bahagi ng merkado ang basa at hindi pantay.',

      'plan-indoor-first':
        'Unahin ang nasa loob (market hall, simbahan, museo) at ipagpabukas muna ang malayong outdoor side trip.',
      'plan-market-morning':
        'Libutin ang merkado nang maaga (6–9 ng umaga): mas sariwa ang paninda, kaunti ang tao at hindi pa masyadong mainit.',
      'plan-urban-heat':
        'Semento at siksik ang downtown: gamitin ang may lilim na daanan at magpahinga bawat 30–45 minuto.',
      'plan-humid-feel':
        'Ang "feels like" ay mas mataas sa aktuwal na temperatura — dahan-dahan at uminom ng tubig nang madalas.',
      'plan-slippery':
        'Basa ang daanan sa merkado: mag-ingat sa hagdanan, drainage at loading area.',
      'plan-flood':
        'Malakas na ulan: posibleng baha sa mababang kalsada ng downtown — dagdagan ang oras ng biyahe at maghanap ng alternatibong ruta.',
      'plan-thunder':
        'Thunderstorm: iwasan ang open area at puno; karaniwang suspendido ang outdoor tour at water activity.',
      'plan-seaside-postpone':
        'Malakas ang hangin o ulan: posibleng ma-delay ang ferry at island hop; ipagpabukas muna ang water activity.',
      'plan-photo-soft':
        'Maulap: malambot ang liwanag — maganda para sa litrato sa merkado at walang matigas na anino.',
      'plan-clear-outdoor':
        'Maaliwalas: maganda para sa lakad sa labas at sunset sa pier; iwasan lang ang tanghali.',
      'plan-normal':
        'Walang espesyal na hadlang sa panahon — ibase na lang sa oras: maaga para sa sariwang paninda, hapon para sa kaunting tao.',

      'gear-umbrella': 'Payong o rain jacket',
      'gear-folding-umbrella': 'Maliit na folding umbrella',
      'gear-raincoat': 'Raincoat — mas praktikal kaysa mahabang payong kapag malakas ang hangin',
      'gear-sunscreen': 'Sunscreen (SPF 30+)',
      'gear-hat': 'Sombrero o cap at sunglasses',
      'gear-water': 'Bote ng tubig (1 litro pataas)',
      'gear-electrolyte': 'Tubig na may electrolyte para sa matinding init',
      'gear-wipes': 'Wet wipes at maliit na plastic bag para sa basang payong',
      'gear-jacket': 'Manipis na jacket para sa malamig na umaga o gabi',
      'gear-mask': 'Mask kapag maulap o maalikabok sa kalsada',
      'gear-basic': 'Barya para sa public restroom, eco-bag at hand sanitizer',

      'risk-thunder':
        'May thunderstorm: huwag sumilong sa puno o open area — ipagpabukas muna ang outdoor at water activity.',
      'risk-heavy-rain':
        'Malakas na ulan: iwasan ang mababa at bahaing kalsada sa downtown at dagdagan ang oras ng biyahe.',
      'risk-flood':
        'Posibleng pagbaha: piliin ang mataas na ruta at iwasan ang underpass at lugar na malapit sa kanal.',
      'risk-wind': 'Napakalakas na hangin: iwasan ang pier, billboard at pansamantalang istruktura.',
      'risk-heat':
        'Matinding init (heat index): uminom ng tubig nang madalas, magpahinga sa lilim at iwasan ang tanghali sa labas.',
      'risk-fog': 'Makapal na hamog: mababa ang visibility — mag-ingat sa kalsada at ipagpabukas muna ang view deck o ferry.',

      'uv-low': 'mababa',
      'uv-moderate': 'katamtaman',
      'uv-strong': 'malakas',
      'uv-very-strong': 'matindi',
      'wind-calm': 'mahina',
      'wind-breeze': 'katamtaman',
      'wind-strong': 'malakas (5–6)',
      'wind-gale': 'napakalakas (7+)',
    },
    note: 'Ang mga numero ay mula sa numerical weather forecast para sa coordinates ng Carbon Market at awtomatikong nire-refresh tuwing bubuksan ang pahina. Para sa bagyo at storm signal, sundin ang opisyal na abiso ng PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration).',
    unavailable: 'Hindi namin nakuha ang pinakabagong datos ng panahon sa oras na ito. I-reload ang pahina o tingnan ang opisyal na weather service bago bumiyahe.',
    unit: '°C',
  },

  weekdays: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],

  services: {
    kicker: 'Serbisyo at pasilidad',
    title: 'Visitor Services & Facilities Near Carbon Market',
    subtitle: 'Banyo, parking, kainan, matutuluyan, grocery, gasolina at charging — ayon sa uri, hindi brand',
    intro: 'Ang Carbon ay isang gumaganang merkado, hindi curated attraction. Ang mga pasilidad dito ay pinagsasaluhan ng mga mamimili, tindero at delivery — kaya mas mainam na dumating nang handa, at gumamit ng mga serbisyo ayon sa uri (halimbawa: public restroom, food court, supermarket) sa halip na maghanap ng iisang partikular na negosyo.',
    items: [
      {
        icon: '◍',
        title: 'Banyo at hugasan ng kamay (WC)',
        body: 'May mga public restroom sa loob o tabi ng market buildings at sa mga commercial blocks ng downtown. Karaniwan itong pay-per-use na may maliit na bayad, kaya magdala ng barya, tissue at hand sanitizer. Hindi lahat ay may sabon at umaagos na tubig, at nag-iiba ang kondisyon depende sa oras ng araw.',
      },
      {
        icon: '▣',
        title: 'Parking at drop-off',
        body: 'May mga parking area sa loob ng redeveloped Carbon district at sa mga kalapit na commercial block; may ilan ding zone para sa motor at bisikleta. Iwasan ang roadside parking na humaharang sa delivery lanes dahil kadalasang tina-tow o cini-clamp. Sundin ang on-site signage at marshals dahil nagbabago ang mga entry point dahil sa redevelopment.',
      },
      {
        icon: '◈',
        title: 'Kainan at inumin',
        body: 'Ang pinakasimpleng opsyon ay carinderia at market food stalls (pusô, inihaw, sabaw), sunod ang mga food hub/court na may upuan, at ang bakeries o convenience store para sa mabilisang meryenda. Limitado ang vegetarian, halal at may label na allergen na pagkain — magtanong nang direkta sa stall at laktawan ang hindi malinaw.',
      },
      {
        icon: '◇',
        title: 'Matutuluyan at akomodasyon',
        body: 'Sa downtown ay may mga budget inn, pension house at business hotel; ang mas malalaking hotel cluster ay nasa uptown business districts na mga 10–20 minutong biyahe. Pumili base sa lokasyon, accessibility at tolerance sa ingay — maingay at buhay ang downtown, lalo na nang maaga sa umaga.',
      },
      {
        icon: '✦',
        title: 'Grocery, supermarket at botika',
        body: 'Para sa bottled water, toiletries at over-the-counter na gamot, may mga convenience store, supermarket sa mall at botika (pharmacy) sa mga kalsada ng downtown. Ang sariwang prutas, gulay at isda ay mas mura at mas sariwa sa mismong merkado, kaya doon bumili ng pang-araw-araw.',
      },
      {
        icon: '⬡',
        title: 'Gasolina at charging station',
        body: 'Ang mga fuel station ay nasa mga pangunahing kalsada papuntang downtown at pantalan, pero siksik ang mga daanan sa peak hours. Limitado pa ang public EV charging sa Metro Cebu at karaniwang nasa mall o hotel parking — kung mag-EV ka, planuhin nang maaga ang charging stop at kumpirmahin sa iyong app sa mismong araw.',
      },
      {
        icon: '⌁',
        title: 'ATM, bangko at paraan ng pagbabayad',
        body: 'Cash pa rin ang pinakamabilis sa merkado, lalo na ang maliliit na bill at barya. May ATM at bangko sa mga kalsada ng downtown at sa mall; karaniwang may withdrawal fee at limit. Ang QR/e-wallet at card ay tinatanggap sa ilang stall at food hub, pero hindi sa lahat — huwag iaasa ang buong araw sa iisang paraan ng pagbabayad.',
      },
      {
        icon: '✚',
        title: 'Medical, first aid at kaligtasan',
        body: 'May pharmacy, clinic at hospital na mabilis maabot mula sa downtown. Ang karaniwang problema ng bisita ay heat exhaustion, dehydration at pagkadulas sa basang sahig. Dalhin ang iyong maintenance na gamot, gumamit ng closed shoes, at humingi ng tulong sa mga stallholder o security kung kinakailangan.',
      },
      {
        icon: '◐',
        title: 'Koneksyon, wifi at signal',
        body: 'Karaniwang gumagana ang mobile data sa downtown, pero bumabagal kapag sobrang siksik o nasa ilalim ng metal na bubong. May libreng wifi sa mga mall at ilang food hub; huwag itakda ang mahalagang meeting sa loob ng merkado, at i-download nang maaga ang iyong mapa at transportasyon.',
      },
    ],
    policyNote: 'Patakaran ng editoryal: ang website na ito ay isang independent, non-profit na gabay para sa edukasyon. Tanging mga uri ng serbisyo ang aming binabanggit (public restroom, food court, supermarket, pharmacy) at hindi kami nagrerekomenda, nagra-rank o tumatanggap ng bayad mula sa partikular na negosyo o brand.',
  },

  transport: {
    kicker: 'Detalye ng transportasyon',
    title: 'Getting to Carbon Market: Airport, Public Transport & Taxi',
    subtitle: 'Paano pumunta mula sa airport, mula sa uptown, at mula sa mga karatig na probinsya',
    intro: 'Ang downtown Cebu ay kilala sa siksik na traffic at sa nagbabagong ruta dahil sa redevelopment. Mas matibay ang destination-based na pagsakay (sabihin ang "Carbon, M. C. Briones St") kaysa sa pagmemorize ng lumang route code.',
    modes: [
      {
        tag: '01',
        title: 'Mula sa Mactan-Cebu International Airport (MCIA)',
        bestFor: 'Unang beses na bisita, may bagahe, nagmamadali',
        duration: '30–60 minuto depende sa traffic',
        cost: 'Karaniwang ₱250–₱600 (indikasyon lamang, nagbabago ayon sa provider at oras)',
        steps: [
          'Gamitin ang official airport taxi queue o ang iyong ride-hailing app; i-type ang "Carbon Market, M. C. Briones St, Cebu City" sa halip na "Cebu" lamang.',
          'Ang mas murang alternatibo ay airport shuttle/bus papuntang city terminal o mall, pagkatapos ay jeepney o taxi papuntang downtown.',
          'Kung gabi ang dating, unahin ang door-to-door na sasakyan — bihira na ang public transport at mas mahirap magtanong sa daan.',
        ],
        tip: 'Huwag tanggapin ang "fixed special rate" mula sa hindi rehistradong drayber sa arrival hall; gamitin ang official queue o app.',
      },
      {
        tag: '02',
        title: 'Jeepney at modern jeepney (pinakamura)',
        bestFor: 'Biyaherong magaan ang dala at gustong maranasan ang lokal na transportasyon',
        duration: '20–50 minuto mula sa uptown depende sa stop-and-go',
        cost: 'Pinakamurang pampublikong pamasahe (cash, maliliit na bill)',
        steps: [
          'Hanapin ang signboard sa harap na may nakasulat na "Carbon", "Santo Niño", "Taboan" o "Plaza Sugbo"; may electronic display din ang mga modern jeepney at minibus.',
          'Sumakay sa likod, ipasa ang bayad sa konduktor o drayber, at sabihin nang maaga kung saan ka bababa.',
          'Bumaba malapit sa M. C. Briones St o Plaza Sugbo at maglakad papasok sa merkado; itanong sa drayber kung alin ang pinakamalapit ngayon dahil nagbabago ang daan.',
        ],
        tip: 'Nagbabago ang mga ruta dahil sa roadworks at one-way adjustment. Kumpirmahin sa drayber bago sumakay at huwag i-assume na pareho pa rin ang ruta sa iyong nabasa online.',
      },
      {
        tag: '03',
        title: 'Tricycle para sa maikling biyahe',
        bestFor: 'Maikling distansya sa loob ng downtown, walang bagahe, maulan',
        duration: '5–15 minuto sa loob ng downtown',
        cost: 'Mura; karaniwang bahagyang mas mahal bawat kilometro kaysa jeepney pero door-to-door',
        steps: [
          'Magkasundo sa pamasahe bago sumakay, lalo na kung maulan o gabi.',
          'Gamitin ang landmark sa halip na street number: "Carbon, malapit sa Pusô Village" o "Plaza Sugbo".',
          'Gamitin ito para sa huling hop mula sa main road papuntang entrance, hindi para sa buong cross-city na biyahe.',
        ],
        tip: 'Ang tricycle ay para sa lokal na maikling biyahe; kung malayo ang distansya, mas mabilis at mas mura ang taxi o jeepney.',
      },
      {
        tag: '04',
        title: 'Taxi at app-based ride-hailing',
        bestFor: 'Pamilya, senior, mainit na tanghali at kapag may bagahe',
        duration: '20–45 minuto mula sa uptown; 30–60 minuto mula sa airport',
        cost: 'Metered taxi o in-app estimate; may surge kapag peak hours at maulan',
        steps: [
          'Piliin ang metered taxi ("by meter") o ang in-app fare; kung hindi gumana ang meter, magkasundo muna sa halaga.',
          'Itakda ang drop-off na malapit sa gusto mong entrance at i-verify ang pin sa mapa bago mag-confirm.',
          'Maghanda ng maliliit na cash dahil ang ilang drayber ay walang malaking sukli nang maaga sa umaga.',
        ],
        tip: 'Iwasan ang 7–9 ng umaga at 4–7 ng hapon. Kapag maulan, dagdagan ang oras — ang surge at baha ay maaaring magdagdag ng 20–30 minuto.',
      },
      {
        tag: '05',
        title: 'Intercity at provincial bus',
        bestFor: 'Mula sa mga probinsya sa timog at hilaga ng Cebu at mga karatig na isla',
        duration: 'Nag-iiba nang malaki depende sa pinagmulan',
        cost: 'Mura; ang bus ang backbone ng intercity travel sa Cebu',
        steps: [
          'Ang mga provincial bus ay papunta sa mga terminal ng lungsod; mula roon, sumakay ng taxi, jeepney o tricycle papuntang downtown.',
          'Kung marami kang bagahe, mas simple ang taxi mula sa terminal kaysa magpalipat-lipat ng sasakyan.',
          'Kumpirmahin ang last trip kung gabi ka na darating — hindi 24 oras ang lahat ng linya.',
        ],
        tip: 'Ang bus terminal ay hindi mismo nasa merkado. Isama sa iyong plano ang huling hop papuntang Carbon.',
      },
      {
        tag: '06',
        title: 'Sariling sasakyan, parking at drop-off',
        bestFor: 'Pamilyang may gamit ng bata, o maraming bibilhin',
        duration: 'Depende sa traffic; mas matagal kaysa inaasahan sa peak hours',
        cost: 'Fuel + parking fee + panganib na ma-clamp kung makaharang',
        steps: [
          'Mag-drop-off na lamang kung kaya — mas mahirap ang parking kaysa paglalakad sa downtown.',
          'Gamitin ang opisyal na parking area sa loob ng Carbon district o sa mga kalapit na commercial block, at itago ang ticket/stub.',
          'Huwag iwan ang mahahalagang bagay na nakikita sa loob ng sasakyan at sundin ang marshals sa exit.',
        ],
        tip: 'Kung may shuttle ang iyong hotel o kayang mag-ride-hail ng grupo, mas mabilis ang biyahe kaysa magdala ng sasakyan sa siksik na downtown.',
      },
    ],
    walkTitle: 'Paglalakad mula sa mga kalapit na landmark',
    walkNote: 'Pinakamainam na isama ang Carbon sa walking loop: mula sa Basilica Minore del Santo Niño at Magellan’s Cross ay ilang minuto lang; mula sa Colon Street ay mga 10–15 minuto; mula sa Fort San Pedro at Plaza Independencia ay mga 10–20 minuto. Mag-ingat sa mga delivery cart at basang sahig sa mga daanan.',
    accessTitle: 'Accessibility at kaligtasan sa daan',
    accessNote: 'Hindi pare-pareho ang accessibility ng merkado: may mga entrance na makitid, may hagdan at siksik sa peak hours. Ang mas maayos na paraan ay dumating nang maaga, gamitin ang mas malapad na outer aisles, at itanong sa security/marshal kung alin ang pinakamainam na drop-off sa mismong araw. Magsuot ng closed shoes na hindi madulas.',
  },

  seasons: {
    kicker: 'Estratehiya bawat quarter',
    title: 'Quarterly Visit Strategy for Carbon Market',
    subtitle: 'Klima, suplay ng merkado at dami ng tao sa buong taon',
    basis: 'Ang summary dito ay batay sa long-term monthly climate averages ng Metro Cebu (1991–2020 normals) at sa karaniwang seasonal pattern ng operasyon ng merkado. Gamitin ito sa pagpaplano ng buwan; para sa mismong araw, batayan ang forecast block sa itaas.',
    columns: ['Panahon', 'Klima', 'Suplay ng merkado', 'Dami ng tao', 'Rekomendasyon'],
    rows: [
      {
        period: 'Q1 · Enero–Marso',
        climate: 'Mainit pero tuyo; karaniwang 24–32 °C, kaunting ulan',
        supply: 'Maraming sariwang prutas at gulay; matatag ang suplay ng seafood; peak ng holiday goods sa Enero',
        crowd: 'Napakataas sa linggo ng Sinulog; katamtaman sa Pebrero–Marso',
        advice: 'Pinakamainam na quarter para maglakad. Dumating nang maaga sa umaga, at iwasan ang sentro ng lungsod sa mga araw ng Sinulog kung ayaw mo ng siksikan.',
      },
      {
        period: 'Q2 · Abril–Hunyo',
        climate: 'Pinakamainit na mga buwan; hanggang 33–35 °C sa tanghali, simula ng habagat at ulan sa hapon',
        supply: 'Maraming prutas sa tag-init; bumabagal ang seafood kapag malakas ang hangin at dagat',
        crowd: 'Katamtaman; kaunti ang tao sa tanghali dahil sa init',
        advice: 'Maglibot sa maagang umaga o huling hapon. Magdala ng tubig, sombrero at payong para sa biglaang ulan; iwasan ang tanghali kung hindi ka sanay sa humid na klima.',
      },
      {
        period: 'Q3 · Hulyo–Setyembre',
        climate: 'Tag-ulan at typhoon season; madalas na ulan at pagbaha sa mababang lugar',
        supply: 'Maaaring kumaunti matapos ang bagyo at gumalaw ang presyo; lumalakas ang dried goods at root crops',
        crowd: 'Mababa hanggang katamtaman; bumabagal ang turista',
        advice: 'Unahin ang kaligtasan: tingnan ang weather advisory at iwasan ang pagbisita kung may storm signal. Kung pupunta, gumamit ng waterproof bag at closed shoes na hindi madulas.',
      },
      {
        period: 'Q4 · Oktubre–Disyembre',
        climate: 'Transition: may ulan pa sa Oktubre–Nobyembre, mas malamig at tuyo sa Disyembre',
        supply: 'Maganda ang suplay para sa Pasko; maraming dried fish at processed goods sa Taboan',
        crowd: 'Tataas muli sa Disyembre (holiday shopping)',
        advice: 'Magandang balanse ng panahon at suplay. Maglaan ng dagdag na oras para sa holiday traffic at pamimili kasama ang mga lokal; maglibot sa umaga para sa sariwang ani.',
      },
    ],
    notes: [
      'Ang biglaang ulan sa hapon ay karaniwan sa tag-init at tag-ulan; ang multi-day forecast ang mas nararapat batayan kaysa buwanang average.',
      'Ang Sinulog (ikatlong Linggo ng Enero) ay nangangahulugan ng maraming tao, road closure, mas mataas na presyo sa kalapit na serbisyo at mas mahigpit na security.',
      'Kapag may tropical cyclone warning, mapanganib ang downtown at ang merkado: baha, nahulog na kable at saradong daanan. I-postpone ang paglibot.',
    ],
    analysisTitle: 'Kung bakit magkakaugnay ang klima, suplay at presyo',
    analysisNote: 'Ang presyo sa wet market ay hindi fixed gaya ng supermarket: resulta ito ng dami ng ani na dinala sa umaga, ng kondisyon ng dagat, ng gasolina sa transportasyon at ng demand tuwing pista o holiday. Kaya ang isang linggong maulan ay maaaring magtaas ng presyo ng gulay habang ang peak season ng prutas ay nagpapababa nito.',
  },

  routes: {
    kicker: 'Mga ruta ng paglibot',
    title: 'Recommended Itineraries for Carbon Market',
    subtitle: 'Tatlong ruta ayon sa uri ng biyahero, dagdag ang kalahating araw at buong araw na plano',
    intro: 'Ang lahat ng ruta dito ay mungkahi lamang, hindi fixed package. I-adjust base sa iyong oras, panahon at lakas — ang mismong merkado ang magdidikta ng takbo.',
    audienceTitle: 'Mga ruta ayon sa uri ng biyahero',
    audiences: [
      {
        title: 'Pamilyang may mga bata',
        duration: '2–3 oras · mabagal na pacing',
        stops: [
          'Simula sa outer produce aisles sa umaga (mas maluwag at hindi pa siksik).',
          'Maikling snack stop: puso, inihaw o prutas na hiniwa.',
          'Tingnan ang dry goods at handicraft aisle para sa murang souvenir.',
          'Tapos sa Plaza Sugbo / open space para makapag-upo at makapahinga ang bata.',
        ],
        tips: [
          'Iwasan ang tanghali: init, siksikan at delivery traffic.',
          'Magkasundo sa meeting point kung magkahiwalay, at magdala ng tubig at wet wipes.',
          'Huwag bumili ng pagkaing hindi malinaw ang pinagmulan ng tubig o yelo.',
        ],
      },
      {
        title: 'Photography, kultura at pagkain',
        duration: '3–4 oras · maraming hinto',
        stops: [
          'Overview shot sa labas ng merkado o mula sa elevated walkway.',
          'Produce aisles para sa kulay, texture at mga kamay ng tindero.',
          'Taboan dried-fish section: ilaw, usok at amoy ay bahagi ng kwento.',
          'Golden hour papuntang Basilica at Magellan’s Cross para sa heritage frame.',
        ],
        tips: [
          'Humingi ng pahintulot bago kumuha ng close-up ng tao; hindi lahat ay komportable.',
          'Basa at siksik ang sahig — protektahan ang gamit at gumamit ng maliit na lens.',
          'Ang pinakamagandang ilaw ay nasa maagang umaga at huling hapon.',
        ],
      },
      {
        title: 'Low-mobility, senior at wheelchair',
        duration: '1.5–2.5 oras · patag at may upuan',
        stops: [
          'Door-to-door drop-off sa entrance na irerekomenda ng marshal sa mismong araw.',
          'Mas malapad na outer aisles at retail rows sa halip na siksik na inner produce lane.',
          'Upuan sa food hub o carinderia na may mesa.',
          'Tapos sa Plaza Sugbo / Basilica area na mas maayos ang daan.',
        ],
        tips: [
          'Hindi pare-pareho ang accessibility ng merkado; magtanong muna sa security kung alin ang pinakamainam na daan.',
          'Iwasan ang peak hours: napakaaga at hapon matapos ang trabaho.',
          'Ang tricycle o taxi na door-to-door ay makakatipid ng maraming lakad sa siksik na downtown.',
        ],
      },
    ],
    halfDayTitle: 'Kalahating araw (3–4 oras)',
    halfDayStops: [
      'Carbon Market — produce, seafood at dry goods',
      'Taboan section — dried fish at lokal na produkto',
      'Magellan’s Cross at Basilica Minore del Santo Niño',
      'Plaza Independencia',
      'Fort San Pedro (huling landmark ng loop)',
    ],
    fullDayTitle: 'Buong araw (6–8 oras)',
    fullDayStops: [
      'Maagang umaga — wholesale rhythm at pinakasariwang ani sa Carbon',
      'Almusal sa carinderia o food hub (pusô at sabaw)',
      'Lakad sa Colon Street, ang lumang kalsada ng lungsod',
      'Casa Gorordo Museum para sa arkitektura at buhay sa lumang Cebu',
      'Basilica Minore del Santo Niño at Magellan’s Cross',
      'Plaza Independencia at Fort San Pedro',
      'Balik sa Carbon sa huling hapon para sa pagkain at city lights',
      'Tapos sa sunset walk sa downtown o sa baybayin',
    ],
    routeNote: 'Ang aktuwal na access ay maaaring magbago dahil sa roadworks, redevelopment at relihiyosong aktibidad. Kung nagmamadali, unahin ang merkado at ang paligid ng Basilica; kung may oras, idagdag ang museo at Fort San Pedro.',
  },

  stories: {
    kicker: 'Kasaysayan at alamat',
    title: 'Stories, Origins & Legends of Carbon Market',
    subtitle: 'Kung bakit “Carbon”, ano ang Parian, at kung bakit halos hindi natutulog ang merkado',
    intro: 'Ang Carbon ay hindi lang lugar para bumili ng gulay. Isa ito sa mga pinakamatanda at pinakapinag-uusapang public market sa Cebu, at ang kwento nito ay magkakahabi sa pantalan, sa kolonyal na lungsod, sa digmaan at sa pang-araw-araw na pagkain ng mga Cebuano.',
    items: [
      {
        title: 'Pangalang “Carbon”: uling, pantalan, o alamat?',
        body: 'Ang karaniwang paliwanag ay nanggaling ang pangalan sa “carbon” (uling) — isang depot o imbakan ng uling malapit sa pantalan noong panahon ng Kastila, kung saan ang uling ay ginamit ng mga barko at ng mga kusina ng lungsod. May lokal ding kwento na ang lugar ay siyang pinagdiskargahan ng uling mula sa mga barko. Walang iisang kasunduan sa mga historyador, kaya ituring itong lokal na etimolohiya na ipinasa-pasa, hindi opisyal na dokumento.',
      },
      {
        title: 'Parian, pantalan at ang paglaki ng isang merkado',
        body: 'Sa kolonyal na Cebu, ang Parian ang distrito ng mga Chinese at mestizong negosyante malapit sa pantalan at simbahan. Ang palitan ng bigas, asin, isda at imported na paninda ang naging dahilan kung bakit sentro ng komersyo ang lugar na ito — at ang Carbon ay lumaki mula sa parehong pressure: ang pantalan ang nagdala ng suplay, at ang merkado ang nagpamahagi nito sa buong lungsod.',
      },
      {
        title: 'Digmaan, pagkawasak at muling pagtatayo',
        body: 'Ang downtown Cebu ay lubhang naapektuhan noong Ikalawang Digmaang Pandaigdig; maraming istruktura ang nawasak at kinailangang muling itayo ang lungsod. Bumalik ang merkado dahil sa pangangailangan at naging pormal na public market sa mga dekada matapos ang digmaan. Ang layer na ito ng kasaysayan ang dahilan kung bakit halo ng luma at bago ang paligid ng Carbon.',
      },
      {
        title: 'Pusô: ang kaning hinabi sa dahon',
        body: 'Ang pusô (hanging rice) ay niluluto sa loob ng hinabing dahon ng niyog at isinasabit sa mga stall. Sa tradisyon, ito ang pagkain ng mga biyahero, mangangalakal at manggagawa — madaling dalhin, hindi mabilis masira at hindi nangangailangan ng pinggan. Hanggang ngayon, ang puso ay nananatiling simbolo ng merkado: mura, praktikal at kinakain gamit ang kamay.',
      },
      {
        title: 'Taboan at ang amoy ng tuyo',
        body: 'Ang Taboan section (dried fish at processed seafood) ay isa sa mga pinakakilalang amoy sa Carbon: usok, asin at pinatuyong isda. Ito ang pinakamatandang paraan ng pagpreserba ng pagkain bago ang refrigeration — pinatuyo at inasnan upang tumagal sa biyahe at sa tag-ulan. Para sa mga Cebuano, hindi lang ito produkto: ito ang lasa ng tahanan.',
      },
      {
        title: 'Ang merkadong halos hindi natutulog',
        body: 'May lokal na pahayag na ang Carbon ay halos hindi natutulog. Ang wholesale ay gumagalaw sa madaling araw (mga alas 2 hanggang 5 ng umaga), ang retail ay sumasakop sa umaga hanggang tanghali, at ang food at evening crowd ang pumapalit sa hapon at gabi. Ang 24-oras na siklong ito ang dahilan kung bakit malaki ang epekto ng iyong oras ng pagbisita sa iyong makikita.',
      },
      {
        title: 'Carbon at ang Sinulog',
        body: 'Tuwing Enero, naghahanda ang lungsod para sa Sinulog, ang debosyon at pista ng Santo Niño. Nagiging mas siksik ang merkado: kandila, bulaklak, pagkain at mga gamit sa pista ang pumupuno sa mga daanan. Isa ito sa pinakasiksik pero pinakamakulay na panahon ng pagbisita — at isa rin sa pinakamahirap para sa transportasyon.',
      },
    ],
    factNote: 'Malinaw na paghihiwalay ng katotohanan at alamat: ang mga petsa at pangyayari sa digmaan at kolonyal na panahon ay may mas matibay na dokumentasyon, samantalang ang etimolohiya ng pangalan at ang mga kwento ng Parian ay ipinasa-pasa bilang lokal na tradisyon. Hindi namin inaangkin na iisa lamang ang tamang bersyon.',
  },

  science: {
    kicker: 'Agham at responsibilidad',
    title: 'How a Wet Market Works & How to Visit Responsibly',
    subtitle: 'Kung bakit mahalaga ang merkado, at kung ano ang nararapat gawin ng bisita',
    intro: 'Ang salitang “wet market” ay hindi nangangahulugang marumi ito. Tumutukoy ito sa merkadong nagbebenta ng sariwang pagkain — karne, isda, prutas at gulay — kung saan madalas na binabasa ang sahig upang manatiling malinis at malamig ang lugar kahit walang ganap na refrigeration.',
    items: [
      {
        title: 'Ang supply chain sa likod ng isang kamatis',
        body: 'Karaniwang daan ay: magsasaka at mangingisda → consolidation ng mga trader → wholesale trading sa madaling araw → stallholder → mamimili. Dahil dito, ang sariwang ani ay dumarating bago madaling araw at ang presyo ay gumagalaw sa loob ng araw base sa supply at demand. Kapag mas maikli ang chain, mas maliit ang transportation emission at mas malaki ang napupunta sa mga prodyuser.',
      },
      {
        title: 'Kung bakit mahalaga ang sariwa at lokal na pagkain',
        body: 'Ang pamimili sa merkado ay sumusuporta sa mga magsasaka at mangingisda ng Cebu at ng mga karatig na isla tulad ng Bohol, Negros at Leyte, at nagpapanatili ng mga lokal na barayti ng prutas at gulay na hindi nakikita sa supermarket. Ang seasonal na pagkain ay mas mura, mas masarap at mas maliit ang food miles. Isa itong totoong leksyon sa food system na makikita sa iisang lakad.',
      },
      {
        title: 'Food safety 101 sa merkado',
        body: 'Pumili ng stall na abala at mabilis ang turnover dahil nangangahulugan ito ng sariwang stock. Iwasan ang karne at isdang naiwan sa init nang walang yelo; paghiwalayin ang hilaw at luto; maghugas ng kamay o gumamit ng sanitizer bago kumain; at magdala ng sariling bag. Kung hindi ka sigurado sa pinagmulan ng tubig o yelo, uminom na lamang ng bottled water.',
      },
      {
        title: 'Basura, plastik at ang bakas ng bisita',
        body: 'Ang merkado ay lumilikha ng maraming organic waste at single-use plastic mula sa pagbabalot. Maaari kang magdala ng reusable bag, tumbler at maliit na container para sa prutas; tanggihan ang sobrang plastic; at huwag magtapon ng basura sa daanan dahil nakabara ito sa drainage at nagpapalala ng baha. Maliit na ugali, malaking epekto kapag ginawa ng lahat.',
      },
      {
        title: 'Pagkuha ng litrato at respeto sa mga tao',
        body: 'Ang merkado ay lugar ng trabaho, hindi photo studio. Humingi ng pahintulot bago kumuha ng close-up ng mga tindero at mamimili; iwasan ang pagharang sa daanan ng delivery; at huwag kunan ang presyo o dokumentong hindi para sa publiko. Ang pagbili ng kahit kaunti mula sa stall na iyong kinuhanan ng litrato ay isang magandang paraan ng pagrespeto.',
      },
      {
        title: 'Presyo, bargaining at patas na kalakalan',
        body: 'Magtanong sa presyo bago bumili at magdala ng maliliit na bill at barya upang hindi mahirapan ang tindero sa sukli. Karaniwang maliit lamang ang bargaining sa sariwang produkto; mas mainam ang magalang na pagtatanong kaysa agresibong pagtatawad. Hindi kailangan ang tip, at ang pag-round up ng halaga ay boluntaryong kabutihang-loob, hindi obligasyon.',
      },
    ],
    pledgeTitle: 'Bago ka pumasok: pangako ng responsableng bisita',
    pledges: [
      'Dumating nang handa: maliliit na cash, reusable bag at inuming tubig.',
      'Magsuot ng closed shoes at tanggapin na basa, maingay at siksik ang tunay na merkado.',
      'Humingi ng pahintulot bago kumuha ng litrato ng mga tao.',
      'Bumili sa stall na abala at malinis, at igalang ang presyo at ang trabaho.',
      'Huwag mag-iwan ng basura at bawasan ang single-use plastic.',
      'Unahin ang kaligtasan kapag may bagyo, baha o storm signal.',
    ],
    editorialNote: 'Ang seksyong ito ay isinulat para sa edukasyon ng publiko. Hindi ito nagsasaad na opisyal na food-safety inspection, at kung may sintomas ng sakit mula sa pagkain, humingi ng medical help at i-report ito sa lokal na health authority.',
  },

  zones: {
    kicker: 'Mga bahagi ng pamilihan',
    title: 'Carbon Market Sections: Flower Market, Interim Building & Food Zone',
    subtitle: 'Saan ang flower market? Saan ang interim building?',
    intro: 'Ang Carbon ay hindi iisang gusali. Ito ay kumpol ng mga zone, numbered units at pansamantalang istruktura, at nagbabago ang layout habang nagpapatuloy ang redevelopment. Ituring itong mapa ng “uri ng pwesto” sa halip na fixed na address, at kumpirmahin sa mismong araw ng pagbisita.',
    findLabel: 'Paano hanapin',
    bestLabel: 'Pinakamagandang oras',
    tipLabel: 'Tip',
    items: [
      {
        icon: '✿',
        name: 'Flower market (bulaklak)',
        find: 'Ang mga tindera ng bulaklak ay karaniwang nagkukumpol sa isang hanay o grupo sa loob ng Carbon district, hindi laging may malaking signage. Kung hindi mo agad makita, magtanong sa kahit sinong tindero: “Saan dapit ang bulaklak?”',
        best: 'Maagang umaga para sa sariwang cut flowers. Tumataas ang presyo at napakasikip ng tao sa bisperas ng piyesta, Valentine’s Day at Undás (Nob 1–2).',
        tip: 'Magdala ng maliliit na pera at reusable bag; iwasang hawakan ang phone sa gitna ng masikip na daanan.',
      },
      {
        icon: '▤',
        name: 'Interim building / temporary market',
        find: 'Habang ine-redevelop ang Carbon, maraming tindero ang inilipat sa interim (pansamantala) na mga gusali at hanay ng stall. Hanapin ang signage na “interim” o “temporary market” at sundin ang on-site marshals.',
        best: 'Umaga para sa tunay na pamimili at ritmo ng wholesale; hapon para sa mas maluwag na daanan. Asahan ang pagbabago ng pasukan sa bawat pagbisita.',
        tip: 'Kung may partikular kang stall na pupuntahan, kumpirmahin sa mismong araw — mas mabilis magbago ang layout ng interim kaysa permanenteng gusali.',
      },
      {
        icon: '◍',
        name: 'Food section / Unit 2 (kan-anan)',
        find: 'Ang mga lutong pagkain, carinderia at puso (hanging rice) ay nagkukumpol sa food zone ng pamilihan. Sundin ang usok ng inihaw at ang stall na maraming lokal na nakapila.',
        best: 'Kalagitnaan ng umaga hanggang tanghali para sa bagong luto; kaunti ang pagpipilian sa malalim na gabi.',
        tip: 'Ituro na lang ang tray, magtanong ng presyo bago bumili, at piliin ang stall na mabilis ang turnover ng pagkain.',
      },
      {
        icon: '❋',
        name: 'Produce at seafood (wholesale)',
        find: 'Ang prutas, gulay at isda ang puso ng Carbon: maraming trak, delivery cart at kargamento nang napakaaga ng umaga.',
        best: 'Mga 5–9 ng umaga para sa sariwa at presyong wholesale; pagkatapos nito ay mas retail na ang anyo at mas mahinahon ang galaw.',
        tip: 'Ilagay ang bag sa paanan, hindi sa daanan. Normal lang ang basa at madulas na sahig dito — closed shoes talaga.',
      },
      {
        icon: '⬡',
        name: 'Dry goods, tela at souvenir',
        find: 'Ang dry goods, tela, gamit sa bahay at maliliit na souvenir ay karaniwang nasa mga outer row at commercial block — mainam itong sundan pagkatapos ng produce loop.',
        best: 'Tanghali hanggang hapon; hindi ito nakadepende sa sariwang dating tulad ng produce at seafood.',
        tip: 'Ihambing ang dalawa o tatlong stall bago bumili, at humingi ng pahintulot bago kumuha ng litrato ng mga tao.',
      },
    ],
    note: 'Maaari mong makita sa signage o lumang mapa ang mga pangalan tulad ng Pusô Village, Puerta Marina at mga numbered units (halimbawa Unit 2). Hindi ito garantiya sa kasalukuyang layout: dahil sa redevelopment, ang pinakatiyak na “mapa” ay ang pagtatanong sa security, marshal o tindero sa mismong araw ng iyong pagbisita.',
  },

  extraFaqs: [
    {
      q: 'Saan ang flower market sa Carbon Market?',
      a: 'Ang mga tindera ng bulaklak (flower market) ay nagkukumpol sa isang hanay o grupo sa loob ng Carbon district, karaniwang malapit sa mga pangunahing daanan ng pamilihan. Hindi ito laging may malaking signage, kaya ang pinakamabilis na paraan ay magtanong sa mga tindero: “Saan dapit ang bulaklak?” Maagang umaga ang pinakamaganda para sa sariwang cut flowers; tumataas ang presyo sa bisperas ng piyesta, Valentine’s Day at Undás. Dahil sa redevelopment, maaaring lumipat ang eksaktong hanay — kumpirmahin sa mismong araw.',
    },
    {
      q: 'Ano ang interim building sa Carbon Market?',
      a: 'Ang interim (pansamantala) na mga gusali at hanay ng stall ang nilipatan ng maraming tindero habang ine-redevelop ang Carbon. Dito karaniwang nagpapatuloy ang pang-araw-araw na pamimili at pagbebenta. Asahan ang mas simpleng istruktura, masikip na daanan at pagbabago ng pasukan o pwesto — kaya sundin ang on-site signage at marshals sa halip na lumang screenshot ng ruta.',
    },
    {
      q: 'Saan ang food section o Unit 2 sa Carbon?',
      a: 'Ang mga lutong pagkain, carinderia at puso (hanging rice) ay nagkukumpol sa food zone ng pamilihan, na karaniwang tinatawag ng mga lokal batay sa unit o block kung saan ito naroon. Sundin ang usok ng inihaw at ang stall na maraming lokal na nakapila; magtanong sa mga tindero kung saan ang pinakamalapit na kainan ngayon dahil sa nagpapatuloy na redevelopment.',
    },
    {
      q: 'May banyo (restroom) ba sa Carbon Market?',
      a: 'Oo, may mga public restroom sa loob o tabi ng market buildings at sa mga commercial block ng downtown. Karaniwan itong pay-per-use na may maliit na bayad, kaya magdala ng barya, tissue at hand sanitizer dahil hindi laging kumpleto ang sabon at tubig.',
    },
    {
      q: 'Paano pumunta mula sa Mactan-Cebu International Airport papuntang Carbon?',
      a: 'Ang pinakamadali ay official airport taxi o app-based ride-hailing papuntang "Carbon Market, M. C. Briones St, Cebu City" (mga 30–60 minuto depende sa traffic). Ang mas murang alternatibo ay airport shuttle/bus papuntang lungsod, pagkatapos ay jeepney o taxi papuntang downtown.',
    },
    {
      q: 'Ano ang pinakamurang pampublikong transportasyon papuntang Carbon?',
      a: 'Ang jeepney ang pinakamura. Hanapin ang signboard na "Carbon", "Santo Niño", "Taboan" o "Plaza Sugbo", kumpirmahin sa drayber bago sumakay, at maghanda ng maliliit na bill. Ang tricycle ay bahagyang mas mahal pero door-to-door para sa maikling distansya.',
    },
    {
      q: 'Ano ang gagawin kung umulan sa araw ng pagbisita?',
      a: 'Magdala ng payong o rain jacket at waterproof bag para sa iyong gamit. Ang ilang daanan ng merkado ay maaaring mabasa at bahain, kaya magsuot ng closed shoes na hindi madulas. Kung may storm signal o tropical cyclone warning, i-postpone ang paglibot.',
    },
    {
      q: 'Pwede bang magbayad gamit ang card o e-wallet?',
      a: 'Ang cash pa rin ang pinaka-maaasahan sa merkado, lalo na ang maliliit na bill. Ang QR/e-wallet at card ay tinatanggap sa ilang stall at food hub, pero hindi sa lahat, kaya maghanda ng cash at alamin kung saan ang ATM kung magtatagal ka.',
    },
    {
      q: 'Ligtas ba ang pagkain mula sa merkado?',
      a: 'Karamihan sa mga lokal ay bumibili araw-araw sa Carbon, at ang mainam na praktis ay pumili ng stall na abala at mabilis ang turnover, iwasan ang pagkaing naiwan sa init nang walang yelo, lutuin nang tama at uminom ng bottled water. Kung hindi ka sigurado sa tubig o yelo, laktawan ito.',
    },
    {
      q: 'May wheelchair-access na daanan o mauupuan ba?',
      a: 'Hindi pare-pareho ang accessibility ng merkado: may mga entrance na makitid, may hagdan at siksik sa peak hours. Mas mainam ang dumating nang maaga, gamitin ang mas malapad na outer aisles, at magtanong sa security o marshal sa mismong araw. Ang mga food hub at Plaza Sugbo ay may mas maraming opsyon sa upuan.',
    },
    {
      q: 'Saan ang pinakamalapit na parking at gasolinahan?',
      a: 'May mga opisyal na parking area sa loob ng redeveloped Carbon district at sa mga kalapit na commercial block; sundin ang on-site signage at marshals dahil nagbabago ang entry points. Ang mga fuel station ay nasa mga pangunahing kalsada papuntang downtown at pantalan; limitado pa ang public EV charging at karaniwang nasa mall o hotel parking.',
    },
  ],
};
