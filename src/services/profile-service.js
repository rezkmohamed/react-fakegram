const urlBase = 'http://localhost:8080/profiles/';

const DEFAULT_IMG = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999";


export const fetchProfileLogged = () => {
    const token = localStorage.getItem('token');
    const fetchProfileLoggedReq = async () => {
        const response = await fetch(urlBase + "logged", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    }

    return fetchProfileLoggedReq();
}

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

export const fetchProfilesToSearchByName = (nameLike) => {
    const fetchProfiles = async () => {
        const response = await fetch(urlBase + 'search/' + nameLike);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        console.log(data);

        for(let profile of data){
            if(!profile.proPic){
                profile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    const profiles = fetchProfiles();
    return profiles;
}