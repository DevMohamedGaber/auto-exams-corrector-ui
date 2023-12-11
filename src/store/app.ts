// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
import { School } from '@/Types/School'

export const useAppStore = defineStore('app', {
  state: () => ({
    username: 'mohamed',
    serverURL: '',
		schools: Array<School>
  }),
  actions: {
    isLoggedIn() : Boolean {
      return this.username != '';
    },

    // HTTP requests
    async Get(api:string, data = null) {
			let result = null;
      let url:string = this.serverURL.concat('/', api);
			if(data == null) {
				result = await axios.get(url)
			}
			else {
				result = await axios.get(url, {
					params: data
				})
			}
			return result;
		},
    async Post(api:string, data:Object) {
      let url:string = this.serverURL.concat('/', api);
			let result = await axios.post(url, data, {
				headers: {
					'accept': '*/*',
					'Content-Type': 'application/json'
				}
			});
			return result;
		},
  }
})
