const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlAPI: "https://playground.4geeks.com/contact/agendas/Miguel/contacts",
            agenda: [],
        },
        actions: {
            getAgenda: async () => {
                const store = getStore();
                try {
                    const response = await fetch(store.urlAPI);
                    if (!response.ok) {
                        throw new Error("Usuario no encontrado, creando nuevo usuario...");
                    }
                    const data = await response.json();
                    setStore({ agenda: data });
                } catch (error) {
                    console.error(error.message);
                    
                    await fetch(store.urlAPI, {
                        method: "POST",
                        body: JSON.stringify({ agenda_slug: "Miguel" }),
                        headers: { "Content-Type": "application/json" }
                    });
                    
                    const newResponse = await fetch(store.urlAPI);
                    const newData = await newResponse.json();
                    setStore({ agenda: newData });
                }
            },
            getNewContact: async (contact) => {
                const store = getStore();
                await fetch(store.urlAPI, {
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                });
                getActions().getAgenda();
            },
            editContact: async (contact, id) => {
                const store = getStore();
                await fetch(`${store.urlAPI}/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                });
                getActions().getAgenda();
            },
            removeContact: async (id) => {
                const store = getStore();
                await fetch(`${store.urlAPI}/${id}`, {
                    method: "DELETE",
                });
                getActions().getAgenda();
            },
        }
    };
};

export default getState;
