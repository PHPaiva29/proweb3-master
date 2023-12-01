<template>
    <div>
        <cabeça>
            <meta  charset =" utf-8 "/>
            <meta  name =" janela de visualização " conteúdo =" largura=largura do dispositivo, escala inicial=1,0 ">
            <title > Tabela do Campeonato X </title>
        </cabeça>
        <corpo>
            <div  class =" wrapper ">
                <h2 > Tabela do Campeonato X </h2>
                
                <div  class =" wrapper-tables ">
                <h2 > Rodada 1 </h2>
                <div  class =" box-lista-jogos ">
                    <table  id =" listaJogos " class =" table ">
                        <tr>
                            <td>Jogos</td>
                            <td>Data e Hora</td>
                            <td>Local</td>
                        </tr>
                        <tr>
                            <td>Time 1 x Time 2</td>
                            <td>22/02/2022 - 16:00</td>
                            <td>Local A</td>
                        </tr>
                        <tr>
                            <td>Time 3 x Time 4</td>
                            <td>22/02/2022 - 16:00</td>
                            <td>Local B</td>
                        </tr>
                        <tr>
                            <td>Time 5 x Time 6</td>
                            <td>22/02/2022 - 16:00</td>
                            <td>Local C</td>
                        </tr>
                    </table>
                </div>
                </div>
                <div  class =" wrapper-tables ">
                    <h2 > Rodada 2 </h2>
                    <div  class =" box-lista-jogos ">
                    <table  id =" listaJogos " class =" table ">
                        <tr>
                            <td>Jogos</td>
                            <td>Data e Hora</td>
                            <td>Local</td>
                        </tr>
                        <tr>
                            <td>Time 4 x Time 1</td>
                            <td>29/02/2022 - 16:00</td>
                            <td>Local A</td>
                        </tr>
                        <tr>
                            <td>Time 2 x Time 5</td>
                            <td>29/02/2022 - 16:00</td>
                            <td>Local B</td>
                        </tr>
                        <tr>
                            <td>Time 6 x Time 3</td>
                            <td>29/02/2022 - 16:00</td>
                            <td>Local C</td>
                        </tr>
                    </table>
                    </div>
                    <tabela  id =" tabela-classificacao " class =" table ">
                        <tr>
                            <cabeça>
                            <th> Tempo </th>
                            <th> </th> 
                            <th> Pontos </th>
                            <th> </th> 
                            <th> Vitórias </th>
                            <th> </th>
                            <th> Derrotas </th>
                            <th> </th>
                            <th> SG </th>
                            <th> </th>
                            <th> Empates </th>
                            <th> </th>
                            </cabeça>
                        </tr>
                    </tabela>
                </div>
            </div>
        </corpo>
    </div>
</template>