define([], function(){
	function initModule(){


		this.createApiBox = function(apiContainer, apiData){
			apiContainer.setAttribute("mouseover", false);

			var newApi = document.createElement("div");
			newApi.className = "apiBox";
			newApi.style.backgroundImage = "url("+apiData.image+")";

			var apiTitle = document.createElement("div");
			apiTitle.className = "apiTitle";
			apiTitle.innerHTML = apiData.name;

			var apiDescription = document.createElement("div");
			apiDescription.className = "apiDescription";
			apiDescription.innerHTML = apiData.description;

			var titleDescContainer = document.createElement("div");
			titleDescContainer.className = "titleDescContainer";

			titleDescContainer.appendChild(apiTitle);
			titleDescContainer.appendChild(apiDescription);

			newApi.onclick = function(){
				window.open("/StoreFront/api/?id="+apiData.id, "_self");
			};

			newApi.appendChild(titleDescContainer);
			apiContainer.appendChild(newApi);
			
		}


	}return{
		init: initModule
	}
});