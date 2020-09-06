let data = [
{
	cardHead: "AI : CHALLENGES OF AI",
	cardBody: "Browse to find the images that fit your needs and click to download. Use the on-the-fly color image generation to match your brand identity.",
	url: "./src/AI Temp/index.html"
},
{
	cardHead: "VISITOR : ON TOP OF THE WORLD",
	cardBody: "In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience.",
	url: "./src/Top Mountain/index.html"
},
{
	cardHead: "TRAVELLA : Let's Plan Your Best Trip Ever",
	cardBody: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
	url: "./src/Travel/index.html"
},
{
	cardHead: "Raiders : I can't see you",
	cardBody: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
	url: "./src/Raiders/index.html"
},
{
	cardHead: "AWESOME CLUB : INTRODUCING YOKO TONIGHT 20:00",
	cardBody: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
	url: "./src/Club/index.html"
},
{
	cardHead: "CAMPING : Beyond Camping",
	cardBody: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent or a recreational vehicle. Typically participants leave developed areas to spend time outdoors",
	url: "./src/Camping/index.html"
},
]


const createCard = (dataObj) => {
	let card = document.createElement('div');
	card.classList.add('card');
	card.classList.add('mr-2');
	let cardhead = document.createElement('div');
	cardhead.classList.add('card-head');
	cardhead.innerHTML = dataObj.cardHead;
	let cardbody = document.createElement('div');
	cardbody.classList.add('card-body');
	cardbody.innerHTML = dataObj.cardBody;
	let cardbtn = document.createElement('div');
	cardbtn.classList.add('card-btn')
	let preview = document.createElement('a');
	preview.classList.add('custom-card-btn');
	preview.href = dataObj.url;
	preview.innerHTML = "PREVIEW";

	cardbtn.appendChild(preview);
	card.appendChild(cardhead);
	card.appendChild(cardbody);
	card.appendChild(cardbtn);
	return card;
};


const createRow = (dataObj_1, dataObj_2) => {
	let row = document.createElement('div');
	row.classList.add('row');
	row.classList.add('mb-4');

	row.appendChild(createCard(dataObj_1));
	row.appendChild(createCard(dataObj_2));

	return row;
};

let exploreBtn = document.getElementById('explore');

let explored = false;
const explore = () => {
	if(explored) {
		return;
	}
	exploreBtn.disabled = true;
	let allCards = document.getElementById('all_cards');
	allCards.classList.remove('hide');
	allCards.classList.add('card-col');
	for(let i=0; i<data.length; i+=2) {
		allCards.appendChild(createRow(data[i], data[i+1]));
	}
	explored = true;
};

exploreBtn.addEventListener('click', explore);
