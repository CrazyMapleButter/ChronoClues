const clueBank = [
  {
    year: 1776,
    clues: [
      "A famous declaration of independence was signed.",
      "A revolutionary war reshaped a nation.",
      "The idea of a new nation was born."
    ]
  },
  {
    year: 1969,
    clues: [
      "Humans first walked on the Moon.",
      "A legendary rock band released a classic album.",
      "A famous children’s TV show premiered."
    ]
  },
  {
    year: 1989,
    clues: [
      "The Berlin Wall fell, marking the end of division.",
      "A historic space shuttle disaster shocked the world.",
      "The internet began to become widely accessible."
    ]
  },
  {
    year: 1918,
    clues: [
      "A deadly pandemic swept the globe.",
      "A major city was bombed during a world war.",
      "A significant civil rights movement gained momentum."
    ]
  },
  {
    year: 1903,
    clues: [
      "A groundbreaking medical discovery was announced.",
      "The first successful flight of an airplane occurred.",
      "An influential treaty ended years of conflict."
    ]
  },
  {
    year: 1500,
    clues: [
      "A famous empire reached its peak expansion.",
      "An ancient monument was completed.",
      "A philosopher published a seminal work."
    ]
  },
  {
    year: 1876,
    clues: [
      "A major technological breakthrough in communication happened.",
      "The first telephone call was made.",
      "An iconic painting was created."
    ]
  },
  {
    year: 1666,
    clues: [
      "A great fire destroyed much of a historic city.",
      "A famous playwright premiered a well-known tragedy.",
      "A new form of government was established."
    ]
  },
  {
    year: 1849,
    clues: [
      "A major gold rush attracted thousands.",
      "An important railroad was completed.",
      "A well-known novel was published."
    ]
  },
  {
    year: 1905,
    clues: [
      "A significant scientific theory was proposed.",
      "A famous explorer discovered new lands.",
      "A renowned composer created a masterpiece."
    ]
  },
  {
    year: 1588,
    clues: [
      "A great naval battle changed the course of history.",
      "A major sea expedition set sail.",
      "A new form of literature gained popularity."
    ]
  },
  {
    year: 1963,
    clues: [
      "A famous speech advocating civil rights was delivered.",
      "A space race milestone was achieved.",
      "A landmark law was passed in the United States."
    ]
  },
  {
    year: 1991,
    clues: [
      "A superpower officially dissolved.",
      "A major environmental treaty was signed.",
      "The World Wide Web was made publicly available."
    ]
  },
  {
    year: 1347,
    clues: [
      "A devastating plague began to spread across Europe.",
      "Major trade routes connected continents.",
      "An important architectural style flourished."
    ]
  },
  {
    year: 1945,
    clues: [
      "World War II ended.",
      "A new global organization was founded.",
      "Atomic weapons were used for the first time."
    ]
  },
  {
    year: 2001,
    clues: [
      "A major terrorist attack shocked the world.",
      "A global digital revolution was accelerating.",
      "New policies changed international security."
    ]
  },
  {
    year: 1865,
    clues: [
      "A major war in America concluded.",
      "Slavery was abolished in a large nation.",
      "New amendments shaped civil rights."
    ]
  },
  {
    year: 1607,
    clues: [
      "The first permanent English settlement in America was founded.",
      "Exploration of new lands continued.",
      "Colonial powers competed for overseas territories."
    ]
  },
  {
    year: 1914,
    clues: [
      "A global conflict began.",
      "Alliances shaped international relations.",
      "New military technologies were introduced."
    ]
  },
  {
    year: 1980,
    clues: [
      "A major economic shift took place.",
      "A famous athlete won multiple championships.",
      "Technology companies started to emerge."
    ]
  },
  {
    year: 1770,
    clues: [
      "A famous composer was born.",
      "The Industrial Revolution gained momentum.",
      "Political revolutions began reshaping Europe."
    ]
  },
  {
    year: 1947,
    clues: [
      "A nation gained independence after colonial rule.",
      "The Cold War tensions escalated.",
      "A famous musical genre was born."
    ]
  },
  {
    year: 1917,
    clues: [
      "A major revolution transformed a vast country.",
      "New ideologies shaped global politics.",
      "World War I was still raging."
    ]
  },
  {
    year: 1492,
    clues: [
      "A famous explorer reached new continents.",
      "Major trade routes were established.",
      "New kingdoms rose in power."
    ]
  },
  {
    year: 2008,
    clues: [
      "A global financial crisis occurred.",
      "A historic political figure was elected.",
      "Technology and social media became mainstream."
    ]
  },
  {
    year: 1929,
    clues: [
      "A stock market crash triggered a worldwide depression.",
      "New art movements flourished.",
      "Mass production transformed industries."
    ]
  },
  {
    year: 1517,
    clues: [
      "A religious reformation began.",
      "Major political changes swept Europe.",
      "New printing technologies spread ideas."
    ]
  },
  {
    year: 1869,
    clues: [
      "A transcontinental railroad was completed.",
      "Industrial advancements sped up trade.",
      "New cultural movements emerged."
    ]
  },
  {
    year: 1939,
    clues: [
      "A global conflict erupted.",
      "Major powers formed opposing alliances.",
      "Technological warfare reached new levels."
    ]
  },
  {
    year: 1955,
    clues: [
      "Civil rights activism gained prominence.",
      "A famous cultural festival took place.",
      "Space exploration began."
    ]
  },
  {
    year: 1497,
    clues: [
      "An explorer sailed around the southern tip of Africa.",
      "New trade routes opened between continents.",
      "Maritime technology improved navigation."
    ]
  },
  {
    year: 1789,
    clues: [
      "A revolution led to the rise of a republic.",
      "New ideas about democracy spread.",
      "A famous prison was stormed."
    ]
  },
  {
    year: 1825,
    clues: [
      "The first modern railway opened.",
      "Industrialization accelerated.",
      "New cultural institutions were established."
    ]
  },
  {
    year: 1957,
    clues: [
      "The first artificial satellite was launched.",
      "Space race competition intensified.",
      "New scientific achievements were celebrated."
    ]
  },
  {
    year: 1848,
    clues: [
      "Widespread political revolutions occurred across Europe.",
      "New social ideologies gained ground.",
      "Important manifestos were published."
    ]
  },
  {
    year: 1687,
    clues: [
      "A groundbreaking scientific work on gravity was published.",
      "Advancements in physics changed understanding of the universe.",
      "Important mathematical theories were developed."
    ]
  },
  {
    year: 1912,
    clues: [
      "A famous ocean liner sank on its maiden voyage.",
      "Advancements in engineering were celebrated.",
      "International maritime laws were reconsidered."
    ]
  },
  {
    year: 1933,
    clues: [
      "A major economic crisis led to new leadership.",
      "Political movements reshaped a European nation.",
      "New cultural policies were introduced."
    ]
  },
  {
    year: 1961,
    clues: [
      "The first human journeyed into space.",
      "Cold War tensions influenced global politics.",
      "New technological frontiers were explored."
    ]
  },
  {
    year: 1756,
    clues: [
      "A global conflict involved many European powers.",
      "Shifts in colonial holdings occurred.",
      "New military tactics were employed."
    ]
  },
  {
    year: 2004,
    clues: [
      "A major social media platform was launched.",
      "Digital communication transformed society.",
      "New political movements emerged online."
    ]
  },
  {
    year: 1707,
    clues: [
      "Two kingdoms united to form a new country.",
      "Political unions changed the map of Europe.",
      "New governmental institutions were created."
    ]
  },
  {
    year: 1836,
    clues: [
      "A famous battle for independence was fought.",
      "New settlers arrived in distant lands.",
      "Territorial disputes intensified."
    ]
  },
  {
    year: 1994,
    clues: [
      "A historic election ended decades of segregation.",
      "New democratic institutions were established.",
      "Cultural renewal took place."
    ]
  },
  {
    year: 1582,
    clues: [
      "A major calendar reform was introduced.",
      "Scientific understanding of time improved.",
      "Religious authorities influenced timekeeping."
    ]
  },
  {
    year: 1900,
    clues: [
      "The turn of a century sparked new optimism.",
      "International expositions showcased innovation.",
      "Cultural and artistic movements flourished."
    ]
  },
  {
    year: 1804,
    clues: [
      "A famous leader crowned himself emperor.",
      "Major legal codes were established.",
      "Wars reshaped European boundaries."
    ]
  },
  {
    year: 1959,
    clues: [
      "A major revolution changed the government.",
      "Cold War politics intensified in the region.",
      "New cultural exports gained worldwide attention."
    ]
  },
  {
    year: 1889,
    clues: [
      "A famous tower was completed as a world exhibition centerpiece.",
      "New inventions transformed urban life.",
      "Artistic movements inspired new generations."
    ]
  },
  {
    year: 1920,
    clues: [
      "A major amendment granted new voting rights.",
      "Post-war cultural changes flourished.",
      "Economic prosperity began for some."
    ]
  },
  {
    year: 1715,
    clues: [
      "A long-reigning monarch died.",
      "Political transitions affected European alliances.",
      "Artistic styles evolved."
    ]
  },
  {
    year: 2007,
    clues: [
      "A revolutionary smartphone was released.",
      "Mobile technology began to dominate communication.",
      "App ecosystems started to grow rapidly."
    ]
  },
  {
    year: 1676,
    clues: [
      "A major rebellion took place in a colonial territory.",
      "Relations between settlers and natives became strained.",
      "Military conflicts intensified in the region."
    ]
  },
  {
    year: 1846,
    clues: [
      "A famous war over territorial claims erupted.",
      "New states were admitted to a union.",
      "Expansionism shaped policies."
    ]
  },
  {
    year: 1937,
    clues: [
      "A significant aviation disaster shocked the world.",
      "Technological risks were reconsidered.",
      "New safety standards were proposed."
    ]
  },
  {
    year: 1509,
    clues: [
      "A famous monarch began a long reign.",
      "Cultural renaissance flourished in Europe.",
      "New architectural projects began."
    ]
  },
  {
    year: 1999,
    clues: [
      "Y2K fears spread worldwide.",
      "The euro currency was introduced.",
      "Digital music formats gained popularity."
    ]
  },
  {
    year: 1950,
    clues: [
      "A major war divided a peninsula.",
      "Cold War alliances solidified.",
      "New international organizations formed."
    ]
  },
  {
    year: 1721,
    clues: [
      "A significant treaty ended a long conflict.",
      "New imperial powers emerged.",
      "Economic expansion followed."
    ]
  },
    {
    year: 1871,
    clues: [
      "A major city was unified into a powerful nation.",
      "Industrialization expanded rapidly.",
      "New political systems were established."
    ]
  },
  {
    year: 1494,
    clues: [
      "An important treaty divided newly discovered lands.",
      "European powers negotiated colonial boundaries.",
      "Exploration and conquest accelerated."
    ]
  },
  {
    year: 1986,
    clues: [
      "A catastrophic nuclear accident occurred.",
      "Environmental concerns gained global attention.",
      "Safety protocols were re-evaluated."
    ]
  },
  {
    year: 1600,
    clues: [
      "A powerful trading company was established.",
      "Colonial empires expanded their reach.",
      "Global commerce increased dramatically."
    ]
  },
  {
    year: 1773,
    clues: [
      "A famous protest against taxation took place.",
      "Tensions grew between colonists and rulers.",
      "Events set the stage for revolution."
    ]
  },
  {
    year: 1919,
    clues: [
      "A peace treaty ended a global conflict.",
      "New international organizations were founded.",
      "Political borders were redrawn."
    ]
  },
  {
    year: 1967,
    clues: [
      "A major war erupted in the Middle East.",
      "Space exploration continued rapidly.",
      "Civil rights movements gained momentum."
    ]
  },
  {
    year: 1923,
    clues: [
      "A famous earthquake devastated a city.",
      "Reconstruction efforts followed.",
      "Urban development was reshaped."
    ]
  },
  {
    year: 2003,
    clues: [
      "A major international conflict began.",
      "Global alliances were tested.",
      "New policies were enacted worldwide."
    ]
  },
  {
    year: 1857,
    clues: [
      "A large-scale rebellion challenged colonial rule.",
      "Political and social upheavals occurred.",
      "Changes in governance followed."
    ]
  },
  {
    year: 1733,
    clues: [
      "A significant technological invention revolutionized industry.",
      "Agricultural practices improved.",
      "Economic changes transformed societies."
    ]
  },
  {
    year: 1906,
    clues: [
      "A massive earthquake struck a major city.",
      "Disaster relief efforts mobilized.",
      "Urban planning evolved."
    ]
  },
  {
    year: 1781,
    clues: [
      "A decisive battle ended a long war.",
      "New nations gained independence.",
      "Treaties reshaped geopolitics."
    ]
  },
  {
    year: 1498,
    clues: [
      "An explorer reached a new continent by sea.",
      "Maritime routes expanded.",
      "Cultural exchanges increased."
    ]
  },
  {
    year: 1954,
    clues: [
      "A landmark civil rights case was decided.",
      "Segregation laws were challenged.",
      "Social justice movements grew."
    ]
  },
  {
    year: 1870,
    clues: [
      "A major war led to national unification.",
      "Industrial expansion continued.",
      "New political leaders emerged."
    ]
  },
  {
    year: 2000,
    clues: [
      "The millennium was celebrated worldwide.",
      "Technological advancements accelerated.",
      "International cooperation increased."
    ]
  },
  {
    year: 1620,
    clues: [
      "Pilgrims established a new colony.",
      "New settlements were founded in America.",
      "Cultural and religious freedoms were sought."
    ]
  },
  {
    year: 1930,
    clues: [
      "The Great Depression deepened globally.",
      "Economic hardship influenced politics.",
      "New social programs were proposed."
    ]
  },
  {
    year: 1763,
    clues: [
      "A treaty ended a major colonial war.",
      "Territorial claims were redistributed.",
      "New tensions arose between empires."
    ]
  },
  {
    year: 1984,
    clues: [
      "A famous novel depicting dystopia was published.",
      "Political tensions were high during the Cold War.",
      "Technological advancements raised concerns."
    ]
  },
  {
    year: 1521,
    clues: [
      "A conquest led to the fall of an empire.",
      "Explorers expanded European territories.",
      "New cultural encounters occurred."
    ]
  },
  {
    year: 1948,
    clues: [
      "A declaration of human rights was adopted.",
      "New countries were formed.",
      "Post-war reconstruction began."
    ]
  },
  {
    year: 1599,
    clues: [
      "A famous playwright produced enduring works.",
      "The Renaissance influenced art and literature.",
      "Exploration continued globally."
    ]
  },
  {
    year: 1704,
    clues: [
      "A notable battle took place in North America.",
      "Colonial powers fought for territory.",
      "New alliances were formed."
    ]
  },
  {
    year: 1911,
    clues: [
      "An expedition reached the South Pole.",
      "Scientific exploration advanced.",
      "National pride was bolstered by discoveries."
    ]
  },
  {
    year: 1877,
    clues: [
      "The end of a long conflict marked a new era.",
      "New technologies changed everyday life.",
      "Political reconstruction took place."
    ]
  },
  {
    year: 1990,
    clues: [
      "A reunification reshaped a European country.",
      "Cold War tensions eased.",
      "New economic policies were introduced."
    ]
  },
  {
    year: 1618,
    clues: [
      "A major religious war began in Europe.",
      "Conflicts between empires escalated.",
      "Political alliances shifted."
    ]
  },
  {
    year: 2005,
    clues: [
      "A devastating natural disaster struck Asia.",
      "International aid efforts mobilized.",
      "Global awareness of climate change grew."
    ]
  },
  {
    year: 1543,
    clues: [
      "A revolutionary scientific work was published.",
      "The heliocentric model challenged old beliefs.",
      "Advances in medicine and astronomy were made."
    ]
  },
  {
    year: 1799,
    clues: [
      "A famous military leader rose to power.",
      "Political upheaval changed a continent.",
      "New legal codes were introduced."
    ]
  },
  {
    year: 1936,
    clues: [
      "A major international sporting event was held.",
      "Political tensions influenced the games.",
      "Athletes made lasting impressions."
    ]
  },
  {
    year: 1882,
    clues: [
      "An important alliance was formed between nations.",
      "Industrial and military cooperation increased.",
      "Diplomatic relations shifted."
    ]
  },
  {
    year: 1720,
    clues: [
      "An economic bubble burst, causing financial crisis.",
      "Speculation impacted economies.",
      "Regulatory measures were debated."
    ]
  },
  {
    year: 1513,
    clues: [
      "A famous explorer crossed a major isthmus.",
      "New maps expanded understanding of geography.",
      "Exploration opened new trade routes."
    ]
  },
  {
    year: 1964,
    clues: [
      "A major civil rights act was passed.",
      "Social change movements gained momentum.",
      "Cultural revolutions influenced society."
    ]
  },
  {
    year: 1775,
    clues: [
      "The first shots of a revolution were fired.",
      "Colonial militias engaged royal troops.",
      "New alliances were formed."
    ]
  },
  {
    year: 1861,
    clues: [
      "A civil war erupted in a divided nation.",
      "Issues of slavery and states' rights were central.",
      "Battles shaped the country's future."
    ]
  },
  {
    year: 1982,
    clues: [
      "A brief war was fought over disputed islands.",
      "Military and diplomatic tensions flared.",
      "Global powers took sides."
    ]
  }
];

let puzzle;
let attempts = 0;
const maxAttempts = 6;

window.onload = () => {
  if (clueBank.length > 0) {
    puzzle = clueBank[Math.floor(Math.random() * clueBank.length)];

    document.getElementById("clues").innerHTML = puzzle.clues
      .map(clue => `<p>• ${clue}</p>`)
      .join("");
  } else {
    document.getElementById("clues").innerHTML = "<p>No puzzle available for today.</p>";
  }
};

function submitGuess() {
  const yearInput = document.getElementById("yearInput");
  const year = parseInt(yearInput.value);
  const feedbackDiv = document.getElementById("feedback");

  if (isNaN(year)) {
    feedbackDiv.innerHTML = "❗ Please enter a valid year.";
    return;
  }

  if (attempts >= maxAttempts) {
    feedbackDiv.innerHTML = `❌ No guesses left! The year was <strong>${puzzle.year}</strong>.`;
    return;
  }

  attempts++;

  let feedback = "";

  if (year === puzzle.year) {
    feedback += `<strong>✅ Correct! You got it in ${attempts} ${attempts === 1 ? 'guess' : 'guesses'}!</strong>`;
    yearInput.disabled = true;
  } else if (year < puzzle.year) {
    feedback += `📈 The correct year is <strong>later</strong> than ${year}.<br>`;
    feedback += `🕐 ${maxAttempts - attempts} guess${maxAttempts - attempts === 1 ? '' : 'es'} left.`;
  } else {
    feedback += `📉 The correct year is <strong>earlier</strong> than ${year}.<br>`;
    feedback += `🕐 ${maxAttempts - attempts} guess${maxAttempts - attempts === 1 ? '' : 'es'} left.`;
  }

  if (attempts >= maxAttempts && year !== puzzle.year) {
    feedback += `<br>❌ Game over! The correct year was <strong>${puzzle.year}</strong>.`;
    yearInput.disabled = true;
  }

  feedbackDiv.innerHTML = feedback;
  yearInput.value = "";
  yearInput.focus();
}

window.submitGuess = submitGuess;
