const CountriesName = ["Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas (the)",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia (Plurinational State of)",
"Bonaire, Sint Eustatius and Saba",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Indian Ocean Territory (the)",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Cambodia",
"Cameroon",
"Canada",
"Cayman Islands (the)",
"Central African Republic (the)",
"Chad",
"Chile",
"China",
"Christmas Island",
"Cocos (Keeling) Islands (the)",
"Colombia",
"Comoros (the)",
"Congo (the Democratic Republic of the)",
"Congo (the)",
"Cook Islands (the)",
"Costa Rica",
"Croatia",
"Cuba",
"Curaçao",
"Cyprus",
"Czechia",
"Côte d'Ivoire",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic (the)",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Eswatini",
"Ethiopia",
"Falkland Islands (the) [Malvinas]",
"Faroe Islands (the)",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories (the)",
"Gabon",
"Gambia (the)",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Heard Island and McDonald Islands",
"Holy See (the)",
"Honduras",
"Hong Kong",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran (Islamic Republic of)",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea (the Democratic People's Republic of)",
"Korea (the Republic of)",
"Kuwait",
"Kyrgyzstan",
"Lao People's Democratic Republic (the)",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macao",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands (the)",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia (Federated States of)",
"Moldova (the Republic of)",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands (the)",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger (the)",
"Nigeria",
"Niue",
"Norfolk Island",
"Northern Mariana Islands (the)",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestine, State of",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines (the)",
"Pitcairn",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Republic of North Macedonia",
"Romania",
"Russian Federation (the)",
"Rwanda",
"Réunion",
"Saint Barthélemy",
"Saint Helena, Ascension and Tristan da Cunha",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Martin (French part)",
"Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Sint Maarten (Dutch part)",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Georgia and the South Sandwich Islands",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan (the)",
"Suriname",
"Svalbard and Jan Mayen",
"Sweden",
"Switzerland",
"Syrian Arab Republic",
"Taiwan",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands (the)",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates (the)",
"United Kingdom of Great Britain and Northern Ireland (the)",
"United States Minor Outlying Islands (the)",
"United States of America (the)",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe",
"Åland Islands"];
//(1)Add a header to the lab with "YourName's List Of Countries"
//(2)Using JS, inject an ordered list into the div with the class "content"
//(3)Give your new ordered list the class "countries"
let ClassContent = document.createElement('div');
ClassContent.className = "content";
let ContentList = document.createElement('ol');
ContentList.className = "countries";
document.body.append(ClassContent);


//(4)Design the following function to run on the click of a button from the index page
let button = document.querySelector("button");

//(5)Select 25 random countries from your list by writing a separate function that makes use of Math.random
//(6)Make sure the selection is unique
//(7)Using a .forEach or a .map function, inject a new list item for each country into the ol from #3
button.onclick = random;
document.querySelector(".content").appendChild(ContentList);
function random(){
    let CountriesIndex =[];
    for (var i = 0; i<5; i++){
        random = Math.floor(Math.random()*CountriesName.length);
        if (i!=random){
            CountriesIndex.push(random);
        }


        CreateP = document.createElement("p1");
        CovertedName = document.createTextNode(CountriesName[random]);
        CreateP.appendChild(CovertedName);
    
        listItem = document.createElement("li");
        listItem.appendChild(CreateP);
        ContentList.appendChild(listItem);
    }
}
