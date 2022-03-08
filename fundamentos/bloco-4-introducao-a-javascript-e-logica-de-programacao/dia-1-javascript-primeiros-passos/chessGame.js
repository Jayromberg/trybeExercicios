var part = 'Rei';

switch (part.toLowerCase()) {
    case 'rei':
        console.log('O Rei desloca-se uma casa na direção horizontal, vertical ou diagonal.');
        break;

    case 'dama':
        console.log('A Dama movimenta-se em linhas retas pelas fileiras, colunas e diagonais no tabuleiro.');
        break;

    case 'bispo':
        console.log('O Bispo movimenta-se em diagonal.');
        break;

    case 'cavalo':
        console.log('O Cavalo tem um movimento assemelhado a um "L".');
        break;

    case 'torre':
        console.log('A Torre movimenta-se em linhas retas nas colunas e fileiras do tabuleiro.');
        break;

    case 'pião':
        console.log('O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar.');
        break;

    default:
        console.log(ErrorEvent);
}