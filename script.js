class Student {
    constructor(params) {
       this.fullName = params.fullName;
       this.university = params.university;
       this.course = params.course;
       this.photoUrl = params.photoUrl;
       this.birthDate = params.birthDate;
    }
    get birthDateStr() {
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        return `${this.birthDate.getDate()} ${months[this.birthDate.getMonth()]}`;
    }
    get age() {
    const now = +new Date();
    let year = Math.floor((now - (+this.birthDate))/31536000000);
    return year;
    }
}
const studentArr = [
   {
       fullName: 'Миша Иванов',
       university: 'НГУ',
       course: 2,
       birthDate: new Date(2000, 6, 10),
       photoUrl: 'img/ava01.jpg'
   },

   {
       fullName: 'Аня Иванова',
       university: 'НГУ',
       course: 4,
       birthDate: new Date(2000, 0, 1),
       photoUrl: 'img/ava02.jpg'
   },
      {
       fullName: 'Андрей Петров',
       university: 'НГУ',
       course: 2,
       birthDate: new Date(2000, 6, 1),
       photoUrl: 'img/ava03.jpg'
   },
   {
       fullName: 'Катя Иванова',
       university: 'НГУ',
       course: 1,
       birthDate: new Date(2001, 6, 9),
       photoUrl: 'img/ava04.jpg'
   },
   {
       fullName: 'Настя Иванова',
       university: 'НГУ',
       course: 2,
       birthDate: new Date(2007, 6, 5),
       photoUrl: 'img/ava05.jpg'
   },
   {
       fullName: 'Саша Петров',
       university: 'НГУ',
       course: 3,
       birthDate: new Date(2002, 6, 10),
       photoUrl: 'img/ava06.jpg'
   }
];

function appendStudentBlock(student){
		let div = document.createElement("div");
		div.setAttribute("class","block");
		let img = document.createElement("img");
		img.src = student.photoUrl;
		img.setAttribute("class","photoblock");
		div.append(img);
		let p = document.createElement('p');
		p.innerHTML = student.fullName;
		p.setAttribute("class","title");
		div.append(p);
		let span = document.createElement("span");
		span.innerHTML = student.university + ", " + student.course +" курс" ;
		div.append(span);
		document.body.append(div);
		return div
}

const openCard = (student, currentTarget) =>  {
    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    let button = document.createElement('div');
    button.setAttribute("class","button")
    let img = document.createElement("img");
	img.src = "img/close_button.png";
	button.append(img);
	div.append(button);
    button.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove();
        event.stopPropagation();
    });
    let card_info = document.createElement('div');
    card_info.setAttribute("class","card_info");
    let p = document.createElement('p');
	p.innerHTML = student.fullName;
	p.setAttribute("class","name")
	let table = document.createElement("table");
	table.setAttribute('class', 'table');
	let tr1 = document.createElement('tr');
	let tr2 = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	let td3 = document.createElement('td');
	let td4 = document.createElement('td');
	table.append(tr1);
	table.append(tr2);
	tr1.append(td1);
	tr1.append(td2);
	tr2.append(td3);
	tr2.append(td4);
	td1.innerHTML = "День рождения";
	td2.innerHTML = student.birthDateStr + ", " + student.age + " лет";
	td3.innerHTML = "Учится";
	td4.innerHTML = student.university + ", " + student.course + " курс";
	td1.setAttribute("class", "first");
	td2.setAttribute("class", "second");
	td3.setAttribute("class", "first");
	td4.setAttribute("class", "second");
	card_info.append(p);
	card_info.append(table);
	div.append(card_info);
    let photoElement = document.createElement('img');
    photoElement.setAttribute('src', student.photoUrl);
    photoElement.setAttribute('class', 'photocard');
    div.append(photoElement);
    currentTarget.append(div);

}

studentArr.forEach((item) => {
    const student = new Student(item);
    const studentBlock = appendStudentBlock(student);
   	studentBlock.addEventListener('click', (event) => {
        openCard(student, event.currentTarget);
     });
});
