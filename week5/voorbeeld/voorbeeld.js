let dataList = document.getElementById('lijst');
let input = document.getElementById('invoer');

let request = new XMLHttpRequest();
request.onreadystatechange = function (response) {
	if (request.readyState === 4 && request.status === 200)    {
			let steden = JSON.parse(request.responseText);

			steden.forEach(function (item) {
				let option = document.createElement('option');
				option.value = item;
				dataList.appendChild(option);
			});

			input.placeholder = "Steden";
		} else {
			input.placeholder = "Stedenlijst kan niet geladen worden";
		}
};
input.placeholder = "Laden van de plaatsnamen ...";

request.open('GET', 'data.php', true);
request.send();