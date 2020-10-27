//Class containingg information about pets in petshop
var AvailablePets = /** @class */ (function () {
    function AvailablePets() {
        this.availabilty = [];
    }
    AvailablePets.prototype.insertPet = function (petData) {
        this.availabilty.push(petData);
    };
    AvailablePets.prototype.isAvailable = function (petdata) {
    };
    AvailablePets.prototype.countAll = function () {
        var count = {};
        for (var i = 0; i < this.availabilty.length; i++) {
            count[this.availabilty[i].species] = count[this.availabilty[i].species] ? count[this.availabilty[i].species] + 1 : 1;
        }
        return count;
    };
    return AvailablePets;
}());
//class containing information about all new request
var RequestPet = /** @class */ (function () {
    function RequestPet() {
        this.requests = [];
    }
    RequestPet.prototype.newRequest = function (requestPet) {
        if (requestPet.status === null || requestPet.status === undefined)
            requestPet.status = 'CREATED';
        this.requests.push(requestPet);
    };
    RequestPet.prototype.checkStatusTopFive = function () {
        for (var i = 0; i < 5 && i < this.requests.length; i++)
            console.log(" For this request " + this.requests[i] + " availablity Status is :  " + pet.isAvailable(this.requests[i]));
    };
    RequestPet.prototype.getAllRequest = function () {
        for (var i = 0; i < this.requests.length; i++)
            console.log(this.requests[i]);
    };
    return RequestPet;
}());
var pet = new AvailablePets();
pet.insertPet({
    species: 'dog',
    breed: 'labrador',
    age: 10,
    color: 'black',
    trained: true
});
pet.insertPet({
    species: 'cat',
    breed: 'N/A',
    age: 2,
    color: 'black',
    trained: true
});
var request = new RequestPet();
request.newRequest({
    requestedPetList: ['dog', 'cat', 'rabbit'],
    status: 'CREATED'
});
// request.getAllRequest();
//request.changeRequesStatus(0,'PROCESSED');
//request.getAllRequest();
//console.log(pet.countAll());
//Function to add table to Available pets button and call count all function.
function getPetsCount() {
    var table = document.createElement('table');
    table.classList.add('getPetsCount');
    table.classList.add('table');
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    var th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#';
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Pet Species';
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Number';
    tr.appendChild(th3);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var count = pet.countAll();
    for (var i = 0; i < pet.availabilty.length; i++) {
        var tr_1 = document.createElement('tr');
        tbody.appendChild(tr_1);
        var th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = "" + (i + 1);
        tr_1.appendChild(th);
        var td1 = document.createElement('td');
        td1.innerText = pet.availabilty[i].species;
        tr_1.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerText = count[pet.availabilty[i].species] + "";
        tr_1.appendChild(td2);
    }
    var availablePetDetail = document.querySelector('#availablePetDetail');
    if (document.querySelector('.getPetsCount') === undefined || document.querySelector('.getPetsCount') === null)
        availablePetDetail.appendChild(table);
    else
        availablePetDetail.removeChild(document.querySelector('.getPetsCount'));
}
//Function to add table to getPetDetails button and use stores data in avaliable pets class.
function getPetDetails() {
    var table = document.createElement('table');
    table.classList.add('getPetsDetails');
    table.classList.add('table');
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    var th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#';
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Species';
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Breed';
    tr.appendChild(th3);
    var th4 = document.createElement('th');
    th4.setAttribute('scope', 'col');
    th4.innerText = 'age';
    tr.appendChild(th4);
    var th5 = document.createElement('th');
    th5.setAttribute('scope', 'col');
    th5.innerText = 'color';
    tr.appendChild(th5);
    var th6 = document.createElement('th');
    th6.setAttribute('scope', 'col');
    th6.innerText = 'Trained';
    tr.appendChild(th6);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (var i = 0; i < pet.availabilty.length; i++) {
        var tr_2 = document.createElement('tr');
        tbody.appendChild(tr_2);
        var th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = "" + (i + 1);
        tr_2.appendChild(th);
        var td1 = document.createElement('td');
        td1.innerText = pet.availabilty[i].species;
        tr_2.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerText = pet.availabilty[i].breed;
        tr_2.appendChild(td2);
        var td3 = document.createElement('td');
        td3.innerText = pet.availabilty[i].age + "";
        tr_2.appendChild(td3);
        var td4 = document.createElement('td');
        td4.innerText = pet.availabilty[i].color;
        tr_2.appendChild(td4);
        var td5 = document.createElement('td');
        td5.innerText = pet.availabilty[i].trained + "";
        tr_2.appendChild(td5);
    }
    var getPetDetail = document.querySelector('#getPetDetail');
    if (document.querySelector('.getPetsDetails') === undefined || document.querySelector('.getPetsDetails') === null)
        getPetDetail.appendChild(table);
    else
        getPetDetail.removeChild(document.querySelector('.getPetsDetails'));
}
//Function to see all the request stored in Request Pet class.
function adoptionRequest() {
    var table = document.createElement('table');
    table.classList.add('adoptionReqDetails');
    table.classList.add('table');
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    var th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerText = '#';
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Pets Requested';
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Request Status';
    tr.appendChild(th3);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (var i = 0; i < request.requests.length; i++) {
        var tr_3 = document.createElement('tr');
        tbody.appendChild(tr_3);
        var th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = "" + (i + 1);
        tr_3.appendChild(th);
        var td1 = document.createElement('td');
        td1.innerHTML = request.requests[i].requestedPetList.join(',');
        tr_3.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerHTML = request.requests[i].status;
        tr_3.appendChild(td2);
    }
    var adoptionDetail = document.querySelector('#adoptionRequestDetail');
    if (document.querySelector('.adoptionReqDetails') === undefined || document.querySelector('.adoptionReqDetails') === null)
        adoptionDetail.appendChild(table);
    else
        adoptionDetail.removeChild(document.querySelector('.adoptionReqDetails'));
}
//Function for adding new pet.
function addPet() {
    var form = document.createElement('form');
    form.classList.add('addNewPet');
    var formgroup1 = document.createElement('div');
    formgroup1.classList.add('form-group');
    form.appendChild(formgroup1);
    var label1 = document.createElement('label');
    label1.setAttribute('for', 'speciesInput');
    label1.innerText = 'Pet Species';
    formgroup1.appendChild(label1);
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.classList.add('form-control');
    input1.setAttribute('id', 'speciesInput');
    input1.setAttribute('placeholder', 'Enter Species EX:DOG,CAT');
    input1.setAttribute('required', 'true');
    formgroup1.appendChild(input1);
    var formgroup2 = document.createElement('div');
    formgroup2.classList.add('form-group');
    form.appendChild(formgroup2);
    var label2 = document.createElement('label');
    label2.setAttribute('for', 'breedInput');
    label2.innerText = 'Pet Breed';
    formgroup2.appendChild(label2);
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.classList.add('form-control');
    input2.setAttribute('id', 'breedInput');
    input2.setAttribute('placeholder', 'Enter breed');
    input2.setAttribute('required', 'true');
    formgroup2.appendChild(input2);
    var formgroup3 = document.createElement('div');
    formgroup3.classList.add('form-group');
    form.appendChild(formgroup3);
    var label3 = document.createElement('label');
    label3.setAttribute('for', 'ageInput');
    label3.innerText = 'Pet Age';
    formgroup3.appendChild(label3);
    var input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.classList.add('form-control');
    input3.setAttribute('id', 'ageInput');
    input3.setAttribute('placeholder', 'Enter age');
    input3.setAttribute('required', 'true');
    formgroup3.appendChild(input3);
    var formgroup4 = document.createElement('div');
    formgroup4.classList.add('form-group');
    form.appendChild(formgroup4);
    var label4 = document.createElement('label');
    label4.setAttribute('for', 'colorInput');
    label4.innerText = 'Pet Color';
    formgroup4.appendChild(label4);
    var input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.classList.add('form-control');
    input4.setAttribute('id', 'colorInput');
    input4.setAttribute('placeholder', 'Enter Pet Color');
    input4.setAttribute('required', 'true');
    formgroup4.appendChild(input4);
    var formgroup5 = document.createElement('div');
    formgroup5.classList.add('form-group');
    form.appendChild(formgroup5);
    var label5 = document.createElement('label');
    label5.setAttribute('for', 'trainedInput');
    label5.innerText = 'Pet Trained';
    formgroup5.appendChild(label5);
    var input5 = document.createElement('input');
    input5.setAttribute('type', 'text');
    input5.classList.add('form-control');
    input5.setAttribute('id', 'trainedInput');
    input5.setAttribute('placeholder', 'Enter If pet is trained');
    formgroup5.appendChild(input5);
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'mb-5', 'additonOfPet');
    button.innerText = 'Add Pet to Shop';
    form.appendChild(button);
    button.addEventListener('click', function (e) {
        //e.preventDefault();
        var request = {
            species: input1.value,
            breed: input2.value,
            age: parseInt(input3.value),
            color: input4.value,
            trained: (input5.value === 'true')
        };
        pet.insertPet(request);
    });
    var addPet = document.querySelector('#addNewPet');
    if (document.querySelector('.addNewPet') === undefined || document.querySelector('.addNewPet') === null)
        addPet.appendChild(form);
    else
        addPet.removeChild(document.querySelector('.addNewPet'));
}
//Function to create new pet request
function addPetRequest() {
    var form = document.createElement('form');
    form.classList.add('addNewPetRequest');
    var formgroup1 = document.createElement('div');
    formgroup1.classList.add('form-group');
    form.appendChild(formgroup1);
    var label1 = document.createElement('label');
    label1.setAttribute('for', 'requestInput');
    label1.innerText = 'New Pet Request';
    formgroup1.appendChild(label1);
    var input1 = document.createElement('input');
    input1.setAttribute('value', '');
    input1.setAttribute('type', 'text');
    input1.classList.add('form-control');
    input1.setAttribute('id', 'requestInput');
    input1.setAttribute('placeholder', 'Enter Species EX:DOG CAT Rat[Space Seperated]');
    input1.setAttribute('required', 'true');
    formgroup1.appendChild(input1);
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'mb-5', 'additonOfPet');
    button.innerText = 'Add Pet Request';
    form.appendChild(button);
    button.addEventListener('click', function (e) {
        e.preventDefault();
        form.checkValidity();
        var data = {
            requestedPetList: input1.value.split(' '),
            status: 'CREATED'
        };
        if (data.requestedPetList.length !== 0)
            request.newRequest(data);
    });
    var addPetRequest = document.querySelector('#addNewPetRequest');
    if (document.querySelector('.addNewPetRequest') === undefined || document.querySelector('.addNewPetRequest') === null)
        addPetRequest.appendChild(form);
    else
        addPetRequest.removeChild(document.querySelector('.addNewPetRequest'));
}
//Function to check if a given pet is avaliable
function isAvailable(avalibilty, species) {
    for (var i = 0; i < avalibilty.length; i++) {
        if (avalibilty[i].species === species) {
            return true;
        }
        return false;
    }
}
//Function to check,request array's avalibilty
function mapRequestToAvailablity(req) {
    var availablityArr = pet.availabilty;
    var resultData = [];
    for (var _i = 0, req_1 = req; _i < req_1.length; _i++) {
        var a = req_1[_i];
        var temp = {
            species: a,
            availabilty: isAvailable(availablityArr, a)
        };
        if (temp !== undefined)
            resultData.push(temp);
        console.log(temp);
    }
    return resultData;
}
//Function to  get All Request Availability
function getAllRequestAvailabilty() {
    var responseData = document.createElement('p');
    responseData.classList.add('responseData');
    var ele = document.querySelector('#requestAvaliable');
    for (var i = 0; i < request.requests.length; i++) {
        var temp = request.requests[i].requestedPetList;
        var data = mapRequestToAvailablity(temp);
        responseData.innerHTML += "------For Request No:" + (i + 1) + "-----<br/>";
        for (var j = 0; j < data.length; j++) {
            responseData.innerHTML += "Species:" + data[j].species + "&nbsp Availabe:" + data[j].availabilty + "<br/>";
        }
    }
    if (document.querySelector('.responseData') === undefined || document.querySelector('.responseData') === null)
        ele.appendChild(responseData);
    else
        ele.removeChild(document.querySelector('.responseData'));
}
//IIFE to add evennt listioners to buttons.
(function () {
    var availablePetDetails = document.querySelector('.availablePetDetails');
    availablePetDetails.addEventListener('click', function (e) {
        e.preventDefault();
        getPetsCount();
    });
    var getPetDetail = document.querySelector('.getPetDetails');
    getPetDetail.addEventListener('click', function (e) {
        e.preventDefault();
        getPetDetails();
    });
    var adoptionDetail = document.querySelector('.adoptionRequests');
    adoptionDetail.addEventListener('click', function (e) {
        e.preventDefault();
        adoptionRequest();
    });
    var newPet = document.querySelector('.addPet');
    newPet.addEventListener('click', function (e) {
        e.preventDefault();
        addPet();
    });
    var newPetRequest = document.querySelector('.addPetRequest');
    newPetRequest.addEventListener('click', function (e) {
        e.preventDefault();
        addPetRequest();
    });
    var RequestAva = document.querySelector('.petRequestAvailable');
    RequestAva.addEventListener('click', function (e) {
        e.preventDefault();
        getAllRequestAvailabilty();
    });
})();
