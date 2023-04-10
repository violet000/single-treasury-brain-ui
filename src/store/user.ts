import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id 必须填写，并且要是唯一
    state: () => {
        return {
            name: '紫金技术'
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        }
    }
})
