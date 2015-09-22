tabtransfer = document.getElementById('searchTextResults');
for (i = 1; i < tabtransfer.rows.length; i++) {
	minprice = pricetoint(tabtransfer.rows[i].cells[2].innerHTML);
	marketprice = pricetoint(tabtransfer.rows[i].cells[3].innerHTML);
	if (minprice < marketprice) {
		tabtransfer.rows[i].cells[8].className +=' tobuy';
	}
 	if (minprice > marketprice) {
  	tabtransfer.rows[i].cells[8].className +=' nottobuy';
  	}
}


function pricetoint(strprice) {
  intprice = parseInt(strprice.replace(',', '', 'g'));
  return intprice;
}


var BorussiaDortmundlist = {
  Schmelzer: 'marcel-schmelzer_148',
  Castro: 'gonzalo-castro_47',
  Stenzel: 'pascal-stenzel_6002',
  Durm: 'erik-durm_1847',
  SBender: 'sven-bender_35',
  JooHoPark: 'joo-ho-park_1510',
  Ginter: 'matthias-ginter_1835',
  Subotic: 'neven-subotic_93',
  Reus: 'marco-reus_332',
  Bürki: 'roman-buerki_3277',
  Aubameyang: 'pierre-emerick-aubameyang_2340',
  Kagawa: 'shinji-kagawa_4740',
  Januzaj: 'adnan-januzaj_4735',
  Piszczek: 'lukasz-piszczek_224',
  Hummels: 'mats-hummels_131',
  Bonmann: 'hendrik-bonmann_2445',
  Sokratis: 'sokratis_1458',
  JWeigl: 'julian-weigl_5667',
  Sahin: 'nuri-sahin_767',
  Weidenfeller: 'roman-weidenfeller_311',
  Gündogan: 'adam-matuschyk_202',
  JHofmann: 'jonas-hofmann_2362',
  Mkhitaryan: 'henrikh-mkhitaryan_2720',
  Ramos: 'adrian-ramos_296'
};
var Hoffenheimlist = {
  Szalai: 'adam-szalai_403',
  Baumann: 'oliver-baumann_567',
  Grahl: 'jens-grahl_727',
  Amiri: 'nadiem-amiri_5815',
  Joelinton: 'joelinton_6439',
  Toljan: 'jeremy-toljan_2586',
  Bicakcic: 'ermin-bicakcic_663',
  Gimber: 'benedikt-gimber_6424',
  Rudy: 'sebastian-rudy_188',
  Schwegler: 'pirmin-schwegler_243',
  Kim: 'jin-su-kim_4270',
  Uth: 'mark-uth_469',
  Hamad: 'jiloan-hamad_2929',
  Herdling: 'kai-herdling_2017',
  PhOchs: 'philipp-ochs_6426',
  Stolz: 'alexander-stolz_226',
  Kuranyi: 'kevin-kuranyi_806',
  Schmid: 'jonathan-schmid_641',
  Elyounoussi: 'tarik-elyounoussi_2705',
  Polanski: 'eugen-polanski_162',
  Rapp: 'nicolai-rapp_6175',
  Süle: 'niklas-suele_2584',
  Strobl: 'tobias-strobl_1461',
  Volland: 'kevin-volland_1364',
  Zuber: 'steven-zuber_1800',
  EduardoVargas: 'eduardo-vargas_1767',
  Schär: 'fabian-schaer_2786'
};
var BorussiaMgladbachlist = {
  Xhaka: 'granit-xhaka_1753',
  Hazard: 'thorgan-hazard_4196',
  Korb: 'julian-korb_1571',
  Stindl: 'lars-stindl_487',
  Elvedi: 'nico-elvedi_6475',
  AChristensen: 'andreas-christensen_6056',
  Nordtveit: 'havard-nordtveit_593',
  Jantschke: 'tony-jantschke_304',
  Sommer: 'yann-sommer_2577',
  Dahoud: 'mahmoud-dahoud_2735',
  MSchulz: 'marvin-schulz_3392',
  Heimeroth: 'christofer-heimeroth_241',
  Drmic: 'josip-drmic_2691',
  PHerrmann: 'patrick-herrmann_387',
  Hahn: 'andre-hahn_2493',
  MRitter: 'marlon-ritter_3529',
  Hrgota: 'branimir-hrgota_2169',
  Dominguez: 'alvaro-dominguez_1306',
  Brouwers: 'roel-brouwers_357',
  Johnson: 'fabian-johnson_573',
  Sippel: 'tobias-sippel_495',
  NSchulz: 'marvin-schulz_3392',
  Stranzl: 'martin-stranzl_606',
  Traore: 'ibrahima-traore_404',
  Raffael: 'raffael_389',
  Wendt: 'oscar-wendt_701'
};
var EintrachtFrankfurtlist = {
  Ignjovski: 'aleksandar-ignjovski_1415',
  Anderson: 'bamba-anderson_371',
  Chandler: 'timothy-chandler_643',
  Gerezgiher: 'joel-gerezgiher_4534',
  Bunjaki: 'enis-bunjaki_5725',
  Russ: 'marco-russ_164',
  Kinsombi: 'david-kinsombi_3925',
  Hasebe: 'makoto-hasebe_342',
  Aigner: 'stefan-aigner_1267',
  Zambrano: 'carlos-zambrano_237',
  VKadlec: 'vaclav-kadlec_1643',
  Hradecky: 'lukas-hradecky_6694',
  Flum: 'johannes-flum_330',
  Reinartz: 'stefan-reinartz_163',
  Zummack: 'yannick-zummack_5656',
  Kittel: 'sonny-kittel_557',
  Waldschmidt: 'luca-waldschmidt_2594',
  AMeier: 'alexander-meier_99',
  Stendera: 'marc-stendera_2287',
  Djakpa: 'constant-djakpa_904',
  Gacinovic: 'mijat-gacinovic_6702',
  Abraham: 'david-abraham_1348',
  Balayev: 'emil-balayev_6123',
  Castaignos: 'luc-castaignos_1907',
  HLindner: 'heinz-lindner_3297',
  Oczipka: 'bastian-oczipka_615',
  Medojevic: 'slobodan-medojevic_892'
};
var VfBStuttgartlist = {
  Kliment: 'jan-kliment_6507',
  Langerak: 'mitchell-langerak_381',
  Wanitzek: 'marvin-wanitzek_3283',
  Hlousek: 'adam-hlousek_629',
  Schwaab: 'daniel-schwaab_382',
  Ristl: 'mart-ristl_6201',
  RKruse: 'robbie-kruse_2097',
  SereyDie: 'serey-die_5302',
  Ginczek: 'daniel-ginczek_485',
  Maxim: 'alexandru-maxim_2509',
  Niedermeier: 'georg-niedermeier_260',
  Heise: 'philip-heise_5784',
  Sama: 'stephen-sama_5949',
  Kostic: 'filip-kostic_5808',
  Didavi: 'daniel-didavi_180',
  Sunjic: 'toni-sunjic_5595',
  TiWerner: 'timo-werner_2570',
  AFerati: 'arianit-ferati_3285',
  EmilianoInsua: 'emiliano-insua_6576',
  Gentner: 'christian-gentner_145',
  Baumgartl: 'timo-baumgartl_3284',
  Uphoff: 'benjamin-uphoff_1661',
  OVlachodimos: 'odisseas-vlachodimos_1649',
  Gruezo: 'carlos-gruezo_3312',
  Harnik: 'martin-harnik_375',
  Klein: 'florian-klein_1823',
  Tyton: 'przemyslaw-tyton_6461',
  Kiesewetter: 'jerome-kiesewetter_1801'
};
var VfLWolfsburglist = {
  MSchäfer: 'marcel-schaefer_120',
  Knoche: 'robin-knoche_1629',
  Benaglio: 'diego-benaglio_213',
  Vieirinha: 'vieirinha_1814',
  Bendtner: 'nicklas-bendtner_4800',
  FRodriguez: 'ricardo-rodriguez_1449',
  FelipeLopes: 'felipe_1830',
  Draxler: 'julian-draxler_603',
  RRodriguez: 'ricardo-rodriguez_1449',
  Guilavogui: 'josuha-guilavogui_2741',
  Grün: 'max-gruen_2047',
  Sprenger: 'moritz-sprenger_3306',
  LuizGustavo: 'luiz-gustavo-dias_346',
  Casteels: 'koen-casteels_1605',
  Träsch: 'christian-traesch_55',
  Dante: 'dante_262',
  TKlose: 'timm-klose_728',
  Stolze: 'sebastian-stolze_3279',
  CarlosAscues: 'carlos-ascues_6604',
  Azzaoui: 'ismail-azzaoui_6796',
  Schürrle: 'andre-schuerrle_4789',
  MKruse: 'max-kruse_482',
  Dost: 'bas-dost_1968',
  Zawada: 'oskar-zawada_5879',
  Naldo: 'naldo_29',
  Arnold: 'maximilian-arnold_1673',
  Seguin: 'paul-seguin_3655',
  SJung: 'sebastian-jung_44'
};
var SVDarmstadtlist = {
  MHeller: 'nicolai-mueller_612',
  Rosenthal: 'jan-rosenthal_200',
  Sulu: 'aytac-sulu_2939',
  Garics: 'gyoergy-garics_6744',
  Wembacher: 'noel-wembacher_6600',
  Kempe: 'tobias-kempe_5606',
  Volk: 'nick-volk_6603',
  Platins: 'patrick-platins_2890',
  Stegmayer: 'michael-stegmayer_3087',
  Holland: 'fabian-holland_1956',
  Wagner: 'sandro-wagner_285',
  Gondorf: 'jerome-gondorf_5759',
  Niemeyer: 'peter-niemeyer_65',
  YStark: 'niklas-stark_2441',
  Sailer: 'marco-sailer_5762',
  Gorka: 'benjamin-gorka_5758',
  Caldirola: 'luca-caldirola_2235',
  Mathenia: 'christian-mathenia_2650',
  StrohEngel: 'dominik-stroh-engel_3024',
  Ivana: 'milan-ivana_5760',
  Rausch: 'konstantin-rausch_111',
  MVrancic: 'mario-vrancic_3069',
  Kazimi: 'ali-kazimi_6602',
  JuniorDiaz: 'junior-diaz_2253',
  Sirigu: 'sandro-sirigu_444',
  FJungwirth: 'florian-jungwirth_5826',
  Finger: 'jan-finger_6601'
};
var FSVMainzlist = {
  Brosinski: 'daniel-brosinski_955',
  FFrei: 'fabian-frei_1697',
  Huth: 'robert-huth_5007',
  Balogun: 'leon-balogun_467',
  Malli: 'yunus-malli_670',
  Karius: 'loris-karius_1641',
  Nedelev: 'todor-nedelev_2758',
  DParker: 'devante-parker_5436',
  Muto: 'yoshinori-muto_6336',
  Baumgartlinger: 'julian-baumgartlinger_1313',
  Bussmann: 'gaetan-bussmann_6788',
  Jairo: 'jairo-samperio_6001',
  Moritz: 'moritz-sprenger_3306',
  Jara: 'gonzalo-jara_1660',
  Bengtsson: 'pierre-bengtsson_5386',
  Klement: 'philipp-klement_1455',
  Soto: 'elkin-soto_60',
  Latza: 'danny-latza_1248',
  Bell: 'stefan-bell_521',
  Curci: 'gianluca-curci_6746',
  Niederlechner: 'florian-niederlechner_5778',
  Beister: 'maximilian-beister_438',
  deBlasis: 'pablo-de-blasis_5991',
  Zimling: 'niki-zimling_2507',
  Clemens: 'christian-clemens_553',
  Cordoba: 'jhon-cordoba_68001',
  Sereno: 'henrique-sereno_877',
  Bungert: 'niko-bungert_204'
};
var SVWerderBremenlist = {
  Galvez: 'alejandro-galvez_2728',
  RWolf: 'raphael-wolf_2064',
  Yildirim: 'oezkan-yildirim_1553',
  FKroos: 'felix-kroos_426',
  UlissesGarcia: 'ulisses-alexandre-garcia_6398',
  Grillitsch: 'florian-grillitsch_5385',
  Fritz: 'clemens-fritz_179',
  Lorenzen: 'melvyn-lorenzen_2897',
  LAycicek: 'levent-aycicek_2071',
  MaBusch: 'thomas-kahlenberg_203',
  Lukimya: 'assani-lukimya_1933',
  Selassie: 'th-gebre-selassie_2194',
  Öztunali: 'levin-oeztunali_2466',
  Zander: 'luca-milan-zander_3276',
  Ujah: 'anthony-ujah_1516',
  Vestergaard: 'jannik-vestergaard_1544',
  Sternberg: 'janek-sternberg_1584',
  vonHaacke: 'julian-von-haacke_2805',
  Eggestein: 'maximilian-eggestein_6131',
  Bargfrede: 'philipp-bargfrede_70',
  Fröde: 'lukas-froede_4477',
  Wiedwald: 'felix-wiedwald_662',
  Bartels: 'fin-bartels_552',
  SGarcia: 'santiago-garcia_2772',
  Junuzovic: 'zlatko-junuzovic_1417',
  Pavlovic: 'mateo-pavlovic_2437',
  Pizarro: 'claudio-pizarro_37',
  Hüsing: 'oliver-huesing_3970',
  Zetterer: 'michael-zetterer_6257'
};
var HamburgerSVlist = {
  Marcos: 'marcos_2199',
  Ostrzolek: 'matthias-ostrzolek_1446',
  NMüller: 'nicolai-mueller_612',
  Altintas: 'batuhan-altintas_6113',
  Porath: 'finn-porath_6693',
  Kacar: 'gojko-kacar_21',
  Djourou: 'johan-djourou_2459',
  Drobny: 'jaroslav-drobny_2',
  Rudnevs: 'artjoms-rudnevs_1115',
  PMüller: 'philipp-mueller_5511',
  Gregoritsch: 'michael-gregoritsch_1512',
  GJung: 'gideon-jung_5557',
  MarceloDiaz: 'marcelo-diaz_5275',
  Hunt: 'aaron-hunt_13',
  Mickel: 'tom-mickel_673',
  Götz: 'ashton-goetz_3918',
  Schipplock: 'sven-schipplock_623',
  Holtby: 'lewis-holtby_418',
  Stieber: 'zoltan-stieber_620',
  GSakai: 'gotoku-sakai_1782',
  Diekmeier: 'dennis-diekmeier_225',
  RAdler: 'rene-adler_348',
  Hirzel: 'andreas-hirzel_6597',
  Lasogga: 'pierre-michel-lasogga_705',
  Ekdal: 'albin-ekdal_1484',
  Spahic: 'emir-spahic_1123',
  Cleber: 'cleber_5980',
  Olic: 'ivica-olic_50'
};
var Hannoverlist = {
  Zieler: 'ron-robert-zieler_613',
  Sulejmani: 'valmir-sulejmani_2670',
  AHoffmann: 'jonas-hofmann_2362',
  Teichgräber: 'niklas-teichgraeber_2668',
  Andreasen: 'leon-andreasen_103',
  Hirsch: 'maurice-hirsch_4591',
  CSchulz: 'christian-schulz_263',
  Klaus: 'felix-klaus_2053',
  SalifSane: 'salif-sane_2673',
  Dierßen: 'tim-dierssen_2669',
  Marcelo: 'marcelo_4635',
  SErnst: 'sebastian-ernst_5492',
  Bech: 'uffe-bech_5954',
  Rankovic: 'vladimir-rankovic_2455',
  FelipeMartins: 'felipe-martins_1952',
  Prib: 'edgar-prib_1779',
  Bähre: 'mike-steven-baehre_5892',
  Tschauner: 'philipp-tschauner_3512',
  Königsmann: 'timo-koenigsmann_5812',
  Radlinger: 'samuel-radlinger_1546',
  Gülselam: 'ceyhun-guelselam_5908',
  Benschop: 'charlison-benschop_4543',
  Albornoz: 'miiko-albornoz_5532',
  Anton: 'anton-putsilo_563',
  Karaman: 'kenan-karaman_2676',
  HSakai: 'hiroki-sakai_1675',
  Erdinc: 'mevluet-erdinc_984',
  ASobiech: 'artur-sobiech_968',
  SaintMaximin: 'allan-saint-maximin_6698',
  Kiyotake: 'hiroshi-kiyotake_1694',
  Sorg: 'oliver-sorg_1832'
};
var FCIngolstadtlist = {
  PGroß: 'harry-kane_4828',
  RBauer: 'robert-bauer_5733',
  Leckie: 'mathew-leckie_651',
  MoHartmann: 'moritz-hartmann_2938',
  Nyland: 'oerjan-nyland_6511',
  Lex: 'stefan-lex_2528',
  Multhaup: 'maurice-multhaup_5903',
  daCosta: 'danny-da-costa_650',
  Cohen: 'almog-cohen_541',
  Kachunga: 'elias-kachunga_1690',
  DaniloSoares: 'danilo-soares_5734',
  Levels: 'tobias-levels_652',
  Ortag: 'christian-ortag_5727',
  Suttner: 'markus-suttner_2754',
  Wannenwetsch: 'stefan-wannenwetsch_5666',
  Bregerie: 'romain-bregerie_5683',
  Özcan: 'emre-can_1812',
  Pekhart: 'tomas-pekhart_661',
  MMatip: 'joel-matip_227',
  Pledl: 'thomas-pledl_2061',
  MChristiansen: 'max-christiansen_4507',
  Hübner: 'benjamin-huebner_5731',
  Hinterseer: 'lukas-hinterseer_3233',
  Morales: 'alfredo-morales_1681',
  Roger: 'roger_5729'
};
var FCAugsburglist = {
  CallsenBracker: 'jan-ingwer-callsen-bracker_574',
  Rieder: 'tim-rieder_3658',
  Ekin: 'arif-ekin_2684',
  HalilAltintop: 'halil-altintop_230',
  Moravek: 'jan-moravek_329',
  Framberger: 'raphael-framberger_2470',
  Opare: 'daniel-opare_1114',
  MSchuster: 'marco-schuster_3665',
  Esswein: 'alexander-esswein_480',
  Janker: 'christoph-janker_448',
  Hitz: 'marwin-hitz_639',
  Klavan: 'ragnar-klavan_2240',
  Gelios: 'ioannis-gelios_1569',
  Koo: 'ja-cheol-koo_633',
  Uhde: 'maik-uhde_2472',
  Trochowski: 'piotr-trochowski_867',
  Oettl: 'yannik-oettl_6442',
  ToWerner: 'tobias-werner_1524',
  Manninger: 'alexander-manninger_2399',
  BKurz: 'bastian-kurz_6215',
  Mölders: 'sascha-moelders_677',
  Kohr: 'dominik-kohr_1821',
  Baier: 'daniel-baier_264',
  Ji: 'dong-won-ji_2395',
  Verhaegh: 'paul-verhaegh_1520',
  Feulner: 'markus-feulner_322',
  Caiuby: 'caiuby_564',
  Matavz: 'juan-mata_4743',
  SParker: 'shawn-parker_1984',
  Stafylidis: 'konstantinos-stafylidis_2280',
  Hong: 'jeong-ho-hong_2774',
  PMax: 'philipp-max_3668',
  Reinthaler: 'max-reinthaler_5911'
};
var BayerLeverkusenlist = {
  Ryu: 'seung-woo-ryu_2747',
  Boenisch: 'sebastian-boenisch_105',
  Kramer: 'christoph-kramer_1465',
  CharlesAranguiz: 'charles-aranguiz_5279',
  Kresic: 'dario-kresic_2296',
  Yurchenko: 'vladlen-yurchenko_5642',
  Becker: 'robin-tim-becker_5677',
  Bellarabi: 'karim-bellarabi_676',
  Hilbert: 'roberto-hilbert_874',
  Tah: 'jonathan-tah_2385',
  Kampl: 'kevin-kampl_942',
  KPapadopoulos: 'kyriakos-papadopoulos_503',
  Chicharito: 'javier-hernandez_4729',
  Kießling: 'stefan-kiessling_31',
  Toprak: 'oemer-toprak_121',
  Jedvaj: 'tin-jedvaj_4503',
  Ramalho: 'andre-ramalho_6090',
  Mehmedi: 'admir-mehmedi_1714',
  Yelldell: 'david-yelldell_1568',
  Henrichs: 'benjamin-henrichs_5680',
  Boeder: 'lukas-boeder_5678',
  LBender: 'lars-bender_16',
  Wendell: 'wendell_3894',
  Brandt: 'julian-brandt_2467',
  Leno: 'bernd-leno_690',
  Donati: 'giulio-donati_2707',
  Calhanoglu: 'hakan-calhanoglu_2016'
};
var FCBayernMünchenlist = {
  XabiAlonso: 'xabi-alonso_4658',
  TMüller: 'thomas-mueller_249',
  Rafinha: 'rafinha_177',
  Ribery: 'franck-ribery_66',
  JBoateng: 'jerome-boateng_744',
  Coman: 'kingsley-coman_6690',
  ArturoVidal: 'arturo-vidal_360',
  Green: 'julian-green_2729',
  Ulreich: 'sven-ulreich_205',
  DouglasCosta: 'douglas-costa_6256',
  Robben: 'arjen-robben_68',
  Alaba: 'david-alaba_206',
  Bernat: 'juan-bernat_5684',
  Gaudino: 'gianluca-gaudino_5861',
  Benatia: 'medhi-benatia_1152',
  Starke: 'tom-starke_397',
  ThiagoAlcantara: 'thiago_2716',
  Kirchhoff: 'jan-kirchhoff_649',
  Lewandowski: 'robert-lewandowski_366',
  JaviMartinez: 'javi-martinez_2119',
  Badstuber: 'holger-badstuber_242',
  Neuer: 'manuel-neuer_114',
  Kurt: 'sinan-kurt_3393',
  MGötze: 'mario-goetze_501',
  ILucic: 'ivan-lucic_6341',
  Kimmich: 'joshua-kimmich_5768',
  Lahm: 'philipp-lahm_49'
};
var FCSchalkelist = {
  Gspurning: 'michael-gspurning_6294',
  Aogo: 'dennis-aogo_122',
  Riether: 'sascha-riether_144',
  MMeyer: 'max-meyer_2165',
  Sam: 'sidney-sam_427',
  Fährmann: 'patrick-herrmann_387',
  Geis: 'johannes-geis_2052',
  Uchida: 'atsuto-uchida_459',
  Kehrer: 'thilo-kehrer_6139',
  diSanto: 'franco-di-santo_2762',
  JuniorCaicara: 'junior-caicara_6383',
  Kolasinac: 'sead-kolasinac_1827',
  Platte: 'felix-platte_6108',
  Huntelaar: 'klaas-jan-huntelaar_235',
  FSantana: 'felipe-santana_281',
  Neustädter: 'christian-fuchs_424',
  Höger: 'jerome-boateng_744',
  Nastasic: 'matija-nastasic_4752',
  Giefer: 'fabian-giefer_390',
  JMatip: 'joel-matip_227',
  Höwedes: 'benedikt-hoewedes_76',
  Ayhan: 'kaan-ayhan_1864',
  LSane: 'leroy-sane_3798',
  ChoupoMoting: 'eric-maxim-choupo-moting_430',
  Nübel: 'alexander-nuebel_4473',
  Höjbjerg: 'pierre-emile-hojbjerg_1926',
  Goretzka: 'leon-goretzka_1863'
};
var HerthaBSClist = {
  Schieber: 'julian-schieber_400',
  Kohls: 'florian-kohls_6515',
  Plattenhardt: 'marvin-plattenhardt_581',
  Gersbeck: 'marius-gersbeck_3183',
  Ronny: 'ronny_1615',
  Pekarik: 'peter-pekarik_124',
  Körber: 'robert-lewandowski_366',
  Baumjohann: 'alexander-baumjohann_165',
  Ibisevic: 'vedad-ibisevic_101',
  Kraft: 'thomas-kraft_328',
  Mittelstädt: 'maximilian-mittelstaedt_6206',
  Allagui: 'sami-allagui_507',
  vandenBergh: 'j-van-den-bergh_2090',
  Haraguchi: 'genki-haraguchi_4527',
  SLangkamp: 'sebastian-langkamp_698',
  TolgaCigerci: 'tolga-cigerci_539',
  Kalou: 'salomon-kalou_1969',
  Lustenberger: 'fabian-lustenberger_17',
  Skjelbred: 'per-ciljan-skjelbred_1257',
  Jarstein: 'rune-almenning-jarstein_2580',
  Hegeler: 'jens-hegeler_468',
  Stocker: 'valentin-stocker_865',
  Brooks: 'john-anthony-brooks_684',
  Beerens: 'roy-beerens_4547',
  NStark: 'niklas-stark_2441',
  MWeiser: 'thomas-meissner_2171',
  BenHatira: 'aenis-ben-hatira_491'
};
var FCKölnlist = {
  Kessler: 'thomas-kessler_394',
  Jojic: 'milos-jojic_3659',
  Mavraj: 'mergim-mavraj_345',
  FSörensen: 'frederik-soerensen_3238',
  Nagasawa: 'kazuki-nagasawa_4266',
  Modeste: 'anthony-modeste_1223',
  Gerhardt: 'yannick-gerhardt_3942',
  Hector: 'jonas-hector_1936',
  THorn: 'george-thorne_5843',
  Zoller: 'simon-zoller_2648',
  Finne: 'bard-finne_4455',
  Hosiner: 'philipp-hosiner_2415',
  Klünter: 'lukas-kluenter_6199',
  Risse: 'marcel-risse_238',
  Maroh: 'dominic-maroh_344',
  Heintz: 'dominique-heintz_1669',
  MaLehmann: 'matthias-lehmann_566',
  Mesenhöler: 'daniel-mesenhoeler_4456',
  Svento: 'dusan-svento_1943',
  Osako: 'yuya-osako_3282',
  Olkowski: 'pawel-olkowski_2430',
  Vogt: 'kevin-vogt_209'
};
var database = {
  VfLWolfsburg: VfLWolfsburglist,
  SVDarmstadt: SVDarmstadtlist,
  Hoffenheim: Hoffenheimlist,
  Hannover: Hannoverlist,
  FCIngolstadt: FCIngolstadtlist,
  BorussiaMgladbach: BorussiaMgladbachlist,
  HerthaBSC: HerthaBSClist,
  SVWerderBremen: SVWerderBremenlist,
  FCAugsburg: FCAugsburglist,
  VfBStuttgart: VfBStuttgartlist,
  EintrachtFrankfurt: EintrachtFrankfurtlist,
  HamburgerSV: HamburgerSVlist,
  BayerLeverkusen: BayerLeverkusenlist,
  BorussiaDortmund: BorussiaDortmundlist,
  FCBayernMünchen: FCBayernMünchenlist,
  FSVMainz: FSVMainzlist,
  FCKöln: FCKölnlist,
  FCSchalke: FCSchalkelist
};
tabtransfer = document.getElementById('searchTextResults');
for (i = 1; i < tabtransfer.rows.length; i++) {
  name = tabtransfer.rows[i].cells[0].children[0].innerHTML;
  namenorm = normname(name);
  teamname = tabtransfer.rows[i].cells[1].children[0].title;
  teamnamenorm = normname(teamname);
  link = lookuplink(teamnamenorm, namenorm);
  tabtransfer.rows[i].cells[0].children[0].innerHTML = '<a href=http://www.ligainsider.de/' + link + '>' + name + '</a>';
}
function normname(name) {
  name = name.replace(' ', '', 'g');
  name = name.replace('-', '', 'g');
  name = name.replace('.', '', 'g');
  name = name.replace('\'', '', 'g');
  name = name.replace('â', 'a', 'g');
  name = name.replace('á', 'a', 'g');
  name = name.replace('Ç', 'C', 'g');
  name = name.replace('ć', 'c', 'g');
  name = name.replace('ć', 'c', 'g');
  name = name.replace('č', 'c', 'g');
  name = name.replace('ç', 'c', 'g');
  name = name.replace('ç', 'c', 'g');
  name = name.replace('é', 'e', 'g');
  name = name.replace('ğ', 'g', 'g');
  name = name.replace('í', 'i', 'g');
  name = name.replace('ó', 'o', 'g');
  name = name.replace('ō', 'o', 'g');
  name = name.replace('ō', 'o', 'g');
  name = name.replace('Ō', 'O', 'g');
  name = name.replace('ř', 'r', 'g');
  name = name.replace('Š', 'S', 'g');
  name = name.replace('š', 's', 'g');
  name = name.replace('ú', 'u', 'g');
  name = name.replace('ý', 'y', 'g');
  name = name.replace('ž', 'Z', 'g');
  name = name.replace(/[0-9]/g, '');
  return name
}
function lookuplink(team, name) {
  console.log(team+' '+name)
  try {
    link = database[team][name];
    return link;
  } 
  catch (err) {
    console.log(err);
    return 'xxx'
  }
}
