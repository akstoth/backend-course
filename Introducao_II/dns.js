// Importando o módulo dns
// O dns é o módulo que permite fazer pesquisas de DNS, domain name server
const dns = require('node:dns')

/*
// O método resolve4() é utilizado para fazer pesquisas de DNS do tipo A, que retorna um array de endereços IPv4
dns.resolve4(searchUrl, (error, addresses) => {
    if(error) {
        console.error('URL não encontrada: ', error)
        return
    }
    // Exibindo os endereços IP
    console.log(addresses)
})
*/
// Utilizando o método resolve4() com promises
async function bootsrap(){
    const searchUrl = 'google.com'
    console.time('Pesquisando url por DNS padrão')	

    // O método resolve4() é utilizado para fazer pesquisas de DNS do tipo A, que retorna um array de endereços IPv4
    const addresses = await dns.promises.resolve4(searchUrl)
    console.timeEnd('Pesquisando url por DNS padrão')	
    console.log(addresses)

    // O método resolveNs() é utilizado para fazer pesquisas de DNS do tipo NS, que retorna um array de servidores de nomes
    const nameServers = await dns.promises.resolveNs(searchUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])
    console.log(ipNs)
    const resolver = new dns.Resolver()

    // O método setServers() é utilizado para definir os servidores de nomes que serão utilizados para fazer pesquisas de DNS
    // O ?? é um operador de coalescência nula, que retorna o segundo valor caso o primeiro seja nulo
    resolver.setServers(ipNs ?? 'ns1.google.com')

    console.time('Pesquisando url por DNS específico')	
    const addressesWithResolver = resolver.resolve4(searchUrl, (error, addresses) => {
        if(error) {
            console.error('URL não encontrada: ', error)
            return
        }

        console.timeEnd('Pesquisando url por DNS específico')	
        console.log(addresses)
    })
 
}

bootsrap()