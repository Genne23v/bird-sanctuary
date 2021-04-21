// Sample iNaturalist observations for a 1 km radius around Newnham Campus obtained using:
//
// `curl "https://api.inaturalist.org/v1/observations?per_page=20&order_by=observed_on&acc=true&lat=43.7955&lng=-79.3496@radius=1"`
module.exports = {
  BirdBreedList: [
    {
      date_found: '2020-04-11',
      species_name: 'american robin',
      description: 'The American robin (Turdus migratorius) is a migratory songbird of the true thrush genus and Turdidae, the wider thrush family.',
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/800px-Turdus-migratorius-002.jpg",
      important_note: 'none',
      wiki_url: 'https://en.wikipedia.org/wiki/American_robin'
    }, 
    {
      date_found: '2020-04-03',
      species_name: 'brewer\'s blackbird',
      description: 'Brewer\'s blackbird (Euphagus cyanocephalus) is a medium-sized New World blackbird. It is named after the ornithologist Thomas Mayo Brewer.',
      image: "https://en.wikipedia.org/wiki/Brewer%27s_blackbird#/media/File:Euphagus_cyanocephalus_-San_Luis_Obispo_-California-8a.jpg",
      important_note: 'First appearance since 2017',
      wiki_url: 'https://en.wikipedia.org/wiki/Brewer%27s_blackbird'
    }, 
    {
      date_found: '2020-02-11',
      species_name: 'Golden crowend kinglet',
      description: 'The golden-crowned kinglet (Regulus satrapa) is a very small songbird in the family Regulidae that lives throughout much of North America.',
      image: "https://en.wikipedia.org/wiki/Golden-crowned_kinglet#/media/File:Regulus_satrapa_-Canada-8a.jpg",
      important_note: 'found on Ontario lakeside',
      wiki_url: 'https://en.wikipedia.org/wiki/Golden-crowned_kinglet'
    }, 
    {
      date_found: '2019-12-22',
      species_name: 'great blue heron',
      description: 'The great blue heron (Ardea herodias) is a large wading bird in the heron family Ardeidae, common near the shores of open water and in wetlands',
      image: "https://en.wikipedia.org/wiki/Great_blue_heron#/media/File:GBHfish5.jpg",
      important_note: 'introduced from South America',
      wiki_url: 'https://en.wikipedia.org/wiki/Great_blue_heron'
    }, 
    {
      date_found: '2019-07-06',
      species_name: 'guinea fowl',
      description: 'Guineafowl (/ˈɡɪnifaʊl/; sometimes called "pet speckled hens" or "original fowl") are birds of the family Numididae in the order Galliformes.',
      image: "https://en.wikipedia.org/wiki/Guineafowl#/media/File:Numida_meleagris_-Serengeti_National_Park,_Tanzania-8_(1).jpg",
      important_note: 'nothing to remark',
      wiki_url: 'https://en.wikipedia.org/wiki/Guineafowl'
    }, 
    {
      date_found: '2019-06-01',
      species_name: 'herring gull',
      description: 'The American herring gull or Smithsonian gull (Larus smithsonianus or Larus argentatus smithsonianus) is a large gull that breeds in North America',
      image: "https://en.wikipedia.org/wiki/American_herring_gull#/media/File:Larus_smithsonianus-USFWS.jpg",
      important_note: 'none',
      wiki_url: 'https://en.wikipedia.org/wiki/American_herring_gull'
    }, 
    {
      date_found: '2019-04-01',
      species_name: 'american robin',
      description: 'The mallard (/ˈmælɑːrd, ˈmælərd/) or wild duck (Anas platyrhynchos) is a dabbling duck that breeds throughout the temperate and subtropical Americas',
      image: "https://en.wikipedia.org/wiki/Mallard#/media/File:Anas_platyrhynchos_male_female_quadrat.jpg",
      important_note: 'none',
      wiki_url: 'https://en.wikipedia.org/wiki/Mallard'
    },
    {
      date_found: '2019-02-25',
      species_name: 'Northern flicker',
      description: 'The northern flicker (Colaptes auratus) or common flicker is a medium-sized bird of the woodpecker family. It is native to most of North America, parts of Central America, Cuba, and the Cayman Islands',
      image: "https://en.wikipedia.org/wiki/Northern_flicker",
      important_note: 'none',
      wiki_url: 'https://en.wikipedia.org/wiki/Northern_flicker'
    },
    {
      date_found: '2018-11-30',
      species_name: 'ruby crowned kinglet',
      description: 'The ruby-crowned kinglet (Regulus calendula) is a very small passerine bird found throughout North America.',
      image: "https://en.wikipedia.org/wiki/Ruby-crowned_kinglet#/media/File:Regulus_calendula1.jpg",
      important_note: 'Is this found in the region in the past?',
      wiki_url: 'https://en.wikipedia.org/wiki/Ruby-crowned_kinglet'
    }
      ]
};
