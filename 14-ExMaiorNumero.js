let n1, n2, n3, maiorNumero;
n1 = 10;
n2 = 20;
n3 = 30;


/* Operadores Lógicos:
     && - and (e)
     || - or (ou)
     ! - not (não)
*/


// Verificação condicional se os três números são repetidos
if(n1 == n2 && n1==n3)
    {
        console.log(`Os três números são iguais!`)
    }

// Verifição condicional para ver qual o maior número
if(n1 >= n2 && n1 >= n3)
{
    maiorNumero = n1;
}
else if(n2 >= n1 && n2 >= n3)
{
    maiorNumero = n2;
}
else if(n3 >= n1 && n3 >= n2)
{
    maiorNumero = n3;
}
else
{
    console.log(`Números Inválidos!`);
}

console.log(maiorNumero);