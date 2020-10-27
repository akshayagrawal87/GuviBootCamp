//Type for status of request
type requestStatus = 'CREATED' | 'PROCESSED' | 'PAPERWORK COMPLETE' | 'COMPLETED'

//Interface for petRequest
interface petsInfo {

    species: string;
    breed: string;
    age: number;
    color: string;
    trained?: boolean;


}
//Interface for a new pet request
interface requestInfo {

    requestedPetList: string[];
    status?: requestStatus;
}

interface matchingData {

    species: string;
    availabilty: boolean;
}

//Class containingg information about pets in petshop
class AvailablePets {

    species: string | undefined;
    breed: string | undefined;
    age: number | undefined;
    color: string | undefined;
    trained: boolean | undefined;
    ownedEarlier: boolean | undefined;
    medicalCondition: string | undefined;
    allergicTo: string | undefined;
    preferredFood: string | undefined;

    availabilty: petsInfo[] = [];

    constructor() {

    }

    insertPet(petData: petsInfo) {
        this.availabilty.push(petData);
    }

    isAvailable(petdata: Object) {


    }

    countAll(): Object {

        let count = {}

        for (let i = 0; i < this.availabilty.length; i++) {

            count[this.availabilty[i].species] = count[this.availabilty[i].species] ? count[this.availabilty[i].species] + 1 : 1;

        }

        return count;

    }


}

//class containing information about all new request
class RequestPet {

    requests: requestInfo[] = [];

    constructor() { }

    newRequest(requestPet: requestInfo) {

        if (requestPet.status === null || requestPet.status === undefined)
            requestPet.status = 'CREATED';

        this.requests.push(requestPet);


    }

    checkStatusTopFive() {


        for (let i = 0; i < 5 && i < this.requests.length; i++)

            console.log(` For this request ${this.requests[i]} availablity Status is :  ${pet.isAvailable(this.requests[i])}`);

    }


    getAllRequest() {
        for (let i = 0; i < this.requests.length; i++)
            console.log(this.requests[i]);
    }



}

let pet = new AvailablePets();

pet.insertPet({

    species: 'dog',
    breed: 'labrador',
    age: 10,
    color: 'black',
    trained: true,


});

pet.insertPet({

    species: 'cat',
    breed: 'N/A',
    age: 2,
    color: 'black',
    trained: true,



})

let request = new RequestPet();
request.newRequest({
    requestedPetList: ['dog', 'cat', 'rabbit'],
    status: 'CREATED',
});


// request.getAllRequest();
//request.changeRequesStatus(0,'PROCESSED');
//request.getAllRequest();


//console.log(pet.countAll());

//Function to add table to Available pets button and call count all function.
function getPetsCount() {

    let table = document.createElement('table');
    table.classList.add('getPetsCount');
    table.classList.add('table');

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#'
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Pet Species';
    tr.appendChild(th2)

    let th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Number';
    tr.appendChild(th3);


    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let count = pet.countAll();

    for (let i = 0; i < pet.availabilty.length; i++) {

        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = `${i + 1}`;
        tr.appendChild(th);

        let td1 = document.createElement('td');
        td1.innerText = pet.availabilty[i].species;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText = count[pet.availabilty[i].species] + "";
        tr.appendChild(td2);
    }

    let availablePetDetail = document.querySelector('#availablePetDetail');
    if (document.querySelector('.getPetsCount') === undefined || document.querySelector('.getPetsCount') === null)
        availablePetDetail.appendChild(table);
    else
        availablePetDetail.removeChild(document.querySelector('.getPetsCount'));

}
//Function to add table to getPetDetails button and use stores data in avaliable pets class.
function getPetDetails() {

    let table = document.createElement('table');
    table.classList.add('getPetsDetails');
    table.classList.add('table');

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#'
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Species';
    tr.appendChild(th2)

    let th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Breed';
    tr.appendChild(th3);

    let th4 = document.createElement('th');
    th4.setAttribute('scope', 'col');
    th4.innerText = 'age';
    tr.appendChild(th4);

    let th5 = document.createElement('th');
    th5.setAttribute('scope', 'col');
    th5.innerText = 'color';
    tr.appendChild(th5);

    let th6 = document.createElement('th');
    th6.setAttribute('scope', 'col');
    th6.innerText = 'Trained';
    tr.appendChild(th6);



    let tbody = document.createElement('tbody');
    table.appendChild(tbody);


    for (let i = 0; i < pet.availabilty.length; i++) {

        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = `${i + 1}`;
        tr.appendChild(th);

        let td1 = document.createElement('td');
        td1.innerText = pet.availabilty[i].species;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText = pet.availabilty[i].breed;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerText = pet.availabilty[i].age + "";
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerText = pet.availabilty[i].color;
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.innerText = pet.availabilty[i].trained + "";
        tr.appendChild(td5);


    }

    let getPetDetail = document.querySelector('#getPetDetail');
    if (document.querySelector('.getPetsDetails') === undefined || document.querySelector('.getPetsDetails') === null)
        getPetDetail.appendChild(table);
    else
        getPetDetail.removeChild(document.querySelector('.getPetsDetails'));

}
//Function to see all the request stored in Request Pet class.
function adoptionRequest() {

    let table = document.createElement('table');
    table.classList.add('adoptionReqDetails');
    table.classList.add('table');

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#'
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Pets Requested';
    tr.appendChild(th2)

    let th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Request Status';
    tr.appendChild(th3)


    let tbody = document.createElement('tbody');
    table.appendChild(tbody);


    for (let i = 0; i < request.requests.length; i++) {

        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = `${i + 1}`;
        tr.appendChild(th);

        let td1 = document.createElement('td');
        td1.innerHTML = request.requests[i].requestedPetList.join(',');
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = request.requests[i].status;
        tr.appendChild(td2);

    }

    let adoptionDetail = document.querySelector('#adoptionRequestDetail');
    if (document.querySelector('.adoptionReqDetails') === undefined || document.querySelector('.adoptionReqDetails') === null)
        adoptionDetail.appendChild(table);
    else
        adoptionDetail.removeChild(document.querySelector('.adoptionReqDetails'));

}
//Function for adding new pet.
function addPet() {

    let form = document.createElement('form');
    form.classList.add('addNewPet');
    let formgroup1 = document.createElement('div');
    formgroup1.classList.add('form-group');
    form.appendChild(formgroup1);

    let label1 = document.createElement('label');
    label1.setAttribute('for', 'speciesInput');
    label1.innerText = 'Pet Species';
    formgroup1.appendChild(label1);

    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.classList.add('form-control');
    input1.setAttribute('id', 'speciesInput');
    input1.setAttribute('placeholder', 'Enter Species EX:DOG,CAT');
    input1.setAttribute('required', 'true');
    formgroup1.appendChild(input1);

    let formgroup2 = document.createElement('div');
    formgroup2.classList.add('form-group');
    form.appendChild(formgroup2);

    let label2 = document.createElement('label');
    label2.setAttribute('for', 'breedInput');
    label2.innerText = 'Pet Breed';
    formgroup2.appendChild(label2);

    let input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.classList.add('form-control');
    input2.setAttribute('id', 'breedInput');
    input2.setAttribute('placeholder', 'Enter breed');
    input2.setAttribute('required', 'true');
    formgroup2.appendChild(input2);

    let formgroup3 = document.createElement('div');
    formgroup3.classList.add('form-group');
    form.appendChild(formgroup3);

    let label3 = document.createElement('label');
    label3.setAttribute('for', 'ageInput');
    label3.innerText = 'Pet Age';
    formgroup3.appendChild(label3);

    let input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.classList.add('form-control');
    input3.setAttribute('id', 'ageInput');
    input3.setAttribute('placeholder', 'Enter age');
    input3.setAttribute('required', 'true');
    formgroup3.appendChild(input3);

    let formgroup4 = document.createElement('div');
    formgroup4.classList.add('form-group');
    form.appendChild(formgroup4);

    let label4 = document.createElement('label');
    label4.setAttribute('for', 'colorInput');
    label4.innerText = 'Pet Color';
    formgroup4.appendChild(label4);

    let input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.classList.add('form-control');
    input4.setAttribute('id', 'colorInput');
    input4.setAttribute('placeholder', 'Enter Pet Color');
    input4.setAttribute('required', 'true');
    formgroup4.appendChild(input4);

    let formgroup5 = document.createElement('div');
    formgroup5.classList.add('form-group');
    form.appendChild(formgroup5);

    let label5 = document.createElement('label');
    label5.setAttribute('for', 'trainedInput');
    label5.innerText = 'Pet Trained';
    formgroup5.appendChild(label5);

    let input5 = document.createElement('input');
    input5.setAttribute('type', 'text');
    input5.classList.add('form-control');
    input5.setAttribute('id', 'trainedInput');
    input5.setAttribute('placeholder', 'Enter If pet is trained');
    formgroup5.appendChild(input5);

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'mb-5', 'additonOfPet');
    button.innerText = 'Add Pet to Shop';
    form.appendChild(button);

    button.addEventListener('click', (e) => {
        e.preventDefault();

        let request: petsInfo = {

            species: input1.value,
            breed: input2.value,
            age: parseInt(input3.value),
            color: input4.value,
            trained: (input5.value === 'true')

        }

        pet.insertPet(request);

    })

    let addPet = document.querySelector('#addNewPet');
    if (document.querySelector('.addNewPet') === undefined || document.querySelector('.addNewPet') === null)
        addPet.appendChild(form);
    else
        addPet.removeChild(document.querySelector('.addNewPet'));

}
//Function to create new pet request
function addPetRequest() {

    let form = document.createElement('form');
    form.classList.add('addNewPetRequest');

    let formgroup1 = document.createElement('div');
    formgroup1.classList.add('form-group');
    form.appendChild(formgroup1);

    let label1 = document.createElement('label');
    label1.setAttribute('for', 'requestInput');
    label1.innerText = 'New Pet Request';
    formgroup1.appendChild(label1);

    let input1 = document.createElement('input');
    input1.setAttribute('value', '');
    input1.setAttribute('type', 'text');
    input1.classList.add('form-control');
    input1.setAttribute('id', 'requestInput');
    input1.setAttribute('placeholder', 'Enter Species EX:DOG CAT Rat[Space Seperated]');
    input1.setAttribute('required', 'true');
    formgroup1.appendChild(input1);


    let button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'mb-5', 'additonOfPet');
    button.innerText = 'Add Pet Request';
    form.appendChild(button);

    button.addEventListener('click', (e) => {

        e.preventDefault();


        let data: requestInfo = {

            requestedPetList: input1.value.split(' '),
            status: 'CREATED'

        }
        if (data.requestedPetList.length !== 0 || input1.value.split(' ') === undefined)
            request.newRequest(data);


    })

    let addPetRequest = document.querySelector('#addNewPetRequest');
    if (document.querySelector('.addNewPetRequest') === undefined || document.querySelector('.addNewPetRequest') === null)
        addPetRequest.appendChild(form);
    else
        addPetRequest.removeChild(document.querySelector('.addNewPetRequest'));


}

//Function to check if a given pet is avaliable
function isAvailable(avalibilty: petsInfo[], species: string): boolean {

    for (let i = 0; i < avalibilty.length; i++) {

        if (avalibilty[i].species === species) {
            return true;
        }
        return false;
    }

}

//Function to check,request array's avalibilty
function mapRequestToAvailablity(req: string[]): matchingData[] {

    let availablityArr = pet.availabilty;

    let resultData: matchingData[] = [];

    for (let a of req) {

        let temp: matchingData = {

            species: a,
            availabilty: isAvailable(availablityArr, a)

        }
        if (temp !== undefined)
            resultData.push(temp);
        console.log(temp);

    }
    return resultData;
}

//Function to  get All Request Availability
function getAllRequestAvailabilty() {

    let responseData = document.createElement('p');
    responseData.classList.add('responseData');

    let ele = document.querySelector('#requestAvaliable');


    for (let i = 0; i < request.requests.length; i++) {

        let temp = request.requests[i].requestedPetList;
        let data = mapRequestToAvailablity(temp)
        responseData.innerHTML += `------For Request No:${i + 1}-----<br/>`
        for (let j = 0; j < data.length; j++) {
            responseData.innerHTML += `Species:${data[j].species}&nbsp Availabe:${data[j].availabilty}<br/>`
        }
    }

    if (document.querySelector('.responseData') === undefined || document.querySelector('.responseData') === null)
        ele.appendChild(responseData);
    else
        ele.removeChild(document.querySelector('.responseData'));

}

//IIFE to add evennt listioners to buttons.
(() => {

    let availablePetDetails = document.querySelector('.availablePetDetails');
    availablePetDetails.addEventListener('click', (e) => {

        e.preventDefault();
        getPetsCount();

    })

    let getPetDetail = document.querySelector('.getPetDetails');
    getPetDetail.addEventListener('click', (e) => {

        e.preventDefault();
        getPetDetails();

    })

    let adoptionDetail = document.querySelector('.adoptionRequests');
    adoptionDetail.addEventListener('click', (e) => {

        e.preventDefault();
        adoptionRequest();

    })

    let newPet = document.querySelector('.addPet');
    newPet.addEventListener('click', (e) => {

        e.preventDefault();
        addPet();

    })

    let newPetRequest = document.querySelector('.addPetRequest');
    newPetRequest.addEventListener('click', (e) => {

        e.preventDefault();
        addPetRequest();

    })

    let RequestAva = document.querySelector('.petRequestAvailable');
    RequestAva.addEventListener('click', (e) => {

        e.preventDefault();
        getAllRequestAvailabilty();

    })

})();