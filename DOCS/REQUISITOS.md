# Especificação de Requisitos - AdvogaFácil

Este documento descreve as funcionalidades e restrições técnicas para a integração do sistema com os tribunais do Pará (**TJPA, JFPA, TRE-PA e TRT8**).

## 1. Requisitos Funcionais (RF)

| ID | Requisito | Descrição |
|:---|:---|:---|
| **RF01** | **Login Unificado** | O sistema deve permitir autenticação via Certificado Digital (A1/A3) ou Gov.br para acessar os sistemas PJe/Projudi. |
| **RF02** | **Sincronização de Processos** | Buscar automaticamente processos vinculados ao CPF/OAB do advogado nos 4 tribunais alvo. |
| **RF03** | **Painel de Prazos** | Consolidar em uma agenda única todos os prazos processuais detectados nas intimações. |
| **RF04** | **Peticionamento Intercorrente** | Interface para upload de arquivos PDF e envio direto para o sistema do tribunal correspondente. |
| **RF05** | **Download de Autos em Lote** | Opção para baixar todos os documentos de um processo de uma só vez, convertendo-os em um PDF único se solicitado. |
| **RF06** | **Notificações em Tempo Real** | Enviar alertas (Push/E-mail) assim que houver movimentação no TJPA ou TRT8. |

## 2. Requisitos Não Funcionais (RNF)

| ID | Requisito | Critério de Aceitação |
|:---|:---|:---|
| **RNF01** | **Segurança (LGPD)** | Dados sensíveis de processos devem ser criptografados em repouso (AES-256). |
| **RNF02** | **Interoperabilidade** | O sistema deve ser capaz de lidar com as diferenças de versão entre o PJe 1.x (TRT8) e Projudi (TJPA). |
| **RNF03** | **Disponibilidade** | Em caso de indisponibilidade do site do tribunal, o sistema deve manter os últimos dados em cache. |
| **RNF04** | **Desempenho** | A raspagem de dados de um novo processo não deve exceder 45 segundos. |
| **RNF05** | **Escalabilidade** | Suportar o processamento simultâneo de múltiplos robôs de busca (scrapers). |