// Encripato:

const charBase = [
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','ñ','Ñ',
    'o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V',
    'w','W','x','X','y','Y','z','Z',
    //Acentos
    'á','é','í','ó','ú','Á','É','Í','Ó','Ú',
    // Caracteres Especiales
    '@','?','¿','¡','!','"','.',',',' ','-','_','#','$','%','+','&',
    '=','/','*','(',')',
    //numeros
    '1','2','3','4','5','6','7','8','9','0'
];

const codeChar = [
    'NmQ', 'az.', 'Lmd', '+u2', 'X/@', '¿wS', 'm_&', 'Á*4', '/T.', 'ÉaÓ', 'Pgk', 'Á_M', 'RFB', '$Ad', ')NZ', 'A!8', '8_S', 'E7P', 'V0Í', 'i5=', 'úÓt', '_9i', 'Wou', '8Qe', 'Nxl', 'LíL', 'gÍ¡', 'Yqk', '¿rÍ', '2+&', 'CIÉ', 'Wv!', 'ySa', 'í%é', 'PsÉ', 'BKO', 'kqQ', 'Glg', 'lF"', '/CZ', '?s9', 'áLÁ', 'xlY', 'mje', 'ÓúV', 'TÉl', '%r@', 'vAP', 'o-+', 'hÍ¿', '"d2', 'KgV', 'vwL', '1FR', 'UzS', '0vO', '&ox', 'WíP', '4A¡', 'Fxh', 'ÑSk', 'ÓFb', 'E9U', 'Lq@', '"rí', '/#-', '?2*', '1%í', 'x2#', 'n¿o', 'ÑÍÑ', '(ÁD', 'i9d', 'TlÉ', '+Iw', '(,G', 'óQV', 'q5Í', 'b7i', '#Ál', '4Y)', 'XtÁ', '(éV', 'vzl', 'bén', 'Fa*', '=XL', 'QNí', 'V*k', '?KU', 'RC/', '¡TP', 'ú8¿', 'BñL', 'Foí', '&Éo', 'O%q', 'É@p', '@vM', 'q1V', '%b7', 'dDH', 'Ék.', 'cdp', 'jAR', '2b*', 'wúB', 'pmF', '¡Q+', 'hsO', 'Ú7u', 'LÚe', 'L(f', 'mhU', '*oK', 'Qi?', 'THí', ')Wp', '=2Á', 'fÁÁ', 'Qyu', 'x*o', 'Ap7', 'FiF', '3T9', 'R5Ó', '5áj', '&aa', '2vi', 'auW', 'CQq', 'R_I', 'úG*', 'úbQ', 'o#F', 'cNr', 'een', '#Y2', 'ÑKn', 'zN#', 'h__', '!uL', '.P%', 'fsF', 'ÁqJ', 'WIs', '¿já', '2ÉÓ', 'ybI', 'yN8', 'DQ5', '¿RL', 'BOá', '6oQ', 'DP1', '1Vn', 'H"+', 'p+c', 'TvI', 'dyN', '6aS', 'NúY', 'j(A', 'HP$', 'dSH', 'Áw"', 'YdQ', 'ZTl', 'Óaw', 'kfM', 'hOp', 'kUÓ', '&Po', '2Ú9', 'mÑU', 'mg)', 'YPT', 'Ej?', 'UA¡', 'Vyu', '1Úz', 'A¿K', 'Á@f', 'uDb', 'mDy', 'fdQ', '/_Ú', 'qñW', 'yU(', 'qóH', 'ZWm', 'Kóu', 'DYa', 'KC2', 'Lvf', 'Fúf', '+iv', 'y(2', 'G#Ú', 'OWV', 'd¡-', 'cCÚ', 'x=,', 'jáP', '4nq', 'GoF', 'ñ?n', 'JU3', 'PLó', 'BEQ', 'ú5w', 'qXG', '*K$', 'úóq', 'yIm', 'Y(k', 'M2o', 'ug)', '_um', 'Y*g', 'unÍ', 'ÚáW', 'FZ_', 'ÑLI', 'rut', 'ÍJ%', 'St6', 'HGO', 'dFC', 'rNú', 'LGp', 'a.L', 'ñ&(', 'OkÉ', 'uTe', 'eFí', 'fU+', 'Tá4', '3VZ', 'Íyc', '5cR', '2Éz', 'olú', 'j2M', 'Vz?', 'íÚ8', '#BU', '9.5', 'Í¡d', 'íBu', 'fÁR', 'y40', 'Éaf', 'ÚOk', 'ZV9', 'eÉg', 'e1y', 'ayZ', 'ák*', 'yx#', 'Ñhv', '$úu', 'Á_Z', 'buH', '=ty', 'sÑP', 'EkH', '+5o', 'rOx', 'vky', 'qOn', 'R@É', '_Sé', 'I"j', '!Pj', ',X5', 'ÓD(', 'IXú', '@$Í', '7WF', 'sÚu', 'xK3', '6K7', 'ÓmB', '@ÁÁ'
];


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  

var obtenerTexto = () => {
    var inputText = document.getElementById('textD');
    var texto = inputText.value;
    var nuevaLista = texto.split('');
    var listaIndex = [];
    var listaEncriptada = [];
    for (i = 0; i < nuevaLista.length;i++) {
        let varindex = nuevaLista[i]
        if (charBase.includes(varindex)){
            var indexChar = (charBase.indexOf(varindex)+1)*3;
            numeroAl = generarNumeroAleatorio(indexChar-2 ,indexChar);
            listaIndex.push(numeroAl-1)
        }
    }
    for (i = 0; i < listaIndex.length; i++){
        varDec = listaIndex[i];
        codeDec = codeChar[varDec]
        listaEncriptada.push(codeDec);
    }
    var Encriptacion = listaEncriptada.join('')
    console.log(Encriptacion)
}
var boton = document.getElementById('certificarEncrip');
boton.onclick = obtenerTexto;





// newText = obtenerTexto();
// listaFinal = newText.split('')
// console.log(obtenerTexto)
