import { toyService } from '../services/toy-service.js';

export default {
    state: {
        toys: null,
        filterBy: null
    },
    getters: {
        toys({ toys }) {
            return toys;
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId);
            state.toys.splice(idx, 1);
        },
        saveToy(state, { toy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === toy._id);
            if (idx !== -1) state.toys.splice(idx, 1, toy);
            else state.toys.push(toy);
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        }
    },
    actions: {
        loadToys({ state, commit }) {
            return toyService.query(state.filterBy)
                .then(toys => {
                    console.log(toys)
                    commit({ type: 'setToys', toys })
                })
        },
        removeToy({ commit }, { toyId }) {
            return toyService.remove(toyId)
                .then(() => commit({ type: 'removeToy', toyId }))
        },
        saveToy({ commit }, { toy }) {
            return toyService.save(toy)
                .then(toy => commit({ type: 'saveToy', toy }))
        },
        filter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy });
            dispatch('loadToys');
        }
    },
}
