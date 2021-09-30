const urlBase = 'http://localhost:8080/profiles/';

export const fetchProfileById = (idProfile) => {
    const fetchProfile = async () => {
        const response = await fetch(urlBase + idProfile);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    }

    const profile = fetchProfile();
    return profile;
}