const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlAPI: "",
			agenda: [],
		},
		actions: {
			getAgenda: async () => {
				const store = getStore();
				const response = await fetch(`${store.urlAPI}Miguel`);
				const data = await response.json(); 
				setStore({ agenda: data })
			},
			getNewContact: async (contact) => {
				const store = getStore();
				const newContact = await fetch(store.urlAPI, {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {"Content-Type": "application/json"}
				})
				getActions().getAgenda();
			},
			editContact: async (contact, id) => {
			
				const store = getStore();
				const editContact = await fetch(`${store.urlAPI}${id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {"Content-Type": "application/json"}
				})
				getActions().getAgenda();
			},
			removeContact: async (id) => {
				const store = getStore();
				const deleteContact = await fetch(`${store.urlAPI}${id}`, {
					method: "DELETE",
				})
				const actions = getActions();
				actions.getAgenda();
			},
		}
	};
};

export default getState;