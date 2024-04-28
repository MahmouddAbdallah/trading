export function setExpirationTime() {
    const now = new Date();
    const futureTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    const expirationTime = localStorage.getItem('expirationTime');
    if (!expirationTime) {
        localStorage.setItem('expirationTime', futureTime.getTime());
    }
}

export function checkExpiration() {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime > parseInt(expirationTime)) {
            localStorage.clear();
            window.location.reload();
        }
    }
}