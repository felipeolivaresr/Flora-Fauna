import { especies } from '../data/db.js'


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
    async getEspecies() {
        await delay(100) // simula el tiempo de respuesta de una pag real con apii
        return especies
    },

    async getEspecieById(id) {
        await delay(500)
        const especie = especies.find(e => e.id === parseInt(id))
        if (!especie) {
            throw new Error('Especie no encontrada')
        }
        return especie
    }
}