# Diagrama de Classes - Estrutura do AdvogaFácil

Este diagrama descreve a estrutura de classes do sistema, focando na abstração necessária para suportar as variações entre o **TJPA**, **TRT8**, **JFPA** e **TRE-PA**.

```mermaid
classDiagram
    %% Classe Principal do Usuário
    class Usuario {
        +String nome
        +String cpf
        +String oab
        +String email
        +List~Certificado~ certificados
        +login()
        +gerarRelatorio()
    }

    %% Abstração de Processo Judicial
    class Processo {
        +String numero_cnj
        +String tribunal
        +String vara
        +String classe_judicial
        +String status
        +DateTime data_distribuicao
        +List~Movimentacao~ historico
        +atualizarStatus()
        +baixarCapaPDF()
    }

    %% Detalhes de cada movimentação
    class Movimentacao {
        +DateTime data_hora
        +String descricao
        +String documento_id
        +Boolean lida
        +marcarComoLida()
    }

    %% Interface para os Conectores de Tribunais
    class ITribunalConnector {
        <<interface>>
        +autenticar(Certificado cert)
        +buscarProcessos(String filtro)
        +peticionar(Processo proc, File pdf)
        +getIntimacoes()
    }

    %% Implementações específicas (Estratégia/Adapter)
    class ProjudiTJPA {
        +String url_base
        +parseHTML()
        +contornarCaptcha()
    }

    class PJeTRT8 {
        +String versao_pje
        +comunicarShodo()
        +apiRest()
    }

    class PJeFederal {
        +String secao_judiciaria
    }

    %% Gestão de Prazos
    class Prazo {
        +DateTime data_fatal
        +String lembrete
        +Boolean concluido
        +calcularDataVencto()
    }

    %% Relacionamentos
    Usuario "1" -- "*" Processo : monitora
    Processo "1" -- "*" Movimentacao : possui
    Processo "1" -- "1" ITribunalConnector : utiliza
    
    ITribunalConnector <|.. ProjudiTJPA : implements
    ITribunalConnector <|.. PJeTRT8 : implements
    ITribunalConnector <|.. PJeFederal : implements

    Movimentacao "1" -- "0..1" Prazo : gera