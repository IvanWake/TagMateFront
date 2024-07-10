// Layout
export const displayHeaderProfileHandler = () => {
        let profileInfo = document.querySelector('.profile-info');
        let profileHeader = document.querySelector('.profile-header');

        let offset = profileHeader.getBoundingClientRect().height * 2 - profileInfo.getBoundingClientRect().height;

        let namePosition = profileInfo.getBoundingClientRect().top + window.pageYOffset - offset;
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;
        let y = namePosition - scrollTop - windowHeight;

        if (y > 0 || -y > windowHeight) {
            profileHeader.classList.remove('hide');
            profileHeader.classList.add('display');
        } else {
            profileHeader.classList.remove('display');
            profileHeader.classList.add('hide');
        }
}