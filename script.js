var birthdays = [
    {
        "name": "Tyrion Lannister",
        "birthday": "12/02/1978"
    }, {
        "name": "Cersei Lannister",
        "birthday": "11/30/1975"
    }, {
        "name": "Daenerys Targaryen",
        "birthday": "11/24/1991"
    }, {
        "name": "Arya Stark",
        "birthday": "11/25/1996"
    }, {
        "name": "Jon Snow",
        "birthday": "12/03/1989"
    }, {
        "name": "Sansa Stark",
        "birthday": "15/08/1992"
    }, {
        "name": "Jorah Mormont",
        "birthday": "12/16/1968"
    }, {
        "name": "Jaime Lannister",
        "birthday": "12/06/1975"
    }, {
        "name": "Sandor Clegane",
        "birthday": "11/07/1969"
    }, {
        "name": "Tywin Lannister",
        "birthday": "10/12/1951"
    }, {
        "name": "Theon Greyjoy",
        "birthday": "12/31/1989"
    }, {
        "name": "Samwell Tarly",
        "birthday": "12/07/1990"
    }, {
        "name": "Joffrey Baratheon",
        "birthday": "06/12/1992"
    }, {
        "name": "Catelyn Stark",
        "birthday": "12/03/1962"
    }, {
        "name": "Bran Stark",
        "birthday": "12/02/1995"
    }, {
        "name": "Petyr Baelish",
        "birthday": "11/20/1974"
    }, {
        "name": "Robb Stark",
        "birthday": "11/28/1986"
    }, {
        "name": "Brienne of Tarth",
        "birthday": "11/27/1985"
    }, {
        "name": "Margaery Tyrell",
        "birthday": "12/02/1989"
    }, {
        "name": "Stannis Baratheon",
        "birthday": "09/14/1971"
    }, {
        "name": "Davos Seaworth",
        "birthday": "02/13/1973"
    }, {
        "name": "Tormund Giantsbane",
        "birthday": "12/14/1974"
    }, {
        "name": "Jeor Mormont",
        "birthday": "11/01/1955"
    }, {
        "name": "Eddard Stark",
        "birthday": "12/02/1963"
    }, {
        "name": "Khal Drogo",
        "birthday": "12/05/1980"
    }, {
        "name": "Ramsay Bolton",
        "birthday": "12/05/1976"
    }, {
        "name": "Robert Baratheon",
        "birthday": "12/02/1965"
    }, {
        "name": "Daario Naharis",
        "birthday": "12/02/1985"
    }, {
        "name": "Viserys Targaryen",
        "birthday": "12/06/1984"
    }
]

function htmlElements() {
    document.getElementById("json-textarea").defaultValue = JSON.stringify(birthdays);
    document.getElementById('year').value = 2020;
    update(2020, JSON.stringify(birthdays))
}

function update(year, dates) {

    var elements = document.getElementsByClassName("name");
    if (elements.length > 0) {
        for (var i = elements.length - 1; i > -1; i--) {
            elements[i].remove()
        }
    }

    var birthdayArray = JSON.parse(dates);

    var sunday = [], monday = [], tuesday = [], wednesday = [], thursday = [], friday = [], saturday = []
    var updatedBirthdays = birthdayArray.map(item => {
        const container = {}
        var d = new Date(item.birthday)
        d.setFullYear(year)
        container.name = item.name
        container.birthday = d
        return container;
    })

    for (i = 0; i < updatedBirthdays.length; i++) {
        switch (updatedBirthdays[i].birthday.getDay()) {
            case 0:
                sunday.push(updatedBirthdays[i]);
                break;
            case 1:
                monday.push(updatedBirthdays[i]);
                break;
            case 2:
                tuesday.push(updatedBirthdays[i]);
                break;
            case 3:
                wednesday.push(updatedBirthdays[i]);
                break;
            case 4:
                thursday.push(updatedBirthdays[i]);
                break;
            case 5:
                friday.push(updatedBirthdays[i]);
                break;
            case 6:
                saturday.push(updatedBirthdays[i]);
                break;
        }

    }

    var s = 0;

    for (s = 0; s < 7; s++) {

        switch (s) {
            case 0:
                createElements(sunday, 'sunday')
                break;
            case 1:
                createElements(monday, 'monday')
                break;
            case 2:
                createElements(tuesday, 'tuesday')
                break;
            case 3:
                createElements(wednesday, 'wednesday')
                break;
            case 4:
                createElements(thursday, 'thursday')
                break;
            case 5:
                createElements(friday, 'friday')
                break;
            case 6:
                createElements(saturday, 'saturday');
                break;
        }
    }
}

function createElements(weekDay, classText) {
    var j = 0, i = -1;
    for (j = 0; j < weekDay.length; j++) {
        i = i + 1;
        if(i > 11){
            i = 0
        }
        var str = weekDay[j].name,
            div = document.createElement('div');

        var matches = str.match(/\b(\w)/g);
        var acronym = matches.join('');
        var columnClass, columnDisplay;
        if (weekDay.length === 1) {
            columnClass = "col-md-12";
            columnDisplay = "one"
        } else if (weekDay.length > 1 && weekDay.length <= 4) {
            columnClass = "col-md-6";
            columnDisplay = "four"
        } else {
            columnClass = "col-md-4"
            columnDisplay = "more"
        }
        div.classList.add(columnClass, columnDisplay, "name", "color" + i);
        div.innerHTML = acronym;

        var body = document.getElementsByClassName(classText)[0];
        body.appendChild(div);
    }

}