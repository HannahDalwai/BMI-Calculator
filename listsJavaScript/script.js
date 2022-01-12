let countries = [
    {
        name: "China",
        continent: "Asia"
    },
    {
        name: "South Africa",
        continent: "Africa"

    },
    {
        name: "Chile",
        continent: "North America"

    },
    {
        name: "North Korea",
        continent: "Asia"

    },
    {
        name: "South Korea",
        continent: "Asia"

    }

];

function displayCountry(countries){
    document.getElementById("countries").innerHTML = "";

    countries.forEach((country, position) => {
        document.getElementById("countries").innerHTML += `
        
            <li>
                ${country.name} is in ${country.continent}
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" style"margin-left: 80px;">Update</button>
                <button class="btn btn-danger" onclick="deleteCountry(${position})">Delete</button>

                <div class="modal fade" id="exampleModal${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please enter country</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <input type="text" value="${country.name}" id="update-input-${position}">
                                 <select name="" id="update-continent-${position}">
                                    <option value="South America">South America</option>
                                    <option value="North America">North America</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Antartica">Antartica</option>
                                    <option value="Europe">Europe</option>
                               </select>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" onclick="updateCountry(${position})">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        `;
    });
}
displayCountry(countries);

// CREATE
function createCountry(){
       let country = document.querySelector("#addCountry").value;
       let continent = document.querySelector("#continent").value;

    try {
        if(!country)throw new Error("Please add country")
        countries.push({
            name:country,
            continent
         });
        displayCountry(countries);
    } catch (error) {
        alert(error)
    }
}

function deleteCountry(position){
    countries.splice(position, 1);
    displayCountry(countries);
}

function updateCountry(position){
    let country = document.querySelector(`#update-input-${position}`).value;
    let continent = document.querySelector(`#update-continent-${position}`).value;

    try {
        if(!country)throw new Error("Please add country when you update")
        countries[position] = {
            name:country,
            continent
         };
        displayCountry(countries);
    } catch (error) {
        alert(error)
    }
}