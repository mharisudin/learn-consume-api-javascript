const endpoint = 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'

const selectProvince = document.querySelector('#province')
const selectRegency = document.querySelector('#regencie')
const selectDistrict = document.querySelector('#district')
const selectVillage = document.querySelector('#village')

let dataProvince = []
const getProvince = async () => {
    try {
        const api = await fetch(endpoint)
        dataProvince = await api.json()
        console.log(dataProvince)
        showProvice(dataProvince)
    } catch (err) {
        console.log(err)
    }
}

const showProvice = (data) => {
    let result = data.map((item) => {
        return `<option value="${item.id}">${item.name}</option>`
    });
    selectProvince.innerHTML = result;
}

const getRegencies = async (provinceId) => {
    // change {provinceId} dengan ID provinsi yang dipilih
    const regencyEndpoint = `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`

    try {
        const api = await fetch(regencyEndpoint);
        const dataRegency = await api.json();
        showRegencies(dataRegency);
    } catch (err) {
        console.log(err);
    }
}

const showRegencies = (data) => {
    let result = data.map((item) => {
        return `<option value="${item.id}">${item.name}</option>`;
    });
    selectRegency.innerHTML = result;
}

const getDistrict = async (regencyId) => {
    const districtEndpoint = `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`

    try {
        const api = await fetch(districtEndpoint);
        const dataDistrict = await api.json();
        showDistrict(dataDistrict);
        console.log(dataDistrict)
    } catch (err) {
        console.log(err);
    }
}

const showDistrict = (data) => {
    let result = data.map((item) => {
        return `<option value="${item.id}">${item.name}</option>`;
    })
    selectDistrict.innerHTML = result;
}

const getVillage = async (districtId) => {
    const villageEndpoint = `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`

    try {
        const api = await fetch(villageEndpoint)
        const dataVillage = await api.json()
        console.log(dataVillage)
        showVillage(dataVillage)
    } catch (err) {
        console.log(err)
    }
}

const showVillage = (data) => {
    let result = data.map((item) => {
        return `<option value="${item.id}">${item.name}</option>`
    })
    selectVillage.innerHTML = result
}

// Tambahkan event listener untuk mengambil regencies ketika provinsi dipilih
selectProvince.addEventListener('change', () => {
    const selectedProvinceId = selectProvince.value;
    console.log(selectedProvinceId)
    getRegencies(selectedProvinceId);
});

selectRegency.addEventListener('change', () => {
    const selectedDistrictId = selectRegency.value;
    console.log(selectedDistrictId)
    getDistrict(selectedDistrictId);
})

selectDistrict.addEventListener('change', () => {
    const selectedVillageId = selectDistrict.value;
    console.log(selectedVillageId)
    getVillage(selectedVillageId)
})

getProvince();
