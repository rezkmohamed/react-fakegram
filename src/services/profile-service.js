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
        if(!data.proPic){
            data.proPic = DEFAULT_IMG;
        }
        return data;
    }

    return fetchProfileLoggedReq();
}

export const fetchProfileById = (idProfile) => {
    const token = localStorage.getItem('token');
    const fetchProfile = async () => {
        const response = await fetch(urlBase + idProfile, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        if(!data.proPic){
            data.proPic = DEFAULT_IMG;
        }

        return data;
    }

    const profile = fetchProfile();
    return profile;
}

export const fetchProfilesToSearchByName = (nameLike) => {
    const token = localStorage.getItem('token');
    const fetchProfiles = async () => {
        const response = await fetch(urlBase + 'search/' + nameLike, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
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


export const fetchProfilesLikeToPost = (idPost) => {
    const token = localStorage.getItem('token');
    const fetchProfiles = async () => {
        const response = await fetch(urlBase + "liked/" + idPost, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        for(let profile of data){
            if(!profile.proPic){
                profile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    return fetchProfiles();
}

export const fetchFollowersForProfile = (idProfile) => {
    const token = localStorage.getItem('token');
    const fetchProfiles = async () => {
        const response = await fetch(urlBase + "followers/" + idProfile, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        for(let profile of data){
            if(!profile.proPic){
                profile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    return fetchProfiles();
}

export const fetchFollowingForProfile = (idProfile) => {
    const token = localStorage.getItem('token');
    const fetchProfiles = async () => {
        const response = await fetch(urlBase + "following/" + idProfile, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        for(let profile of data){
            if(!profile.proPic){
                profile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    return fetchProfiles();
}

export const updateGeneralDataForProfile = (name, nickname, email, bio) => {
    const token = localStorage.getItem('token');
    const updateProfile = async () => {
        const response = await fetch(urlBase + "updatebasics" , {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                nickname,
                email,
                bio
            })
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }
    return updateProfile();
}

export const updatePasswordForProfile = (oldPassword, newPassword) => {
    const token = localStorage.getItem('token');
    const updatePassword = async () => {
        const response = await fetch(urlBase + oldPassword + "/newpass/" + newPassword, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return updatePassword();
}

export const updateProfilePic = (proPic) => {
    const token = localStorage.getItem('token');
    const updateProPic = async () => {
        const response = await fetch(urlBase + "newpropic", {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                proPic: proPic
            })
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return updateProPic();
}