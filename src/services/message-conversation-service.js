const urlBase = "http://localhost:8080/conversations/";

const DEFAULT_IMG = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999";



export const fetchConversationsForProfile = () => {
    const token = localStorage.getItem('token');
    const fetchConversation = async () => {
        const response = await fetch(urlBase, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        for(let conversation of data){
            if(!conversation.firstProfile.proPic){
                conversation.firstProfile.proPic = DEFAULT_IMG;
            }
            if(!conversation.secondProfile.proPic){
                conversation.secondProfile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    return fetchConversation();
}