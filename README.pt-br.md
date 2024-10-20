# Prototype Mathematikos

**Mathematikos** é um jogo educativo e lúdico que leva os jogadores a uma jornada no tempo, explorando as grandes civilizações da antiguidade ao resolver desafios numéricos e aprender sobre seus sistemas numéricos únicos. Este protótipo inicial foca em proporcionar uma experiência envolvente com operações de adição e subtração, utilizando números dos sistemas egípcio, babilônico, grego, romano e chinês.

## Objetivo

O objetivo de *Mathematikos* é ensinar os jogadores sobre os diferentes sistemas numéricos utilizados pelas civilizações antigas de forma divertida, desafiando-os a resolver problemas matemáticos em vários cenários históricos. Os jogadores viajam no tempo e ajudam personagens fictícios, resolvendo quebra-cabeças numéricos que protegem o legado matemático dessas culturas.

## Civilizações e Sistemas Numéricos

O jogo envolve cinco sistemas numéricos de diferentes civilizações antigas, ordenados do mais fácil ao mais difícil:

1. **Romanos (Fácil)**
   - Sistema de base 10 com numerais simples (I, V, X, L, C, D, M).
   - A dificuldade inicial está em somar e subtrair símbolos repetidos.

2. **Egípcios (Intermediário)**
   - Sistema de base 10, mas com um maior número de símbolos para diferentes potências de dez.
   - Desafio visual, pois o jogador precisa identificar e somar símbolos gráficos variados.

3. **Gregos (Intermediário)**
   - Sistema de base 10 com símbolos alfabéticos.
   - A complexidade está em distinguir os símbolos numéricos das letras gregas e compreender algumas regras de agrupamento.

4. **Babilônios (Avançado)**
   - Sistema de base 60 (sexagesimal).
   - Dificuldade em realizar operações com múltiplos de 60 e associar os valores corretos aos seus símbolos.

5. **Chineses (Avançado)**
   - Sistema decimal baseado em contagem de hastes ou uso de ábaco.
   - Complexidade nas diferentes representações dos números e na necessidade de pensar em uma notação vertical para realizar cálculos.

## Variações do Jogo

*Mathematikos* será desenvolvido em duas versões principais, cada uma com um estilo distinto de narrativa, desafios e mecânicas de jogo:

### 1. Variação "Cenas Temáticas"

#### História e Narrativa

O jogador é um jovem matemático que descobre uma máquina do tempo secreta em um antigo templo. A cada ativação, ele é transportado para diferentes civilizações e precisa ajudar os povos a resolver desafios matemáticos com seus sistemas numéricos, enquanto coleta fragmentos de um misterioso artefato chamado "Oráculo dos Números", que foi quebrado e espalhado pelo tempo. Ao completar o artefato, o jogador desbloqueia uma sabedoria antiga que revelará a natureza dos números.

#### Objetivo Final

Completar todos os desafios em diferentes civilizações, coletando as peças do Oráculo dos Números e, finalmente, decifrar o enigma dos números ancestrais, unificando os sistemas numéricos em um único artefato sagrado.

#### Personagens

- **O Matemático Viajante (Jogador)**: Um jovem apaixonado por números e mistérios, que se torna a única esperança para reunir o Oráculo dos Números.
- **Hipátia**: Uma guia que aparece em cada civilização, fornecendo dicas e desafios. Sua sabedoria transcende o tempo.
- **Guardião do Tempo**: Um ser misterioso que tenta impedir o jogador de completar a missão, lançando enigmas difíceis.
- **Fragmentos do Oráculo**: Entidades místicas que representam as peças do artefato.

#### Fases

1. **Romanos – Ajudando no Fórum Romano**
   - **Objetivo**: Ajudar um comerciante no Fórum Romano a calcular preços e realizar transações usando números romanos.
   - **Ambiente**: O Fórum Romano, com colunas, estátuas e barracas de comércio.
   - **Desafio**: Resolver problemas de soma e subtração simples utilizando numerais romanos.

2. **Egípcios – Decifrando as Pirâmides**
   - **Objetivo**: Decifrar símbolos numéricos nas paredes de uma pirâmide para preparar um banquete real.
   - **Ambiente**: O interior de uma pirâmide com hieróglifos e passagens secretas.
   - **Desafio**: Utilizar numerais egípcios para calcular a quantidade de comida e outros itens necessários.

3. **Gregos – Construindo com Proporções**
   - **Objetivo**: Ajudar arquitetos a calcular proporções matemáticas para erguer uma estrutura grandiosa.
   - **Ambiente**: Um canteiro de obras na Grécia Antiga, com filósofos e matemáticos supervisionando.
   - **Desafio**: Usar numerais gregos para resolver proporções e cálculos de arquitetura.

4. **Babilônios – Restaurando os Jardins Suspensos**
   - **Objetivo**: Calcular a quantidade de recursos necessários para restaurar os Jardins Suspensos da Babilônia.
   - **Ambiente**: Os lendários Jardins Suspensos, com áreas verdes e sistemas de irrigação.
   - **Desafio**: Resolver problemas de soma e subtração no sistema sexagesimal babilônico.

5. **Chineses – Calculando no Mercado da Dinastia Han**
   - **Objetivo**: Realizar operações numéricas usando hastes ou ábaco no movimentado mercado chinês.
   - **Ambiente**: Um mercado vibrante da Dinastia Han, com barracas de comida, tecidos e especiarias.
   - **Desafio**: Calcular preços, pesos e medidas utilizando o sistema decimal chinês.

#### Mecânica de Jogo

- Cada fase possui uma pontuação baseada em precisão e velocidade.
- Os cenários são interativos e trazem personagens que ajudam o jogador, fornecendo dicas ou pedindo auxílio.
- O jogador deve resolver os enigmas numéricos para avançar, e os desafios aumentam em complexidade à medida que o jogo progride.

#### Regras Gerais

- O jogador deve decifrar os números e realizar as operações corretas dentro do tempo limite.
- Ao errar, o jogador perde parte de seu tempo, e o Guardião do Tempo torna o enigma mais difícil.
- Cada acerto dá ao jogador uma parte do Oráculo dos Números.
- No final de cada fase, uma peça especial do Oráculo dos Números é adquirida ao completar todos os desafios.

#### Tecnologias

- **Frontend**: React ou Vue.js (leve e escalável para a versão mobile posterior).
- **Backend**: Node.js para lidar com lógica do jogo e salvar o progresso.
- **Banco de Dados**: Firebase (fácil integração e escalável).
- **Mobile**: React Native para transição natural da web para mobile.

---

### 2. Variação "Desafios Temporais"

#### História e Narrativa

O jogador, agora um Guardião dos Números, descobre que uma organização secreta chamada "Os Filhos do Tempo" está tentando apagar o conhecimento dos sistemas numéricos antigos. O jogador deve correr contra o tempo para salvar o conhecimento dessas civilizações, resolvendo operações numéricas antes que os registros sejam destruídos.

#### Objetivo Final

Evitar que o conhecimento de civilizações antigas seja apagado da história ao resolver enigmas numéricos dentro de um tempo limitado, salvando as informações para as futuras gerações.

#### Personagens

- **Guardião dos Números (Jogador)**: O protetor dos sistemas numéricos, que viaja no tempo para proteger o conhecimento.
- **Líder dos Filhos do Tempo**: O vilão da história, que quer substituir todos os sistemas numéricos antigos por um único sistema universal.

#### Fases

1. **Romanos – Emergência no Fórum**
   - **Cenário**: Roma está em chamas, e o jogador precisa ajudar a organizar a evacuação calculando a quantidade de suprimentos necessários usando numerais romanos.
   - **Desafio**: Resolver cinco problemas de adição e subtração dentro de três minutos.
   - **Missão**: Salvar o maior número de cidadãos e objetos valiosos antes que as chamas consumam a cidade.

2. **Egípcios – Destruição da Biblioteca**
   - **Cenário**: O jogador está dentro de uma biblioteca egípcia prestes a ser destruída e deve resolver problemas numéricos usando o sistema egípcio para salvar as tabuletas e papiros.
   - **Desafio**: Resolver três problemas de adição usando numerais egípcios dentro de dois minutos.
   - **Missão**: Salvar 10 registros antes que o tempo acabe.

3. **Gregos – Ameaça ao Conhecimento**
   - **Cenário**: O filósofo está prestes a fazer uma apresentação sobre a filosofia e a matemática, mas sua palestra está ameaçada por uma queda de dados e materiais que contêm conhecimento antigo.
   - **Desafio**: Resolver problemas de proporções e valores numéricos para restaurar o conhecimento perdido.
   - **Missão**: Ajudar a preservar o conhecimento matemático, reorganizando e solucionando os dados corretos para que a apresentação possa continuar.

4. **Babilônios – Crise na Agricultura**
   - **Cenário**: A cidade de Babilônia enfrenta uma crise agrícola, e o jogador precisa calcular a distribuição de água para as plantações usando o sistema babilônico.
   - **Desafio**: Resolver problemas de divisão e multiplicação em base 60 dentro de um tempo limitado para garantir a irrigação adequada.
   - **Missão**: Garantir que os agricultores recebam a quantidade correta de água para salvar as colheitas e a cidade.

5. **Chineses – Caos na Corte Imperial**
   - **Cenário**: Durante uma celebração na corte, um problema financeiro ameaça o evento. O jogador deve ajudar a calcular os custos e dividir os recursos corretamente.
   - **Desafio**: Resolver problemas de adição e subtração utilizando o sistema decimal chinês dentro de um tempo limitado.
   - **Missão**: Ajudar a salvar a celebração imperial ao garantir que os recursos estejam bem distribuídos, evitando um colapso na festa.

#### Mecânica de Jogo

- Cada fase tem um cronômetro que desafia o jogador a completar as operações antes que o tempo acabe.
- Os cenários são dinâmicos, com efeitos visuais que reagem às ações do jogador.
- Erros nos cálculos resultam em penalizações de tempo, tornando o desafio mais intenso.
- Cada acerto concede ao jogador um fragmento do conhecimento antigo, permitindo que ele desbloqueie novas habilidades.

#### Tecnologias

- **Frontend**: HTML5 + Canvas para um layout dinâmico e gráficos de animação.
- **Backend**: Node.js para gerenciamento de dados do progresso do jogo.
- **Banco de Dados**: MongoDB ou Firebase para armazenar progresso e dados dos jogadores.
- **Mobile**: Design responsivo pensado para portabilidade fácil para React Native ou Flutter.

## Considerações para Mobile

O design será feito desde o início com a mobilidade em mente, garantindo que o jogo seja facilmente adaptável para dispositivos móveis, mantendo um desempenho leve e fluido.

## Roadmap de Desenvolvimento

1. **Prototipagem**:
   - Desenvolver a mecânica básica de adição e subtração para o sistema numérico romano.
   - Implementar um cenário interativo e uma interface simples para testes de jogabilidade.

2. **Desenvolvimento de Fases**:
   - Implementar as cinco fases, começando pelos romanos e progredindo até os chineses.
   - Adicionar elementos de dificuldade crescente em cada fase.

3. **Aprimoramento Visual e UI**:
   - Criar gráficos mais elaborados para os cenários e personagens.
   - Garantir que a interface seja intuitiva e responsiva para web e mobile.

4. **Lançamento Beta**:
   - Lançamento de uma versão beta fechada para coletar feedback dos primeiros jogadores.

5. **Versão Final**:
   - Adaptação completa para dispositivos móveis.
   - Lançamento oficial com possibilidade de multiplayer no futuro.