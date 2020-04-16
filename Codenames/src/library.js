const standard = [
    'KNIFE', 'CHURCH', 'ORGAN', 'JAM', 'HORSESHOE', 'HONEY', 'MOUSE', 'WAR', 'PLATE', 'LINE', 'CONTRACT', 'MARCH', 'LIMOUSINE', 'AUSTRALIA', 'FOOT', 'NEW YORK', 'STADIUM', 'DRAGON', 'PASS', 'GREEN',
    'KNIGHT', 'PIE', 'SLIP', 'TABLET', 'SHOP', 'NEEDLE', 'FIGHTER', 'WAKE', 'BOW', 'DEGREE', 'MERCURY', 'ROULETTE', 'BALL', 'DOCTOR','MATCH','IRON','OLIVE','GRACE','POINT','TUBE','COTTON','FISH','DATE',
    'DRILL','FRANCE','BLOCK','NET','MOON','CROSS','SEAL','DIAMOND','WHALE','TIE','TABLE','COURT','SPRING','CARD','HORN','HOOD','HEART','DUCK','RING','BAND','ROBIN','FIRE','BRIDGE','STAR','POOL','CALF',
    'AIR','STRAW','SWITCH','CLOAK','BOARD','MEXICO','EYE','SHIP','DICE','GHOST','BOOT','SCALE','FALL','ROCK','LONDON','POLICE','LION','KID','WIND','LEPRECHAUN','NURSE','BELL','LEMON','TRIANGLE','CAP',
    'LIGHT','BELT','POST','RAY','HOLE','BEAT','THEATER','EGYPT','MODEL','TOKYO','ROSE','CHANGE','ARM','BERMUDA','WATCH','LEAD','CHARGE','BEACH','PUPIL','PLOT','BARK','THIEF','PLATYPUS','STICK','EAGLE',
    'GENIUS','TELESCOPE','CYCLE','NOVEL','PIPE','TURKEY','MINE','TIME','PRINCESS','IVORY','AMERICA','PIANO','SPOT','BOX','MOUNT','CHECK','QUEEN','TORCH','STATE','PLANE','ROME','MOLE','SHOE','CLUB','SINK',
    'FLUTE','CARROT','TRAIN','FIELD','BERLIN','FACE','SPY','UNICORN','BEIJING','RACKET','PANTS','WALL','LINK','DANCE','SNOW','TRUNK','ROUND','INDIA','HOTEL','PARACHUTE','ATLANTIS','VACUUM','ENGLAND',
    'SMUGGLER','POUND','SUB','KETCHUP','WITCH','GAME','WASHER','AFRICA','SCUBA DIVER','TAG','ICE','NIGHT','STRING','BUGLE','PART','TOWER','POISON','GROUND','NOTE','SPIDER','ANGEL','PENGUIN','ROOT',
    'NUT','SOCK','HAND','SWING','TAIL','CRASH','LAWYER','SATELLITE','PIN','WASHINGTON','CZECH','BACK','MOUTH','TAP','WORM','ALPS','OPERA','PYRAMID','APPLE','POLE','DISEASE','PORT','CELL','COVER','KEY',
    'ALIEN','PLASTIC','DWARF','WEB','FAN','AMBULANCE','DRESS','HOSPITAL','SATURN','STREAM','GLOVE','CENTAUR','SHADOW','WAVE','CAR','ENGINE','SHAKESPEARE','MICROSCOPE','JET','SUIT','CHOCOLATE',
    'MUG','CONCERT','SCORPION','CANADA','EUROPE','SOUL','JACK','COPPER','KANGAROO','STRIKE','FENCE','CAPITAL','BOTTLE','FOREST','HELICOPTER','SNOWMAN','PILOT','CASINO','RULER','BOMB','LAB','CLIFF',
    'BOOM','BANK','FORCE','TRACK','PHOENIX','DROP','BUCK','AGENT','ICE CREAM','RABBIT','VAN','VET','PRESS','SPINE','HAWK','BATTERY','DRAFT','HAM','SHARK','JUPITER','DAY','MILLIONAIRE','MAMMOTH','COMIC',
    'HEAD','LITTER','SPELL','GRASS','LOCK','BRUSH','DEATH','STOCK','LASER','SKYSCRAPER','BED','CIRCLE','CRANE','TRIP','PALM','MOSCOW','TEACHER','PUMPKIN','THUMB','ANTARCTICA','OCTOPUS','WHIP','BEAR',
    'GLASS','COOK','REVOLUTION','FLY','PIT','OIL','SUPERHERO','BOND','PAN','CAST','GAS','BUTTON','FILM','SCHOOL','SERVER','HIMALAYAS','CROWN','GREECE','SQUARE','DECK','BUFFALO','BOLT','CHINA','LOG','LOCH NESS',
    'MISSILE','PASTE','EMBASSY','ROBOT','GERMANY','FORK','PISTOL','ROW','FIGURE','PARK','LUCK','AMAZON','HOOK','SPACE','NINJA','OLYMPUS','SCIENTIST','SPIKE','SLUG','COMPOUND','HOLLYWOOD','WELL','KIWI',
    'CODE','PITCH','KING','PAPER','SOUND','BAR','FILE','BAT','MASS','COLD','CRICKET','CHICK','CENTER','CHEST','YARD','BILL','DINOSAUR','FAIR','SCREEN','SOLDIER','BERRY','NAIL','GIANT','HORSE','PIRATE','BUG','MINT',
    'AZTEC','MAPLE','SHOT','CAT','CHAIR','WATER','GOLD','TICK','LAP','LIFE','UNDERTAKER','MAIL','ORANGE','TEMPLE','STAFF','MARBLE','DOG','CONDUCTOR','TOOTH','PLAY'
]


const veda = ['QUESADILLA', "ALBUQUERQUE", "SASQUATCH", "SILICON VALLEY", "NUCLEUS", "ALCHEMY", "APP", "SCIENCE", "SPACE", "RETRO", "MONITOR", "HOME", "PORTAL", "CIRCLE", "PARROT", "MARIO",
"LUIGI", "REVIEW", "ISSUE", "SPOTIFY", "SNACK", "LEARNING", "RICE", "BEANS", "MACHINE", "HARVESTER", "CHARLOTTE", "GOBLIN", 'CANADA', 'VEGETARIAN', 'SOAP', 'TOBACCO', 'SCANDAL', 'NORMAL', 'AARDVARK',
'MAP', 'CAPTAIN', 'SWARM', 'GUILT',  'IGLOO', 'CABINET', 'JERK', 'WAGON', 'SURF', 'TIDE', 'CROWBAR', 'BATMAN', 'LEX LUTHOR', 'ADVANTAGE', 'TEMPER', 'FIT', 'POLITICS','FACT', 'FORCE', 'IDEA', 'DICTIONARY', 'DEFINITION',
'PEOPLE', 'CHILD', 'WAY', 'WORLD', 'FAMILY', 'PROBLEM', 'CASE', 'CAT', 'BAT', 'BALL', 'HAT', 'HEAD', 'POTATO', 'FUR', 'GERM', 'CANDLE', 'SCENT', 'BANANA', 'VENT', 'WATER', 'LAKE', 'POND', 'OCEAN', 'CARPET', 'RUG', 'MAT',
'LIGHTER', 'PHONE', 'RINGTONE', 'MUSIC', 'NOTIFICATION', 'COMPUTER', 'SMOG', 'CZAR', 'SPLATTER','COVID 19', 'FEVER', 'COUGH', 'GLOVE', 'TEMPERATURE', 'VENTILATOR', 'ISOLATION','QUARANTINE',
'RANSOM', 'MODEL','PREDICTION','PROBABILITY','CORRECTION', 'CHIMPANZEE', 'ORDINANCE', 'PIMPLE', 'PULP', 'CAPYBARA', 'SLEEPWALKER', 'CHUPACABRA', 'CHLOROX','PIKACHU','HOPSCOTCH','LA CROIX','PLANKTON',
'ADO','BURP','METAPHOR','GORGE','RARITY','WIMBLEDON','XENOPHOBIA','CONTAINER','HIERARCHY','INCIDENT','HACKYSACK','ANTAGONIST','WOE','SANDBAG','MULLET','UTILITY','BLADDER','BLOOD','ZERO','SILENCE','DUST',
'PAGINATION','LIZARD','STORM','STRANGER','DANGER','CLONE','ATHENA','COMMUPANCE','ETIQUETTE','CLAIRVOYANT','TRUFFLE','PEASANT','TORRENT','CLEMENTINE','SUSPENDERS','MILESTONE','RUMBLE','STINT','LORAX',
'TICKLE','BALLOON','FATIGUE','VORTEX','RIBBIT','CLOSURE','ELMO','WINERY','CLAN','DEODERANT','CHAPSTICK','SILT','TRICK','FRINGE','GLITTER','PHAROAH','INDIGO','QUIP','LIAR','CRAWDAD','EMT','SLIGHT','CASABLANCA',
'DOPE','INDIANA','IDIOT','ROUNDABOUT','TINCTURE','PERMIT','CONCORD','PACT','ANEMONE','BENEVOLENCE','YO-YO','SCRAPE','ADORNMENT','QUILT','YOGA','CLASP','ROTATION','ABACUS','CONFUSION','MISDEMEANOR','SHALE',
'CORAL','DELTA','IODINE','INSULT','ROADBLOCK','FLUKE','DAWN','XEROX','ALBACORE','HALIFAX','TOPOGRAPHY','STERNUM','FLOP','CONCERN','ANAGRAM','TENANT','POPSICLE','SLANDER', 'J LO', 'CORSICA', 'ORB', 'ELOQUENCE',
'LISTERINE','ALPACA','MUSHROOM','MAVERICK', 'QUOTE', 'COMFORT','RAGE','PISTON','GENUS','CEMENT','ALLIGATOR','CANVAS','ANXIETY','ACCEPTANCE','DINGO','DETAIL','COUNCIL', 'MUMBLE', 'STAPHYLOCOCCUS']


const library = Array.from(new Set([...standard, ...veda]))

console.log(library.length)

module.exports =  library


