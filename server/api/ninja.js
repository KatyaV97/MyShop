export default defineEventHandler(async (event) => {
/*    const {name} = getQuery(event)

    const {age} = await readBody(event)*/

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_tgtJhz3cpLlLoKNuZruHVFayOzpxpsOxkN3EUVCa')
    return {
        message: data
    }
})