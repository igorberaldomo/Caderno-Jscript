let amigo = {nome: 'Jose',
sexo: 'masc',
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
console.log(typeof amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)