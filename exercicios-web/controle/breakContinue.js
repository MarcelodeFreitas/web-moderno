const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//imprime ate ao indice 4
for (x in nums) {
    if (x == 5) {
        break //direciona para fora do bloco for (da estrutura de controle mais proxima)
    }
    console.log(`${x} = ${nums[x]}`)
}

//avança o indice 5
for (y in nums) {
    if (y == 5) {
        continue //interrompe a execuçao atual e volta a entrar no laço
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo //break rotulado: vai para o for mais externo
        console.log(`Par = ${a},${b}`)
    }
}