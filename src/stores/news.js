import { defineStore } from 'pinia'
import api from '../api'

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        news: [],
        currentNews: null,
        achievements: [],
        currentAchievement: null
    }),
    actions: {
        async getNews() {
            const response = await api.get("/news");
            this.news = response.data.data;
        },
        async getCurrentNews(id) {
            const response = await api.get(`/news/${id}`);
            this.currentNews = response.data.data;
        },
        async getAchievements() {
            const response = await api.get("/achievements");
            this.achievements = response.data.data;
        },
        async getCurrentAchievement(id) {
            const response = await api.get(`/achievements/${id}`);
            this.currentAchievement = response.data.data;
        }
    }
})