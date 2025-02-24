# Requisitos

## Personas

#### Introdução

"Uma persona é um personagem fictício, arquétipo hipotético de um grupo de usuários reais, criada para descrever um usuário típico" (Cooper et al., 2014; Pruitt e Adlin, 2006; Cooper, 1999). As personas são empregadas essencialmente para simbolizar um conjunto de usuários finais em debates de design, assegurando que a atenção de todos esteja voltada para o objetivo comum. Elas são caracterizadas sobretudo pelos seus propósitos, estabelecidos através de uma série de ajustes refinados durante a fase preliminar de pesquisa no campo de atuação do usuário. Normalmente, partimos de uma estimativa inicial sensata e avançamos em direção a um grupo convincente de personas.

Personas, apesar de serem entidades fictícias (ou seja, não são baseadas em indivíduos reais), são criadas com precisão e minúcia para simular usuários "padrão". Originam-se de um meticuloso processo de pesquisa que identifica e documenta as particularidades dos usuários, delineando seus perfis. Somente os nomes e informações pessoais são fruto de invenção. A eficácia das personas como instrumentos de design e comunicação é diretamente proporcional à especificidade com que são definidas.

As personas desenvolvidas refletem as propriedades delineadas na seção de perfis de usuários. Duas personas foram estabelecidas, conforme ilustrado nas tabelas e figuras de 1 e 2, compreendendo nossas duas personas primárias, já que nosso sistema é exclusivamente para nossa equipe de competição. A seleção desse número segue a recomendação de Courage e Baxter (2005), que sugere uma quantidade que assegura a representação de uma ampla gama de características distintas sem desviar o foco do usuário-chave do sistema. Após a elaboração das personas, recorreu-se ao uso da ferramenta This Person Doesn't Exist para criar uma imagem artificial que representasse cada persona.

Para estabelecer as características das personas, adotei os critérios propostos por Courage e Baxter (2005), que destacam os seguintes aspectos distintivos:

- **Identidade**: Atribua um nome e sobrenome à persona. Especifique uma faixa etária e outros elementos demográficos típicos do perfil do usuário. Adicione uma imagem para conferir maior realismo e facilitar a lembrança da persona.
- **Status**: Determine se a persona é principal, secundária, outro stakeholder ou um antiusuário do sistema. Um antiusuário é alguém que não usará o produto e, portanto, não deve ter influência nas decisões de design.
- **Objetivos**: Quais são as metas da persona? Expanda além dos objetivos que se relacionam apenas com o seu produto.
- **Habilidades**: Quais são as competências da sua persona? Isso abrange formação acadêmica, treinamentos e habilidades específicas. Não se restrinja apenas aos aspectos que se conectam com o seu produto.
- **Tarefas**: Quais são as atividades fundamentais ou críticas executadas pela persona? Qual é a regularidade, relevância e duração dessas atividades? Reserve os detalhes mais específicos de como as tarefas são cumpridas para os cenários.
- **Relacionamentos**: Compreender as relações da persona é crucial, pois auxilia na identificação de outros stakeholders.
- **Requisitos**: Do que a persona necessita? Inclua declarações que enriqueçam a compreensão dessas exigências.
- **Expectativas**: Como a persona presume que o produto funcione? De que maneira ela organiza as informações em seu campo de atuação ou trabalho?

### Persona 1

<font size="2"><p style="text-align: center">Tabela 2: Persona primária Diego.</p></font>

<center class="personas">

|   **Identidade**    | <figure markdown><figcaption>Figura 1: Diego Caio.</figcaption> ![Diego](../assets/images/Diego.jpeg){.img-reduzida}<figcaption>Fonte: [This Person Doesn't Exist](https://this-person-does-not-exist.com/pt), 2024.</figcaption></figure>Diego<br> 20 anos<br> Masculino<br> Solteiro<br> Ensino Superior Incompleto<br> Estudante |
| :-----------------: | ------------ |
|     **Status**      | Persona primária. |
|    **Objetivos**    | Diego é estudante de engenharia eletrônica na Unb, tem como objetivo analisar os dados fornecidos pelo sistema. |
|   **Habilidades**   | Engenheiro eletrônico. |
|     **Tarefas**     | Analisar os dados durante os testes do carro e pós conseguir fazer uma análise. |
| **Relacionamentos** | Amigos da faculdade, amigos de fora e família. |
|   **Requisitos**    | Requisitos listados [aqui](#requisitos) |
|  **Expectativas**   | Que o sistema funcione tantyo em tempo real quanto tenha a capacidade de armazenar dados para análise pós testes. |

</center>

<font size="2"><p style="text-align: center">Fonte: [Gabriel Basto](https://github.com/Bertolazi) e [Rafael Barbosa](https://github.com/rafaelbdmelo117), 2024.</p></font>

### Persona 2

<font size="2"><p style="text-align: center">Tabela 2: Persona primária Filipe Medeiros.</p></font>

<center class="personas">

|   **Identidade**    | <figure markdown><figcaption>Figura 1: Filipe Mesdeiros.</figcaption> ![Filipe Medeiros](../assets/images/Filipe.jpeg){.img-reduzida}<figcaption>Fonte: [This Person Doesn't Exist](https://this-person-does-not-exist.com/pt), 2024.</figcaption></figure> Filipe Medeiros<br> 20 anos<br> Masculino<br> Solteiro<br> Ensino Superior Incompleto<br> Estudante |
| :-----------------: | ----------------------- |
|     **Status**      | Persona primária. |
|    **Objetivos**    | Filipe Medeiros é estudante de Engenharia Automotiva na UnB, o objetivo dele é pilotar o veículo. |
|   **Habilidades**   | Piloto de corrida de veículos automotores e Engenhario Automotivo em formação. |
|     **Tarefas**     | Conduzir o veículo com precisão, utilizando-se das informações apresentadas no painel para o máximo de eficiência possível. |
| **Relacionamentos** | Colegas de equipe, amigos da faculdade, amigos do condomínio e a própria família. |
|   **Requisitos**    | Requisitos listados [aqui](#requisitos) |
|  **Expectativas**   | Principalmente que o painel mostre as informações em tempo real para que ele possa conduzir o veículo com confiança e segurança. |

</center>

<font size="2"><p style="text-align: center">Fonte: [Gabriel Basto](https://github.com/Bertolazi) e [Rafael Barbosa](https://github.com/rafaelbdmelo117), 2024.</p></font>

## Requisitos elicitados

#### Requisitos funcionais

| REQFXX           | Descrição do requisito |
| ---------------- | ---------------------- |
| REQF01           | O sistema deve ter um  sistema web que fornece informações do carro em tempo real. |
| REQF02           | O sistema deve ter um banco de dados na nuvem para fornecer informações sobre os testes de pilotagem realizados. |
| REQF03           | O conjunto do sistema deve conseguir ter rede de internet para enviar os dados para o sistema na nuvem. |
| REQF04           | O sistema web deve poder gerar gráficos para melhor análise dos dados. |
| REQF05           | O sistema web deve conter um sistema de login para impedir possíveis problemas. |
| REQF06           | O sistema web deve conter um sistema de adição e remoção de contas de usuários para limitar a quantidade de acessos ao sistema. |
| REQF07           | O sistema local deve ser capaz de fornecer informações em tempo real no painel para o piloto do veículo. |
| REQF08           | O sistema local deve ser capaz de receber, via rede CAN, os dados dos subsistemas do veículo. |
| REQF09           | O sistema local deve enviar os dados do REQF08 via protocolo HTTP para o sistema web. |
| REQF10           | O sistema web deve ter um administrador para poder autorizar entrada e exclusão de pessoas no sistema. |
| REQF11           | O sistema deve ter dois tipos de usuário, o comum e o administrador. |
| REQF12           | O sistema local deve iniciar automaticamente ao iniciar a Rasp. |
| REQF13           | A senha do administrador deve ser uma senha forte gerada uma vez e enviada para o email do adminstrador. | 

<font size="2"><p style="text-align: center">Fonte: [Gabriel Basto](https://github.com/Bertolazi) e [Rafael Barbosa](https://github.com/rafaelbdmelo117), 2024.</p></font>

### Requisitos não funcionais

| REQNFXX             | Descrição do requisito |
| ------------------- | ---------------------- |
| REQNF01             | O delay para verificação em tempo real do sistema web deve ter uma tolerância de até 2 segundos. |
| REQNF02             | O delay para verificação em tempo real do painel do carro é de 1 segundo. |
| REQNF03             | O login tenha uma senha criptografada. | 
| REQNF04             | A senha deve conter, no mínimo, 8 dígitos, 1 letra maiúscula, 1 letra minúscula, 1 número e um caractere especial. |
| REQNF05             | O administrador do sistema web não pode ser removido, apenas alterado sob exigência de senha e confirmação de senha. |
| REQNF06             | O sistema deve ser capaz de suportar até 10 usuários simultâneos sem degradação de desempenho. |
| REQNF07             | Os dados transmitidos entre o sistema local e o sistema na nuvem devem ser criptografados usando HTTPS. |
| REQNF08             | O sistema deve ter uma cobertura de testes de 80% antes de seu MVP. |

<font size="2"><p style="text-align: center">Fonte: [Gabriel Basto](https://github.com/Bertolazi) e [Rafael Barbosa](https://github.com/rafaelbdmelo117), 2024.</p></font>


## Versioning

| Version | Date     | Description of Change  | Member(s)                                     |
| ------- | -------- | ---------------------- | --------------------------------------------- |
| 1.0     | 14/02/25 | Início da documentação | [Gabriel Basto](https://github.com/Bertolazi) |
