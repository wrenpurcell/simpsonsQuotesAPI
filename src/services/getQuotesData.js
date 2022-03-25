import axios from 'axios'

export const getQuotesData = async () => {
    const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=24')
    return response
}

