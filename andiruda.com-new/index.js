class Person {
	constructor ({name, born, gender, hobbies, loc}) {
    this.name = name;
    this.birthdate = new Date(born);
    this.age = Math.abs(
    	new Date(
      	Date.now() - this.birthdate.getTime()
      ).getUTCFullYear() - 1970
    );
    this.gender = gender;
    this.hobbies = hobbies;
    this.location = loc;
  }
  randomHobby (hobbies) {
  	let rand, x=0;
    while (hobbies[rand] === undefined) {
    	rand = Math.floor(Math.random() * 10);
    }
    return hobbies[rand];
  }
  printBio () {
  	return `${this.name} is a ${this.age} year-old ${this.constructor.name} that lives in ${this.location}. \n\n${(this.gender === "m") ? "He" : (this.gender === "f") ? "She" : "This person"} enjoys drinking coffee (${this.caffeine.totalCups} total cups / ${this.caffeine.totalMgCaffeine} mg caffeine) as well as ${this.randomHobby(this.hobbies)} and other fun activities.  \n\n${this.name.split(" ")[0]} expresses above average aptitude in the following skills:\n\n\tSkill - Experience Level\n\t==========================\n${this.printSkills()}\n\nYou can connect with ${this.name} on:\n\n\t${this.printConnections()}\n\nOh and by the way... ${this.name.split(" ")[0]} ${(Person.isNinja.call(this)) ? "is a ninja" : "is NOT a ninja"}!`
  }
  static isNinja () {
		return this instanceof Ninja;
  }
}

class Developer extends Person {
	constructor ({experience: time, skills, connect}) {
  	super(attributes)
		this.caffeine = new Caffeine(time);
  	this.skills = new Skills(skills)
    this.connections = connect;
  }
  printSkills () {
	 return this.skills.map(s => `\t* ${s.skill} - ${s.expLvl}\n`).join("");
  }
  printConnections () {
		let
    	result = [];
		for (let connection of Object.keys(this.connections)) {
    	result.push(`* ${connection}: ${this.connections[connection]}`)

    }
    return result.join("\n\t")
  }
}


class Caffeine {
	constructor (years) {
  	let
    	days = 365, cups = 2, caffeineMgOneCup = 95;

  	this.totalCups = years * days * cups;
    this.totalMgCaffeine = caffeineMgOneCup * this.totalCups;
  }
}

class Skills {
	constructor (itt) {
    let
      levels = ["Ninja", "Master", "Epic", "Destroyer", "Crusher", "Demigod", "Expert", "Boss", "Winning", "Serious"];

    let skills = [];
		for (let idx = 0; idx < itt.length; idx++) {
    	skills.push({
        skill: itt[idx],
        expLvl: levels[Math.floor(Math.random() * 10)]
      });
    }
    return skills
  }
}

class Ninja extends Developer {
	constructor(attributes) {
  	super(attributes)
  }
}
