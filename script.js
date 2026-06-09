/* Configurações Globais e Variáveis de Cores */
:root {
    --cor-fundo: #f4f7f5;
    --cor-texto: #2c3e50;
    --cor-principal: #2e7d32; /* Verde Agro */
    --cor-secundaria: #388e3c;
    --cor-card-fundo: #ffffff;
    --cor-borda: #cbd5e1;
}

/* Base */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    margin: 0;
    padding: 0;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
}

/* Barra de Acessibilidade fixa no topo */
.barra-acessibilidade {
    background-color: #1e293b;
    padding: 10px;
    text-align: right;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.barra-acessibilidade button {
    background-color: #334155;
    color: white;
    border: none;
    padding: 8px 15px;
    margin-left: 5px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
}

.barra-acessibilidade button:hover, 
.barra-acessibilidade button:focus {
    background-color: var(--cor-principal);
    outline: 2px solid #fff;
}

/* Cabeçalho */
.header-principal {
    background-color: var(--cor-principal);
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.header-principal h1 {
    margin: 0 0 10px 0;
    font-size: 2.5rem;
}

/* Container de Conteúdo */
.conteudo-principal {
    max-width: 900px;
    margin: 30px auto;
    padding: 0 20px;
}

/* Estilo do Manual */
.secao-manual h2, .secao-quiz h2 {
    color: var(--cor-principal);
    border-bottom: 3px solid var(--cor-principal);
    padding-bottom: 10px;
}

.introducao {
    font-size: 1.1rem;
    margin-bottom: 25px;
}

.card-diretriz {
    background-color: var(--cor-card-fundo);
    border-left: 5px solid var(--cor-principal);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.card-diretriz h3 {
    margin-top: 0;
    color: #1b5e20;
}

/* Estilo do Quiz */
.pergunta-bloco {
    background-color: var(--cor-card-fundo);
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 15px;
    border: 1px solid var(--cor-borda);
}

.enunciado {
    margin-top: 0;
    display: block;
}

label {
    display: block;
    margin: 10px 0;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    background-color: #f8fafc;
}

label:hover {
    background-color: #e2e8f0;
}

input[type="radio"] {
    margin-right: 10px;
    transform: scale(1.2);
}

#btn-enviar-quiz {
    background-color: var(--cor-principal);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    font-weight: bold;
}

#btn-enviar-quiz:hover {
    background-color: var(--cor-secundaria);
}

/* Área de feedback do Quiz */
#resultado-quiz {
    margin-top: 20px;
    padding: 20px;
    border-radius: 6px;
    font-size: 1.1rem;
}

.resultado-oculto {
    display: none;
}

.resultado-visivel {
    display: block;
    background-color: #e8f5e9;
    border: 2px solid #2e7d32;
    color: #1b5e20;
}

/* --- CLASSE DE ALTO CONTRASTE (Ativada via JS) --- */
body.alto-contraste {
    background-color: #000000 !important;
    color: #ffffff !important;
}

body.alto-contraste .header-principal,
body.alto-contraste #btn-enviar-quiz {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 2px solid #000;
}

body.alto-contraste .card-diretriz, 
body.alto-contraste .pergunta-bloco,
body.alto-contraste label {
    background-color: #121212 !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
}

body.alto-contraste h2, 
body.alto-contraste h3 {
    color: #ffff00 !important; /* Amarelo para destacar títulos no contraste */
}

/* Rodapé */
.rodape {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    background-color: #1e293b;
    color: #94a3b8;
    font-size: 0.9rem;
}
