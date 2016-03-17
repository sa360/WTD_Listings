app.service('optionsSrv',OptionsService);

function OptionsService(){
	var ctrl = this;


	ctrl.countries = [
		{label:'Canada',value:'Canada'},
		{label:'England',value:'England'},
		{label:'France',value:'France'},
		{label:'United States',value:'United States'},
	];

	ctrl.cities = [
		{country:'Canada', label:'Toronto',value:'Toronto'},
		{country:'Canada', label:'Ottawa',value:'Ottawa'},
		{country:'Canada', label:'Quebec',value:'Quebec'},
		{country:'Canada', label:'Montreal',value:'Montreal'},
		{country:'Canada', label:'Vancouver',value:'Vancouver'},
		{country:'England', label:'London',value:'London'},
		{country:'England', label:'Manchester',value:'Manchester'},
		{country:'England', label:'Windsor',value:'Windsor'},
		{country:'England', label:'Bath',value:'Bath'},
		{country:'France', label:'Paris',value:'Paris'},
		{country:'France', label:'Marseille',value:'Marseille'},
		{country:'France', label:'Lyon',value:'Lyon'},
		{country:'France', label:'Toulouse',value:'Toulouse'},
		{country:'United States', label:'New York',value:'New York'},
		{country:'United States', label:'Chicago',value:'Chicago'},
		{country:'United States', label:'Washington',value:'Washington'},
		{country:'United States', label:'Los Angeles',value:'Los Angeles'},
	];

	ctrl.categories = [
		{label:'Nature', value:'Nature'},
		{label:'Architecture', value:'Architecture'},
		{label:'History', value:'History'},
		{label:'Food', value:'Food'},

	];


















}







