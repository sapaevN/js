"use strict";

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru, eng"],
		programmingLangs:{
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},

	showAgeAndLangs: function(plan){
		let result = '';
		let myAge = plan.age;
		let knowLengs = plan.skills.languages;
		result += `Мне ${myAge} я владею языками: ${knowLengs.join(" :::").toUpperCase()}`
		return console.log(result);
	}

};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showProgrammingLangs(plan){
	for(let key in plan){
		if(typeof(plan[key] === 'object')){
			for (let i in plan[key]){
				if(i == "programmingLangs" ){
					for(let k in plan[key][i]){
						if(k === "js"){
							console.log(`Язык js изучен на ${plan[key][i][k]}`)
						}
						else if(k === "php"){
							console.log(`Язык php изучен на ${plan[key][i][k]}`)
						}else if(typeof(plan[key][i][k]) === 'undefined'){
							console.log("")
						}
					}
				}
			}
		}
	}
}

function showExperience(plan){
	for(let key in plan){
		if(typeof(plan[key]) === "object"){
			for(let i in plan[key]){
				if(i == 'exp') {console.log(plan[key][i])}
				
			}
		}
	}
}

showExperience(personalPlanPeter);
showProgrammingLangs(personalPlanPeter);
