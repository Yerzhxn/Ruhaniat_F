import { defineStore } from 'pinia'
import api from '../api'

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        news: [],
        currentNews: null,
        achievements: [], 
        currentAchievement: null,
        youTubes: [],
        table1s: [],
        table2s: [],
        table3s: [],
        table4s: [],
        dirs: [],
        jumyss: [],
        currentDir: null,
        currentYouTube: null
    }),
    actions: {
        async fetchData(endpoint, stateKey) {
            try {
                const response = await api.get(endpoint);
                this[stateKey] = response.data.data;
            } catch (error) {
                console.error(`Error fetching ${endpoint}:`, error);
                throw error;
            }
        },

        async fetchSingleItem(endpoint, stateKey, id) {
            try {
                const response = await api.get(`${endpoint}/${id}`);
                this[stateKey] = response.data.data;
            } catch (error) {
                console.error(`Error fetching ${endpoint}/${id}:`, error);
                throw error;
            }
        },

        // News
        async getNews() {
            await this.fetchData('/news', 'news');
        },

        async getCurrentNews(id) {
            await this.fetchSingleItem('/news', 'currentNews', id);
        },

        // Achievements
        async getAchievements() {
            await this.fetchData('/achievements', 'achievements');
        },

        async getCurrentAchievement(id) {
            await this.fetchSingleItem('/achievements', 'currentAchievement', id);
        },

        // YouTube
        async getYouTubes() {
            const response = await api.get("/youtubes");
            this.youTubes = response.data.data;
        }
        ,
        async getTable1() {
            const response = await api.get("/table1s");
            this.table1s = response.data.data;
        },
        async getTable2() {
            const response = await api.get("/table2s");
            this.table2s = response.data.data;
        }
        ,
        async getTable3() {
            const response = await api.get("/table3s");
            this.table3s = response.data.data;
        },
        async getTable4() {
            const response = await api.get("/table4s");
            this.table4s = response.data.data;
        }
        ,
        async getDirs() {
            const response = await api.get("/dirs");
            this.dirs = response.data.data;
        },
        async getCurrentDir(id) {
            const response = await api.get(`/dirs/${id}`);
            this.currentDir = response.data.data;
        },
        async getJumyss() {
            const response = await api.get("/jumyss");
            this.jumyss = response.data.data;
        },
    }
})
