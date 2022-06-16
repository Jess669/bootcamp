// MODEL

const loadProfile = (selector, name) => {
    fetch(`https://avatars.dicebear.com/api/avataaars/${name}.svg`)
    .then((data) => selector.src = data.url)
    .catch((err) => console.log(err));
}













// VIEW
profile1 = document.querySelector('#profile1');
profile2 = document.querySelector('#profile2');
profile3 = document.querySelector('#profile3');
profile4 = document.querySelector('#profile4');
loadProfile(profile1, '5');
loadProfile(profile2, 'sandra');
loadProfile(profile3, '222');
loadProfile(profile4, '1');

















// CONTROLLER


