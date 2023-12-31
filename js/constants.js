const busPositions = [
  'Bus Driver/Guide (D.L.)',
  'Bus Service Person (D.L.)'
];

const campgroundPositions = [
  'Camper Services Attendants',
  'Campground Attendant (D.L.)',
];

const distributionPositions = [
  'Distribution Center Associate',
  'Distribution Lead',
  'Dock Help (D.L.)',
  'Warehouse Help'
];

const drivingPositions = [
  'Vending Driver (D.L.)',
  'Warehouse Driver (OFI)',
  'Wrangler/Driver'
]

const entertainmentPositions = [
  'Pianist'
];

const guidePositions = [
  'Marina Fishing Guide (D.L.)',
  'Recreation Coordinator (D.L.)',
  'Scenic Cruise Operator (D.L.)',
  'Tour Guide (D.L.)',
  'Touring Car Driver- Interpretive Guide Non CDL (D.L.)'
];

const housingPositions = [
  'Laundry Help***',
  'Room Attendant***',
  'Bell Porter',
  'Dorm Custodian',
  'Finish Floor Supervisor',
  'Furniture Mover (D.L.)',
  'Housekeeping Room Inspector',
  'Porter',
  'Residence Coordinator',
  'Security Guard And Location Safety (D.L.)'
];

const kitchenPositions = [
  'Dining Room Server Assistant***',
  'Employee Dining Room Crew***',
  'Employee Dining Room Crew***',
  'Fast Food Crew***',
  'Kitchen Crew***',
  'Chef',
  'Cook',
  'Food and Beverage Office Assistant',
  'Sous Chef'
];

const maintenancePositions = [
  'Administrative Assistant Maintenance',
  'Carpenter (D.L.)', 
  'Electrician (D.L.)',
  'Heavy Equipment Operator (D.L.)',
  'Locksmith (D.L.)',
  'Internship',
  'Location Controller/Assistant',
  'Painter (D.L.)',
  'Plumber (D.L.)',
  'Preservation Maintenance Crew Craftsperson',
  'Seamstress'
];

const managementPositions = [
  'Asst. HR Manager',
  'Audit Clerk',
  'Cafeteria Management',
  'Dining Room Management',
  'Employee Dining Room Management',
  'Campground Management',
  'Fast Food Management',
  'Food and Beverage Management',
  'Front Office Management',
  'General Accounting Office',
  'Housekeeping Management',
  'Housekeeping Trainer',
  'Housekeeping Office Assistant',
  'Marina Manager (D.L.)',
  'Night Auditor',
  'Pantry Supervisor',
  'Personnel Management',
  'Recreation Supervisor (D.L.)',
  'Retail Management',
  'R&amp;M Staff Assistant',
  'Snack Shop / Deli Supervisor',
  'Storekeeper',
  'Traveling Night Auditor',
  'Warehouse Manager',
  'Wash Deck Supervisor'
];

const salesPositions = [
  'Activities Sales Agent',
  'Guest Services Agent',
  'Guest Services Agent (Campground)',
  'Night Guest Services Agent',
  'Reservations Sales Agent',
  'Retail Sales Associate',
  'Senior Guest Services Agent (Campground)'
];

const servingPositions = [
  'Bar Lead',
  'Barista',
  'Bartender',
  'Cocktail Server',
  'Cookout Entertainer',
  'Dining Room Host',
  'Dining Room Host Lead',
  'Dining Room Server',
  'Employee Pub Crew/Lead',
  'Housing Manager',
  'Steward',
  'Vending Clerk'
];

const technicianPositions = [
  'Boiler Technician (D.L.)',
  'Carpet Cleaning Technician (D.L.)',
  'Fire Systems Technician (D.L.)',
  'Floor Cleaning Technician (D.L.)',
  'General Maintenance (D.L.)',
  'Kitchen Technician (D.L.)',
  'Laundry Technician (D.L.)',
  'Recycling Technician (D.L.)',
  'Vending Service Technician',
  'Wash Deck Lead'
];

const truckPositions = [
  'Distribution Center Truck Driver (D.L.)',
  'Laundry Truck Driver (D.L.)',
  'Linen Truck Driver  (D.L.)'
];

const STATES = [
  'Not in United States',
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

const COUNTRIES = [
  'United States',
  'United Arab Emirates',
  'Afganistan',
  'Antigua and Barbuda',
  'Albania',
  'Armenia',
  'Zambia',
  'Netherland Antilles',
  'Antarctica',
  'Argentina',
  'American Samoa',
  'Austria',
  'Australia',
  'Aruba',
  'Azerbaidjan',
  'Bosnia-Herzegovina',
  'Barbados',
  'Bangladesh',
  'Belgium',
  'Bulgaria',
  'Bahrain',
  'Bermuda',
  'Bolivia',
  'Brazil',
  'Bahamas',
  'Botswana',
  'Belarus',
  'Belize',
  'Canada',
  'Congo',
  'Switzerland',
  'Chile',
  'Cameroon',
  'China',
  'Columbia',
  'Costa Rica',
  'Former Czechoslovakia',
  'Czech Republic',
  'Germany',
  'Denmark',
  'Dominica',
  'Dominican Republic',
  'Algeria',
  'Ecuador',
  'Estonia',
  'Egypt',
  'Spain',
  'Ethiopia',
  'Finland',
  'Fiji',
  'Falkland Islands',
  'France',
  'Great Britain',
  'Grenada',
  'Georgia',
  'French Guyana',
  'Ghana',
  'Greenland',
  'Guinea',
  'Greece',
  'Guatamala',
  'Guam (USA)',
  'Guyana',
  'Hong Kong',
  'Honduras',
  'Croatia',
  'Haiti',
  'Hungary',
  'Indonesia',
  'Ireland',
  'Israel',
  'India',
  'Iraq',
  'Iran',
  'Iceland',
  'Italy',
  'Jamaica',
  'Jordan',
  'Japan',
  'Kenya',
  'North Korea',
  'South Korea',
  'Kuwait',
  'Cayman Islands',
  'Kazakhstan',
  'Laos',
  'Lebanon',
  'St. Lucia',
  'Liechtenstein',
  'Sri Lanka',
  'Liberia',
  'Lithuania',
  'Luxembourg',
  'Latvia',
  'Libya',
  'Morocco',
  'Moncao',
  'Moldavia',
  'Madagascar',
  'Macedonia',
  'Mongolia',
  'Martinique (French)',
  'Montserrat',
  'Malta',
  'Mexico',
  'Malaysia',
  'Mozambique',
  'Nambia',
  'Nigeria',
  'Nicaragua',
  'Netherlands',
  'Norway',
  'Nepal',
  'New Zealand',
  'Panama',
  'Peru',
  'Phillipines',
  'Pakistan',
  'Poland',
  'Puerto Rico',
  'Portugal',
  'Paraguay',
  'Qatar',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saudia Arabia',
  'Serbia',
  'Serbia and Montenegro',
  'Sudan',
  'Sweden',
  'Singapore',
  'Slovenia',
  'Slovak Republic',
  'Senegal',
  'Suriname',
  'El Salvador',
  'Syria',
  'Swaziland',
  'Turks and Caicos Islands',
  'Chad',
  'Thailand',
  'Tadjikistan',
  'Turkmenistan',
  'Tunisia',
  'Turkey',
  'Trinidad and Tabago',
  'Taiwan',
  'Tanzania',
  'Ukraine',
  'Uganda',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Vatican City',
  'St. Vincent & Grenadines',
  'Venezuela',
  'Virign Islands (British)',
  'Virgin Islands (USA)',
  'Vietnam',
  'Samoa',
  'Yemen',
  'South Africa',
  'Zaire',
  'Zimbabwe'
];

const YELLOWSTONE_LOCATIONS = [
  'Corporate Headquarters',
  'Bryce Canyon Lodge',
  'Burr Oak State Park',
  'Crater Lake National Park',
  'Everglades National Park',
  'Furnace Creek Inn and Ranch',
  'Geneva Marina',
  'Gideon Putnam',
  'Grand Canyon National Park - North Rim',
  'Grand Canyon National Park - South Rim',
  'Hueston Woods',
  'Maumee Bay State Park',
  'Mohican State Park Resort and Conference Center',
  'Mount Rushmore',
  'Painted Desert Oasis',
  'Punderson Manor',
  'Salt Fork Resort and State Park',
  "Scotty's Castle",
  'Shawnee State Park',
  'Silverado Country Club and Resort',
  'Stovepipe Wells',
  'Yellowstone National Park',
  'Zion National Park'
];

const MAX_NUMBER_OF_POSITIONS = 5; 
const MAX_NUMBER_OF_EMPLOYERS = 5; 
const MAX_NUMBER_OF_SCHOOLS = 5; 

const BS_BREAKPOINT_LG = 992; 