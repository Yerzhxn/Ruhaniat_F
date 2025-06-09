import { defineStore } from 'pinia'
import api from '../api'

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    news: [],
    currentNews: null,
    achievements: [],
    currentAchievement: null,
    youTubes: [],
    tables: {
      table1: [],
      table2: [],
      table3: [],
      table4: []
    },
    dirs: [],
    jumyss: [],
    currentDir: null,
    currentYouTube: null,
    partners: [],
    banners: []
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
    },async fetchLast3News() {
    try {
        const response = await api.get('/news', {
        params: {
            sort: 'createdAt:desc',
            'pagination[page]': 1,
            'pagination[pageSize]': 3,
            populate: '*',
        }
        });
        this.news = response.data.data;
    } catch (error) {
        console.error('Ошибка при загрузке последних 3 новостей:', error);
    }
    },

    async fetchAllPages(endpoint, pageSize = 10) {
        let page = 1;
        let allData = [];
        while (true) {
            try {
            const response = await api.get(endpoint, {
                params: {
                'pagination[page]': page,
                'pagination[pageSize]': pageSize,
                populate: '*',
                }
            });
            const data = response.data.data || [];
            allData = allData.concat(data);
            const meta = response.data.meta || {};
            if (meta.pagination && meta.pagination.page >= meta.pagination.pageCount) break;
            page++;
            } catch (error) {
            console.error(`Ошибка загрузки страницы ${page} для ${endpoint}:`, error);
            break;
            }
        }
        return allData;
        },

    // Универсальная загрузка всех данных по типу
    async loadAll(type) {
        switch (type) {
            case 'news':
            this.news = await this.fetchAllPages('/news');
            break;
            case 'achievements':
            this.achievements = await this.fetchAllPages('/achievements');
            break;
            case 'youtubes':
            this.youTubes = await this.fetchAllPages('/youtubes');
            break;
        }
    },

    // Специфичные методы снаружи для удобства (если надо)
    async getNews() {
        await this.fetchData('/news', 'news');
    },
    async getCurrentNews(id) {
        await this.fetchSingleItem('/news', 'currentNews', id);
    },
    async getAchievements() {
        await this.fetchData('/achievements', 'achievements');
    },
    async getCurrentAchievement(id) {
        await this.fetchSingleItem('/achievements', 'currentAchievement', id);
    },
    async getYouTubes() {
        await this.fetchData('/youtubes', 'youTubes');
    },
    async getDirs() {
        await this.fetchData('/dirs', 'dirs');
    },
    async getCurrentDir(id) {
        await this.fetchSingleItem('/dirs', 'currentDir', id);
    },
    async getJumyss() {
        await this.fetchData('/jumyss', 'jumyss');
    },
    async getTable(tableNumber) {
        const response = await api.get(`/table${tableNumber}s`);
        this.tables[`table${tableNumber}`] = response.data.data;
    },
    async getPartners() {
        await this.fetchData('/partners', 'partners');
    },
    async getBanners() {
        await this.fetchData('/banners', 'banners');
    },
  }
})
