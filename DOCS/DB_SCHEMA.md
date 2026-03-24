# Esquema do Banco de Dados - AdvogaFácil

Este documento descreve a estrutura das tabelas, relacionamentos e tipos de dados utilizados no sistema para garantir a integridade das informações jurídicas.

## 1. Diagrama Entidade-Relacionamento (ER)

```mermaid
erDiagram
    USUARIO ||--o{ CERTIFICADO : "possui"
    USUARIO ||--o{ PROCESSO_MONITORADO : "acompanha"
    PROCESSO_MONITORADO ||--o{ MOVIMENTACAO : "contém"
    MOVIMENTACAO ||--o| PRAZO : "gera"
    TRIBUNAL ||--o{ PROCESSO_MONITORADO : "hospeda"

    USUARIO {
        uuid id PK
        string nome
        string cpf_cnpj UK
        string oab
        string password_hash
    }

    CERTIFICADO {
        uuid id PK
        uuid usuario_id FK
        string alias
        binary chave_privada_encrypted
        timestamp validade
    }

    PROCESSO_MONITORADO {
        uuid id PK
        string numero_cnj UK
        uuid tribunal_id FK
        string classe_judicial
        string polo_ativo
        string polo_passivo
        timestamp ultima_sincronizacao
    }

    MOVIMENTACAO {
        uuid id PK
        uuid processo_id FK
        timestamp data_evento
        text descricao
        string hash_conteudo UK
        boolean lido
    }

    PRAZO {
        uuid id PK
        uuid movimentacao_id FK
        date data_vencimento
        string status "Pendente/Concluído"
        boolean fatal
    }

    TRIBUNAL {
        int id PK
        string nome "TJPA, TRT8, JFPA, TRE-PA"
        string url_pje
        string tipo_sistema "PJe, Projudi, e-SAJ"
    }